import React, { useState } from 'react'
import '/src/assets/Styles/Modal.scss'
import RootFrame from '../../components/layout/RootFrame'
const Modal = () => {
    const [open, setOpen] = useState(false)
  return (
    <RootFrame>
        <div className='__Modal__'>
            <button className='modal_open_button' onClick={()=>setOpen(true)}>Open modal</button>
            <div className={`modal_overlay ${open ? "open" : ""}`}>
                <div className="modal">
            <button className='modal_open_button' onClick={()=>setOpen(false)}>Open modal</button>
                </div>
            </div>
        </div>
    </RootFrame>
  )
}

export default Modal