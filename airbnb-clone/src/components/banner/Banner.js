import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Banner.css'
import Search from '../search/Search'

import { useNavigate } from "react-router-dom";

function Banner() {
    let navigate = useNavigate(); 
    
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <div className='banner__infotext'>

                <h1>Find the perfect house for you!</h1>
                <h5>
                    With airbnb you won't have problems to find houses wherever you go.
                </h5>
                <Button onClick={() =>navigate('/search')} variant='outlined'>Explore countries</Button>
                </div>
            </div>
        </div>
    )

}

export default Banner