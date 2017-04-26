import React, { Component } from 'react';
import SliderSlick from 'react-slick';

import _map from 'lodash/map';

import 'slick-carousel/slick/slick.css';
import css from './Slider.css';

class Slider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={css.sliderContainer}>
        <SliderSlick {...settings}>
          {_map(this.props.slides, (item) => {
            return (
              <div key={item.id}>
                <div className={css.slide}>
                  <h3>{item.title}</h3>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          })}
        </SliderSlick>
      </div>
    );
  }
}

export default Slider;
