import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

import { makeStyles } from '@material-ui/core/styles'
import RootRef from '@material-ui/core/RootRef'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  img: {
    display: 'block',
    width: 'auto',
    height: '100%'
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    '&:hover': {
      opacity: 0.8
    }
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },
  title: {
    fontSize: 16,
    color: '#2a2a27'
  },
  upload: {
    background: '#ebebeb'
  }
})

const Media = ({ title, name }) => {
  const classes = useStyles()
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ])
    }
  })

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )
  const { ref, ...rootProps } = getRootProps({ className: 'dropzone' })

  const thumbs = files.map((file) => (
    <Box
      key={file.name}
      className={classes.thumb}
      onClick={(e) => {
        e.stopPropagation()
        // ToDo: ask to remove
        // ToDo: show fullscreen to preview
      }}
    >
      <Box className={classes.thumbInner}>
        <img src={file.preview} className={classes.img} alt="preview" />
      </Box>
    </Box>
  ))

  return (
    <RootRef rootRef={ref}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      <Card variant="outlined">
        <CardContent {...rootProps}>
          <div>
            {/* pass name for form */}
            <input {...getInputProps()} name={name} />
            <Typography>Drag 'n' drop some files here, or click to select files</Typography>
          </div>
          {thumbs?.length > 0 && <aside className={classes.thumbsContainer}>{thumbs}</aside>}
        </CardContent>
      </Card>
    </RootRef>
  )
}

export default Media
