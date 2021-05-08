import React, { useState, useMemo, useRef, Fragment } from 'react'
import { useCounter } from 'react-use'
import useSWR from 'swr'
import { useHistory, useParams } from 'react-router-dom'
import { DateTime } from 'luxon'
import useDoubleClick from 'use-double-click'

import { Paper, CircularProgress, Chip } from '@material-ui/core'
import {
  SelectionState,
  PagingState,
  CustomPaging,
  GroupingState,
  IntegratedGrouping
} from '@devexpress/dx-react-grid'
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  TableSelection,
  PagingPanel,
  GroupingPanel,
  DragDropProvider,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui'

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'no', title: '#' },
  { name: 'PegAUID', title: 'AUID' },
  { name: 'PegKod', title: 'Code' },
  { name: 'PegNoRumah', title: 'No Rumah' },
  { name: 'PegJalan', title: 'Name Jalan' },
  { name: 'PegTempat', title: 'Tempat' },
  { name: 'PegPoskod', title: 'Poskod' }
]

const TableRow = ({ highlighted, onToggle, ...restProps }) => {
  const history = useHistory()
  // const rowRef = useRef()
  const row = restProps.tableRow.row

  // useDoubleClick({
  //   onSingleClick: (e) => onToggle(),
  //   onDoubleClick: (e) => history.push(`pegangan/${row.id}`),
  //   ref: rowRef,
  //   latency: 250
  // })

  return (
    <Table.Row
      {...restProps}
      onClick={() => history.push(`pegangan/${row.id}`)}
      style={{
        cursor: 'pointer'
      }}
    />
  )
}

const TableCell = (props) => {
  return <Table.Cell {...props} />
}

const PeganganTable = () => {
  const [currentPage, { set }] = useCounter(0)
  const [pageSize] = useState(15)
  const [selection, setSelection] = useState([])
  const [grouping, setGrouping] = useState([])

  // const url = `https://127.0.0.1:3333/api/v1/content?page=${currentPage + 1}&limit=${pageSize}`
  // const { data: response, error } = useSWR(url)

  // if (error) {
  //   console.log(error)
  //   return <h1>Something went wrong!</h1>
  // }
  // if (!response) return <CircularProgress />

  // const rows = response.data.data
  // const total = response.data.meta.total

  const rows = Array.from(Array(15)).map((_, index) => ({
    id: index + 1,
    no: '#',
    PegAUID: 'AUID',
    PegKod: 'Code',
    PegNoRumah: 'No Rumah',
    PegJalan: 'Name Jalan',
    PegTempat: 'Tempat',
    PegPoskod: 'Poskod'
  }))
  const total = rows.length

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <DragDropProvider />
        <GroupingState grouping={grouping} onGroupingChange={setGrouping} />
        <PagingState
          defaultCurrentPage={currentPage}
          onCurrentPageChange={(val) => set(val)}
          defaultPageSize={pageSize}
        />
        <CustomPaging totalCount={total} />
        <IntegratedGrouping />
        <SelectionState selection={selection} onSelectionChange={setSelection} />
        <Table rowComponent={TableRow} cellComponent={TableCell} />
        <TableHeaderRow />
        <TableSelection
          selectByRowClick
          highlightRow
          showSelectionColumn={false}
          rowComponent={(props) => {
            return <TableRow {...props} />
          }}
        />
        <TableGroupRow />
        <Toolbar />
        <GroupingPanel showGroupingControls />
        <PagingPanel />
      </Grid>
    </Paper>
  )
}

export default PeganganTable
