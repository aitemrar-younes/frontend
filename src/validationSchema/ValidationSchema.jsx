import * as yup from 'yup'

export const validationSchema = yup.object({
    username:yup.string().required('username est obligatoire').min(3),
    password:yup.string().required('password est obligatoire'),
    'date-input':yup.date().required('field required'),
    'select-input':yup.object({
        value:yup.string().required(),
    }),
})
export const accountCreateValidationSchema = yup.object({
    first_name : yup.string().required('"First name" est obligatoire'),
    last_name : yup.string().required('"Last name" est obligatoire'),
    birth_date : yup.date().required('"Birthdate" est obligatoire'),
    licence_expiry_date : yup.date().required('"Licence expiry date" est obligatoire'),
})