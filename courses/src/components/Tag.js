import React, {useRef} from 'react';
import "./Tag.css";
import { Link } from 'react-router-dom';

const Tag = () => {
    const myContainer = useRef(null);
    const myContainer2 = useRef(null);
    const datas = ["GA", "GS", "GH", "GN"];
    const handleClick = () => {
        myContainer.current.style.boarder = "pink";
    }

    return (
        <div className='TagContainer'>
            <ul className="tags">
                <li ref={myContainer} onClick={handleClick} className="tag1"><div>{datas[0]}</div></li>
                <li className="tag1"><div>{datas[1]}</div></li>
                <li className="tag1"><div>{datas[2]}</div></li>
                <li className="tag1"><div>{datas[3]}</div></li>
            </ul>
            
        </div>
    );
}

export default Tag;