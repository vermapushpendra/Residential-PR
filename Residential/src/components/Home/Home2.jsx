import Carousel2 from '/src/components/Home/Carousel2.jsx';


function Home() {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <p className=" font-bold text-gray-800 text-2xl">About Us</p>
                    <h1 className="text-3xl font-bold text-gray-800 mt-5">Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum</h1>
                    <p className="mt-6">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                    <p className="mt-6">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                </div>

                <div className='col-span-1'>
                    <img src="src/assets/images/seven.jpg" className="w-96 xl:w-full h-full rounded-tl-3xl rounded-bl-3xl" />
                </div>
            </div>



            <div className='m-8 mr-32 ml-32'>
                <Carousel2 />
            </div>


        </>
    );
}

export default Home;