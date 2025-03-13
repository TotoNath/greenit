import {memo} from "react";
import {Image} from "../../interface/image.interface.ts";
import "./CustomCarousel.component.css";

interface CustomCarouselProps {
    images: Image[];
    onClick: () => void;
    currentIndex: number;
    onClick1: () => void;
    onClick2: () => void;
}

const CustomCarousel = memo(({images, onClick, currentIndex, onClick1, onClick2}: CustomCarouselProps) => {
    if (images.length === 0) return null;

    return (
        <div className="carousel">
            <button className="carousel-btn left" onClick={onClick}>&#9665;</button>
            <div className="image-card">
                <img
                    src={images[currentIndex].imageUrl}
                    alt={images[currentIndex].description}
                    loading="lazy"
                />
                <p>{images[currentIndex].description}</p>
                <button className="delete" onClick={onClick1}>Supprimer</button>
            </div>
            <button className="carousel-btn right" onClick={onClick2}>&#9655;</button>
        </div>
    );
});

export default CustomCarousel;
