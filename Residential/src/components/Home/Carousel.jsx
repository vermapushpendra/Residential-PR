import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden max-w-2xl mx-auto">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300 focus:outline-none"
                onClick={prevSlide}
            >
                &#8592;
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300 focus:outline-none"
                onClick={nextSlide}
            >
                &#8594;
            </button>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
