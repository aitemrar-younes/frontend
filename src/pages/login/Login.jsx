import React, { useState } from 'react'
import '/src/assets/Styles/Login.scss'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

const validationSchema = yup.object({
    username:yup.string().required('username est obligatoire').min(3),
    password:yup.string().required('password est obligatoire'),
    'date-input':yup.string().required(),
    'select-input':yup.object({
        value:yup.string().required(),
    }),
})
const Custom_Input = ({label, register, errors, type='text', placeholder=''}) =>{
    return (
        <div className="input-group">
            <input {...register(label)} className={`input ${errors[label] ? 'invalid': ''}`} type={type} placeholder={placeholder}/>
            {errors && errors[label] && <span className="text-danger">{errors[label].message}</span>}
        </div>
    )
}
const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}, control} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username:'',
            password:'',
            'date-input':'',
            'select-input':""
        }
    })
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const onSubmit = data =>{
        console.log(data)
        console.log(format(data['date-input'], 'dd-MM-yyyy'))
        navigate('/');
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
                    <div className="input-group">
                        <Controller
                            control={control}
                            name='date-input'
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText='Select date'
                                    className={`input ${errors['date-input'] ? 'invalid': ''}`}
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                />
                            )}
                        />
                        {errors && errors["date-input"] && <span className="text-danger">{errors["date-input"].message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            control={control}
                            name='select-input'
                            render={({ field }) => (
                                
                                <Select 
                                    {...field}
                                    options={options} 
                                    defaultValue={null}
                                />
                            )}
                        />
                        {errors && errors["select-input"] && <span className="text-danger">{errors["select-input"].message}</span>}
                    </div>
                    <button className='btn' type="submit">Se connecter</button>
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