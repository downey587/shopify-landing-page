import React from "react";
import heroImg from "../assets/hero-img.png";
import cardImg from "../assets/card-img.svg";
import BuilderBlock from "./builderBlock";
import SellBlock from "./sellBlock";
import LearningBlock from "./learningBlock";

function Hero() {
    return (
        <div className="w-full h-auto mb-20">
            <div className="w-full h-auto px-4 sm:px-8 lg:px-12 min-[1210px]:px-20 lg:flex lg:items-center pt-14 pb-9 border-b bg-gradient-to-br from-sky-300 to-green-400">
                <div>
                    <h1 className="w-11/12 text-4.5xl lg:text-6xl min-[1210px]:text-7xl font-extrabold leading-tight"> Start your business </h1>

                    <p className="w-full h-auto sm:w-9/12 lg:text-xl lg:w-11/12 min-[1210px]:text-xl text-lg mt-5"> Get your brand going with tools to build, launch, and grow. </p>

                    <button className="w-40 h-14 mt-10 bg-black text-white font-semibold tracking-wider rounded-full">
                        Start free trial
                    </button>

                    <p className="text-sm mt-6"> Try Shopify free for 3 days, no credit card required. </p>
                </div>

                <img src={ heroImg } alt="hero img." className="w-full h-auto lg:w-1/2"></img>
            </div>

            <BuilderBlock />
            <SellBlock />

            <div className="w-auto h-auto px-4 sm:px-8 lg:px-12 min-[1210px]:px-20 mt-16">
                <div className="w-full h-auto sm:px-4 lg:px-0 sm:grid sm:grid-cols-2 rounded-2xl bg-neutral-900">
                    <div className="px-8 pt-8 lg:ml-8 xl:pt-32">
                        <h1 className="text-3.5xl lg:text-4.3xl lg:font-semibold lg:w-11/12 min-[1210px]:text-5xl min-[1210px]:w-10/12 font-medium leading-none text-white"> Every tool you need to power your business. </h1>

                        <button className="w-52 h-14 mt-4 sm:mt-20 mb-14 sm:mb-8 text-base font-semibold text-white tracking-wide border-2 border-white rounded-full">
                            Explore all products
                        </button>
                    </div>

                    <img src={ cardImg } alt="card img." className="w-full h-auto rounded-b-2xl lg:rounded-r-2xl"></img>
                </div>
            </div>

            <LearningBlock />

            <div className="w-full h-auto mt-16 text-center py-20 lg:py-32 min-[1210px]:py-36 px-4 bg-gradient-to-br from-green-300 to-green-400">
                <h1 className="text-4.7xl lg:text-5xl min-[1210px]:text-6xl font-semibold leading-tight"> Start selling with Shopify today </h1>
                <p className="text-lg lg:text-xl mt-5 lg:mt-12 lg:px-24 min-[1210px]:text-2xl mb-8"> Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business. </p>

                <button className="w-40 h-14 min-[1210px]:w-44 min-[1210px]:h-16 bg-black text-white font-semibold tracking-wider rounded-full hover:bg-slate-800">
                    Start free trial
                </button>
            </div>
        </div>
    );
}

export default Hero;