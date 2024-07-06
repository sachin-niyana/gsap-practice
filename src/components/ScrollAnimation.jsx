"use client";
import React, { useEffect } from "react";
import { roadmapItems } from "./common/Helper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
    useEffect(() => {
        gsap.fromTo(
            ".card-1",
            {
                opacity: 0,
                x: "-80",
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-1",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".card-2",
            {
                opacity: 0,
                x: 80,
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-2",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".card-3",
            {
                opacity: 0,
                x: "-80",
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-3",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".card-4",
            {
                opacity: 0,
                x: 80,
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-4",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".card-5",
            {
                opacity: 0,
                x: "-80",
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-5",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".card-6",
            {
                opacity: 0,
                x: 80,
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".card-6",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".dot-1",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-1",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".dot-2",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-2",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".dot-3",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-3",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".dot-4",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-4",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".dot-5",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-5",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".dot-6",
            {
                background: "black"
            },
            {
                background: "blue",
                duration: 3,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".dot-6",
                    start: "0% 80%",
                    end: "100% 80%",

                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section className="py-12 bg-black text-white pb-96">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <h2 className="text-3xl font-extrabold text-center mb-12">FlipVault Roadmap</h2>
                <div className="relative overflow-hidden">
                    <div className="absolute md:left-1/2 left-[6%] transform -translate-x-1/2 h-full ">
                        <div className="h-full bg-blue-500 w-1 relative">
                            <div className="absolute dot-1 top-0 transform -translate-x-1/2 ms-0.5 border-blue-700 w-10 h-10 border rounded-full flex items-center justify-center text-white text-lg font-bold">
                                1
                            </div>
                            <div className="absolute dot-2 top-[17.5%] transform -translate-x-1/2 ms-0.5 border-blue-700 w-10 h-10 border rounded-full flex items-center justify-center text-white text-lg font-bold">
                                2
                            </div>
                            <div className="absolute dot-3 top-[35%] transform -translate-x-1/2 ms-0.5 border-blue-700 border w-10 h-10    rounded-full flex items-center justify-center text-white text-lg font-bold">
                                3
                            </div>
                            <div className="absolute dot-4 top-[52.2%] transform -translate-x-1/2 ms-0.5 border-blue-700 border w-10 h-10    rounded-full flex items-center justify-center text-white text-lg font-bold">
                                4
                            </div>
                            <div className="absolute dot-5 top-[69.6%] transform -translate-x-1/2 ms-0.5 border-blue-700 border w-10 h-10    rounded-full flex items-center justify-center text-white text-lg font-bold">
                                5
                            </div>
                            <div className="absolute dot-6 top-[87%] transform -translate-x-1/2 ms-0.5 border-blue-700 border w-10 h-10    rounded-full flex items-center justify-center text-white text-lg font-bold">
                                6
                            </div>
                        </div>
                    </div>
                    <div className="lg:space-y-12 md:space-y-10 space-y-8">
                        <div className="flex w-full card-1 md:justify-start justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:mr-8 md:ml-0 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                        <div className="flex w-full card-2 justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:ml-8 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                        <div className="flex w-full card-3 md:justify-start justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:mr-8 md:ml-0 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                        <div className="flex w-full card-4 justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:ml-8 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                        <div className="flex w-full card-5 md:justify-start justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:mr-8 md:ml-0 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                        <div className="flex w-full card-6 justify-end relative">
                            <div
                                className="bg-gray-800 lg:max-w-[450px] md:max-w-[320px] max-w-[600px] p-6 rounded-lg shadow-md w-full md:ml-8 ml-16"
                            >
                                <h3 className="text-2xl font-bold">Launch website platform</h3>
                                <p className="mt-4 text-base">Connect and manage multiple wallets like MetaMask and Phantom simultaneously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollAnimation;
