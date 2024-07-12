import React from 'react';

const AboutUs = () => {
    return (
        <div className=" py-12 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-amber-50">
                        Meet Our CEO
                    </p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                        <div className="md:w-1/3 flex flex-col items-center">
                            <img
                                src="/images/profile.jpeg"
                                alt="Georgy Glezer"
                                className="rounded-full w-48 h-48 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Georgy Glezer</h3>
                        </div>
                        <div className="md:w-2/3 text-gray-700 dark:text-amber-50">
                            <p className="mt-4">
                                With over a decade of experience in the tech industry, I have held pivotal roles such as CTO, VP of R&D, and Tech Lead. My journey includes building scalable solutions, leading high-performance teams, and driving innovation in various projects and technologies.
                            </p>
                            <p className="mt-4">
                                My expertise spans fullstack development, where I have successfully delivered complex applications using cutting-edge technologies. I am passionate about transforming ideas into reality and helping businesses achieve their goals through robust and efficient software solutions.
                            </p>
                            <p className="mt-4">
                                In addition to my professional work, I have authored a popular Udemy course on MobX and React, with over 11,000 students enrolled. I also write articles on Medium, attracting tens of thousands of views. Check out my course <a target='_blank' href="https://www.udemy.com/course/mobx-in-depth-with-react" className="text-indigo-600 hover:text-indigo-800">here</a> and my articles on Medium <a target='_blank'  href="https://georgyglezer.medium.com/" className="text-indigo-600 hover:text-indigo-800">here</a>.
                            </p>
                            <p className="mt-4">
                                Connect with me on <a target='_blank'  href="https://www.linkedin.com/in/georgy-glezer-49597a116/" className="text-indigo-600 hover:text-indigo-800">LinkedIn</a> to learn more about my professional journey and the projects I have been a part of.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
