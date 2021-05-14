import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui'
import { Animation, EventTracker } from '@devexpress/dx-react-chart'

const useStyles = makeStyles({
  paper: {
    background: 'rgb(243, 243, 252)'
  }
})

const ValueLabel = (props) => {
  const { text } = props
  return <ValueAxis.Label {...props} text={`${text}`} />
}
const format = () => (tick) => tick

const DashboardLineChart = ({ data, title, series }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Chart data={data}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis max={50} labelComponent={ValueLabel} />
        <LineSeries valueField="value" argumentField="title" />
        <Title text={title} />
        {/* <Legend
          position="bottom"
          //   rootComponent={Root}
          //   itemComponent={Item}
          //   labelComponent={Label}
        /> */}
        <Animation />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  )
}

export default DashboardLineChart
