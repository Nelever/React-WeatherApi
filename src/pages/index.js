import * as React from "react"
import { useState } from 'react';
import '/src/css/global.css';
import InfoPage from "../components/weather_info";


// markup
const IndexPage = () => {
  
  //state holding user input and passing it to api url
  const [miasto,setMiasto]=useState("London");
  //state as array with weather data from api that we are sending down to "InfoPage" component
  const [dane,setDane]=useState("pusto");
  
  //onClick event for submit button fetching API and placing it in "dane" state
  function Jazda(){
  const req = new XMLHttpRequest();
  req.open("GET",'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+miasto+'?key=KBNPTBXL22U65BEEQ2HGJ6QDZ',true);
  req.send();
  req.onload = function(){
    if (req.status !== 200) { //2
      console.log("XMLHttpRequest error: "+req.status);
      return;
    }
    else
    {console.log("działa")}
    const json=JSON.parse(req.responseText)
    setDane([json.currentConditions.temp,json.currentConditions.humidity,json.currentConditions.cloudcover,json.currentConditions.pressure,json.currentConditions.windspeed])
    };
  }

 //onChange event for user input modifying state with it s value
  function zmianka(event)
  {
    setMiasto(event.target.value)
  }

  //render depending on if we fetched weather data or not
  if(dane==="pusto")
  {
  return (
    <div className="flex flex-col flex grow bg-gray-dark font-mono text-white text-base h-screen place-content-center">
      <div className="text-center  text-3xl mb-10">All I need is a city name....</div>
      <div className="text-center  text-xl">Write name of the city down below </div>
      <div className="text-center  text-xl mb-10">and you will get current weather info</div>
      <input  className="rounded-md self-center border-2 border-gray-dark bg-gray text-gray-dark text-center text-xl w-1/4 mb-5 pt-2 pb-2 hover:border-gray" type="text" value={miasto} onChange={zmianka}></input>
      <button className="rounded-md border-2 border-gray w-1/6 self-center hover:bg-gray" onClick={Jazda}>Enter</button>
    </div>
  )
  }
  else
  {
    return <InfoPage dane={dane}/>
  }
  
}

export default IndexPage
