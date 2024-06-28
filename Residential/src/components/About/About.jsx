
function About() {
  return (
    <div className="bg-violet-200 rounded-3xl xl:rounded-e-full shadow-xl ml-12 mr-12 sm:ml-24 sm:mr-24">
      <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-10 m-10">

        <div className="xl:col-span-7 text-center sm:text-left mt-12 xl:mb-12">
          <p className=" font-bold text-gray-800 text-2xl">About Us</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-5">Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum</h1>
          <p className="mt-6">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          <p className="mt-6">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div >

        <div className="xl:col-span-5 flex justify-center items-center">
          <img src="src/assets/about2.png" className="w-96 xl:w-full" />
        </div>

      </div>
    </div>

  )
}

export default About