
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banImg1 from '../../../../assets/banner/banner1.jpg'
import banImg2 from '../../../../assets/banner/banner2.jpg'
import banImg3 from '../../../../assets/banner/banner3.jpg'
import banImg4 from '../../../../assets/banner/banner4.jpg'
import banImg5 from '../../../../assets/banner/banner5.webp'
import banImg6 from '../../../../assets/banner/banner6.jpg'

const Banner = () => {
    return (

        <Carousel>
            <div>
                <img src={banImg1} />
            </div>
            <div>
                <img src={banImg2} />
            </div>
            <div>
                <img src={banImg3} />
            </div>
            <div>
                <img src={banImg4} />
            </div>
            <div>
                <img src={banImg5} />
            </div>
            <div>
                <img src={banImg6} />
            </div>
        </Carousel>

    );
};

export default Banner;
