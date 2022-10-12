import React, { useEffect } from 'react'
import keys from './Key';
import {useLocation} from "react-router-dom";
const Reading = () => {
    const location = useLocation()
    const Specific_Chap =()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': keys.first,
                'X-RapidAPI-Host': keys.second
            }
        };
        
        fetch(`https://manga-scrapper.p.rapidapi.com/series/${location.pathname.slice(58)}/chapter/${location.pathname.slice(12, 58)}/?provider=asura`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        Specific_Chap();
    }, [])
  return (
    <>

    </>
  )
}

export default Reading