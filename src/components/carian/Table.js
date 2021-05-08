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
  { name: 'CarianHPemohonNama', title: 'Nama Pemohon' },
  { name: 'CarianHTarikhTerima', title: 'Tarikh Terima' },
  { name: 'CarianHTarikhSiap', title: 'Tarikh Siap' },
  { name: 'CarianHPemohonJenis', title: 'Jenis Pemohonan' },
  { name: 'CarianH_CreatedOn', title: 'Created On' }
]

const TableRow = ({ highlighted, onToggle, ...restProps }) => {
  const history = useHistory()
  // const rowRef = useRef()
  const row = restProps.tableRow.row

  // useDoubleClick({
  //   onSingleClick: (e) => onToggle(),
  //   onDoubleClick: (e) => history.push(`carian/${row.id}`),
  //   ref: rowRef,
  //   latency: 250
  // })

  return (
    <Table.Row
      {...restProps}
      onClick={() => history.push(`carian/${row.id}`)}
      style={{
        cursor: 'pointer'
      }}
    />
  )
}

const TableCell = (props) => {
  const { column } = props

  if (
    column.name === 'CarianHTarikhTerima' ||
    column.name === 'CarianHTarikhSiap' ||
    column.name === 'CarianH_CreatedOn'
  ) {
    return <DateCell {...props} />
  } else if (column.name === 'CarianHPemohonJenis') {
    return <EnumCell {...props} />
  }

  return <Table.Cell {...props} />
}

const EnumCell = ({ value, ...rest }) => {
  const color =
    { 1: 'red', 2: 'green', 3: 'blue', 4: 'yellow', 5: 'purple', 6: 'orange' }[value] || 'black'
  const label =
    {
      1: 'Orang Awam',
      2: 'Syarikat Awam',
      3: 'Swasta',
      4: 'Pejabat Guaman',
      5: 'Insolvensi',
      6: 'Lain-lain'
    }[value] || 'NIL'

  return (
    <Table.Cell {...rest}>
      <Chip style={{ backgroundColor: color, color: 'white' }} label={label}></Chip>
    </Table.Cell>
  )
}

const DateCell = ({ value, ...rest }) => {
  return (
    <Table.Cell {...rest}>
      {DateTime.fromSeconds(Number(value)).toLocaleString(DateTime.DATETIME_FULL)}
    </Table.Cell>
  )
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
    CarianHPemohonNama: '',
    CarianHTarikhTerima: '',
    CarianHTarikhSiap: '',
    CarianHPemohonJenis: '',
    CarianH_CreatedOn: ''
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
