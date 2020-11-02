import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { GetGifs } from '../helpers/getGifs';
//import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [Images, setImages] = useState([]);
    const state = useFetchGifs();

    console.log(state)
    // useEffect(() => {
    //     GetGifs(category).then(setImages);
    // }, [category]);

    return (
        <>
        <h3>{category}</h3> 
        {/* <div className="card-grid">
                   {
                       Images.map( (img) => 
                          <GifGridItem
                            key={img.id} 
                            {...img}
                          />
                       )
                   }
        </div> */}
        </>
    )
}

export default GifGrid