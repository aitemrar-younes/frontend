import React from 'react'
import '/src/assets/Styles/Login.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object({
    username:yup.string().required('username est obligatoire').min(3),
    password:yup.string().required('password est obligatoire'),
})
const Custom_Input = ({label, register, errors, type='text', placeholder=''}) =>{
    return (
        <div className="input-group">
            <input {...register(label)} className={errors[label] ? 'invalid': ''} type={type} placeholder={placeholder}/>
            {errors && errors[label] && <span className="text-danger">{errors[label].message}</span>}
        </div>
    )
}
const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username:'',
            password:'',
        }
    })
    const onSubmit = data =>{
        console.log(data)
    }
  return (
    <div className='__Login__'>
        <div className="card login_card">
            <div className="card_header">
                <h2>Login Card</h2>
            </div>
            <div className="card_body">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                    <Custom_Input label='username' placeholder='username' register={register} errors={errors} />
                    <Custom_Input label='password' placeholder='password' register={register} errors={errors} type='password'/>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
            <div className="card_footer">
                <span>Bienvenus chez @me</span>
            </div>
        </div>
    </div>
  )
}

export default Login