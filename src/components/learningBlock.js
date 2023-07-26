import React from "react";
import learningOptionImg from "../assets/learning-option-img.svg";

function LearningInfoBlock( { imgSrc, imgAlt, title, text, link, linkTitle } ) {
    return (
        <div className="w-auto h-auto mb-10">
            <img src={ imgSrc } alt={ imgAlt } className="w-16 h-16"></img>
            <h1 className="text-xl mt-1.5 lg:text-2xl font-semibold lg:mt-3 tracking-wide"> { title } </h1>
            <p className="text-base min-[1210px]:text-lg mt-2 mb-3"> { text } </p>
            <a href={ link } className="text-base font-semibold min-[1210px]:text-lg underline"> { linkTitle } </a>
        </div>
    );
}

function LearningBlock() {
    const learningOptionsList = [
        { "imgSrc": learningOptionImg, "imgAlt": "learning option img.", "title": "Online Courses", "text": "Find out how to build and grow a profitable business.", "link": "#", "linkTitle": "Learn online" },
        { "imgSrc": learningOptionImg, "imgAlt": "learning option img.", "title": "Podcasts", "text": "Tune in for actionable advice and business tips.", "link": "#", "linkTitle": "Listen in"  },
        { "imgSrc": learningOptionImg, "imgAlt": "learning option img.", "title": "Blog", "text": "Explore a collection of resources about starting your own business.", "link": "#", "linkTitle": "Browse our blog"  },
        { "imgSrc": learningOptionImg, "imgAlt": "learning option img.", "title": "Guides", "text": "Learn how to start a small business with a variety of guides.", "link": "#", "linkTitle": "Explore guides"  }
    ];

    const renderLearningOptionsList = learningOptionsList.map( item =>
        <LearningInfoBlock imgSrc={ item.imgSrc } imgAlt={ item.imgAlt } title={ item.title } text={ item.text } link={ item.link } linkTitle={ item.linkTitle } />    
    );

    return (
        <div className="w-full h-auto mt-32 px-4 sm:px-0 sm:flex sm:flex-col sm:items-center lg:items-start">
            <h1 className="text-4.7xl lg:text-5xl sm:w-8/12 mb-20 lg:mb-32 lg:px-12 min-[1210px]:px-20 min-[1210px]:text-6xl font-semibold leading-none"> Keep learning with free resources </h1>
            
            <div className="w-fit h-auto lg:pl-12 min-[1210px]:px-20 min-[1210px]:space-x-6 lg:flex lg:space-x-4">
                { renderLearningOptionsList }
            </div>
        </div>
    );
}

export default LearningBlock;