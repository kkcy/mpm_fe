import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const navigation = [
  { name: 'Pegangan', path: '/dashboard/pegangan' },
  { name: 'Carian', path: '/dashboard/carian' },
  { name: 'Lawat Periksa', path: '/dashboard/lawat' },
  { name: 'Elaun Kekosongan', path: '/dashboard/elaun' }
]

const Sidebar = () => {
  return (
    <div>
      <List>
        {navigation.map(({ name, path }) => (
          <ListItem button key={name} component={Link} to={path}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  )
}

export default Sidebar
