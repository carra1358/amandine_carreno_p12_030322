import "./bar_chart.scss";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "2020-03-01",
    kilogram: 80,
    calories: 200,
  },
  {
    day: "2020-03-02",
    kilogram: 80,
    calories: 20,
  },
  {
    day: "2020-03-03",
    uv: 2000,
    kilogram: 79,
    calories: 250,
  },
  {
    day: "2020-03-04",
    kilogram: 78,
    calories: 2,
  },
  {
    day: "2020-03-05",
    kilogram: 78,
    calories: 256,
  },
  {
    day: "2020-03-06",
    kilogram: 78,
    calories: 345,
  },
  {
    day: "2020-03-7",
    kilogram: 78,
    calories: 234,
  },
  {
    day: "2020-03-08",
    kilogram: 77,
    calories: 373,
  },
  {
    day: "2020-03-09",
    kilogram: 77,
    calories: 233,
  },
  {
    day: "2020-03-10",
    kilogram: 77,
    calories: 334,
  },
];

function BarCharts({ styleName }) {
  const monthTickFormatter = (tick) => {
    const date = new Date(tick);
    return date.getDate();
  };

  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value}`}kg </p>
          <p>{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="bar_chart">
      <h2 className="bar_chart_title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="1 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={monthTickFormatter}
            axisLine={false}
            tickLine={false}
            tickSize={16}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={24}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="8px"
            wrapperStyle={{ top:0, paddingBottom:"2em"}}
            formatter={(value) => (
              <span className="bar_chart_legend">
                {value === "kilogram"
                  ? (value = "Poids(kg)")
                  : (value = "Calories(kcal)")}
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
