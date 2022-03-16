import "./radial_chart.scss"
import { RadialBarChart, RadialBar,PolarAngleAxis, Legend, ResponsiveContainer } from "recharts";







function ScoreCharts ({data}){

     

    const dataToUse = [
        {
            score: data.todayScore ? data.todayScore : data.score,
        }
    ]


  return (
      <div className={"small_chart  small_chart_score"}>
          <h3 className="score_title">Score</h3>
          <div className="score_chart">
              <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
        width={160}
        height={160}
        innerRadius="100%"
        outerRadius="100%"
        barSize={10}
        data={dataToUse}
        startAngle={210}
         endAngle={-150}
       
        
        >
        <PolarAngleAxis
  type="number"
  domain={[0, 1]}
  angleAxisId={0}
  tick={false}
  
  />
  <RadialBar
  background={false}
  clockWise={true}
  dataKey="score"
  orientation=""
  cornerRadius={87}
  fill="#FF0000"
  />
  <Legend verticalAlign="middle" align='center' iconType="circle" iconSize="0px" wrapperStyle={{ lineHeight: '25px'}} formatter={(value,entry,payload) => <span className="bar_chart_legend"><span className="bar_chart_legend_percent">{ new Intl.NumberFormat("en-IN", {style: "percent"}).format(entry.payload.value)}<br/></span> De votre objectif</span>}/>


  </RadialBarChart>

              </ResponsiveContainer>
        
 
      </div>
          </div>
      
  )

}

export default ScoreCharts;

