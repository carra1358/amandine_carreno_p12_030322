import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./radar_chart.scss";

const data = [
        
            {
                value: 80,
                kind: 'intensity'
            },
            {
                value: 120,
                kind: 'courage',
            },
            {
                value: 140,
                kind: 'speed',
            },
            {
                value: 50,
                kind:" energy"
            },
            {
                value: 200,
                kind: 'strength',
            },
            {
                value: 90,
                kind: 'endurance',
            }

        ]

   const tickFormatter = (tick) => {
    const uppercaseTick = tick.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())
    return uppercaseTick
   } 

function RadarCharts (){

    return (
        <div className={"small_chart small_chart_radar"}>

      
         <ResponsiveContainer width="100%" height="100%">
        <RadarChart  cx="50%" cy="50%" data={data}  outerRadius="60%" >
          <PolarGrid radialLines={false}  />
          <PolarAngleAxis dataKey="kind"  tick={{fill: "#FFFFFF", fontSize:"0.65rem"}}  tickSize={12} tickFormatter={tickFormatter}  />
          <PolarRadiusAxis  stroke='none'/>
          <Radar name="user" dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.7} />
          
        </RadarChart>
      </ResponsiveContainer>

         
   
     
            
           
   
            </div>
        
    )
  
  }
  
  export default RadarCharts;
  
  {/*                <RadarChart
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
</RadarChart> */}