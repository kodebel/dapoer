"use client";

import React from 'react';
import Slider from "react-slick";
import { FaCheckCircle, FaStar, FaCogs } from 'react-icons/fa';
import Image from 'next/image'; // Tambahkan impor ini

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DapoerWebsite() {
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
                        <h1 className="text-2xl sm:text-4xl font-bold text-[#4a4a4a] mb-4">Dapoer Website</h1>
                        <p className="text-md sm:text-lg text-justify text-[#555555] leading-relaxed max-w-3xl mx-auto">
                        At PT Dapoer Poesat Noesantara Group, we offer a wide range of services designed to meet your digital needs, including website construction and development, application creation, e-commerce platforms, and much more. We focus not only on stunning aesthetics but also on ensuring superior functionality and an exceptional user experience. With a team of seasoned professionals and extensive experience in the industry, we are ready to help you create digital solutions that cater to your specific business requirements.
                        </p>
                        <br />
                        <p className="text-md sm:text-lg text-justify text-[#555555] leading-relaxed max-w-3xl mx-auto">
                        Whether you need a captivating website, a functional application, or a robust e-commerce platform, we have the skills and expertise to bring your vision to life. We understand that every business has unique characteristics and goals, which is why we offer tailored solutions that align with your needs. Through advanced technology integration and compelling visual designs, we ensure that your digital products not only capture attention but also add significant value to your business.
                        </p>
                        <br />
                        <p className="text-md sm:text-lg text-justify text-[#555555] leading-relaxed max-w-3xl mx-auto">
                        Entrust your digital development to us, and let us help you achieve success and gain a competitive edge in the ever-evolving digital world.
                        </p>
                    </header>

                    <section className="flex flex-col md:flex-row justify-center items-stretch gap-5">
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <FaStar className="text-4xl text-[#4a4a4a] mb-4 animate-pulse"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Why Choose Us?</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#4a4a4a]">
                                <li className="flex items-center"><FaCheckCircle className="mr-4 text-[#4a4a4a]"/> Elegant and responsive design, ensuring an attractive appearance across all devices</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-4 text-[#4a4a4a]"/> Extensive industry experience, delivering precise and effective solutions</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-4 text-[#4a4a4a]"/> A team of professionals with deep expertise in every field, ready to bring your vision to life</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-4 text-[#4a4a4a]"/> Friendly and proactive customer support, always prepared to provide the best solutions</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center bg-[#cccccc] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-l-4 border-[#4a4a4a] mx-4 flex-grow"
                        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            <FaCogs className="text-4xl text-[#4a4a4a] mb-4 animate-spin"/>
                            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#4a4a4a] mb-6">Our Services</h2>
                            <ul className="list-none text-base sm:text-lg space-y-2 text-[#555555]">
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Corporate website development</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> E-commerce website development</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> Personal website development</li>
                                <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#4a4a4a]"/> SEO optimization</li>
                            </ul>
                        </div>
                    </section>

                    <br />
                    <br />
                    <Slider {...settings}>
                        <div className="flex justify-center items-center px-20">
                            <Image src="/images/website2.webp" alt="Why Choose Us" width={800} height={600} className="rounded-lg shadow-lg "/>
                        </div>
                        <div className="flex justify-center items-center px-20 order-last md:order-first">
                            <Image src="/images/website3.webp" alt="Our Services" width={800} height={600} className="rounded-lg shadow-lg   "/>
                        </div>
                    </Slider>

                    <section className="mt-16 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#4a4a4a] mb-4">Interested in Learning More?</h2>
                        <p className="text-md sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
                            If you would like to know more about our Dapoer Website services, please visit our <a href="/contactus" className="text-[#4a4a4a] underline hover:text-[#4a4a4a]">Contact Us</a> page and leave us a message. Our team will get back to you promptly to assist with your queries and provide the information you need. Let us help you take your online presence to the next level!
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}
