import { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import './radar_chart.scss';

/**
 * Create radar Charts with Rechart librairy rendering the user'performance
 * @property {*} data needs to build the chart
 * @example
 * <RadarCharts data={user.performance}/>
 * @returns React Component
 */
function RadarCharts({ data }) {
  //replace tick number(data.data.kind) to string(data.kind)
  const tickFormatter = (tick) => {
    const uppercaseTick = data.kind[tick].replace(
      /(?:^|\s|[-"'([{])+\S/g,
      (c) => c.toUpperCase()
    );

    return uppercaseTick;
  };

  //modified tick position to match chart width
  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      const chartDom = document.querySelector('.radar_chart');
      const chartWidth = chartDom.clientWidth;
      const chartHeight = chartDom.clientHeight;

      let tickX = x;
      let tickY = y;

      if (payload.value === 3) {
        tickX = tickX + chartWidth / 10;
      }
      if(payload.value === 2){
        tickX = tickX + chartWidth / 16;
      }
      if (payload.value === 5) {
        tickX = tickX - chartWidth / 16;
      }
      if(payload.value === 6 ){
        tickX = tickX - chartWidth / 14;
      }
      if (payload.value === 1) {
        tickY = tickY - chartHeight / 26;
      }
      if (payload.value === 4) {
        tickY = tickY + chartHeight / 26;
      }

      return ( 
        <g transform={`translate(${tickX},${tickY})`} className="tick_radar">
          <text x={0} y={3} dy={0}>
           {tickFormatter(payload.value)}
          </text>
        </g>
    
        
      );
    }
  }

  return (
    <div className={'small_chart small_chart_radar'}>
      <div className="radar_chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="48%"
            cy="50%"
            data={data.data}
            outerRadius="75%"
            margin={{
              top: 15,
              right: 0,
              bottom: 0,
              left:15,
            }}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />
            <PolarRadiusAxis stroke="none" tick={false} />
            <Radar
              name="user"
              dataKey="value"
              fill="#FF0101B2"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarCharts;
