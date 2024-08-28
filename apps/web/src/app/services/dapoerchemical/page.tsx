"use client";

import React, { useState } from 'react';

export default function DapoerChemical() {
    const [searchTerm, setSearchTerm] = useState('');

    const sections = [
        { title: 'A', items: ['Ammonium Bifluoride / ABF', 'Acetic acid / Asam Asetat / Cuka', 'Alumunium Sulphate Powder', 'Alumunium Sulphate Granul', 'Alumunium Sulphate Liquid', 'Ammonia Liquid 20 % – 25%', 'Aquadest', 'Arpus', 'Ammonium Chloride', 'Ammonium Sulphate', 'Alumunium Oxide', 'Active Carbon', 'Active Carbon Granular', 'Active Carbon Powder'] },
        { title: 'B', items: ['Barium Nitrat', 'Barium Carbonate', 'Barium Chloride', 'Barium Sulphate', 'Bleaching Earth', 'Bentonite'] },
        { title: 'C', items: ['Catalist FIBERGLASS', 'Calcium Carbonate', 'CaO', 'Calcium Chloride', 'Calcium Hypochloride', 'Calcium Silicate', 'Calcium hydroxide', 'CMC / Carboxy-Methyl-Cellulose', 'Calcium Chloride 95%', 'Calcium Chloride', 'Calcium Chloride Flake 74%', 'Calcium Nitrate', 'Calcium Stearate', 'Citric Acid Anhydrous', 'Citric Acid Monohydrate', 'Caustic Soda'] },
        { title: 'D', items: ['DAP / Di-ammonium Phosphate', 'Dextrose Monohydrate'] },
        { title: 'E', items: ['EDTA (ethylene Brightening Agent) 2Na', 'EDTA (ethylene Brightening Agent) 4Na'] },
        { title: 'F', items: ['Ferric Chloride', 'Ferro Sulphate Powder', 'Formic Acid'] },
        { title: 'G', items: ['Gelcoat', 'Glycerine', 'Gum Rossin Type WW', 'Glitter'] },
        { title: 'H', items: ['Hidrogen Peroksida'] },
        { title: 'I', items: ['Iron Oxide Red 190', 'Iron Oxide Black 722', 'Iron Oxide Black', 'Iron Oxide Yellow', 'Iron Oxide Brown Sigma', 'Iron Powder', 'Iron Oxide Yellow buyer byferox'] },
        { title: 'K', items: ['Kalsium Klorida (CACl2) Flake'] },
        { title: 'M', items: ['Magnesium carbonate', 'Magnesium carbonate Food Grade', 'Magnesium Stearate', 'Magnesium Sulfate', 'MAP / Monoammonium Phosphate', 'Math', 'Magnesium oxide', 'Magnesium chloride'] },
        { title: 'N', items: ['Natrium klorida', 'Natrium Hydroxyde', 'NMP / N-Methyl Pyrrolidone', 'NP / Nonyl Phenol 10', 'NP / Nonyl Phenol 6', 'Natrium Carbonate'] },
        { title: 'O', items: ['OBA / Optical Brightening Agent'] },
        { title: 'P', items: ['Paraffin', 'Pasir Silica M. 1220', 'Pasir Silica M. 1620', 'Pasir Silica M. 1632', 'PAC / Poly Aluminium Chloride', 'Phosphoric Acid Food', 'Potasium Carbonat', 'Potasium Nitrat Powder', 'Potasium Nitrat Kristal', 'Potasium Sorbat Gran. Coklat', 'Potasium Sorbat Mesh. Putih', 'Propolyne Glycol', 'Poly Propylene Glycol', 'Potasium Chloride'] },
        { title: 'R', items: ['Resin 157'] },
        { title: 'S', items: ['SHMP/ Sodium hexametaphosphate', 'Sodium Acetate', 'Sodium Carbonate', 'Sodium Carbonate – Ash Light', 'Sodium Bicarbonate Malan', 'Sodium Bicarbonate Honghe', 'Sodium Chloride', 'Sodium Peroxide', 'Sodium Hydrosulphite', 'Super Soft', 'Sodium Hypochloride', 'Sodium Metabisulphite', 'Sodium Metasilicate Penta', 'Sodium Metasilicate Anhy', 'Sodium Nitrate', 'Sodium Sulfate', 'Sodium Sulfide(SN) Red', 'Sodium Sulfide(SN) Yellow', 'Sodium Sulfite', 'Sodium Chloride Flake', 'Sodium Thiosulphate', 'Sorbitol', 'Silicagel Blue', 'Silicagel Blue @ 1 gr', 'Silicagel Blue @ 5 gr', 'Silicagel White @ 1 gr', 'Silicagel W (0.5-1.5 mm)', 'Silicagel @ 1 gr', 'Sulfamic Acid', 'Stearic Acid 1800', 'Stearic Acid 1801', 'STPP / Sodium Tripolyphosphate'] },
        { title: 'T', items: ['Talc Haichen', 'Talc Liaoning', 'Talc Osmantus', 'Titan KA-100', 'Tembaga(II) sulfat (Kristal)', 'Texapone Ecosol', 'Texapone SLES', 'Teepol', 'Terpentin', 'Trisodium Phospate', 'Trisodium Citrate', 'Trichloroisocyanuric Acid', 'Turkies Blue'] },
        { title: 'W', items: ['White Oil', 'Water Glass'] },
        { title: 'Z', items: ['ZA / Zwalerzuur Ammonia', 'Zinc Stearate Rubber', 'Zinc Stearate Cosmetik', 'Zinc Chloride', 'Zinc Oxide Red Seal', 'Zinc Oxide White Seal', 'Zinc Sulphate', 'Zinc St.u/ Mesin Powder'] },
    ];

    const filteredSections = sections.map(section => ({
        ...section,
        items: section.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())),
    })).filter(section => section.items.length > 0);

    return (
        <>
            <section className="bg-[#d4b185] font-tajawal text-[#4a4a4a] min-h-screen py-20 px-4 sm:px-6 lg:px-10"
            style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                <div className="container mx-auto">
                    <header className="text-center mb-10 rounded-lg py-5 px-5 shadow-md"
                    style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Dapoer Kimia</h3>
                        <p className="text-base sm:text-lg lg:text-md text-justify max-w-4xl mx-auto">
                            PT Dapoer Poesat Noesantara Group is a leading provider of a wide range of industrial chemicals. We offer top-tier solutions for water treatment, laboratory reagents, and agrochemical equipment. With a strong commitment to quality and innovation, we manufacture and supply various chemical products to support your industrial operations. Below, we present a list of products we offer, encompassing a diverse array of chemical needs from common to specific, all produced to high standards to ensure our customers&apos; satisfaction and success.
                        </p>
                    </header>

                    <div className="relative mb-12">
                        <input
                            type="text"
                            placeholder="Search for chemicals..."
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:border-transparent transition-all duration-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSections.map((section) => (
                            <div className="mb-8" key={section.title}>
                                <h2 className="text-xl sm:text-2xl text-center font-semibold mb-4 shadow-lg rounded-lg bg-[#d4b185]">{section.title}</h2>
                                <ul className="list-disc list-inside">
                                    {section.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="mt-16 text-center">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#4a4a4a] mb-4">Interested in Our Chemical Products?</h2>
                    <p className="text-sm sm:text-md lg:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
                        To learn more about our premium range of chemical products, visit our <a href="/contactus" className="text-[#4a4a4a] underline hover:text-[#4a4a4a]">Contact Us</a> page. Our team is ready to provide the information and assistance you need. Let us help you find the right chemical solutions to support your industrial operations!
                    </p>
                </section>
            </section>
        </>
    );
}
