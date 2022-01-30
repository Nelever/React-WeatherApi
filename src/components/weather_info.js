import * as React from "react"

const InfoPage = (props) => {
    
    //changing farenheit to celsius
    const a=Math.floor((props.dane[0]-32)/0.18)/10

    return <div className="grid grid-cols-2 gap-x-4  h-screen text-gray-dark bg-gray-dark justify-items-center font-mono">
        <div className="text-white mt-8 text-4xl col-span-2 text-center">{props.miasto}</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Temp:{a}C</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Humidity:{props.dane[1]}%</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Cloudcover:{props.dane[2]}%</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Pressure:{props.dane[3]}hPa</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Windspeed:{props.dane[4]}m/s</div>
        <div className="h-24 w-72 p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Rain:{props.dane[5]}mm</div>
        <button onClick={props.restart} className=" pr-8 pl-8 text-xl col-span-2 text-white border-4 border-gray rounded-md hover:bg-gray">Choose diffrent city</button>
    </div>
}

export default InfoPage;