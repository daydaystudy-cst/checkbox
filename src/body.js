import './body.css';
import React, {
    // eslint-disable-next-line 
    useEffect,
    useState,
    useRef
} from 'react';
function Body() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const firstRenderRef = useRef(true);

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);

    const [display1, setDisplay1] = useState('none');
    const boxRef = useRef([]);
    const testRef = useRef();

    const getRef = (dom) => {
        if (dom) {
            // = Array.from(new Set(dom))
            boxRef.current.push(dom)
        }
    }
    const down = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', move);
        setStartX(e.clientX);
        setStartY(e.clientY);
        setEndX(e.clientX);
        setEndY(e.clientY);
        setDisplay1('block');
    }
    const move = (e) => {
        e.preventDefault();
        setEndX(e.clientX)
        setEndY(e.clientY)
        let left = testRef.current.offsetLeft;
        let top = testRef.current.offsetTop;
        let width = testRef.current.offsetWidth;
        let height = testRef.current.offsetHeight;
        boxRef.current.forEach((node, index) => {
            let ll = node.offsetWidth + node.offsetLeft;
            let tt = node.offsetHeight + node.offsetTop;
            if (ll > left && tt > top && node.offsetLeft < left + width && node.offsetTop < top + height) {
                node.checked = true;
            } else {
                node.checked = false;
            }
        });
    }
    const up = (e) => {
        e.preventDefault();
        document.removeEventListener('mousemove', move);
        setStartX(0)
        setStartY(0)
        setEndX(0)
        setEndY(0)
        setDisplay1('none')
    }
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        document.addEventListener('mousedown', down);
        document.addEventListener('mouseup', up);
        console.log('1')
        return () => {
            // console.log('return')
            document.removeEventListener('mousedown', down);
            document.removeEventListener('mouseup', up);
        }
        // eslint-disable-next-line 
    }, []);
    return (<div className='bo' >
        <p> ?????????X??? < span > {
            startX
        } </span>,Y???<span>{startY}</span > </p> <p> ?????????X??? < span > {
            endX
        } </span>,Y???<span>{endY}</span > </p> {
            /* <div className='width'></div> */
        } {
            /* <p>{Math.abs(endX - startX)},{Math.abs(endY - startY)}</p> */
        } <div className='test'
            ref={
                testRef
            }
            style={
                {
                    top: Math.min(endY, startY),
                    left: Math.min(endX, startX),
                    width: Math.abs(endX - startX),
                    height: Math.abs(endY - startY),
                    display: display1
                }
            } > </div> <div className='body' > {
                arr.map((e) => (< input type='checkbox'
                    key={
                        e
                    }
                    className='check'
                    ref={
                        getRef
                    }
                />))
            } </div> {
            /* <button onClick={myFn}>{a + {}}</button> */
        } </div>)
}
export default Body;