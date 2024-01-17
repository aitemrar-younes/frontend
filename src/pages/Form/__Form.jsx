import React from 'react'
import RootFrame from '../../components/layout/RootFrame'
import '/src/assets/Styles/Custom_form.scss'
const Custom_Form = () => {
  return (
    <RootFrame>
        <div className='__Form__'>
            Forms ...
            <br />
            <form action="">
              <div className="input-group">
                {/* <label htmlFor="">Label</label> */}
                <input type="text" />
              </div>
              <div className="input-group">
                {/* <label htmlFor="">Date</label> */}
                {/* <input type="date" /> */}
              </div>
              <br />
              <button className='btn' type="submit">Validate</button>
            </form>
        </div>
    </RootFrame>
  )
}

export default Custom_Form