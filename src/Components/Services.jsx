import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };



    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold text-center'>Services</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className=''>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        centerMode={true}
                    >
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-code fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Full-Stack Development</h1>
                            <p className='text-center'>Build scalable full-stack web applications.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-font-awesome fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Frontend Excellence</h1>
                            <p className='text-center'>Create responsive and modern UIs.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-terminal fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Backend Solutions</h1>
                            <p className='text-center'>Design APIs and databases efficiently.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-cloud-arrow-up fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Cloud & Firebase</h1>
                            <p className='text-center'>Real-time apps with Firebase integration.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-bug fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Competitive Programming</h1>
                            <p className='text-center'>Solve problems in skill competitions.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-paint-roller fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Responsive Design</h1>
                            <p className='text-center'>Mobile-first design for all devices.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
                            <i className="fa-solid fa-toolbox fa-4x pb-8"></i>
                            <h1 className='text-lg font-bold text-center'>Tools & Workflow</h1>
                            <p className='text-center'>Efficient workflow using Git & VS Code.</p>
                        </div>
                        <div className='w-58 bg-[#391544] rounded-xl flex flex-col justify-between items-center p-2 gap-2 py-10'>
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