import React, { Component } from "react";
import '../assets/css/heroBanner.css';
import { Button, Container } from 'react-bootstrap';
import Slider from "react-slick";
import SlideImg1 from "../assets/img/slide-1.png"

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="heroSlider">
        <Slider {...settings}>
          <div className="heroSlider-item" >
            <img src={SlideImg1} alt="" title="" />
            <Container>
              <h3>iPhone 6 32Gb <br/> Black</h3>
              <p> At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. </p>
              <Button>Buy Now</Button>
            </Container>
          </div>
          <div className="heroSlider-item" >
            <img src={SlideImg1} alt="" title="" />
            <Container>
              <h3>iPhone 6 32Gb <br/> Black</h3>
              <p> At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. </p>
              <Button>Buy Now</Button>
            </Container>
          </div>
          <div className="heroSlider-item" >
            <img src={SlideImg1} alt="" title="" />
            <Container>
              <h3>iPhone 6 32Gb <br/> Black</h3>
              <p> At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground. </p>
              <Button>Buy Now</Button>
            </Container>
          </div>
        </Slider>
      </div>
    );
  }
}