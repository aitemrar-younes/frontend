import { Controller } from 'react-hook-form'
/* import for date field and date format */
import DatePicker from "react-datepicker";
/* import the select field */
import Select from 'react-select'

export const Custom_Input = ({label, register, errors = null, type='text', placeholder=''}) =>{
    return (
        <div className="input-group">
            <input {...register(label)} className={`input ${errors[label] ? 'invalid': ''}`} type={type} placeholder={placeholder}/>
            {errors && errors[label] && <span className="text-danger">{errors[label].message}</span>}
        </div>
    )
}

export const Custom_DatePicker = ({errors = null, placeholder='', name, control}) =>{
    return (
        <div className="input-group">
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <DatePicker
                        placeholderText={placeholder}
                        className={`input ${errors['date-input'] ? 'invalid': ''}`}
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                    />
                )}
            />
            {errors && errors["date-input"] && <span className="text-danger">{errors["date-input"].message}</span>}
        </div>
    )
}
export const Custom_Select = ({errors = null, placeholder='', name, control, options = []}) =>{
    return (
        <div className="input-group">
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    
                    <Select 
                        {...field}
                        options={options}
                    />
                )}
            />
            {errors && errors["select-input"] && <span className="text-danger">{errors["select-input"].message}</span>}
        </div>
    )
}