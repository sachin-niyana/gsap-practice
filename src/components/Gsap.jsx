"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { cardList } from './common/Helper';

const Gsap = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".box",
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2 }
        );
        tl.fromTo(
            ".line",
            { x: "-102%" },
            { duration: 1, x: 0, stagger: 0.2 }
        );
        tl.fromTo(".number",
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2 }
        )
        tl.fromTo(
            ".box2",
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2 }
        );
    }, []);

    return (
        <div className='max-w-[1172px] mx-auto px-4 py-24 overflow-hidden'>
            <div className='flex gap-6 justify-center'>
                {cardList.map((obj, index) => (
                    <div key={index} className='max-w-[364px] box w-full p-6 border border-black rounded-[30px] hover:shadow-card duration-300 transition-all ease-linear hover:border-white'>
                        <h3 className='font-bold text-2xl'>{obj.title}</h3>
                        <p className='pt-4 text-base font-normal'>{obj.pera}</p>
                    </div>
                ))}
            </div>
            <div className='w-full line mx-auto h-1 bg-black my-16 relative'>

                <div className='absolute number left-0 bottom-full translate-y-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute bottom-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>1</p>
                    </div>
                </div><div className='absolute number left-[20%] bottom-full translate-y-1/2 -translate-x-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute top-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>2</p>
                    </div>
                </div><div className='absolute number left-[40%] bottom-full translate-y-1/2 -translate-x-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute bottom-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>3</p>
                    </div>
                </div><div className='absolute number left-[60%] bottom-full translate-y-1/2 -translate-x-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute top-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>4</p>
                    </div>
                </div><div className='absolute number left-[80%] bottom-full translate-y-1/2 -translate-x-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute bottom-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>5</p>
                    </div>
                </div><div className='absolute number right-0 bottom-full translate-y-1/2'>
                    <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center relative'>
                        <div className='absolute top-full w-[1px] h-[40px] bg-black'></div>
                        <p className='text-white text-xl font-bold'>1</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 justify-center'>
                {cardList.map((obj, index) => (
                    <div key={index} className='max-w-[364px] box2 w-full p-6 border border-black rounded-[30px] hover:shadow-card duration-300 transition-all ease-linear hover:border-white'>
                        <h3 className='font-bold text-2xl'>{obj.title}</h3>
                        <p className='pt-4 text-base font-normal'>{obj.pera}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gsap;
