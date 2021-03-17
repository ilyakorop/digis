import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const _kDisplayName = "ChartWeather";

const Element = ({ data }) => {
  return (
    <div>
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, bottom: 15, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#27b9b9"
          strokeWidth="3px"
        />
        <XAxis dataKey="time" angle={10} tickMargin={20} />
        <YAxis tickMargin={10} />
        <Tooltip formatter={(item) => item + "°"} />
      </LineChart>
    </div>
  );
};

Element.displayName = _kDisplayName;
const ChartWeather = React.memo(Element);

export default ChartWeather;
