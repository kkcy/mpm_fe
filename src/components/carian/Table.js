import React, { useState, useMemo, useRef, Fragment } from 'react'
import { useCounter } from 'react-use'
import useSWR from 'swr'
import { useHistory, useParams } from 'react-router-dom'
import { DateTime } from 'luxon'
import useDoubleClick from 'use-double-click'

import { Paper, CircularProgress, Chip } from '@material-ui/core'
import {
  SearchState,
  SelectionState,
  PagingState,
  CustomPaging,
  GroupingState,
  FilteringState,
  IntegratedFiltering,
  IntegratedGrouping
} from '@devexpress/dx-react-grid'
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableGroupRow,
  TableColumnReordering,
  TableSelection,
  PagingPanel,
  SearchPanel,
  GroupingPanel,
  DragDropProvider,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui'
import { endpoint } from '../../constant'

const columns = [
  { name: 'carianHid', title: 'ID' },
  { name: 'carianHpemohonNama', title: 'Nama Pemohon' },
  { name: 'carianHjumlahAmaun', title: 'Jumlah Amaun' },
  { name: 'carianHnoDaftar', title: 'No Daftar' },
  { name: 'carianHnoResit', title: 'No Reset' },
  { name: 'carianHpemohonJenis', title: 'Jenis Pemohon' }
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
      onClick={() => history.push(`carian/${row.carianHid}`)}
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
  } else if (column.name === 'carianHpemohonJenis') {
    return <EnumCell {...props} />
  }

  return <Table.Cell {...props} />
}

const EnumCell = ({ value, ...rest }) => {
  const color =
    { 1: '00072D', 2: '001C55', 3: '0A2472', 4: '0E6BA8', 5: 'A6E1FA', 6: 'B0A1BA' }[value] || 'black'
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
      <Chip style={{ backgroundColor: color, color: 'black' }} label={label}></Chip>
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

  const url = `${endpoint}/CarianHeader?page=${currentPage + 1}&limit=${pageSize}`
  const { data: response, error } = useSWR(url)

  if (error) {
    console.log(error)
    return <h1>Something went wrong!</h1>
  }
  if (!response) return <CircularProgress />
  
  const rows = response; // response.list.map((item, index) => ({ no: index + 1, ...item }))
  // const rows = response.data.data
  const total = response.length
  console.log(rows)

  // const rows = Array.from(Array(15)).map((_, index) => ({
  //   id: index + 1,
  //   no: '#',
  //   CarianHPemohonNama: '',
  //   CarianHTarikhTerima: '',
  //   CarianHTarikhSiap: '',
  //   CarianHPemohonJenis: '',
  //   CarianH_CreatedOn: ''
  // }))
  // const total = rows.length

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
        <SearchState />
        <CustomPaging totalCount={total} />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <IntegratedGrouping />
        <SelectionState selection={selection} onSelectionChange={setSelection} />
        <Table rowComponent={TableRow} cellComponent={TableCell} />
        <TableColumnReordering
          defaultOrder={[
            'id',
            'CarianHPemohonNama',
            'CarianHTarikhTerima',
            'CarianHTarikhSiap',
            'CarianHPemohonJenis',
            'CarianH_CreatedOn'
          ]}
        />
        <TableHeaderRow />
        <TableFilterRow />
        <TableSelection
          // selectByRowClick
          highlightRow
          showSelectionColumn={true}
          rowComponent={(props) => {
            return <TableRow {...props} />
          }}
        />
        <TableGroupRow />
        <Toolbar />
        <GroupingPanel showGroupingControls />
        <PagingPanel />
        <SearchPanel />
      </Grid>
    </Paper>
  )
}

export default PeganganTable
