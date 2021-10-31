import React from 'react'

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const Areachart = () => {
  return (
    <>
      <ResponsiveContainer width="50%" aspect={2}>

        <AreaChart width={200} height={200} data={pdata}
          margin={{ top: 10, right: 50, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#49BDFF" stopOpacity={1} />
              <stop offset="95%" stopColor="#A8DEFF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="WeekDay" />
          <Legend />
          <YAxis dataKey="Day" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ background: 'aliceblue', fontWeight: '900' }} />

          <Area strokeWidth={4} type="monotone" dataKey="Day" activeDot={{ r: 6 }} stroke="#49BDFF" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>

      </ResponsiveContainer>
    </>
  )

}


const pdata = [

  {

    WeekDay: 'Sunday',

    Day: 18,

    fees: 20

  },

  {

    WeekDay: 'Monday',

    Day: 13,

    fees: 10

  },

  {

    WeekDay: 'Tuesday',

    Day: 8,

    fees: 10

  },

  {

    WeekDay: 'Wednesday',

    Day: 15,

    fees: 5

  },

  {

    WeekDay: 'Thursday',

    Day: 10,

    fees: 15

  },

  {

    WeekDay: 'Friday',

    Day: 5,

    fees: 20

  },

  {

    WeekDay: 'Saturday',

    Day: 6,

    fees: 20

  }

];

export default Areachart
