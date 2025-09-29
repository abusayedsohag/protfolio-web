import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max:3000, min: 1440 },
            items: 5,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 4,
            slidesToSlide: 2
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };




    return (
        <div>
            <div className='flex flex-col gap-5 py-10'>
                <h1 className='text-2xl font-bold text-center'>Services</h1>
                <p className='text-center'>Transforming ideas into intuitive digital experiences</p>
                <div className=''>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-code fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Full-Stack Development</h1>
                            <p className='text-center'>Build scalable full-stack web applications.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-font-awesome fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Frontend Excellence</h1>
                            <p className='text-center'>Create responsive and modern UI/UX web.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-terminal fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Backend Solutions</h1>
                            <p className='text-center'>Design APIs and databases efficiently and Accurately.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-5 gap-2 py-10'>
                            <i className="fa-solid fa-cloud-arrow-up fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Cloud & Firebase</h1>
                            <p className='text-center'>Real-time apps with Firebase integration.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-bug fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Code Bugs</h1>
                            <p className='text-center'>Find bugs and Solve problems in skill competitions.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-paint-roller fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Responsive Design</h1>
                            <p className='text-center'>Create responsive and modern UI/UX web.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-toolbox fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Tools & Workflow</h1>
                            <p className='text-center'>Efficient workflow using Git, Node.js & VS Code.</p>
                        </div>
                        <div className='mx-4 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-4 gap-2 py-10'>
                            <i className="fa-solid fa-lightbulb fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Passion for Innovation</h1>
                            <p className='text-center'>Explore latest web technologies constantly.</p>
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Services;