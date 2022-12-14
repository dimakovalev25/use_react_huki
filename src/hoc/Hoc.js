import {useState, useEffect, Component} from 'react';
import {Container} from 'react-bootstrap';
import BaseComponent from "bootstrap/js/src/base-component";

const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)

        useEffect(() => {
            setSlide(getData());
        }, [])

        function changeSlide(i) {
            setSlide(slide => slide + i);
        }

        return <BaseComponent
            {...props}
            slide={slide}
            autoplay={autoplay}
            changeSlide={changeSlide}
            setAutoplay={setAutoplay}/>
    }
}

const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = (props) => {

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {props.name}
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {props.name}
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const SliderWithFirst = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecond = withSlider(SliderSecond, getDataFromSecondFetch);

function Sliders() {
    return (
        <>
            <SliderWithFirst name={'Slider.js HOC'}/>
            <SliderWithSecond name={'Slider.js HOC'}/>

        </>
    );
}

export default Sliders;



// const f = (a) => {
//     return (b) => {
//         console.log(a+b);
//     }
// }
//
// f(1)(2);