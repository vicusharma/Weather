import React, { useState, useEffect } from 'react'
import './css/style.css'

const Weather = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState()
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  useEffect(() => {
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2ce96f3ba34e8bf4e6588942dbfe10e3`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main)
    }

    fetchApi();
  }, [search])


  return (
    <div className='body'>
        <div className = 'search'>
             <input className='input' type= 'search' onChange = {(event) =>{
              setSearch(event.target.value)
             }} placeholder = "Search city" />
        </div>
        { !city ? (
          <p>Not Found</p>
        ) : 
        ( <div>
          <div className='container'>
          <div className='logo'>
            <h2 id='cityName'>{search}</h2>
          </div>
          <div className='temp'>
            <h1 id='temprature'>{city.temp}°C<span id='date'>{date}</span></h1>
            <h3>Minimum : {city.temp_min}°C</h3>
            <h3>Maximum : {city.temp_max}°C</h3>
          </div>
          </div>
          </div>
        )
        }
        
    </div>
  )
}

export default Weather
