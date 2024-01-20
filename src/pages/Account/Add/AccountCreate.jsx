import React from 'react'
import { Custom_DatePicker, Custom_Input } from '../../../components/CustomComponents'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountCreateValidationSchema } from '../../../validationSchema/ValidationSchema';
import { format } from 'date-fns';
import { createAcccount } from '../../../api/Account.api';
import { useMutation } from '@tanstack/react-query';

const AccountCreate = () => {
    /* get instance for navigation to another page when success submit */
    const navigate = useNavigate();
    /* set instance for managing form */
    const {register, handleSubmit, formState:{errors}, control} = useForm({
        resolver: yupResolver(accountCreateValidationSchema),
        defaultValues: {
            first_name:'',
            last_name:'',
            birth_date:null ,
            licence_expiry_date: new Date(),  
        }
    })
    /* Handle the submit when data are valides */
    const createAccountMutation = useMutation({
        mutationFn: createAcccount,
        onSuccess: () => {
          //queryClient.invalidateQueries({ queryKey: ["actors"] });
          //setOpenModal(false);
          console.log("success on save");
        },
        onError: (error) => {
          console.log("error on save");
        },
    });
    const onSubmit = data =>{
        console.log(data)
        console.log(format(data['licence_expiry_date'], 'dd-MM-yyyy'))
        createAccountMutation.mutate({...data, licence_expiry_date : format(data['licence_expiry_date'], 'yyyy-MM-dd'), birth_date : format(data['birth_date'], 'yyyy-MM-dd')});
        //navigate('/');
    }
    /* Here our logic view start */
    return (
        <div>
            AccountCreate Form
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <Custom_Input label='first_name' placeholder='first_name' register={register} errors={errors} />
                <Custom_Input label='last_name' placeholder='last_name' register={register} errors={errors} />
                <Custom_DatePicker errors = {errors} placeholder='birth_date' name='birth_date' control={control} />
                <Custom_DatePicker errors = {errors} placeholder='licence_expiry_date' name='licence_expiry_date' control={control} />
                <button className='btn' type="submit">Creer</button>
            </form>
        </div>
    )
}

export default AccountCreate