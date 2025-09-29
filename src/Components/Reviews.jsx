import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Reviews = () => {



    const data = [
        { "page": "He made our website super fast and modern.The whole process was smooth, and he explained everything clearly." },
        { "page": "Very professional and skilled developer. He handled both frontend and backend perfectly. Highly recommend working with him again." },
        { "page": "Our app idea turned into reality! He built it using Next.js and Firebase, exactly how we wanted." },
        { "page": "Loved the design he created with Tailwind CSS. Clean, responsive, and works great on every device we tested." },
        { "page": "He’s reliable, communicates well, and delivers on time. Really impressed with his full-stack knowledge and problem-solving skills." },
        { "page": "Amazing experience! His Tailwind CSS skills gave our website a modern, responsive design that works beautifully on all devices." },
        { "page": "From frontend to backend, his 3+ years of experience truly show. Reliable, knowledgeable, and detail-oriented developer." },
        { "page": "He turned our idea into a fully functional app using MongoDB and Firebase. Highly recommend for complex projects." },
        { "page": "Working with him was seamless. His Next.js and React expertise brought our project to life faster than expected." },
        { "page": "A skilled full-stack developer who blends creativity with clean code. Always delivers on time with professional communication." }
    ]

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
            items: 2,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };



    return (
        <div className=''>
            <div className='flex flex-col gap-5 py-10 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent'>
                <h1 className='text-2xl font-bold text-center'>Testimonials</h1>
                <div className=''>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        {
                            data.map((dt, IDx) => (
                                <div key={IDx} className='mx-4 border border-gray-800 rounded-xl p-4 gap-2 py-10 backdrop-blur-2xl '>
                                    <h1 className='text-4xl'>“</h1>
                                    <p className='text-center'>{dt.page}</p>
                                    <h1 className='text-4xl text-right'>”</h1>
                                </div>
                            ))
                        }

                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Reviews;