import React from 'react';

const About = () => {
    return (
        <div className='py-10'>
            <div className='flex'>
                <div className="flex w-7xl justify-start drop-shadow-[40px_-40px_80px_rgba(40,15,150,1)]">
                    <img
                        src="./me1.png"
                        width={350}
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <h1 className='text-2xl font-bold'>About Me</h1>
                    <p>I am a Full-Stack Web Developer with 3 years of experience in building modern, scalable, and user-focused web applications. My expertise lies in Next.js, React.js, JavaScript, TypeScript, HTML, CSS, and Tailwind CSS for creating responsive and optimized frontends, while on the backend I work with MongoDB and Firebase to design secure databases, authentication systems, and real-time solutions.</p>
                    <p>I specialize in turning ideas into functional applications with clean, maintainable code and a strong focus on performance and user experience. From dynamic dashboards and e-commerce platforms to portfolio websites and full-stack systems, I have worked on a variety of projects that sharpened my problem-solving and technical skills.</p>

                    <div>
                        <h1 className='text-xl py-2 font-bold'>Skill</h1>
                        <div className='fa-2xl flex gap-4'>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-react"></i>
                            <i class="fa-brands fa-node-js"></i>
                            <i class="fa-brands fa-square-js"></i>
                            <i class="fa-brands fa-node"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;