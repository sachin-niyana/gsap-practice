"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { cardList } from './common/Helper';
import { DotedLine } from './common/Icons';

const Gsap = () => {
    useEffect(() => {
        gsap.fromTo(
            ".box",
            { opacity: 0 },
            { opacity: 1, duration: 3, stagger: 3.7 }
        );
        gsap.fromTo(
            ".line",
            { x: "-102%" },
            { duration: 13, x: 0 }
        );
        gsap.fromTo(".number",
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 1.8 }
        )
        gsap.fromTo(
            ".box2",
            { opacity: 0 },
            { opacity: 1, duration: 5, stagger: 4.7 }
        );
    }, []);

    return (
        <div className='max-w-[1172px] mx-auto px-4 py-24 overflow-hidden'>
            <div className='flex md:flex-col sm:flex-row flex-col md:gap-36 gap-24 relative'>
                <div className='flex md:flex-row sm:ms-0 ms-16 flex-col gap-6 sm:items-center items-end sm:justify-center justify-end'>
                    {cardList.map((obj, index) => (
                        <div key={index} className='sm:max-w-[364px] box w-full p-6 border border-black rounded-[30px] hover:shadow-card duration-300 transition-all ease-linear hover:border-white'>
                            <h3 className='font-bold text-2xl'>{obj.title}</h3>
                            <p className='pt-4 text-base font-normal'>{obj.pera}</p>
                        </div>
                    ))}
                </div>
                <div className='absolute md:top-1/2 sm:left-1/2 left-[5%] md:w-full !md:translate-x-0 -translate-x-1/2 !md:-translate-y-1/2 translate-y-0 w-1 md:h-1 h-full'>
                    <div className='w-full mx-auto md:h-1 h-full bg-black relative'>
                        <div className='w-full line mx-auto md:h-1 h-full bg-red-500 absolute top-0 z-0'></div>
                        <div className='absolute number left-0 md:bottom-full md:translate-x-0 -translate-x-1/2 md:top-auto top-0 md:translate-y-1/2 w-10 h-10 bg-black rounded-full flex justify-center items-center'>
                            <div className=' relative'>
                                <div className='absolute md:bottom-[120%] md:top-auto translate-x-1/2 top-[-50%] md:right-auto md:left-auto sm:-left-5 left-3 md:rotate-0 sm:-rotate-90 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>1</p>
                            </div>
                        </div><div className='absolute number md:left-[20%] md:top-auto top-[20%] bottom-full md:translate-y-1/2 -translate-x-1/2'>
                            <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                                <div className='absolute md:top-full -top-2 md:right-auto sm:-right-2 right-1 md:rotate-180 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>2</p>
                            </div>
                        </div><div className='absolute number md:left-[40%] md:top-auto top-[40%] bottom-full md:translate-y-1/2 -translate-x-1/2'>
                            <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                                <div className='absolute md:bottom-full -bottom-2 md:right-auto md:left-auto sm:-left-1 left-7 md:rotate-0 sm:-rotate-90 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>3</p>
                            </div>
                        </div><div className='absolute number left-[60%] md:top-auto top-[60%] bottom-full md:translate-y-1/2 -translate-x-1/2'>
                            <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                                <div className='absolute md:top-full -top-2 md:right-auto sm:-right-2 right-2 md:rotate-180 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>4</p>
                            </div>
                        </div><div className='absolute number left-[80%] md:top-auto top-[80%] bottom-full md:translate-y-1/2 -translate-x-1/2'>
                            <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                                <div className='absolute md:bottom-full -bottom-2 md:right-auto md:left-auto sm:-left-1 left-6 md:rotate-0 sm:-rotate-90 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>5</p>
                            </div>
                        </div><div className='absolute number right-0 md:bottom-full bottom-0 md:translate-y-1/2 md:translate-x-0 translate-x-1/2'>
                            <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                                <div className='absolute md:top-full -top-2 md:right-auto sm:-right-2 right-2 md:rotate-180 rotate-90'><DotedLine /></div>
                                <p className='text-white text-xl font-bold'>6</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row sm:ms-0 ms-16 flex-col gap-6 sm:items-center items-end sm:justify-center justify-end'>
                    {cardList.map((obj, index) => (
                        <div key={index} className='sm:max-w-[364px] box2 w-full p-6 border border-black rounded-[30px] hover:shadow-card duration-300 transition-all ease-linear hover:border-white'>
                            <h3 className='font-bold text-2xl'>{obj.title}</h3>
                            <p className='pt-4 text-base font-normal'>{obj.pera}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gsap;
