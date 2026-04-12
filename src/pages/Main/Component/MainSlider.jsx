import React, { useState, useEffect } from 'react';
import './MainSlider.css';
import { useNavigate } from 'react-router-dom';

const MainSlider = ({ images }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0 || isDragging) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images, isDragging]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.pageX;
        const diff = currentX - startX;
        setDragOffset(diff);
    };

    const handleMouseUp = (item) => {
        if (!isDragging) return;

        const threshold = 100; // Snap threshold
        if (dragOffset < -threshold) {
            // Dragged left -> Next
            setCurrentIndex((prev) => (prev + 1) % images.length);
        } else if (dragOffset > threshold) {
            // Dragged right -> Prev
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (Math.abs(dragOffset) < 10) {
            // Minor drag -> Treat as click
            navigate('/sub', { state: { item } });
        }

        setIsDragging(false);
        setDragOffset(0);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setDragOffset(0);
        }
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div
            className="slider-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="slider-wrapper"
                style={{
                    transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease'
                }}
            >
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="slider-item"
                        onMouseDown={handleMouseDown}
                        onMouseUp={() => handleMouseUp(item)}
                    >
                        <img
                            src={item.img}
                            alt={`Slide ${index}`}
                            className="slider-image"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MainSlider;