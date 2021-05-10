import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Box, Typography, Button } from '@material-ui/core'
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

const PeganganFilterForm = ({ setFilters, toggle }) => {
  const classes = useStyles()
  const methods = useForm()
  const {
    handleSubmit,
    setError,
    formState: { errors }
  } = methods

  const onSubmit = async (data) => {
    try {
      toggle(false)
      setFilters([{}])
    } catch (error) {
      console.log(error.response)
      setError('responseError', {
        type: 'manual',
        message: 'Failed to login'
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Filter Pegangan</Typography>
          <Button variant="contained" color="secondary" elevation={0} type="submit">
            Confirm
          </Button>
        </Box>
        <Box p={1} />
        <Box>
          {/* Pegangan */}
          <Typography className={classes.title} gutterBottom>
            Pegangan
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <MUIGrid container spacing={3}>
                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegNoAkaun"
                    label="No Akaun Kewangan"
                    error={errors.PegNoAkaun != null}
                    helperText={errors.PegNoAkaun}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegAUID"
                    label="AUID Pegangan"
                    error={errors.PegAUID != null}
                    helperText={errors.PegAUID}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegStatus"
                    label="Status Pegangan"
                    error={errors.PegStatus != null}
                    helperText={errors.PegStatus}
                    variant="outlined"
                  />
                </MUIGrid>
              </MUIGrid>
            </CardContent>
          </Card>

          <Box p={1} />

          {/* Kawasan */}
          <Typography className={classes.title} gutterBottom>
            Kawasan
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <MUIGrid container spacing={3}>
                <MUIGrid item xs={12} md={6}>
                  {/* ToDo Select */}
                  <Input
                    name="Negeri"
                    label="Negeri"
                    error={errors.Negeri != null}
                    helperText={errors.Negeri}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="Mukim"
                    label="Mukim"
                    error={errors.Mukim != null}
                    helperText={errors.Mukim}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="Daerah"
                    label="Daerah"
                    error={errors.Daerah != null}
                    helperText={errors.Daerah}
                    variant="outlined"
                  />
                </MUIGrid>
              </MUIGrid>
            </CardContent>
          </Card>

          <Box p={1} />

          {/* Tarikh */}
          <Typography className={classes.title} gutterBottom>
            Tarikh
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <MUIGrid container spacing={3}>
                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegTkhOC"
                    label="Tarikh O.C."
                    error={errors.PegTkhOC != null}
                    helperText={errors.PegTkhOC}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegTkhKuatKuasa"
                    label="Tarikh Kuat Kuasa"
                    error={errors.PegTkhKuatKuasa != null}
                    helperText={errors.PegTkhKuatKuasa}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegTkhPNL"
                    label="Tarikh Penilaian"
                    error={errors.PegTkhPNL != null}
                    helperText={errors.PegTkhPNL}
                    variant="outlined"
                  />
                </MUIGrid>

                <MUIGrid item xs={12} md={6}>
                  <Input
                    name="PegNTahunB"
                    label="Nilai Tahunan Baru Pegangan"
                    error={errors.PegNTahunB != null}
                    helperText={errors.PegNTahunB}
                    variant="outlined"
                  />
                </MUIGrid>
              </MUIGrid>
            </CardContent>
          </Card>
        </Box>
      </form>
    </FormProvider>
  )
}

export default PeganganFilterForm
