'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoGoal } from "react-icons/go";
import { GiGoalKeeper, GiStairsGoal } from "react-icons/gi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('tkn');
    // Allow access to this page without authentication
  }, [router]);

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return (
    <>
      <section id="intro" className="text-center font-tajawal bg-[#d4b185]"
      style={{ backgroundImage: 'url(/images/backgrounddpng.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative w-full h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/images/mockup.webp')" }}>
          <div className="flex flex-col justify-center items-center py-10 px-5 md:px-10 bg-black bg-opacity-60 h-full w-full">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              className="w-[80%]"
              centerMode={true}
              centerSlidePercentage={100}
              dynamicHeight={true}
              swipeable
              emulateTouch
            >
              <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-4xl font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  What is Dapoer Poesat Noesantara Group?
                </p>
                <p className="text-md font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  Dapoer Poesat Noesantara Group is a dynamic and innovative company operating in various strategic sectors, including Telecommunications (Dapoer Telekomunikasi), Perfume (Dapoer Parfum), Photography (Dapoer Fotografi), Chemicals (Dapoer Kimia), and Web Development (Dapoer Website). We&apos;re committed to delivering the highest quality services and products in each sector we serve, backed by the support of our shareholders, business partners, and customer trust. Our dedication is to continually create significant and sustainable value across all the industries we engage in.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-5xl font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  Who are our clients?
                </p>
                <p className="text-md font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  Our clients span various industries, from medium-sized enterprises to large corporations, including both private and state-owned companies across Indonesia. We take pride in serving a diverse range of businesses with innovative solutions and high-quality services, ensuring sustained satisfaction and trust from each of our business partners.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-5xl font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  Why choose us?
                </p>
                <p className="text-md font-bold text-white px-5 md:px-10 lg:px-20 py-1">
                  Choosing us means opting for unparalleled quality and dedication. We&apos;re committed to delivering top-notch services and products, supported by our team of skilled professionals. Our emphasis on customer satisfaction and continuous improvement ensures that we not only meet but exceed your expectations. With a proven track record and a focus on innovation, we&apos;re your trusted partner for achieving business success.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row justify-between py-5 px-10 gap-10 bg-[#cccccc] font-tajawal'
      style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='flex-1 bg-[#d4b185] p-5 md:p-10 rounded-lg shadow-md text-center' tabIndex={0} aria-labelledby="service"
    style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
        <GoGoal className='h-20 w-20 mx-auto text-[#4a4a4a]' />
        <h2 id="service" className='font-bold text-xl md:text-2xl mt-4 text-[#4a4a4a]'>
            Vision
        </h2>
        <br />
        <p className='text-justify text-sm md:text-base text-[#4a4a4a]'>
        Our vision is to be an innovative leader recognized both nationally and internationally across all our services, including Dapoer Telekomunikasi, Dapoer Parfum, Dapoer Fotografi, Dapoer Kimia, and Dapoer Website. We&apos;re dedicated to delivering high-quality products and services by prioritizing innovative solutions, cutting-edge technology, and exceptional reliability. Through this commitment, we aim to create sustainable value for our customers, business partners, and stakeholders.
        </p>
    </div>
    <div className='bg-[#d4b185] flex-1 p-5 md:p-10 rounded-lg shadow-md text-center' tabIndex={0} aria-labelledby="planning"
    style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
        <GiGoalKeeper className='h-20 w-20 mx-auto text-[#4a4a4a]' />
        <h2 id="planning" className='font-bold text-xl md:text-2xl mt-4 text-[#4a4a4a]'>
            Goals
        </h2>
        <br />
        <p className='text-justify text-sm md:text-base text-[#4a4a4a]'>
            <p>1. Achieve excellence in services and products through continuous innovation and quality improvement.</p>
            <p>2. Expand national and international market reach by building strategic partnerships.</p>
            <p>3. Enhance employee competence and well-being through ongoing training and development.</p>
            <p>4. Maintain and increase customer satisfaction by understanding and meeting their needs.</p>
            <p>5. Contribute positively to society and the environment through corporate social responsibility (CSR) initiatives.</p>
        </p>
    </div>
    <div className='flex-1 bg-[#d4b185] p-5 md:p-10 rounded-lg shadow-md text-center' tabIndex={0} aria-labelledby="execution"
    style={{ backgroundImage: 'url(/images/2backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
        <GiStairsGoal className='h-20 w-20 mx-auto text-[#4a4a4a]' />
        <h2 id="execution" className='font-bold text-xl md:text-2xl mt-4 text-[#4a4a4a]'>
            Mission
        </h2>
        <br />
        <p className='text-justify text-sm md:text-base text-[#4a4a4a]'>
        Our mission is to deliver exceptional quality and innovative solutions across all our services, including Dapoer Telekomunikasi, Dapoer Parfum, Dapoer Fotografi, Dapoer Kimia, and Dapoer Website. We&apos;re committed to exceeding customer expectations by fostering a culture of continuous improvement, leveraging cutting-edge technology, and upholding the highest standards of professionalism and integrity. We aspire to build lasting partnerships and make a positive impact on the community and the environment.
        </p>
    </div>  
</section>

      <section id="barTestimonialAndRoadmap" className='flex flex-col md:flex-row justify-center py-5 px-5 md:px-10 items-center gap-5 bg-[#d4b185] font-tajawal'
      style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
        <button className="flex-1 bg-gold text-black border-none w-full h-10 flex items-center justify-center rounded-lg shadow-md bg-[#d4b185]">
          <p className="text-xl text-center font-bold text-[#4a4a4a]">Road Map</p>
        </button>
      </section>

      <section id="jumbotronRoadmap" className='flex-1 bg-[#edd9bc] font-tajawal text-[#4a4a4a]'>
        <section className="overflow-y-auto h-screen bg-[#edd9bc]">
          <div id='card1' className="bg-[#edd9bc] rounded-lg shadow-md p-5 md:p-8"
          style={{ backgroundImage: 'url(/images/3backgrounddpng.png)', backgroundSize: 'auto', backgroundPosition: 'center' }}>
            <div className='flex flex-col gap-10 md:gap-20 '>
              <div className='flex flex-1 justify-center item-center '>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex items-center justify-center mt-5 font-bold py-2">2016</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10'>
                <div className='flex-1 justify-center py-10'></div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-5 md:py-10'>
                  <p className='text-center font-bold text-md'>Iam PHOTOGRAPHY</p>
                  <br />
                  <p className='text-center font-bold'>Photography</p>
                  <br />
                  <p className="text-sm text-justify">
                    Iam Photography was founded by the President Director with the same name, Iam Photography. This company operates in the field of photography and offers collaboration services with individuals or business entities, both private and state-owned enterprises.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                    Our vision is to be a leading provider of photography services that prioritize quality and customer satisfaction. We&apos;re committed to delivering the best photography results through mutually beneficial collaboration with all parties involved.
                  </p>
                </div>
              </div>
              <div className='flex flex-1 justify-center item-center'>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex item-center justify-center mt-5 font-bold py-2">2020</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10'>
                <div className='flex-1 justify-center py-10'>
                  <p className='text-center font-bold text-lg'>LANGGENG BERSAMA</p>
                  <br />
                  <p className='text-center font-bold text-md'>IT Solution</p>
                  <br />
                  <p className="text-sm text-justify">
                    Langgeng Bersama, founded by the Director, has expanded its business in the field of photography. This company offers collaboration services with individuals or business entities, both private and state-owned enterprises. With a commitment to providing innovative and quality IT solutions, Langgeng Bersama aims to build long-term mutually beneficial relationships with all our business partners.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                    Our vision is to be a leader in the IT Solution industry by providing reliable, efficient services that meet customer needs. We believe that good cooperation and effective communication are the keys to success in every project we handle.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'></div>
              </div>
              <div className='flex flex-1 justify-center item-center'>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex item-center justify-center mt-5 font-bold py-2">2021</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10'>
                <div className='flex-1 justify-center py-10'></div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'>
                  <p className='text-center font-bold text-md'>DAPUR PANCONG</p>
                  <br />
                  <p className='text-center font-bold'>F&B</p>
                  <br />
                  <p className="text-sm text-justify">
                    In the following years, the business sector in the F&B (Food and Beverage) industry began to grow. The opportunities in this sector were very attractive to the President Director, who decided to expand his business by establishing Dapur Pancong. This business is expected to make a significant contribution to the culinary industry, focusing on product quality and innovation as well as excellent service.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                    Our vision is to be a leader in the F&B industry by serving high-quality dishes and creating unforgettable culinary experiences for our customers. Through Dapur Pancong, we&apos;re committed to presenting culinary innovations that can meet the evolving tastes and needs of the market.
                  </p>
                </div>
              </div>
              <div className='flex flex-1 justify-center item-center'>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex item-center justify-center mt-5 font-bold py-2">2022</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10'>
                <div className='flex-1 justify-center py-10'>
                  <p className='text-center font-bold text-md'>RR SUPPLIER</p>
                  <br />
                  <p className='text-center font-bold'>Retail</p>
                  <br />
                  <p className="text-sm text-justify">
                    A year later, the retail world became a very promising sector in the business world. Realizing this opportunity, the Director founded a retail company named RR Supplier. RR Supplier is committed to providing high-quality products at competitive prices, as well as offering the best services to our customers.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                    Our vision is to be a leader in the retail industry by presenting excellent products and unparalleled customer service. We believe that with innovation and dedication, RR Supplier can meet the ever-evolving needs and expectations of the market.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'></div>
              </div>
              <div className='flex flex-1 justify-center item-center'>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex item-center justify-center mt-5 font-bold py-2">2024</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10'>
                <div className='flex-1 justify-center py-10'></div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'>
                  <p className='text-center font-bold text-md'>PT DAPOER POESAT NOESANTARA GROUP</p>
                  <br />
                  <p className='text-center font-bold'>IT Technology</p>
                  <br />
                  <p className="text-sm text-justify">
                    To maintain consistency and professionalism, the President Director and Director immediately realized the idea of building a business entity. From this vision, PT Dapoer Poesat Noesantara Group was formed. This company is committed to providing innovative and quality information technology solutions to meet the needs of clients from various industry sectors.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                    Our vision is to be a leader in the information technology industry by offering reliable and efficient services. We believe that dedication and innovation are the keys to achieving success and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className='flex flex-1 justify-center item-center'>
                <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-[#d4b185] w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                  <p className="flex item-center justify-center mt-5 font-bold py-2">2025</p>
                </div>
              </div>
              <div className='flex flex-row justify-between item-center gap-10 '>
                <div className='flex-1 justify-center py-10 '></div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'>
                  <p className='text-center font-bold text-md'>PT DAPOER POESAT NOESANTARA GROUP</p>
                  <br />
                  <p className='text-center font-bold'>IT Technology</p>
                  <br />
                  <p className="text-sm text-justify">
                  PT Dapoer Poesat Noesantara Group is not only focused on developing business-to-business (B2B) and business-to-consumer (B2C) partnerships but also fully committed to all the services we offer. We&apos;re dedicated to expanding our network and strengthening relationships with our business partners and customers through continuous innovation and excellence in every aspect of our business.
                  </p>
                  <br />
                  <p className="text-sm text-justify">
                  Our vision is to be a leader in the information technology industry by providing reliable, efficient solutions that add value to every partner and customer. With the right strategy and unwavering dedication, we&apos;re confident in achieving this goal and continuing to grow in the years to come, uniting all our services under one cohesive vision.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 bg-gray-800 h-full"></div>
                </div>
                <div className='flex-1 justify-center py-10'></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
