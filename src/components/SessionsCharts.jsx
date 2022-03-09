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
        <div className="custom-tooltip_session test">
          <p >{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

 
 

  


function SessionsCharts ({styleName}) {

    return (
        <div className={styleName}>

            <div >
            <ResponsiveContainer width="100%" height="100%">
           <LineChart  data={data}  >
               <Tooltip content={CustomTooltip} cursor={{fill:"#8884d8"}}></Tooltip>
              
          <XAxis dataKey="day"  axisLine={false} height={110} tickMargin={40} tickLine={false} tick={{fontSize:"12px"}} tickFormatter={tickFormatter}/>
          <Line type="natural"  dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} activeDot={{fill:"#FFFFF"} }/>
        </LineChart>
      </ResponsiveContainer>
            </div>
    

        </div>
    )

}


export default SessionsCharts;