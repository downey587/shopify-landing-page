import React from "react";
import sellBlockImg from "../assets/sell-block.png";
import sellBlockImgTwo from "../assets/sell-block-2.png";

function SellInfoBlock( { header, text, link, linkTitle } ) {
    return (
        <div className="w-full h-auto px-4 sm:px-8 lg:px-0">
            <h1 className="text-3.5xl lg:text-4xl lg:w-10/12 min-[1210px]:text-5xl font-semibold leading-none text-white"> { header } </h1>
            <p className="text-base leading-normal text-white mt-1.5 lg:mt-5 min-[1210px]:text-lg mb-9 pr-4"> { text } </p>
            <a href={ link } className="text-base font-semibold tracking-wide underline min-[1210px]:text-lg text-white"> { linkTitle } </a>
        </div>
    );
}

function SellBlock() {
    return (
        <div className="w-full h-auto py-16 bg-black">
            <div className="text-center">
                <p className="text-base font-semibold tracking-wide text-slate-400 min-[1210px]:text-xl"> PRODUCT SOURCING </p>
                <h1 className="text-4xl px-10 font-semibold text-white min-[1210px]:text-6xl"> Find products to sell </h1>
                <p className="text-lg mt-5 px-4 text-white min-[1210px]:text-xl"> Stock your store with products from trusted wholesale and dropshipping services. </p>
            </div>

            <div className="lg:flex lg:px-12 min-[1210px]:px-20 min-[1210px]:space-x-6 lg:space-x-4">
                <div>
                    <img src={ sellBlockImg } alt="sell block img." className="mt-16 mb-10 px-4 sm:px-8 lg:px-0"></img>
                    <SellInfoBlock header={ "Source from wholesalers with Handshake" } text={ "Find and buy unique products for your online store from thousands of trusted, independent brands." } link={ "#" } linkTitle={ "Start shopping wholesale" } />
                </div>

                <div>
                    <img src={ sellBlockImgTwo } alt="sell block img." className="mt-20 mb-10 px-4 sm:px-8 lg:px-0 lg:mt-16"></img>
                    <SellInfoBlock header={ "Jumpstart your dropshipping business here" } text={ "Source and sell in-demand products without the hassle of managing inventory, packaging, or shipping." } link={ "#" } linkTitle={ "Discover dropshipping today" }  />
                </div>
            </div>
        </div>
    );
}

export default SellBlock;