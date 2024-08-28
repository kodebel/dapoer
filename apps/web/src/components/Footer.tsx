"use client";

import { RiArrowRightSLine } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare, FaYoutube, FaInstagramSquare, FaTelegramPlane, FaWhatsappSquare, FaDiscord, FaGithubSquare, FaPinterestSquare, FaSkype } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="px-4 py-8 bg-[#cccccc] font-tajawal"
    style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
      <div className="flex flex-col md:flex-row items-center md:px-10 py-5 text-center md:text-left gap-5">
        
        {/* Company Info Section */}
        <div className="w-full flex flex-col items-center md:items-center text-justify mb-5">
          <p className="text-md text-center justify-center font-bold mb-6 text-[#4a4a4a]">
            PT DAPOER POESAT NOESANTARA GROUP
          </p>
          <p className="text-sm mb-2 text-[#4a4a4a]">
          Thank you for being part of the PT Dapoer Poesat Noesantara Group family. We hope to serve you in the best way possible and become your top choice for the wide range of solutions we offer across all our services.
          </p>
          <p className="text-sm text-[#4a4a4a]">
          Do not hesitate to contact us through the available channels or visit our office for further consultation. We are ready to listen to and understand your needs to provide services that meet your expectations.
          </p>
        </div>
        
        {/* Services Section */}
        <div className="w-full flex flex-col items-center justify-center py-8 px-4 bg-[#d4b185] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
        style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
          <h1 className="text-[#4a4a4a] font-bold text-md mb-4">SERVICES</h1>
          <div className="flex flex-col space-y-4 items-center justify-center text-center">
            {[
              { name: "Dapoer Telekomunikasi", link: "/services/dapoertelekomunikasi" },
              { name: "Dapoer Parfum", link: "/services/dapoerparfum" },
              { name: "Dapoer Fotografi", link: "/services/dapoerphotography" },
              { name: "Dapoer Kimia", link: "/services/dapoerchemical" },
              { name: "Dapoer Website", link: "/services/dapoerwebsite" },
            ].map(service => (
              <a href={service.link} key={service.name} className="flex items-center space-x-2">
                <p className="text-[#4a4a4a] transform hover:scale-110 transition-transform duration-300 ease-in-out">{service.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-col items-center">
          <h1 className="font-bold text-md text-center item-center justify-center mb-4 text-[#4a4a4a]">CONTACT US</h1>
          <div className="text-sm mb-4 text-center md:text-left text-[#4a4a4a]">
            <p>TOWER SEQUIS CENTER 9TH FLOOR NO. 902</p>
            <p>JL. JEND. SUDIRMAN 71, Kelurahan Senayan, Kec. Kebayoran Baru,</p>
            <p>Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12190.</p>
            <p>Phone: +6221 55 77 9999</p>
            <p>Email: corporate@dapoerpoesatnoesantara.co.id</p>
          </div>
          <div className="justify-center">
            <p className="font-bold text-md justify-center item-center text-center mb-2 text-[#4a4a4a]">FOLLOW US:</p>
            <div className="flex justify-center gap-5">
              <FaLinkedin className="text-3xl text-[#4a4a4a]" />
              <FaFacebookSquare className="text-3xl text-[#4a4a4a]" />
              <FaYoutube className="text-3xl text-[#4a4a4a]" />
              <FaInstagramSquare className="text-3xl text-[#4a4a4a]" />
              <FaTelegramPlane className="text-3xl text-[#4a4a4a]" />
            </div>
            <div className="flex justify-center gap-5 text-[#4a4a4a]">
              <FaWhatsappSquare className="text-3xl" />
              <FaDiscord className="text-3xl" />
              <FaGithubSquare className="text-3xl" />
              <FaPinterestSquare className="text-3xl" />
              <FaSkype className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="w-full bg-[#cccccc] shadow-md rounded-lg flex justify-center items-center py-5">
        <p className="font-bold text-xs text-[#4a4a4a]">
          Copyright © 2024 - PT Dapoer Poesat Noesantara Group
        </p>
      </div>
    </section>
  );
};

export default Footer;
