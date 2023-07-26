import React from "react";
import builderImg from "../assets/builder-img.svg";
import nextImg from "../assets/next-icon.svg";
import buildBrandImg from "../assets/build-brand.svg";
import buildBrandImgTwo from "../assets/build-brand-img-2.png";

function InfoBlock( { title, text, link, linkTitle, style } ) {
    let Blockstyle = `w-full h-auto pt-4 ${ style }`

    return (
        <div className={ Blockstyle }>
            <h1 className="text-xl font-semibold mb-2 lg:text-2xl"> { title } </h1>

            <p className="text-base min-[1210px]:text-lg mb-3"> { text } </p>

            <a href={ link } className="text-base font-semibold underline"> { linkTitle } </a>
        </div>
    );
}

function HeaderBlock( { title, header, text, textAlignment } ) {
    return (
        <div className={ textAlignment }>
            <p className="text-base px-4 sm:px-8 lg:px-12 min-[1210px]:px-20 lg:text-xl font-semibold tracking-wide text-slate-800"> { title } </p>
            <h1 className="text-4xl px-4 sm:px-8 lg:px-12 lg:text-5xl min-[1210px]:px-20 min-[1210px]:text-6xl font-semibold"> { header } </h1>
            <p className="text-lg mt-5 px-4 sm:px-8 lg:px-12 lg:text-xl min-[1210px]:px-20 lg:mt-8"> { text } </p>
        </div>
    );
}

function BuilderBlock() {
    const infoBlockContent = [
        { "title": "Build an online storefront", "text": "Personalize your design with drag-and-drop tools that make your online store shine.", "link": "#", "linkTitle": "Online Store Builder" },
        { "title": "Choose a store theme", "text": "Browse a wide range of free and paid themes.", "link": "#", "linkTitle": "Theme Store" },
        { "title": "Level up with apps", "text": "Add more features to your store with apps from trusted Shopify partners.", "link": "#", "linkTitle": "Shopify App Store" }
    ];

    const renderInforBlockContent = infoBlockContent.map( item => 
        <InfoBlock title={ item.title } text={ item.text } link={ item.link } linkTitle={ item.linkTitle } style={ "border-t-2 px-4 sm:px-0 mb-10" } />    
    );

    return (
        <div className="w-full h-auto mt-16 pb-16">
            <HeaderBlock title={ "ONLINE STORE BUILDER" } header={ "Build your store" } text={ "Bring your idea to life with the tools you need to start selling." } textAlignment={ "text-left sm:w-10/12" } />

            <img src={ builderImg } alt="builder img." className="w-full h-auto mt-20 pb-16 sm:px-8 lg:pb-18 lg:px-12 min-[1210px]:px-20 lg:mt-28 px-4"></img>

            <div className="w-full h-auto sm:px-28 lg:flex lg:pb-9 lg:px-12 min-[1210px]:px-20 min-[1210px]:space-x-5 lg:space-x-4">
                { renderInforBlockContent }
            </div>

            <div className="w-full h-auto mb-16 pt-20 pl-18 sm:pl-24 sm:pr-8 lg:pl-32 lg:pr-24 lg:pb-32 lg:pt-32 min-[1210px]:py-36 min-[1210px]:pl-44 pr-7 pb-20 bg-black">
                <h1 className="text-2xl lg:text-3xl lg:leading-none lg:font-semibold font-medium min-[1210px]:w-11/12 leading-tight tracking-wide text-white"> "I had all my signs and my branding ready to go and it was a matter of is this going to work… but people loved it, it wasn't just in my head." </h1>

                <div className="sm:flex sm:justify-between">
                    <div>
                        <p className="text-lg lg:text-xl font-semibold tracking-wide text-white mt-14"> Beena </p>
                        <p className="text-base text-white mt-2"> Baby Wisp </p>
                    </div>

                    <div className="w-auto h-auto mt-14 flex space-x-4 lg:mt-32 min-[1210px]:mt-36 min-[1210px]:mr-10">
                        <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                            <img src={ nextImg } alt="next img." className="w-5 h-5 rotate-180"></img>
                        </button>

                        <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                            <img src={ nextImg } alt="next img." className="w-5 h-5"></img>
                        </button>
                    </div>
                </div>
            </div>

            <HeaderBlock title={ "BRANDING TOOLS" } header={ "Build your brand" } text={ "Craft the look and feel of your brand and help customers connect with your business." } textAlignment={ "text-center" } />
            
            <div className="lg:w-full lg:h-auto lg:grid lg:grid-cols-2 lg:items-center lg:mt-20 lg:px-4 min-[1210px]:px-20">
                <img src={ buildBrandImg } alt="builder img." className="w-full h-auto mt-16 pb-12 px-4 sm:px-8 lg:w-11/12"></img>

                <div className="sm:px-16">
                    <InfoBlock title={ "Generate a business name" } text={ "Find a name that fits your personality and business idea." } link={ "#" } linkTitle={ "Business Name Generator" } style={ "border-t-0 px-8 sm:px-0 mb-5" } />
                    <InfoBlock title={ "Create a free logo" } text={ "Stand out from the competition and make your business unforgettable." } link={ "#" } linkTitle={ "Logo Maker" }  style={ "border-t-0 px-8 sm:px-0 mb-5" } />
                </div>
            </div>

            <div className="lg:w-full lg:h-auto lg:grid lg:grid-cols-2 lg:items-center lg:mt-20 lg:px-14 min-[1210px]:px-24">
                <img src={ buildBrandImgTwo } alt="builder img." className="w-full h-auto mt-32 pb-12 pr-8 lg:w-11/12 order-last"></img>

                <div className="sm:px-16 lg:px-12">
                    <InfoBlock title={ "Get a custom web domain" } text={ "Establish your business and let customers find your store online." } link={ "#" } linkTitle={ "Domain Name Generator" } style={ "border-t-0 px-8 sm:px-0 mb-5" } />
                    <InfoBlock title={ "Download free stock photos" } text={ "Personalize your website with free, high resolution images from Burst." } link={ "#" } linkTitle={ "Explore Burst" } style={ "border-t-0 px-8 sm:px-0 mb-5" } />
                </div>
            </div>
        </div>
    );
}

export default BuilderBlock;