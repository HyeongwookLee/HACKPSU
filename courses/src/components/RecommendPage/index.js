import React from 'react';
import '../../App.css'
import SuperCard from '../SuperCarded/SuperCard';

const RecommendPage = () => {
    return(
        <div className='whole'>
            <div className='back'>
                <p className='header'> Tendency Result </p>
            </div>

            <div className='row'>
            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />

            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />

            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />
            </div>
            <div className='row'>
            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />

            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />

            <SuperCard
                title= 'card title'
                series = {[3,3]}
                body1 = '#music'
                body2 = '#jazz'
                body3 = '#history'
            />
        </div>
        </div>
        
        

    );
};
export default RecommendPage;