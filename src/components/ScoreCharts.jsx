import { RadialBarChart, RadialBar,PolarAngleAxis } from "recharts";

const data = [
    {
        score:0.12,
    }
]

const pourcentage = 0.12 * 100;

function ScoreCharts ({styleName}){

  return (
      <div className="small_chart">
          <h3 className="score_title">Score</h3>
          <div className={styleName}>
        <RadialBarChart
        width={160}
        height={160}
        innerRadius="100%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={-210}
         endAngle={360}
       
        
        >
        <PolarAngleAxis
  type="number"
  domain={[0, 1]}
  angleAxisId={0}
  tick={false}
  
  />
  <RadialBar
  background={false}
  clockWise
  dataKey="score"
  cornerRadius={87}
  fill="#FF0000"
  />
    <text
        x={80}
        y={80}
        textAnchor="middle"
        dominantBaseline="central"
        >
       {pourcentage}% De votre objectif
      </text>


  </RadialBarChart>
 
      </div>
          </div>
      
  )

}

export default ScoreCharts;

