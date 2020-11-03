import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{
        GetGifs((category))
            .then(img =>{

                    setstate({
                        data: img,
                        loading: false
                    });              
            })
    }, [category])

    return state;
    
}