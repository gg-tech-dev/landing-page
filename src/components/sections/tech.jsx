import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// Import Swiper React components
//@ts-ignore

const technologies = [
    { name: 'React', logo: 'tech/react.svg' },
    { name: 'Node.js', logo: 'tech/node.svg' },
    { name: 'JavaScript', logo: 'tech/js.svg' },
    { name: 'TypeScript', logo: 'tech/ts.svg' },
    { name: 'NestJS', logo: 'tech/nestjs.svg' },
    { name: 'Mongo', logo: 'tech/mongo.svg' },
    { name: 'MySql', logo: 'tech/mysql.svg' },
    { name: 'Postgres', logo: 'tech/postgres.svg' },
    { name: 'Nx', logo: 'tech/nx.jpeg' },
    { name: 'HTML', logo: 'tech/html.svg' },
    { name: 'CSS', logo: 'tech/css.svg' },
    { name: 'Sass', logo: 'tech/sass.svg' },
    { name: 'MobX', logo: 'tech/mobx.svg' },
    // { name: 'Vue.js', logo: 'tech/vue.svg' },
    // { name: 'Angular', logo: 'tech/angular.svg' },
    { name: 'NextJS', logo: 'tech/next-js.svg' },
    { name: 'Tailwind', logo: 'tech/tailwind.svg' },
    { name: 'Ant Design', logo: 'tech/antd.svg' },
    // { name: 'ShadnCdn', logo: 'tech/angular.svg' },
    // { name: 'Radix', logo: 'tech/angular.svg' },
    // Add more technologies as needed
];

export default  function TechSlider() {
    const [isReady, setReady] = useState(false);

    return (
        <Swiper
            style={{display: isReady ?  '' : 'none'}}
            onInit={() => setReady(true)}
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{delay: 1000, waitForTransition: true}}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                },
            }}
            navigation
            pagination={{ clickable: false }}
            className="mySwiper"
        >
            {technologies.map((tech) => (
                <SwiperSlide key={tech.name} className="flex justify-center items-center">
                    <div className="rounded-lg p-6">
                        <img src={tech.logo} alt={tech.name} className="h-16 w-16" />
                        <p className="mt-2 text-center dark:text-amber-50">{tech.name}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}