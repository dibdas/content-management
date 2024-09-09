import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const fetchCasesData = async () => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
};

const CasesChart = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["casesData"],
    queryFn: fetchCasesData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases Over Time",
        data: Object.values(data.cases),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Cases Chart</h2>
      <div className="relative h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};

export default CasesChart;
