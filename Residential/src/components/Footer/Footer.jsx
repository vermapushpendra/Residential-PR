import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="relative overflow-hidden z-0">
        <img src="src/assets/images/footer.jpeg" alt="footer" className="lg:h-screen h-full w-full object-cover absolute inset-0" />

        <div className="relative flex items-center justify-center h-screen text-white">
          <div className="bg-black bg-opacity-80 px-14 py-12 sm:py-20 rounded-lg text-center mx-6 md:mx-14 lg:mx-48 xl:mx-96 2xl:mx-[390px]">
            <h2 className='text-[29px] lg:text-[34px]'>
              WORK WITH US
            </h2>
            <p className='text-[19px] lg:text-[21px] mt-6 leading-relaxed'>
              Fusce vel libero id urna dapibus posuere. Curabitur scelerisque magna eu ante gravida, nec convallis lectus luctus. Proin varius arcu sit amet felis dapibus fermentum. Integer non justo eget velit sit amet risus.
              velit sit amet risus.
            </p>
            <button className='mt-8 bg-white hover:bg-customGold text-customGold hover:text-white duration-300 text-[18px] md:text-xl py-1 sm:py-2 w-full sm:w-auto justify-center sm:px-8 border-2 border-customGold'>
              Contact us
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center text-center sm:text-left mt-16">

            <div className='col-span-1 flex flex-col justify-start text-center h-full text-lg'>
              <h2 className="text-white">COMPANY</h2>
              <p className="mt-1 md:mt-4 italic">
                608 Skyline Plaza-1
                <span className="block">Sushant Golf City, Ansal API</span>
                <span className="block">Lucknow, UP 226020</span>
              </p>
            </div>

            <div className='col-span-1 flex flex-col justify-start text-center h-full text-lg mt-2 md:mt-0'>
              <h2 className="text-white ">LOCATION</h2>
              <div className="mt-1 md:mt-4 flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2761027224115!2d80.93619419798691!3d26.86296759993631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd99491cd3df%3A0xef84c13754ef7e48!2sUniversity%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1720213249465!5m2!1sen!2sin"
                  className="w-72 h-28 sm:w-80 sm:h-32 md:w-64 md:h-24 lg:w-96 lg:h-28"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className='col-span-1 flex flex-col justify-start text-center h-full text-lg mt-2 md:mt-0'>
              <h2 className="text-white">CONTACT</h2>
              <ul className="text-white mt-1 md:mt-4 italic">
                <li>
                  <Link to="#" className="underline">
                    email@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#" className="underline">
                    +91- 72XXXXXXX0
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center mx-14 lg:mx-10 xl:mx-24 gap-8 text-lg mt-24 mb-7">
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start">
            <img
              src="/src/assets/logo2.png"
              className="h-20 sm:h-24 lg:h-16"
              alt="Logo"
            />
            <p className="text-center mt-2 md:pr-24 text-sm sm:text-lg ">
              © Copyright 2024
              <span className="block">Company Name, All Rights Reserved.</span>
            </p>
          </div>

          <div className="col-span-1 lg:col-span-8 text-center md:text-left">
            <p className="mt-2 md:text-lg">
              What company doing detail of company Fusce vel libero id urna dapibus posuere. Curabitur scelerisque magna eu ante gravida, nec convallis lectus luctus. Proin varius arcu sit amet felis dapibus fermentum. Integer non justo eget velit sit amet risus. velit sit amet risus. Proin varius arcu sit amet felis dapibus fermentum. Integer non justo eget velit sit amet risus. velit sit amet risus. Proin varius arcu sit amet felis dapibus fermentum. Integer non justo eget velit sit amet risus. velit sit amet risus.
            </p>
          </div>
        </div>

        <div className="flex space-x-8 justify-center ">
          <Link to="#" className="text-gray-400 hover:text-gray-100">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-gray-100">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-gray-100">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </Link>
        </div>
      </footer>

    </>
  )
}

export default Footer;
