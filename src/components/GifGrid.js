import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const [Images, setImages] = useState([]);

    useEffect(() => {
        GetGifs();
    }, []);

    const GetGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Naruto&limit=5&api_key=9r6PyHG46cRHiSA2HVRJF8Q2YSIErUV2'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        
        console.log(gifs);
        setImages(gifs);

    }

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