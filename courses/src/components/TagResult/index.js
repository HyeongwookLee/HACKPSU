import React, {useRef} from 'react';
import '../../App.css';
import './styles.css'
import { Link } from 'react-router-dom';


const TagResult = () => {
    
    const myContainer = useRef(null);
    const myContainer2 = useRef(null);
    const clicked = () => {
        myContainer.current.style.visibility = "visible";
    }
    const clicked2 = ()=>{
        myContainer2.current.style.visibility = "visible"
    }
    
    return(

        <div className='outerLayer'>
            <div className='back'>
                <p className='header'>You have Selected "#GA"</p>
            </div>

            <div className = 'buttonOuterLayer'>
                <div className='buttonLayer'>
                    <button onClick={clicked} className='btn'>Visual Arts </button>
                    <button className='btn'>Performing Arts</button>
                    <button className='btn'>Media Arts </button>
                    <button className='btn'>Literature </button>
                </div>
                <div ref={myContainer} className='buttonLayer2'>
                    <button className='btn'>Digital </button>
                    <button className='btn'>Drawing</button>
                    <button onClick={clicked2} className='btn'>Painting </button>
                    <button className='btn'>Sculpture</button>
                    <button className='btn'>Cinema</button>
                </div>
                <div ref={myContainer2} className='buttonLayer2'>
                    <button className='btn'>123 </button>
                    <button className='btn'>456</button>
                    <button className='btn'>789 </button>
                    <button className='btn'>10 11 12</button>
                    <button className='btn'>1313</button>
                </div>

                <Link to="/Recommendation" style={{ textDecoration: 'none' }}>
                    <button className='btn2'>Complete</button>
                </Link>
            </div> 
        </div>
    );
};
export default TagResult;