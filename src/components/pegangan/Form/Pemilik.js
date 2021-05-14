import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Box, Button, Typography } from '@material-ui/core'
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
  },
  offset: {
    padding: '0 !important'
  }
})

const Pemilik = ({ index, dec }) => {
  const classes = useStyles()
  const methods = useFormContext()
  const {
    formState: { errors }
  } = methods

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
        <Typography className={classes.title}>Pemilik {index + 1}</Typography>
        {/* ToDo: remove by key instead of decrement by one */}
        {index > 0 && <Button onClick={() => dec()}>Remove</Button>}
      </Box>
      <Card variant="outlined">
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={6}>
              <Input
                name="pmlkNama"
                rules={{ required: 'Please insert the Nama Pemilik' }}
                label="Nama Pemilik"
                error={errors.pmlkNama != null}
                helperText={errors.pmlkNama}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pmlkBangsa"
                rules={{ required: 'Please insert the Bangsa Pemilik' }}
                label="Bangsa Pemilik"
                error={errors.pmlkBangsa != null}
                helperText={errors.pmlkBangsa}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pmlkNoKPB"
                rules={{ required: 'Please insert the KPB' }}
                label="KPB / No Syarikat"
                error={errors.pepmlkNoKPB != null}
                helperText={errors.pmlkNoKPB}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={false} md={6} className={classes.offset} />

            <MUIGrid item xs={12}>
              <Input
                name="pmlkAlamatPos1"
                rules={{ required: 'Please insert the Alamat 1' }}
                label="Alamat 1"
                error={errors.pmlkAlamatPos1 != null}
                helperText={errors.pmlkAlamatPos1}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12}>
              <Input
                name="pmlkAlamatPos2"
                label="Alamat 2"
                error={errors.pmlkAlamatPos2 != null}
                helperText={errors.pmlkAlamatPos2}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12}>
              <Input
                name="pmlkAlamatPos3"
                label="Alamat 3"
                error={errors.pmlkAlamatPos3 != null}
                helperText={errors.pmlkAlamatPos3}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12}>
              <Input
                name="pmlkAlamatPos4"
                label="Alamat 4"
                error={errors.pmlkAlamatPos4 != null}
                helperText={errors.pmlkAlamatPos4}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pmlkNoTel"
                rules={{ required: 'Please insert the No Telefon' }}
                label="No Telefon"
                error={errors.pmlkNoTel != null}
                helperText={errors.pmlkNoTel}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pmlkNoBimbit"
                rules={{ required: 'Please insert the No Bimbit' }}
                label="No Bimbit"
                error={errors.pmlkNoBimbit != null}
                helperText={errors.pmlkNoBimbit}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12}>
              <Input
                name="pmlkEmel"
                rules={{ required: 'Please insert the Emel' }}
                label="Emel"
                error={errors.pmlkEmel != null}
                helperText={errors.pmlkEmel}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegPmlkNo"
                rules={{ required: 'Please insert the No Pemilik' }}
                label="No Pemilik"
                error={errors.pegPmlkNo != null}
                helperText={errors.pegPmlkNo}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={6}>
              <Input
                name="pegPmlkShare"
                rules={{ required: 'Please insert the share' }}
                label="Share (%)"
                error={errors.pegPmlkShare != null}
                helperText={errors.pegPmlkShare}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />
    </>
  )
}

export default Pemilik
