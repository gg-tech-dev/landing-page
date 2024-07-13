import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors'
import { Resend } from 'resend';

const app = express();
const PORT = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());

const whitelist = ['https://gg-tech.dev'];

if (nodeEnv === 'development') {
    whitelist.push('http://localhost:4321')
}

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));  // Enable CORS for all routes

app.post('/send-email', async (req, res) => {
    try {
        const resend = new Resend('re_hKPokDjv_HHu2gQ8xSKYW98txUAoEi2kz');

        await resend.emails.send({
            from: 'ggTech Landing Page <landing@gg-tech.dev>',
            to: ['stolenng@gmail.com'],
            subject: 'ggTech - New Contact',
            text: `${JSON.stringify(req.body)}`,
        });

        res.status(200).json();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});