import * as yup from 'yup'

export const validationSchema = yup.object({
    username:yup.string().required('username est obligatoire').min(3),
    password:yup.string().required('password est obligatoire'),
    'date-input':yup.string().required('field required'),
    'select-input':yup.object({
        value:yup.string().required(),
    }).typeError('this is required'),
})