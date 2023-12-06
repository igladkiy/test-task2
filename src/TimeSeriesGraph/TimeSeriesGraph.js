import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function TimeSeriesGraph({ monthlySales }) {
  return (
    <LineChart width={590} height={300} data={monthlySales}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total_sales" stroke="#8884d8" />
    </LineChart>
  );
}

export default TimeSeriesGraph;
