import React, { useState, useMemo } from 'react'
import { Paper, CircularProgress, Chip } from '@material-ui/core'
import { PagingState, CustomPaging } from '@devexpress/dx-react-grid'
import {
  Grid,
  Table as DXTable,
  TableHeaderRow,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui'
import { useCounter } from 'react-use'
import useSWR from 'swr'
import { useHistory, useParams } from 'react-router-dom'
import { DateTime } from 'luxon'

const columns = [
  { name: 'device_no', title: 'Device' },
  { name: 'module_number', title: 'Module' },
  { name: 'zone_number', title: 'Zone' },
  { name: 'status', title: 'Status' },
  { name: 'recorded_at', title: 'Date' }
]

const TableRow = ({ row, ...restProps }) => {
  const history = useHistory()

  return (
    <DXTable.Row
      {...restProps}
      // onClick={() => history.push(`/devices/${row.id}`)}
      style={{
        cursor: 'pointer'
      }}
    />
  )
}

const TableCell = (props) => {
  const { column } = props

  if (column.name === 'status') {
    return <StatusCell {...props} />
  } else if (column.name === 'recorded_at') {
    return <DateCell {...props} />
  }

  return <DXTable.Cell {...props} />
}

const StatusCell = ({ value, ...rest }) => {
  return (
    <DXTable.Cell {...rest}>
      <Chip
        style={{ backgroundColor: value === 1 ? 'green' : 'red', color: 'white' }}
        label={value === 1 ? 'On' : 'Off'}
      ></Chip>
    </DXTable.Cell>
  )
}

const DateCell = ({ value, ...rest }) => {
  return (
    <DXTable.Cell {...rest}>
      {DateTime.fromSeconds(Number(value)).toLocaleString(DateTime.DATETIME_FULL)}
    </DXTable.Cell>
  )
}

const Table = () => {
  const [currentPage, { set }] = useCounter(0)
  const [pageSize] = useState(15)

  const url = `https://127.0.0.1:3333/api/v1/content?page=${currentPage + 1}&limit=${pageSize}`
  const { data: response, error } = useSWR(url)

  if (error) {
    console.log(error)
    return <h1>Something went wrong!</h1>
  }
  if (!response) return <CircularProgress />

  const rows = response.data.data
  const total = response.data.meta.total

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <PagingState
          defaultCurrentPage={currentPage}
          onCurrentPageChange={(val) => set(val)}
          defaultPageSize={pageSize}
        />
        <CustomPaging totalCount={total} />
        <Table rowComponent={TableRow} cellComponent={TableCell} />
        <TableHeaderRow />
        <PagingPanel />
      </Grid>
    </Paper>
  )
}

export default Table
