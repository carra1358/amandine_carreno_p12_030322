import './bar_chart.scss';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * Create bar Charts with Rechart librairy rendering the user'activity
 * @property {*} data needs to build the chart
 * @example
 * <BarCharts data={user.activity}/>
 * @returns React Component
 */
function BarCharts({ data }) {
  //replace date with only the day of the month
  const monthTickFormatter = (tick) => {
    const date = new Date(tick);
    return date.getDate();
  };
  // change the content and style of the tooltip
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value}`}kg</p>
          <p>{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="bar_chart">
      <h2 className="bar_chart_title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 1" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={monthTickFormatter}
            axisLine={{ stroke: '#DEDEDE' }}
            tickLine={false}
            tickSize={16}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
          />
          <YAxis
            interval={1}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={24}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="8px"
            wrapperStyle={{ top: 0, paddingBottom: '2em' }}
            formatter={(value) => (
              <span className="bar_chart_legend">
                {value === 'kilogram'
                  ? (value = 'Poids(kg)')
                  : (value = 'Calories(kcal)')}
              </span>
            )}
          />
          <Bar
            dataKey="kilogram"
            fill="##282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
