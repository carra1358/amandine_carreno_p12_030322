import "./line_chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [{"day":1,"sessionLength":30},{"day":2,"sessionLength":23},{"day":3,"sessionLength":45},{"day":4,"sessionLength":50},{"day":5,"sessionLength":0},{"day":6,"sessionLength":0},{"day":7,"sessionLength":60}]

const tickFormatter = (tick) => {
  const  weekDays = ["L","M","M","J","V","S","D"];
  const newTick = weekDays[tick-1]
   return newTick
}



const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {

      return (
        <div className="custom-tooltip_session">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

  
  const TrackMouse = (e) => {
         
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
           <LineChart  data={data} onMouseMove={TrackMouse} >
               <Tooltip content={CustomTooltip} cursor={{fill:"#FFFF"}}></Tooltip>
              
          <XAxis dataKey="day"  axisLine={false} height={70} tickMargin={40} tickLine={false}  tick={{fontSize:"12px", fill:"#FFFF", fontWeight:"500"}} tickFormatter={tickFormatter}/>
          <Line type="natural"  dataKey="sessionLength" stroke="#FFFF" strokeWidth={2} dot={false} activeDot={{fill:"#FFFFF"} }/>
        </LineChart>
      </ResponsiveContainer>
            </div>
    

        </div>
    )

}


export default SessionsCharts;