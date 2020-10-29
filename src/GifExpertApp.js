import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () =>{

    const [categories, setcategories] = useState(['One Punch', 'Naruto', 'Aang'])

    // const addSeries = () =>{
    //     setcategories([...categories, 'Bojack Horseman']) 
    // }

    return(
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                    return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>

    )
}

export default GifExpertApp     