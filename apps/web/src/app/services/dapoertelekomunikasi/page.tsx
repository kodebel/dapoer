"use client";

import React from 'react';
import Slider from "react-slick";
import { FaSignal, FaMobileAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import { IoWifiSharp } from "react-icons/io5";
import Image from 'next/image';  // Tambahkan impor ini

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DapoerTelekomunikasi() {
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
                        <h1 className="text-2xl sm:text-4xl font-bold text-[#4a4a4a] mb-4">Dapoer Telekomunikasi</h1>
                        <p className="text-md sm:text-lg text-justify text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
                            Welcome to PT Dapoer Poesat Noesantara Group, your leading provider of telecommunication solutions. We offer fast, reliable, and affordable internet services based on optical cable and BTS technology for both B2B and B2C needs. With the latest technology and a dedicated team of experts, we are ready to provide the best internet experience to support your productivity and convenience. In addition, we also supply equipment for all your telecommunication needs. Trust us with your telecommunication requirements and enjoy services that connect you to the limitless world.
                        </p>
                    </header>

                    <section className="flex flex-col md:flex-row justify-center items-stretch gap-5">
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <FaSignal className="text-4xl text-[#4a4a4a] mb-4 animate-bounce"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Why Choose Us?</h2>
                            <ul className="list-none text-sm sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Fast and Stable Internet Connection: We provide fiber-optic-based internet services that ensure fast and stable connectivity, perfect for both business and individual needs.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Cutting-Edge Technology: We utilize the latest and best technology to deliver superior telecommunication services. We also have the expertise to build telecommunication infrastructure tailored to your requirements.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Flexible Packages: We offer a variety of internet packages that can be customized to meet your business or personal needs, with competitive pricing and high-quality service.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Telecommunication Equipment Provider: We supply a wide range of telecommunication equipment, including splicing tools, lasers, Optical Power Meters (OPM), and more, to support your operations.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Responsive Customer Service: Our friendly and responsive customer service team is always ready to assist you, ensuring you receive the support you need whenever you need it.</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <IoWifiSharp className="text-4xl text-[#4a4a4a] mb-4 animate-pulse"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Our Services</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Optical Cable Internet Services: Delivering high-speed internet via fiber-optic technology, ideal for both households and businesses that require fast and stable connections.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> BTS-Based Internet Services: Providing connectivity solutions through BTS technology, perfect for areas with limited access to wired networks.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Telecommunication Infrastructure Development: Offering design and construction services for telecommunication infrastructure tailored to your specific needs.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Technical Support and Maintenance: Providing technical services and maintenance to ensure your telecommunication systems and networks operate at peak performance.</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Telecommunication Equipment Supply: Offering a wide range of telecommunication equipment, including splicing tools, lasers, and Optical Power Meters (OPM), to support all your operational needs.</li>
                            </ul>
                        </div>
                    </section>

                    <br />
                    <br />
                    <Slider {...settings}>
                        <div className="flex justify-center items-center px-20">
                            <Image src="/images/tampilan web 1.webp" alt="Telecommunication Solutions" width={800} height={600} className="rounded-lg shadow-lg "/>
                        </div>
                        <div className="flex justify-center items-center px-20 order-last md:order-first">
                            <Image src="/images/tampilan web 2.webp" alt="Advanced Technology" width={800} height={600} className="rounded-lg shadow-lg   "/>
                        </div>
                    </Slider>

                    <section className="mt-16 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#4a4a4a] mb-4">Interested in Our Telecommunication Services?</h2>
                        <p className="text-md sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
                            To learn more about our optical cable and BTS-based internet services, visit our <a href="/contactus" className="text-[#4a4a4a] underline hover:text-[#4a4a4a]">Contact Us</a> page. Our team is ready to provide the information and assistance you need. Let us help you stay connected with the best internet solutions tailored to your needs!
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}
