import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useCounter } from 'react-use'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MUIGrid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Pemilik from './Pemilik'
import Media from './Media'
import Input from '../../../elements/input'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16,
    color: '#2a2a27'
  },
  pos: {
    marginBottom: 12
  },
  offset: {
    padding: '0 !important'
  }
})

const PeganganForm = () => {
  const classes = useStyles()
  const methods = useFormContext()
  const {
    formState: { errors }
  } = methods
  const [pemilikSize, { inc, dec }] = useCounter(1, null, 1)

  return (
    <>
      <Typography className={classes.title} gutterBottom>
        Maklumat Harta
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegNoAkaun"
                rules={{ required: 'Please insert the No Akaun' }}
                label="No Akaun"
                error={errors.pegNoAkaun != null}
                helperText={errors.pegNoAkaun}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegJln.pegJln.jlnKaw.kawMk.mkNama"
                rules={{ required: 'Please insert the Mukim' }}
                label="Mukim"
                error={errors.pegJln?.jlnKaw?.kawMk?.mkNama != null}
                helperText={errors.pegJln?.jlnKaw?.kawMk?.mkNama}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegNoRumah"
                rules={{ required: 'Please insert the No Rumah' }}
                label="No Rumah"
                error={errors.pegNoRumah != null}
                helperText={errors.pegNoRumah}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegJln.pegJln.jlnKaw.kawNama"
                rules={{ required: 'Please insert the Kawasan' }}
                label="Kawasan"
                error={errors.pegJln?.jlnKaw?.kawNama != null}
                helperText={errors.pegJln?.jlnKaw?.kawNama}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegJln.jlnNama"
                rules={{ required: 'Please insert the Name Jalan' }}
                label="Name Jalan"
                error={errors.pegJln?.jlnNama != null}
                helperText={errors.pegJln?.jlnNama}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegTempat"
                rules={{ required: 'Please insert the Tempat' }}
                label="Tempat"
                error={errors.pegTempat != null}
                helperText={errors.pegTempat}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegJln.jlnPoskod"
                rules={{ required: 'Please insert the Poskod' }}
                label="Poskod"
                error={errors.pegJln?.jlnPoskod != null}
                helperText={errors.pegJln?.jlnPoskod}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegJln.pegJln.jlnNegeri"
                rules={{ required: 'Please insert the Negeri' }}
                label="Negeri"
                error={errors.pegJln?.jlnNegeri != null}
                helperText={errors.pegJln?.jlnNegeri}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />

      <Typography className={classes.title} gutterBottom>
        Maklumat Penilaian
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegNTahunB"
                rules={{ required: 'Please insert the Nilai Tahunan' }}
                label="Nilai Tahunan (RM)"
                error={errors.pegNTahunB != null}
                helperText={errors.pegNTahunB}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegTkhKuatKuasa"
                rules={{ required: 'Please insert the Tarikh Kuat Kuasa' }}
                label="Tarikh Kuat Kuasa"
                error={errors.pegTkhKuatKuasa != null}
                helperText={errors.pegTkhKuatKuasa}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegKadarB"
                rules={{ required: 'Please insert the Kadar Baru Pegangan' }}
                label="Kadar Baru Pegangan"
                error={errors.pegKadarB != null}
                helperText={errors.pegKadarB}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegLuasBgn"
                rules={{ required: 'Please insert the Luas Bangunan' }}
                label="Luas Bangunan"
                error={errors.pegLuasBgn != null}
                helperText={errors.pegLuasBgn}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegCukaiB"
                rules={{ required: 'Please insert the Cukai Baru Pegangan' }}
                label="Cukai Baru Pegangan"
                error={errors.pegCukaiB != null}
                helperText={errors.pegCukaiB}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegLuasTnh"
                rules={{ required: 'Please insert the Luas Tanah' }}
                label="Luas Tanah"
                error={errors.pegLuasTnh != null}
                helperText={errors.pegLuasTnh}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />

      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
        <Typography className={classes.title}>Maklumat Pemilik</Typography>
        <Button onClick={() => inc()}>Add</Button>
      </Box>
      <Card variant="outlined">
        <CardContent>
          {Array.from(Array(pemilikSize)).map((_, index) => {
            return <Pemilik key={index} index={index} dec={dec} />
          })}
        </CardContent>
      </Card>

      <Box p={1} />

      <Typography className={classes.title} gutterBottom>
        Media
      </Typography>
      <Card variant="outlined">
        <CardContent>
          {/* ToDo: pass file to form */}
          <Media title={'Foto'} name="foto" />

          <Box p={1} />

          <Media title={'Sketch'} name="sketch" />

          <Box p={1} />

          <Media title={'Dokumen'} name="dokumen" />
        </CardContent>
      </Card>
      
      <Box p={3} />
    </>
  )
}

export default PeganganForm
