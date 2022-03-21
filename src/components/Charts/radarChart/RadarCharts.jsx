import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import "./radar_chart.scss";




function RadarCharts ({data}){

   const tickFormatter = (tick) => {
       
    const uppercaseTick = data.kind[tick].replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())
    
    return uppercaseTick
   } 

 

    return (
        <div className={"small_chart small_chart_radar"}>

         <div className='radar_chart'>
         <ResponsiveContainer width="100%" height="100%">
        <RadarChart  cx="49%" cy="53%" data={data.data} outerRadius="75%"  margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,}} >
          <PolarGrid radialLines={false}  />
          <PolarAngleAxis dataKey="kind" tick={{fill:"#ffff"}} tickFormatter={tickFormatter}  />
          <PolarRadiusAxis  stroke='none' tick={false}/>
          <Radar name="user" dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
         </div>
   
            </div>
        
    )
  
  }
  

    export default RadarCharts;
/* <RadarChart
outerRadius={90}
innerRadius={10}

width={258}
height={263}
data={data}
>
<PolarGrid />
<PolarAngleAxis dataKey="kind"/>
<PolarRadiusAxis />
<Radar
  name="user"
  dataKey="value"
  stroke="#8884d8"
  fill="#8884d8"
  fillOpacity={0.6}
/>
</RadarChart> */