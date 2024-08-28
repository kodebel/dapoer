"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [started, setStarted] = useState<boolean>(false);
    const [isImageZoomed, setIsImageZoomed] = useState<boolean>(false);
    const [zoomedImageSrc, setZoomedImageSrc] = useState<string>('');

    const handleProductClick = (product: string) => {
        if (started) {
            setSelectedProduct(product);
        }
    };

    const handleStartClick = () => {
        setStarted(true);
        setSelectedProduct('DAPOER TELEKOMUNIKASI');
    };

    const handleImageClick = (src: string) => {
        setZoomedImageSrc(src);
        setIsImageZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsImageZoomed(false);
    };

    const products = [
        {
            id: 'DAPOER TELEKOMUNIKASI',
            images: [
                { src: "/images/dapoertelekomunikasi/APARTEMEN 2.webp", alt: "Skyland City Jatinangor Internet Network Management", description: "REVOLUTIONIZING CONNECTIVITY AT SKYLAND CITY JATINANGOR - INTERNET NETWORK MANAGEMENT" },
                { src: "/images/dapoertelekomunikasi/Fun World Daan Mogot.webp", alt: "Fiber Optic Network Installation at Fun World Daan Mogot", description: "CUTTING-EDGE FIBER OPTIC NETWORK INSTALLATION AT FUN WORLD DAAN MOGOT" },
                { src: "/images/dapoertelekomunikasi/PANIN 3.webp", alt: "New Internet Network Installation at Bank Panin", description: "STATE-OF-THE-ART INTERNET NETWORK INSTALLATION AT BANK PANIN" },
                { src: "/images/dapoertelekomunikasi/RS.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi", description: "NEXT-GEN PABX INSTALLATION AT RS DUSTIRA ARMY HOSPITAL CIMAHI" },
                { src: "/images/dapoertelekomunikasi/PROTONINDO.webp", alt: "New CCTV Installation at PT Protonindo", description: "ADVANCED CCTV SURVEILLANCE SYSTEM INSTALLATION AT PT PROTONINDO" },
                { src: "/images/dapoertelekomunikasi/rge 2.webp", alt: "LAN Maintenance at PT RGE Server", description: "RELIABLE LAN OPTIMIZATION AT PT RGE SERVER" }
            ]
        },
        {
            id: 'DAPOER CHEMICAL',
            images: [
                { src: "/images/dapoerkimia/Dabur India Limited.webp", alt: "DABUR INDIA LIMITED", description: "DABUR INDIA LIMITED" },
                { src: "/images/dapoerkimia/Extrato Vegetal de Mimosa.webp", alt: "EXTRATO VEGETAL DE MIMOSA", description: "EXTRATO VEGETAL DE MIMOSA" },
                { src: "/images/dapoerkimia/H2SO4 (asam sulfat).webp", alt: "H2SO4 (ASAM SULFAT)", description: "H2SO4 (ASAM SULFAT)" },
                { src: "/images/dapoerkimia/NaOH1.webp", alt: "NAOH (CAUSTIC SODA FLAKE 48%) EX THAILAND", description: "NAOH (CAUSTIC SODA FLAKE 48%) EX THAILAND" },
                { src: "/images/dapoerkimia/NaOH2.webp", alt: "NAOH (CAUSTIC SODA FLAKE 48%)", description: "NAOH (CAUSTIC SODA FLAKE 48%)" },
                { src: "/images/dapoerkimia/Tcca tablet.webp", alt: "TCCA TABLET", description: "TCCA TABLET" }
            ]
        },
        {
            id: 'DAPOER PARFUM',
            images: [
                { src: "/images/dapoerparfum/parfum.webp", alt: "FO Cable Installation Bank Panin - 2024", description: "COMING SOON" },
                { src: "/images/dapoerparfum/parfum.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi - 2023", description: "COMING SOON" },
                { src: "/images/dapoerparfum/parfum.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi - 2023", description: "COMING SOON" },
                { src: "/images/dapoerparfum/parfum.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi - 2023", description: "COMING SOON" },
                { src: "/images/dapoerparfum/parfum.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi - 2023", description: "COMING SOON" },
                { src: "/images/dapoerparfum/parfum.webp", alt: "PABX Installation RS Dustira Army Hospital Cimahi - 2023", description: "COMING SOON" }
            ]
        },
        {
            id: 'DAPOER WEBSITE',
            images: [
                { src: "/images/dapoerwebsite/bioskop app tampilan.webp", alt: "Cinema app with an elegant interface", description: "ELEGANTLY DESIGNED CINEMA APP INTERFACE" },
                { src: "/images/dapoerwebsite/bioskop app transaksi.webp", alt: "Cinema app for transaction menu", description: "SEAMLESS TRANSACTION MANAGEMENT IN CINEMA APP" },
                { src: "/images/dapoerwebsite/HR APP.webp", alt: "HR application for office attendance", description: "COMPREHENSIVE HR MANAGEMENT APP FOR OFFICE ATTENDANCE" },
                { src: "/images/dapoerwebsite/e-commers tampilan.webp", alt: "E-commerce app for ticket purchasing", description: "INNOVATIVE E-COMMERCE PLATFORM FOR TICKET PURCHASING" },
                { src: "/images/dapoerwebsite/e-commers transaksi.webp", alt: "Transaction menu for e-commerce ticket purchasing", description: "STREAMLINED TRANSACTION PROCESS IN E-COMMERCE APP" },
                { src: "/images/dapoerwebsite/e-commers transaksi complete.webp", alt: "Complete transaction in e-commerce ticket purchasing app", description: "COMPLETED TRANSACTION IN E-COMMERCE TICKET PURCHASE APP" }
            ]
        },
        {
            id: 'DAPOER PHOTOGRAPHY',
            images: [
                { src: "/images/dapoerphotography/1.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/2.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/3.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/4.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/5.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/6.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/7.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/8.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/9.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/10.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/11.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/12.webp", alt: "Photography", description: "ENGAGEMENT DAY" },
                { src: "/images/dapoerphotography/13.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/14.webp", alt: "Photography", description: "WEDDING DAY" },
                { src: "/images/dapoerphotography/15.webp", alt: "Photography", description: "WEDDING DAY" },
            ]
        },
    ];

    return (
        <>
            <section className='bg-[#d4b185] font-tajawal py-10'
            style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                <section className='py-10 px-5 sm:px-10 lg:px-20 rounded-lg shadow-md'
                style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4a4a4a]'>
                            PORTFOLIO US
                        </h2>
                        <div className='flex flex-wrap items-center justify-center gap-10 py-5'>
                            {products.map(product => (
                                <h2
                                    key={product.id}
                                    className={`text-sm md:text-lg cursor-pointer font-bold transition-transform transform hover:scale-110 ${selectedProduct === product.id ? 'text-white' : 'text-[#4a4a4a]'}`}
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    {product.id}
                                </h2>
                            ))}
                        </div>
                    </div>

                    {!started && (
                        <div className="flex justify-center mt-10">
                            <button
                                className="bg-white text-[#4a4a4a] font-bold py-2 px-4 rounded-lg hover:bg-[#cccccc]"
                                onClick={handleStartClick}
                            >
                                Get Started
                            </button>
                        </div>
                    )}

                    {started && (
                        <AnimatePresence>
                            {products.filter(product => product.id === selectedProduct).map(filteredProduct => (
                                <motion.section
                                    key={filteredProduct.id}
                                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-5 md:px-10 max-h-[75vh] overflow-y-auto'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.30 }}
                                >
                                    {filteredProduct.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className='bg-[#d4b185] p-5 md:p-10 flex flex-col items-center rounded-lg shadow-md mt-5 relative'
                                            tabIndex={0}
                                            aria-labelledby={filteredProduct.id}
                                            whileHover={{ scale: 1 }}
                                            style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}
                                            onClick={() => handleImageClick(image.src)}
                                        >
                                            <Image src={image.src} alt={image.alt} width={240} height={320} className='h-80 w-60 md:h-96 md:w-72 lg:h-80 lg:w-60 rounded-lg shadow-lg object-cover' loading="lazy" />
                                            <Image src="/images/watermark.webp" alt="Watermark" width={50} height={50} className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70' />
                                            <p id={filteredProduct.id} className='text-center text-sm py-5 text-[#4a4a4a]'>
                                                {image.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.section>
                            ))}
                        </AnimatePresence>
                    )}
                </section>
            </section>

            {isImageZoomed && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseZoom}>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 0.8 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[80vw] h-[80vh]"
                    >
                        <Image src={zoomedImageSrc} alt="Zoomed Image" layout="fill" objectFit="contain" className="rounded-lg shadow-lg" />
                    </motion.div>
                </div>
            )}
        </>
    );
}
