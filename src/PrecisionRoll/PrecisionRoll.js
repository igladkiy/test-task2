import React from 'react';
import { Pie, Cell, PieChart, Label } from 'recharts';

function PrecisionRoll({ R }) {
  R *= 100;
  const data = [{ value: R }, { value: 100 - R }, { value: 1 }];

  return (
    <PieChart width={100} height={100}>
      <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={30} outerRadius={45}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index === 0 ? 'steelblue' : '#f3f6f9'} />
        ))}
        <Label
          value={`${data[0].value.toFixed(2)}%`}
          position="center"
          fill="steelblue"
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        />
      </Pie>
    </PieChart>
  );
}

export default PrecisionRoll;
