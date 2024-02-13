import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImageSlider = ({ screenshots }) => {
    return (
        <Carousel className="shadow-iconShadow rounded-xl" autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {
                screenshots?.map((image, index) => <div key={index}>
                    <img className="rounded-xl" src={image} />
                </div>)
            }
        </Carousel>
    );
};

export default ImageSlider;