import * as yup from 'yup'

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Authentication.requiredConfirmPassword')
    .min(6, 'Authentication.lengthRequired')
    .max(160, 'Authentication.lengthRequired')
    .oneOf([yup.ref(refString)], 'Authentication.passwordMismatch')
}

export const authenSchema = yup.object({
  email: yup
    .string()
    .required('Authentication.requiredEmail')
    .email('Authentication.emailInvalidate')
    .min(5, 'Authentication.lengthRequired')
    .max(160, 'Authentication.lengthRequired'),
  password: yup
    .string()
    .required('Authentication.requiredPassword')
    .min(6, 'Authentication.lengthRequired')
    .max(160, 'Authentication.lengthRequired'),
  confirm_password: handleConfirmPasswordYup('password')
})

export type AuthenSchema = yup.InferType<typeof authenSchema>
