import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assests/borabora.jpg'
import BoraBora2 from '../../assests/borabora2.jpg'
import Maldives from '../../assests/maldives.jpg'

function ImgCarousel() {
  return (
    <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}


export default ImgCarousel
