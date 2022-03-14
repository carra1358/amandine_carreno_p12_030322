import "./line_chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PureComponent } from "react";

const data = [{"day":1,"sessionLength":23},{"day":2,"sessionLength":0},{"day":3,"sessionLength":56},{"day":4,"sessionLength":34},{"day":5,"sessionLength":67},{"day":6,"sessionLength":100},{"day":7,"sessionLength":4}]

const tickFormatter = (tick) => {
  const  weekDays = ["  L","M","M","J","V","S","D  "];
  const newTick = weekDays[tick-1]
   return newTick
}





const customTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {

      return (
        <div className="custom-tooltip_session">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

  const legendFormatter = (value) => {
    value = "Durée moyenne des sessions"
    return <span className="custom-legend">{value}</span>

  }


  
  const trackMouse = (e) => {
         
    if(e.isTooltipActive){
        const chartDom = document.querySelector(".session_chart_div")
        const chartDomWidth = chartDom.clientWidth
        let mousePosition = e.activeCoordinate.x / chartDomWidth * 100;
         mousePosition = Math.round(mousePosition)
        console.log(mousePosition)
        //@ts-ignore
        chartDom.style.background = `linear-gradient(90deg,#FF0000 ${mousePosition}%, #E60000 ${mousePosition}% )`
        
    }

}



  


function SessionsCharts () {

    return (
        <div className={"small_chart"} >

            <div  className='session_chart_div' style={{width:"100%", height:"100%", background:"#FF0000", borderRadius:"5px"}}>
            <ResponsiveContainer width="100%" height="100%">
           <LineChart  data={data} onMouseMove={trackMouse} margin={0} >
               <Legend  verticalAlign="top" align="middle" formatter={legendFormatter} iconSize={0}/>
               <Tooltip content={customTooltip} cursor={false}></Tooltip>
           <YAxis domain={[-10,160]} axisLine={false} tick={false} tick={false} width={0}/>
          <XAxis dataKey="day"  axisLine={false}  tickLine={false}  tick={{fontSize:"12px", fill:"#FFFF", fontWeight:"500"}}  tickFormatter={tickFormatter} interval="preserveStartEnd"/>
          <Line type="natural"  dataKey="sessionLength" stroke="#FFFF" strokeWidth={2} dot={false} activeDot={{fill:"#FFFF"} } />
        </LineChart>
      </ResponsiveContainer>
            </div>
    

        </div>
    )

}


export default SessionsCharts;