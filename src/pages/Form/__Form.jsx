import React, { useState } from 'react'
import '/src/assets/Styles/Custom_form.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
const Custom_Form = () => {
  console.log('success')
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="__Form__">
      Forms ...
      <br />
      <form action="">
        <div className="input-group">
          {/* <label htmlFor="">Label</label> */}
          <input className='input' type="text" />
        </div>
        <div className="input-group">
          {/* <label htmlFor="">Date</label> */}
          {/* <input type="date" /> */}
          <DatePicker
            className="input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="input-group">
          <Select options={options} />
        </div>
        <br />
        <button className="btn" type="submit">
          Validate
        </button>
      </form>
    </div>
  );
}

export default Custom_Form