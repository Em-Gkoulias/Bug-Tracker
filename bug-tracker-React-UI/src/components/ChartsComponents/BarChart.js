import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    return (
      <div className="BarChart">
        <Bar
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "Bugs solved per day",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "#4ec54a",
                  "#4ec54a",
                  "#4ec54a",
                  "#4ec54a",
                  "#4ec54a",
                  "#4ec54a",
                  "#4ec54a",
                ]
              },
            ],
          }}
          height={200}
          width={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
};

export default BarChart;
