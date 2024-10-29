import React from 'react';

const Hero = (props) => {
    return (
        <div className={`relative ${props.heig ? "h-[500px]" : "h-screen"}`}>
            <img src={`${props.image ? props.image : "/images/bg.jpeg"}`} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{props.title ? props.title : "Your Voice, Our Future"}</h1>
                <p className="text-xl md:text-2xl mb-8 text-center">{props.text ? props.text : "We empower young women in Rwanda with tech, education, and mentorship, building a future of equal opportunities for all girls to lead and succeed"}</p>
                <button onClick={()=>window.location.href="/login"} className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-5 px-5 rounded">
                    {props.button ? props.button : "Join Us"}
                </button>
            </div>
        </div>
    );
};

export default Hero;