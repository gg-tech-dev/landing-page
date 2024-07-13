import React from 'react';

const ContactUs = () => {
    return (
        <div className=" py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Contact Us</h2>
                    <p className="dark:text-amber-50 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Get in Touch
                    </p>
                </div>
                <div className="mt-10">
                        <div className='form-work'>
                            <form id='contact-form' className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="dark:text-amber-50 block text-sm font-medium text-gray-700">Name</label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="dark:text-amber-50 block text-sm font-medium text-gray-700">Phone</label>
                                    <div className="mt-1">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="dark:text-amber-50 block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name='email'
                                            type="email"
                                            required
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="dark:text-amber-50 block text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows="4"

                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md h-24"
                ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type='submit'
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                        <div id='form-thanks' className="hidden text-center">
                            <h3 className="dark:text-amber-50 text-xl font-semibold text-gray-900">Thank You!</h3>
                            <p className="dark:text-amber-50 mt-4 text-lg text-gray-700">We have received your message and will get back to you shortly.</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
