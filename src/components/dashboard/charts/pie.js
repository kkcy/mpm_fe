import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Chart, PieSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui'
import { Animation, EventTracker } from '@devexpress/dx-react-chart'

const useStyles = makeStyles({
  paper: {
    background: 'rgb(243, 243, 252)'
  }
})

const DashboardPieChart = ({ data, title }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Chart data={data}>
        <PieSeries valueField="value" argumentField="title" />
        <Title text={title} />
        <Legend position="bottom"/>
        <Animation />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  )
}

export default DashboardPieChart
