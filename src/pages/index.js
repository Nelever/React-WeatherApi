import * as React from "react"
import { useState } from 'react';

// markup
const IndexPage = () => {
  
  //state holding user input and passing it to api url
  const [miasto,setMiasto]=useState("London");
  
  //onClick event function for submit button fetching API and placing it in json variable
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
    const json = JSON.parse(req.responseText);
    };
  }

 //onChange event for user input modifying state with it s value
  function zmianka(event)
  {
    setMiasto(event.target.value)
  }

  return (
    <div>
      <div>All I need is a city....</div>
      <form>
      <input type="text" value={miasto} onChange={zmianka}></input>
      </form>
      <button onClick={Jazda}>Submit</button>
    </div>
  )
}

export default IndexPage
