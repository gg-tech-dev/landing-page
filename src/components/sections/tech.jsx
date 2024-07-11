import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// Import Swiper React components
//@ts-ignore

const technologies = [
    { name: 'React', logo: 'tech/react.svg' },
    { name: 'JavaScript', logo: 'logos/logo.svg' },
    { name: 'Node.js', logo: 'logos/logo.svg' },
    { name: 'HTML', logo: 'logos/logo.svg' },
    { name: 'CSS', logo: 'logos/logo.svg' },
    { name: 'Sass', logo: 'logos/logo.svg' },
    { name: 'MobX', logo: 'logos/logo.svg' },
    { name: 'Vue.js', logo: 'logos/logo.svg' },
    { name: 'Angular', logo: 'logos/logo.svg' },
    // Add more technologies as needed
];

export default  function TechSlider() {
    return (
        <Swiper
            spaceBetween={30}
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
                        <p className="mt-2 text-center">{tech.name}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}