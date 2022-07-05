import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Carousel.css';

const CarouselHome = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel >
                <div className='carrousel-container'>
                    <img src="carrousel-koke2.webp" alt='img-carrusel-1'/>
                    <h2>
                        hello winter!
                    </h2>
                </div>
                <div className='carrousel-container'>
                    <img src="carrousel-kit2.jpg" alt='img-carrusel-2'/>
                    <h2>
                        Llegaron los kits para regalar
                    </h2>
                </div>
                <div className='carrousel-container'>
                    <img src="kokedama1.jpg" alt='img-carrusel-3'/>
                    <h2>
                        Ahora 3 cuotas sin interés en toda la página!
                    </h2>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselHome;