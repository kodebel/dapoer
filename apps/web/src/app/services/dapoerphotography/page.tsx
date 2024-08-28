"use client";

import React from 'react';
import Slider from "react-slick";
import { FaCameraRetro, FaBaby, FaUtensils, FaCheckCircle } from 'react-icons/fa';
import { IoCameraOutline } from "react-icons/io5";
import Image from 'next/image';  // Tambahkan impor ini

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DapoerFotografi() {
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
                        <h1 className="text-2xl sm:text-4xl font-bold text-[#4a4a4a] mb-4">Dapoer Fotografi</h1>
                        <p className="text-md sm:text-lg text-justify text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
                            Welcome to PT Dapoer Poesat Noesantara Group, your leading provider of photography services. We offer professional photography services for pre-wedding, engagement, wedding, parties, maternity, baby, and food photography. In addition, we also provide photography equipment rental. With our expertise and high-quality equipment, we ensure to capture your precious moments perfectly. Trust us with your photography needs and experience the best service tailored to your desires.
                        </p>
                    </header>

                    <section className="flex flex-col md:flex-row justify-center items-stretch gap-5">
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <FaCameraRetro className="text-4xl text-[#4a4a4a] mb-4 animate-bounce"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Why Choose Us?</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Professional photography services</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> High-quality equipment</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Experienced photographers</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Flexible and affordable packages</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <IoCameraOutline className="text-4xl text-[#4a4a4a] mb-4 animate-pulse"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Our Services</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Pre-wedding photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Engagement photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Wedding photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Party photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Maternity photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Baby photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Food photography</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Photography equipment rental</li>
                            </ul>
                        </div>
                    </section>

                    <br />
                    <br />
                    <Slider {...settings}>
                        <div className="flex flex-row justify-center items-center px-20">
                            <Image src="/images/dapoerphotography/highlight1.webp" alt="Professional Photography" width={800} height={600} className="rounded-lg shadow-lg "/>
                        </div>
                        <div className="flex justify-center items-center px-20 order-last md:order-first">
                            <Image src="/images/dapoerphotography/highlight2.webp" alt="High-Quality Equipment" width={800} height={600} className="rounded-lg shadow-lg   "/>
                        </div>
                    </Slider>

                    <section className="mt-16 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#4a4a4a] mb-4">Interested in Our Photography Services?</h2>
                        <p className="text-md sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
                            To learn more about our professional photography services and equipment rental, visit our <a href="/contactus" className="text-[#4a4a4a] underline hover:text-[#4a4a4a]">Contact Us</a> page. Our team is ready to provide the information and assistance you need. Let us help you capture your precious moments with the best photography solutions tailored to your needs!
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}
