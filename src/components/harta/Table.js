import React, { useState, useMemo } from 'react'
import { Paper, CircularProgress, Chip } from '@material-ui/core'
import { PagingState, CustomPaging } from '@devexpress/dx-react-grid'
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui'
import { useCounter } from 'react-use'
import useSWR from 'swr'
import { useHistory, useParams } from 'react-router-dom'
import { DateTime } from 'luxon'

const columns = [
  { name: 'no', title: '#' },
  { name: 'PegAUID', title: 'AUID' },
  { name: 'PegKod', title: 'Code' },
  { name: 'PegNoRumah', title: 'No Rumah' },
  { name: 'PegJalan', title: 'Name Jalan' },
  { name: 'PegTempat', title: 'Tempat' },
  { name: 'PegPoskod', title: 'Poskod' }
]

const TableRow = ({ row, ...restProps }) => {
  const history = useHistory()

  return (
    <Table.Row
      {...restProps}
      // onClick={() => history.push(`/devices/${row.id}`)}
      style={{
        cursor: 'pointer'
      }}
    />
  )
}

const TableCell = (props) => {
  return <Table.Cell {...props} />
}

const HartaTable = () => {
  const [currentPage, { set }] = useCounter(0)
  const [pageSize] = useState(15)

  // const url = `https://127.0.0.1:3333/api/v1/content?page=${currentPage + 1}&limit=${pageSize}`
  // const { data: response, error } = useSWR(url)

  // if (error) {
  //   console.log(error)
  //   return <h1>Something went wrong!</h1>
  // }
  // if (!response) return <CircularProgress />

  // const rows = response.data.data
  // const total = response.data.meta.total

  const rows = [
    {
      no: '#',
      PegAUID: 'AUID',
      PegKod: 'Code',
      PegNoRumah: 'No Rumah',
      PegJalan: 'Name Jalan',
      PegTempat: 'Tempat',
      PegPoskod: 'Poskod'
    },
    {
      no: '#',
      PegAUID: 'AUID',
      PegKod: 'Code',
      PegNoRumah: 'No Rumah',
      PegJalan: 'Name Jalan',
      PegTempat: 'Tempat',
      PegPoskod: 'Poskod'
    },
    {
      no: '#',
      PegAUID: 'AUID',
      PegKod: 'Code',
      PegNoRumah: 'No Rumah',
      PegJalan: 'Name Jalan',
      PegTempat: 'Tempat',
      PegPoskod: 'Poskod'
    },
    {
      no: '#',
      PegAUID: 'AUID',
      PegKod: 'Code',
      PegNoRumah: 'No Rumah',
      PegJalan: 'Name Jalan',
      PegTempat: 'Tempat',
      PegPoskod: 'Poskod'
    }
  ]
  const total = 4

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

export default HartaTable
