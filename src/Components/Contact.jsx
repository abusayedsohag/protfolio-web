import React from 'react';
import cg from "./../../public/animations/cg.json"
import Lottie from 'lottie-react';

const Contact = () => {
    return (
        <div className='py-10 bg-gradient-to-r from-purple-300/20 via-transparent to-yellow-300/20'>
            <h1 className='text-2xl font-bold text-center'>Contact</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-2 flex justify-center'>
                    <Lottie
                        animationData={cg}
                        loop={true}
                        className="w-20 h-20"
                    />
                    <h1 className='text-2xl font-bold'>Let's Create Something Amazing Together</h1>
                </div>
                <div className="card w-full ">
                    <div className="card-body ">
                        <fieldset className="fieldset ">
                            <label className="label">Name</label>
                            <input type="text" className="border border-gray-600 rounded-sm p-2" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" className="border rounded-sm p-2 border-gray-600" placeholder="Email" />
                            <label className="label">Massage</label>
                            <textarea name="Massage" className='border rounded-sm border-gray-600' rows={6}></textarea>
                            <button className="rounded-sm font-semibold bg-pink-400  mt-4 flex justify-center items-center"><Lottie
                                animationData={cg}
                                loop={true}
                                className="w-10 h-10"
                            /> Send Message
                                <Lottie
                                    animationData={cg}
                                    loop={true}
                                    className="w-10 h-10"
                                /></button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;