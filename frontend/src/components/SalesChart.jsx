import { Bar } from "react-chartjs-2";

export default function SalesChart() {
    const data = {
        labels: ["Pizza", "Burger", "Pasta", "Sandwich"],
        datasets: [
      {
        label: "Sales",
        data: [50, 30, 20, 15],
        backgroundColor: "#f35207",
      },
    ],
};
return <Bar data={data} />;}