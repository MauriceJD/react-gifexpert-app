import React, { useState, useEffect } from 'react'
import { GetGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const [Images, setImages] = useState([]);

    useEffect(() => {
        GetGifs(category).then(setImages);
    }, [category]);

    //GetGifs();

    return (
        <>
        <h3>{category}</h3> 
        <div className="card-grid">
                   {
                       Images.map( (img) => 
                          <GifGridItem
                            key={img.id} 
                            {...img}
                          />
                       )
                   }
        </div>
        </>
    )
}

export default GifGrid