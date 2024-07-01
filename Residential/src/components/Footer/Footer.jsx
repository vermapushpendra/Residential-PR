import video1 from '/src/assets/videos/video1.mp4';

function Footer() {
  return (

    <div className="relative overflow-hidden z-0">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-50 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Discover more about us...</p>
      </div>
    </div>

  )
}

export default Footer