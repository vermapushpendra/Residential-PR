import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8">
            <div className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                        <div className='col-span-1'>
                            <Link to="/home" className="flex items-center">
                                <img
                                    src="/src/assets/trufax.png"
                                    className="mr-3 h-16"
                                    alt="Logo"
                                />
                            </Link>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>

                        <div className='col-span-1'>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Office Address</h2>
                            <ul className="text-blue-900 font-medium">
                                <li className="mb-1 justify-center flex-initial">
                                    <p>608 Skyline Plaza-1, Sushant Golf City, Ansal API, lucknow (U.P.) Pincode</p>
                                </li>
                                <li className="mb-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block mr-2"
                                    >
                                        <path d="M6.62 10.79a15.091 15.091 0 006.79 6.79l2.2-2.2a1 1 0 011.12-.25c1.21.48 2.53.76 3.89.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17.925 17.925 0 013 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.28 2.68.76 3.89a1 1 0 01-.25 1.12l-2.2 2.2z" />
                                    </svg>
                                    <span>+91 9670500052</span>
                                </li>
                                <li className="mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block mr-2"
                                    >
                                        <path d="M6.62 10.79a15.091 15.091 0 006.79 6.79l2.2-2.2a1 1 0 011.12-.25c1.21.48 2.53.76 3.89.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17.925 17.925 0 013 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.28 2.68.76 3.89a1 1 0 01-.25 1.12l-2.2 2.2z" />
                                    </svg>
                                    <span>+91 9670500052</span>
                                </li>

                                <li className="mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block mr-2"
                                    >
                                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 4.25L12 13.25 5.4 8.25a.75.75 0 00-1.05 1.05l7.5 5.5c.28.2.65.2.92 0l7.5-5.5a.75.75 0 00-1.05-1.05z" />
                                    </svg>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="">
                                        info@trufax.in
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block mr-2"
                                    >
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V18h-2v1.93a8.2 8.2 0 01-6.26-2.87H6a6 6 0 0012 0h1.26A8.2 8.2 0 0113 19.93zm4.3-4.43H18a8.11 8.11 0 01-12 0H6.7a9.94 9.94 0 00.8 1.5h9a9.94 9.94 0 00.8-1.5zM4.11 12h2.66a8.15 8.15 0 01.29-2H4.11a8.25 8.25 0 000 2zm3-4h2.36a8.15 8.15 0 01.29-2H7.11a8.15 8.15 0 00-.29 2zm1.07-4h6.64a8.15 8.15 0 010 2H8.18a8.15 8.15 0 010-2zm8.11 2h2.36a8.15 8.15 0 01.29-2h-2.65a8.15 8.15 0 01-.29 2zm1.07 4h2.66a8.25 8.25 0 000-2h-2.66a8.15 8.15 0 01-.29 2zm0 4h2.66a8.15 8.15 0 01.29-2h-2.65a8.15 8.15 0 01-.29 2zm-8.11-2h6.64a8.15 8.15 0 010-2H8.18a8.15 8.15 0 010 2zm-1.07 2H7.11a8.15 8.15 0 00-.29 2h2.65a8.15 8.15 0 01.29-2zm8.11 2h2.36a8.15 8.15 0 01.29 2h-2.65a8.15 8.15 0 01-.29-2z" />
                                    </svg>
                                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        www.trufax.in
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Useful Links</h2>
                            <ul className="text-blue-900 font-medium">
                                <li className="mb-3">
                                    <Link to="/home" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/gallery" className="hover:underline">
                                        Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-blue-900 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-black sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-400 sm:text-center">
                            Trufax © 2024. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <Link to="#" className="text-gray-400 hover:text-gray-100">
                                <svg
                                    className="w-4 h-4"
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
                                    className="w-4 h-4"
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
                                    className="w-4 h-4"
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
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
