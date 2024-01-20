/* default import & css styling */
import React from 'react'
import '/src/assets/Styles/Login.scss'
/* import a custom component for input field */
import { Custom_Input, Custom_DatePicker, Custom_Select } from '/src/components/CustomComponents.jsx';
/* import for validation */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '/src/validationSchema/ValidationSchema.jsx';
/* import for navigation */
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

/* start */
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
                        <Custom_DatePicker errors = {errors} placeholder='Date field placeholder' name='date-input' control={control} />
                        <Custom_Select errors = {errors} name='select-input' control={control} options={options}/>
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