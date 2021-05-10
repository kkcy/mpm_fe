import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MUIGrid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
  }
})

const CarianForm = () => {
  const classes = useStyles()
  const methods = useFormContext()
  const {
    formState: { errors }
  } = methods

  return (
    <>
      {/* Tarikh */}
      <Typography className={classes.title} gutterBottom>
        Pemohon
      </Typography>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              {/* ToDo Select */}
              <Input
                name="CarianHPemohonJenis"
                rules={{ required: 'Please insert the Jenis Pemohon' }}
                label="Jenis Pemohon"
                error={errors.CarianHPemohonJenis != null}
                helperText={errors.CarianHPemohonJenis}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="CarianHPemohonNama"
                rules={{ required: 'Please insert the Nama Pemohon' }}
                label="Nama Pemohon"
                error={errors.CarianHPemohonNama != null}
                helperText={errors.CarianHPemohonNama}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="CarianHPemohonTelefon"
                rules={{ required: 'Please insert the Telefon Pemohon' }}
                label="Telefon Pemohon"
                error={errors.CarianHPemohonTelefon != null}
                helperText={errors.CarianHPemohonTelefon}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="CarianHPemohonEmel"
                rules={{ required: 'Please insert the Emel Pemohon' }}
                label="Emel Pemohon"
                error={errors.CarianHPemohonEmel != null}
                helperText={errors.CarianHPemohonEmel}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />

      <Typography className={classes.title} gutterBottom>
        Alamat
      </Typography>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={6}>
              <Input
                name="CarianHPemohonAlamat1"
                rules={{ required: 'Please insert the Alamat 1' }}
                label="Alamat 1"
                error={errors.CarianHPemohonAlamat1 != null}
                helperText={errors.CarianHPemohonAlamat1}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="CarianHPemohonAlamat2"
                rules={{ required: 'Please insert the Alamat 2' }}
                label="Alamat 2"
                error={errors.CarianHPemohonAlamat2 != null}
                helperText={errors.CarianHPemohonAlamat2}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="CarianHPemohonAlamat3"
                rules={{ required: 'Please insert the Alamat 3' }}
                label="Alamat 3"
                error={errors.CarianHPemohonAlamat3 != null}
                helperText={errors.CarianHPemohonAlamat3}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="CarianHPemohonAlamat4"
                rules={{ required: 'Please insert the Alamat 4' }}
                label="Alamat 4"
                error={errors.CarianHPemohonAlamat4 != null}
                helperText={errors.CarianHPemohonAlamat4}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />

      <Typography className={classes.title} gutterBottom>
        Resit
      </Typography>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="CarianHNoResit"
                rules={{ required: 'Please insert the No Resit' }}
                label="No Resit"
                error={errors.CarianHNoResit != null}
                helperText={errors.CarianHNoResit}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>
    </>
  )
}

export default CarianForm
