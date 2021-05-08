import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import MaterialInput from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

const Input = ({ name, rules, label, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState }) => {
        return (
          <>
            {label && <InputLabel for={name}>{label}</InputLabel>}
            <MaterialInput {...field} {...rest} />
            {formState.errors[name] && <FormHelperText error>{formState.errors[name]?.message}</FormHelperText>}
          </>
        )
      }}
    />
  )
}

export default Input
