import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import MaterialInput from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    // margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch'
  }
}))

const InputStyled = ({ variant, ...props }) => {
  if (variant === 'outlined') {
    return <OutlinedInput {...props} />
  }

  return <MaterialInput {...props} />
}

const Input = ({ name, rules, label, ...rest }) => {
  const { control } = useFormContext()
  const classes = useStyles()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState }) => {
        return (
          <FormControl fullWidth className={classes.margin} variant="outlined">
            {label && <InputLabel for={name}>{label}</InputLabel>}
            <InputStyled {...field} {...rest} labelWidth={300} />
            {formState.errors[name] && (
              <FormHelperText error>{formState.errors[name]?.message}</FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}

export default Input
