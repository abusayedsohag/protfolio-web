import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1440 },
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
        <div id='myprojects'>
            <div className='flex flex-col gap-5 py-10'>
                <h1 className='text-2xl font-bold text-center'>My Projects</h1>
                <p className='text-center'>Let's Create Something Amazing Together</p>
                <div className=''>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/JWyKb2Kg/Screenshot-2025-09-30-195838.png" className='w-full h-full' alt="" />
                        </div>
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/VWt5pDjH/Screenshot-2025-09-30-195853.png" className='w-full h-full' alt="" />
                        </div>
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/tMc5jf41/Screenshot-2025-09-30-195906.png" className='w-full h-full' alt="" />
                        </div>
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/fYKBFLyb/Screenshot-2025-09-30-195928.png" className='w-full h-full' alt="" />
                        </div>
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/hR4RVRsw/Screenshot-2025-09-30-200000.png" className='w-full h-full' alt="" />
                        </div>
                        <div className='mx-4 h-40 bg-[#391544] rounded-xl flex flex-col justify-between items-center gap-2'>
                            <img src="https://i.ibb.co.com/1G0DGXND/Screenshot-2025-09-30-200012.png" className='w-full h-full' alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Projects;