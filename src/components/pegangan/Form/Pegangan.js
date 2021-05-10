import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Box, FormHelperText, Typography } from '@material-ui/core'
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

const PeganganForm = () => {
  const classes = useStyles()
  const methods = useFormContext()
  const {
    formState: { errors }
  } = methods

  return (
    <>
      {/* Pegangan */}
      <Typography className={classes.title} gutterBottom>
        Pegangan
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegNoAkaun"
                rules={{ required: 'Please insert the No Akaun Kewangan' }}
                label="No Akaun Kewangan"
                error={errors.PegNoAkaun != null}
                helperText={errors.PegNoAkaun}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegAUID"
                rules={{ required: 'Please insert the AUID Pegangan' }}
                label="AUID Pegangan"
                error={errors.PegAUID != null}
                helperText={errors.PegAUID}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegStatus"
                rules={{ required: 'Please insert the Status Pegangan' }}
                label="Status Pegangan"
                error={errors.PegStatus != null}
                helperText={errors.PegStatus}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegPelan"
                rules={{ required: 'Please insert the Pelan Pegangan' }}
                label="Pelan Pegangan"
                error={errors.PegPelan != null}
                helperText={errors.PegPelan}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>

          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegNoLot"
                rules={{ required: 'Please insert the No Lot Pegangan' }}
                label="No Lot Pegangan"
                error={errors.PegNoLot != null}
                helperText={errors.PegNoLot}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegBilLot"
                rules={{ required: 'Please insert the Bilangan Lot Pegangan' }}
                label="Bilangan Lot Pegangan"
                error={errors.PegBilLot != null}
                helperText={errors.PegBilLot}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>

          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegNoMPT"
                rules={{ required: 'Please insert the No MPT' }}
                label="No MPT"
                error={errors.PegNoMPT != null}
                helperText={errors.PegNoMPT}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>

          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegKadarB"
                rules={{ required: 'Please insert the Kadar Baru Pegangan' }}
                label="Kadar Baru Pegangan"
                error={errors.PegKadarB != null}
                helperText={errors.PegKadarB}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegCukaiB"
                rules={{ required: 'Please insert the Cukai Baru Pegangan' }}
                label="Cukai Baru Pegangan"
                error={errors.PegCukaiB != null}
                helperText={errors.PegCukaiB}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>

          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegLuasBgn"
                rules={{ required: 'Please insert the Luas Bangunan' }}
                label="Luas Bangunan"
                error={errors.PegLuasBgn != null}
                helperText={errors.PegLuasBgn}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegLuasTnh"
                rules={{ required: 'Please insert the Luas Tanah' }}
                label="Luas Tanah"
                error={errors.PegLuasTnh != null}
                helperText={errors.PegLuasTnh}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegBilPK"
                rules={{ required: 'Please insert the Bilangan Petak' }}
                label="Bilangan Petak"
                error={errors.PegBilPK != null}
                helperText={errors.PegBilPK}
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
            <MUIGrid item xs={12} md={3}>
              <Input
                name="Negeri"
                rules={{ required: 'Please insert the Negeri' }}
                label="Negeri"
                error={errors.Negeri != null}
                helperText={errors.Negeri}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="Mukim"
                rules={{ required: 'Please insert the Mukim' }}
                label="Mukim"
                error={errors.Mukim != null}
                helperText={errors.Mukim}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="Daerah"
                rules={{ required: 'Please insert the Daerah' }}
                label="Daerah"
                error={errors.Daerah != null}
                helperText={errors.Daerah}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="Seksyen"
                rules={{ required: 'Please insert the Seksyen' }}
                label="Seksyen"
                error={errors.Seksyen != null}
                helperText={errors.Seksyen}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>

          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegNoRumah"
                rules={{ required: 'Please insert the No Rumah' }}
                label="No Rumah"
                error={errors.PegNoRumah != null}
                helperText={errors.PegNoRumah}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegTempat"
                rules={{ required: 'Please insert the Tempat' }}
                label="Tempat"
                error={errors.PegTempat != null}
                helperText={errors.PegTempat}
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
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegTkhOC"
                rules={{ required: 'Please insert the Tarikh O.C.' }}
                label="Tarikh O.C."
                error={errors.PegTkhOC != null}
                helperText={errors.PegTkhOC}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegTkhKuatKuasa"
                rules={{ required: 'Please insert the Tarikh Kuat Kuasa' }}
                label="Tarikh Kuat Kuasa"
                error={errors.PegTkhKuatKuasa != null}
                helperText={errors.PegTkhKuatKuasa}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegTkhPNL"
                rules={{ required: 'Please insert the Tarikh Penilaian' }}
                label="Tarikh Penilaian"
                error={errors.PegTkhPNL != null}
                helperText={errors.PegTkhPNL}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegNTahunB"
                rules={{ required: 'Please insert the Nilai Tahunan Baru Pegangan' }}
                label="Nilai Tahunan Baru Pegangan"
                error={errors.PegNTahunB != null}
                helperText={errors.PegNTahunB}
                variant="outlined"
              />
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>

      <Box p={1} />

      {/* Rujukan */}
      <Typography className={classes.title} gutterBottom>
        Rujukan
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <MUIGrid container spacing={3}>
            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegRjkFail"
                rules={{ required: 'Please insert theRujukan Fail Rujukan Fail' }}
                label="Rujukan Fail"
                error={errors.PegRjkFail != null}
                helperText={errors.PegRjkFail}
                variant="outlined"
              />
            </MUIGrid>

            <MUIGrid item xs={12} md={3}>
              <Input
                name="PegRjkMMK"
                rules={{ required: 'Please insert the Rujukan MMK' }}
                label="Rujukan MMK"
                error={errors.PegRjkMMK != null}
                helperText={errors.PegRjkMMK}
                variant="outlined"
              />

              {errors.responseError && (
                <FormHelperText error>{errors.responseError?.message}</FormHelperText>
              )}
            </MUIGrid>
          </MUIGrid>
        </CardContent>
      </Card>
    </>
  )
}

export default PeganganForm
