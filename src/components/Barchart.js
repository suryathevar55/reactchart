
import { PieChart, Pie,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    month: 'Jan',
    user: 10,
    day: 'Mon',
    Active:5,
    usage: 37
  },
  {
    month: 'Feb',
    user: 30,
    usage: 36,
    Active:20,
    day: 'Tue'
  },
  {
    month: 'Mar',
    user: 50,
    Active:35,
    usage: 40,
    day: 'Wed'
  },
  {
    month: 'April',
    user: 80,
    usage: 30,
    Active:50,
    day: 'Thr'
  },
  {
    month: 'May',
    user: 10,
    usage: 25,
    Active:40,
    day: 'Fri'
  },
  {
    month: 'June',
    usage: 10,
    user: 20,
    Active:36,
    day: 'Sat'
  },
  {
    month: 'Jul',
    usage: 12,
    user: 22,
    Active:30,
    day: 'Sun'
  },
];


function Barchat() {
  return (
    <>
      <h1 className="chart-heading">Day to Day Usage</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchat;