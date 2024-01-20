import React, { useState } from 'react'
import '/src/assets/Styles/Modal.scss'
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
const Modal = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='__Modal__'>
        <button className='modal_open_button' onClick={()=>setOpen(true)}>Open modal</button>
        <div className={`modal_overlay ${open ? "open" : ""}`}>
            <div className="modal">
                <button className='close_button' onClick={()=>setOpen(false)}><LiaSkullCrossbonesSolid size={28} /></button>
                <div className="modal_header">
                    <h3>Modal for ...</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal