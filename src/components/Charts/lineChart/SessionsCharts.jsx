import React from 'react';
import './line_chart.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const tickFormatter = (tick) => {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const newTick = weekDays[tick - 1];
  return newTick;
};

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip_session">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const legendFormatter = () => {
  const value = 'Durée moyenne des sessions';
  return <span className="custom-legend">{value}</span>;
};

const trackMouse = (e) => {
  if (e.isTooltipActive) {
    const chartDom = document.querySelector('.session_chart');
    const chartDomWidth = chartDom.clientWidth;
    let mousePosition = (e.activeCoordinate.x / chartDomWidth) * 100;
    mousePosition = Math.round(mousePosition);
    // @ts-ignore
    chartDom.style.background = `linear-gradient(90deg,#FF0000 ${mousePosition}%, #E60000 ${mousePosition}% )`;
  }
};

function SessionsCharts({ data }) {
  return (
    <div className="small_chart">
      <div className="session_chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            onMouseMove={trackMouse}
            margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
          >
            <Legend
              verticalAlign="top"
              align="middle"
              formatter={legendFormatter}
              iconSize={0}
            />
            <Tooltip content={customTooltip} cursor={false}></Tooltip>
            <YAxis
              domain={[data.min - data.max]}
              axisLine={false}
              tick={false}
              width={0}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={22}
              tick={{ fontSize: '12px', fill: '#FFFF', fontWeight: '500' }}
              tickFormatter={tickFormatter}
              interval="preserveStartEnd"
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="#FFFF"
              strokeWidth={2}
              dot={false}
              activeDot={{ fill: '#FFFF' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SessionsCharts;
