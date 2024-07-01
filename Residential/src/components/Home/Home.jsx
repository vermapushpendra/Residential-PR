import video2 from '/src/assets/videos/video2.mp4';
import video1 from '/src/assets/videos/video1.mp4';
import video3 from '/src/assets/videos/video3.mp4';
// import video4 from '/src/assets/videos/video4.mp4';

function Home() {
  return (
    <div className="relative overflow-hidden z-0">

      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative text-center mx-12 2xl:mx-[400px] lg:mx-48 md:mx-36 z-50 flex flex-col items-center justify-center h-screen text-white mt-10 sm:mt-0">
        <p className="mb-4 text-1xl lg:text-1xl xl:text-2xl ">India, USA, Africa, Australia, Germany</p>
        <p className="text-4xl lg:text-5xl xl:text-6xl ">WELCOME TO REAL ESTATE</p>
        <p className="mt-4 text-2xl lg:text-[26px] xl:text-3xl">Find The Best <span className='text-orange-600 underline underline-offset-8'>Real Estate</span> On Your Country</p>
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
  );
}

export default Home;
