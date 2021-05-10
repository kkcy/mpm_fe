import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker, Animation } from '@devexpress/dx-react-chart'

const useStyles = makeStyles({
  paper: {
    background: 'rgb(243, 243, 252)'
  }
})

const DashboardBarChart = ({ data, title }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="value" argumentField="title" />
        <Title text={title} />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  )
}

export default DashboardBarChart
