import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    '/src/assets/images/one.jpg',
    '/src/assets/images/two.jpg',
    '/src/assets/images/three.jpg',
    '/src/assets/images/twel.jpg',
];

function Carousel2() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                }
            },
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="carousel-images" className="object-cover w-full" style={{ height: '40rem' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel2;
