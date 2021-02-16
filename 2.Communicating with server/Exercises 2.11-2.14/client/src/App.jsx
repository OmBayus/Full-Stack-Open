import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [Countries,SetCountries] = useState([])
  const [target,setTarget] = useState("")
  const [details,setDetails] = useState({})

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all").then(res=>{
      SetCountries(res.data)
    })
  },[])

  const handleChange = e =>{
    setTarget(e.target.value)
  }

  const ShowDetails = (e)=>{
    setTarget(e.target.name)
  }

  function Country(){

    const list = Countries.filter(item=> item.name.toLowerCase().includes(target.toLowerCase()))

    if(list.length>10){
      return(<div>Too many matches, specift another filter</div>)
    }
    else if(list.length === 1){
      axios.get("http://api.weatherstack.com/current?access_key=197c99ea680907f3d4150f73c640fe28&query="+list[0].name).then((res)=>{
        setDetails({
          temperature:res.data.current.temperature,
          WeatherPictureLink:res.data.current.weather_icons[0],
          windSpeed:res.data.current.wind_speed,
          windDir:res.data.current.wind_dir
        })
      })

      return(
        <div>
          <h1>{list[0].name}</h1>
          <p>capital {list[0].capital}</p>
          <p>population {list[0].population}</p>
          <h3>Spoken languages</h3>
          <ul>
          {list[0].languages.map(item=>(
            <li key={item.name}>{item.name}</li>
          ))}
          </ul>
          <div>
            <img src={list[0].flag} alt={list[0].name} style={{width:"200px"}} />
          </div>
          <h3>Weather in {list[0].name}</h3>
          <p><b>temperature: </b>{details.temperature}</p>
          <div>
            <img src={details.WeatherPictureLink} alt={details.temperature} style={{width:"100px"}} />
          </div>
          <p><b>wind: </b>{details.windSpeed} mph direction {details.windDir}</p>
        </div>
      )

    }
    else if (list.length <= 10 && list.length>1){
      return(
        <div>
          {list.map((item)=>(
            <p key={item.name}>{item.name}<button onClick={ShowDetails} name={item.name}>show</button></p>
          ))}
        </div>
      )
    }
    else{
      return(<div>There isn't any match</div>)
    }
    
  }
  return (
    <div>
    <div>
    find countries <input onChange={handleChange} value={target}/>
    </div>
    {Country()}
    </div>
  );
}

export default App;
