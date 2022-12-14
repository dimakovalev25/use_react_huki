import {useEffect, useState, useCallback, useMemo} from "react";
import {Container} from "react-bootstrap";

const calc = () => {
    // console.log('random');
    return Math.random() * (10 - 1) + 1;
}

const countTotal = (num) => {
    // console.log('count');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(1);
    const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {
        setSlide(slide + i);
        // setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(!autoplay);
    }

    useEffect(() => {
        // console.log('useEffect')
        document.title = `Slide: ${slide}`
    }, [slide])

    const getImg = useCallback(() => {
        // console.log('get img')
        return [
            "https://slon.fr/wp-content/uploads/2020/07/393721-svetik-1280x960.jpg",
        ]
    }, []);

    const total = useMemo(() => {
        // console.log('memo')
        return countTotal(slide);
    }, [slide]);


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <Slide getImg={getImg}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}
                </div>

                <div className="text-center mt-5">Total: {total}</div>

                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >Prev
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >Next
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >toggle autoplay
                    </button>
                </div>
                <br/>
            </div>
        </Container>
    )
}

const Slide = ({getImg}) => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        setImg(getImg())
    }, [getImg])

    return (
        <>
            {img.map((url, i) => {
                return (
                    <img
                        key={i}
                        className="d-block w-100"
                        src={url}
                        alt="slide"/>
                )
            })

            }
        </>
    )

}

export default Slider;