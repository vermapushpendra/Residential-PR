import video1 from '/src/assets/videos/video1.mp4';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>

      <div className="relative overflow-hidden z-0">
        <video poster='/src/assets/images/five.jpg' autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative text-center mx-12 2xl:mx-[400px] lg:mx-48 md:mx-36 z-50 flex flex-col items-center justify-center h-screen text-white mt-10 sm:mt-0">
          <p className="mb-4 text-1xl lg:text-1xl xl:text-2xl ">India, USA, Africa, Australia, Germany</p>
          <p className="text-4xl lg:text-5xl xl:text-6xl ">WELCOME TO REAL ESTATE</p>
          <p className="mt-4 text-2xl lg:text-[26px] xl:text-3xl">Find The Best <span className='text-orange-600 font-bold underline underline-offset-8'>Real Estate</span> On Your Country</p>
          <p className="mt-3 text-xl lg:text-2xl xl:text-2xl">Explore our wellness-focused properties designed to enhance health and tranquility. Featuring lush green spaces, natural light, and eco-friendly materials, our homes offer a perfect blend of comfort and well-being.
          </p>
          <ul className="flex justify-center items-start space-x-20 mt-6">
            <li className="md:flex items-center">
              <img src="/src/assets/review.png" className="h-12" alt="Review" />
              <div className="md:ml-2 pt-2 md:pt-0 justify-center">
                <span className="block text-3xl lg:text-4xl font-extrabold">98%</span>
                <span className="block lg:text-xl">Satisfaction</span>
              </div>
            </li>
            <li className="md:flex items-center">
              <img src="/src/assets/property.png" className="h-12" alt="Property" />
              <div className="md:ml-2 pt-2 md:pt-0 justify-center">
                <span className="block text-3xl lg:text-4xl font-extrabold">1.6k</span>
                <span className="block lg:text-xl">Properties</span>
              </div>
            </li>

            <li className="md:flex items-center">
              <img src="/src/assets/center.png" className="h-12" alt="Branches" />
              <div className="md:ml-2 pt-2 md:pt-0 justify-center">
                <span className="block text-3xl lg:text-4xl font-extrabold">26+</span>
                <span className="block lg:text-xl">Branches</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Review div  */}
      <div className='grid grid-cols-1 md:grid-cols-2 bg-customWhite' data-aos='fade-up'>
        <div className='ml-10 mr-10 lg:ml-24 lg:mr-24 xl:ml-28 xl:mr-28'>
          <p className='text-[29px] md:text-[34px] mt-20 mb-4 md:mb-20 leading-relaxed'>
            Guiding Buyers and Sellers Across Lucknow, Delhi, and Bangalore
          </p>
        </div>

        <div className='ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24 xl:ml-28 xl:mr-32'>
          <p className='text-[21px] md:text-2xl mt-4 md:mt-20 mb-20 leading-relaxed'>
            Like Short Review Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam dolor quis dolor commodo, ac vestibulum turpis eleifend. Ut auctor efficitur dui, ut venenatis justo consectetur nec. Fusce euismod diam sed augue posuere, sed pharetra odio convallis.
          </p>
        </div>
      </div>
      {/* END Review div  */}

      {/* Images With Details */}
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-white' data-aos='fade-up'>
        <div className='ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-6 lg:mr-6 xl:ml-16 xl:mr-16 leading-relaxed order-1'>
          <h2 className='text-[29px] lg:text-[34px] mt-16 lg:mt-12 xl:mt-16'>
            Company Real Estate Group
          </h2>
          <p className='text-[19px] lg:text-[21px] mt-6 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. justo velit tristique felis, non tristique mi nisl quis leo.
            Our team is dedicated and passionate, working tirelessly to deliver exceptional results.
          </p>
          <p className='text-[19px] lg:text-[21px] mt-2 leading-relaxed'>
            Praesent vestibulum risus at orci fermentum, in vehicula purus suscipit. Nunc feugiat turpis ac congue orci posuere.
            We believe in making significant contributions to our industry. Nulla facilisi. Praesent aliquet ipsum id libero tincidunt, innovation, ensuring the highest quality in all est efficitur eu.
          </p>
          <button className='flex mt-6 mb-8 lg:mt-16 xl:mt-24 lg:mb-4 bg-white hover:bg-customGold text-customGold hover:text-white duration-300 text-[18px] md:text-xl py-1 sm:py-2 md:py-3 w-full sm:w-auto justify-center sm:px-6 border-2 border-customGold'>
            Learn more
          </button>
        </div>
        <div className='lg:h-screen w-full order-2'>
          <img src="src/assets/images/company.jpeg" className="h-full w-full object-contain lg:object-cover" />
        </div>

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 bg-white' data-aos='fade-up'>
        <div className='lg:h-screen w-full order-2 lg:order-1'>
          <img src="src/assets/images/com_2.jpeg" className="h-full w-full object-contain lg:object-cover" />
        </div>

        <div className='ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-10 lg:mr-10 xl:ml-16 xl:mr-16 leading-relaxed order-1 lg:order-2'>
          <h2 className='text-[29px] lg:text-[34px] mt-16 lg:mt-12 xl:mt-16'>
            Trusted Advisor and Results-Driven Partner for Buyers and Sellers
          </h2>
          <p className='text-[19px] lg:text-[21px] mt-6 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, magna eget efficitur justo velit tristique felis, non tristique mi nisl quis leo.
            Our team is dedicated and passionate, working results.
          </p>
          <p className='text-[19px] lg:text-[21px] mt-2 leading-relaxed'>
            Fusce vel libero id urna dapibus posuere. Curabitur scelerisque magna eu ante gravida, nec convallis lectus luctus. Proin varius arcu sit amet felis dapibus fermentum. Integer non justo eget velit sit amet risus.
          </p>
          <button className='mt-6 mb-8 lg:mt-16 xl:mt-24 lg:mb-4 bg-white hover:bg-customGold text-customGold hover:text-white duration-300 text-[18px] md:text-xl py-1 sm:py-2 md:py-3 w-full sm:w-auto justify-center sm:px-6 border-2 border-customGold'>
            Work with us
          </button>
        </div>

      </div>
      {/* END Images With Details */}


    </>
  );
}

export default Home;
