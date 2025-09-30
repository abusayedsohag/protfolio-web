import React from 'react';
import wp from "./../../public/animations/wp.json"
import Lottie from 'lottie-react';

const Whatsapp = () => {
    return (
        <div className='fixed bottom-8 right-8'>
            <a href='https://wa.me/8801761555819' target='_blank'>
                <Lottie
                    animationData={wp}
                    loop={true}
                    className="w-30 h-30"
                />
            </a>
        </div>
    );
};

export default Whatsapp;