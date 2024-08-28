"use client";

import React from 'react';
import Slider from "react-slick";
import { FaLeaf, FaFlask, FaCheckCircle } from 'react-icons/fa';
import { IoMdRose } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DapoerParfum() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: false
    };

    return (
        <>
            <section className="bg-[#d4b185] font-tajawal text-[#4a4a4a] min-h-screen py-20 px-4 sm:px-10"
            style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                <div className="container mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="text-2xl sm:text-4xl font-bold text-[#4a4a4a] mb-4">Dapoer Parfum</h1>
                        <p className="text-md sm:text-lg text-justify text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
                            Welcome to PT Dapoer Poesat Noesantara Group, your leading provider of high-quality perfumes. We offer a wide range of perfumes made from the finest ingredients, ensuring long-lasting and captivating fragrances. Our collection includes scents for every occasion, whether you&apos;re looking for something fresh and light for daytime wear or something deep and intense for evening events. Trust us to provide you with the best perfumes that enhance your presence and leave a lasting impression.
                        </p>
                    </header>

                    <section className="flex flex-col md:flex-row justify-center items-stretch gap-5">
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <FaLeaf className="text-4xl text-[#4a4a4a] mb-4 animate-bounce"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Why Choose Us?</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> High-quality ingredients</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Long-lasting fragrances</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Wide range of scents</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Perfect for any occasion</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <IoMdRose className="text-4xl text-[#4a4a4a] mb-4 animate-pulse"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Our Products</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Floral perfumes</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Fresh perfumes</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Woody perfumes</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Oriental perfumes</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Perfume gift sets</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mt-16 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#4a4a4a] mb-4">Interested in Our Perfume Collection?</h2>
                        <p className="text-md sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
                            To learn more about our exquisite range of perfumes, visit our <a href="/contactus" className="text-[#4a4a4a] underline hover:text-[#4a4a4a]">Contact Us</a> page. Our team is ready to provide the information and assistance you need. Let us help you find the perfect scent that matches your personality and style!
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}
