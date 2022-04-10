import React, {useEffect, useState} from 'react';
import '../../App.css'
import SuperCard from '../SuperCarded/SuperCard';
import Axios from 'axios'

const tempData = {
    ga: 1,
    va: 1,
    pa: null,
    ma: null,
    li: null,
    digital: 1,
    drawing: null,
    painting: null,
    sculpture: null,
    cinema: 1,
    theater: null,
    dance: null,
    music: null,
    architecture: null,
    history: null,
    id: 1,
    analysis: null,
    artgallery: 1,
    critique: null,
    demonstration: null,
    groupproject: 1,
    interpretation: 1,
    lecture: null,
    museum: 1,
    studio: 1,
    online: null,
    portfolio: null,
    presentation: 1,
    research: null,
    writing: null,
    hash1: 'Web-Design',
    hash2: 'painting',
    hash3: 'HTML',
    hash4: 'portfolio',
    hash5: 'XHTML',
    hash6: 'video',
    hash7: null,
    hash8: null,
    hash9: null,
    hash10: null,
    hash11: null,
    hash12: null,
    hash13: null,
    hash14: null,
    hash15: null
}


const RecommendPage = () => {
    const [resjson, setResjson] = useState({})

    useEffect(() => {
        let sortedData = Object.keys(tempData).sort().reduce((obj, key) => (obj[key] = tempData[key], obj), {})
        Axios.post(`http://localhost:3001/server`, sortedData)
        .then((response) => {
            console.log(response);
            setResjson(response.data)
        })
    }, [])

    return(
        <div className='whole'>
            <div className='back'>
                <p className='header'> Tendency Result </p>
            </div>

            <div className='row'>
            <SuperCard
                title= 'Music 1'
                series = {[96,4]}
                body1 = {resjson[0]['hash1']}
                body2 = {resjson[0]['hash2']}
                body3 = {resjson[0]['hash3']}
            />

            <SuperCard
                title= {resjson[1]['name']}
                series = {[93,7]}
                body1 = {resjson[1]['hash1']}
                body2 = {resjson[1]['hash2']}
                body3 = {resjson[1]['hash3']}
            />

            <SuperCard
                title= {resjson[2]['name']}
                series = {[75,25]}
                body1 = {resjson[2]['hash1']}
                body2 = {resjson[2]['hash2']}
                body3 = {resjson[2]['hash3']}
            />
            </div>
            <div className='row'>
            <SuperCard
                title= {resjson[3]['name']}
                series = {[72,28]}
                body1 = {resjson[3]['hash1']}
                body2 = {resjson[3]['hash2']}
                body3 = {resjson[3]['hash3']}
            />

            <SuperCard
                title= {resjson[4]['name']}
                series = {[70,30]}
                body1 = {resjson[4]['hash1']}
                body2 = {resjson[4]['hash2']}
                body3 = {resjson[4]['hash3']}
            />

            <SuperCard
                title= {resjson[5]['name']}
                series = {[70,30]}
                body1 = {resjson[5]['hash1']}
                body2 = {resjson[5]['hash2']}
                body3 = {resjson[5]['hash3']}
            />
        </div>
        </div>
        
        

    );
};
export default RecommendPage;