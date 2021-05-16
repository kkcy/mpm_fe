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
  TableColumnResizing,
  TableColumnReordering,
  TableSelection,
  PagingPanel,
  SearchPanel,
  GroupingPanel,
  DragDropProvider,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui'

const columns = [
  { name: 'no', title: '#' },
  // { name: 'pegId', title: 'ID' },
  { name: 'pegNoAkaun', title: 'No Akaun' },
  {
    name: 'mkNama',
    title: 'Mukim'
    // ToDo: what is the preferred way?
    // name: 'pegJln.pegJln.jlnKaw.kawMk.mkNama',
    // getCellValue: (row) => row.pegJln?.pegJln?.jlnKaw?.kawMk?.mkNama
  },
  { name: 'kawNama', title: 'Kawasan' },
  { name: 'pegNoRumah', title: 'No Rumah' },
  { name: 'jlnNama', title: 'Name Jalan' },
  { name: 'pegNTahunB', title: 'Nilai Tahunan (RM)' },
  { name: 'pegKadarB', title: 'Kadar (%)' },
  { name: 'pegCukaiB', title: 'Cukai (RM)' }
]

const endpoint = 'https://mpm.gaincue.com/api'

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

const PeganganTable = ({ currentPage, pageSize, total, set }) => {
  const [selection, setSelection] = useState([])
  const [grouping, setGrouping] = useState([])

  const url = `${endpoint}/hartapegangan?page=${currentPage + 1}&limit=${pageSize}`
  const { data: response, error } = useSWR(url)

  if (error) {
    console.log(error)
    return <h1>Something went wrong!</h1>
  }
  if (!response) return <CircularProgress />

  const rows = response.list.map((item, index) => ({ no: index + 1, ...item }))
  console.log(rows)

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
        <IntegratedGrouping />
        <SelectionState selection={selection} onSelectionChange={setSelection} />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <Table rowComponent={TableRow} cellComponent={TableCell} />
        {/* <TableColumnResizing defaultColumnWidths={defaultColumnWidths} /> */}
        <TableColumnReordering
          defaultOrder={[
            'no',
            // 'pegId',
            'pegNoAkaun',
            // 'pegJln.pegJln.jlnKaw.kawMk.mkNama',
            'mkNama',
            // "pegJln.pegJln.jlnKaw.kawNama"
            'kawNama',
            'pegNoRumah',
            // 'pegJln.jlnNama',
            'jlnNama',
            'pegNTahunB',
            'pegKadarB',
            'pegCukaiB'
          ]}
        />
        <TableHeaderRow />
        <TableFilterRow />
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
        <SearchPanel />
      </Grid>
    </Paper>
  )
}

const TableWrapper = () => {
  const [currentPage, { set }] = useCounter(0)
  const [pageSize] = useState(15)

  // retrieve once to get total
  const url = `${endpoint}/hartapegangan?page=1&limit=${pageSize}`
  const { data: response, error } = useSWR(url)

  if (error) {
    console.log(error)
    return <h1>Something went wrong!</h1>
  }
  if (!response) return <CircularProgress />

  const total = response.total

  return (
    <>
      {/* current page */}
      <PeganganTable currentPage={currentPage} pageSize={pageSize} set={set} total={total} />
      {/* cache for next page */}
      <div style={{ display: 'none' }}>
        {currentPage + 1 <= total / pageSize && (
          <PeganganTable currentPage={currentPage + 1} pageSize={pageSize} />
        )}
      </div>
    </>
  )
}

export default TableWrapper
