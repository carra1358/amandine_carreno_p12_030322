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

      if (payload.value === 2 || payload.value === 3) {
        tickX = tickX + chartWidth / 12;
      }
      if (payload.value === 6 || payload.value === 5) {
        tickX = tickX - chartWidth / 12;
      }
      if (payload.value === 1) {
        tickY = tickY - chartHeight / 18;
      }
      if (payload.value === 4) {
        tickY = tickY + chartHeight / 22;
      }

      return (
        <g transform={`translate(${tickX},${tickY})`} className="tick_radar">
          <text x={0} y={7} dy={0}>
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
            cx="50%"
            cy="50%"
            data={data.data}
            outerRadius="75%"
            margin={{
              top: 5,
              right: 5,
              bottom: 5,
              left: 5,
            }}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />
            <PolarRadiusAxis stroke="none" tick={false} />
            <Radar
              name="user"
              dataKey="value"
              stroke="none"
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
