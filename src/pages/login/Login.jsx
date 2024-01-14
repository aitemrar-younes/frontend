import React from 'react'
import '/src/assets/Styles/Login.scss'
const Login = () => {
  return (
    <div className='__Login__'>
        <div className="card login_card">
            <div className="card_header">
                <h2>Login Card</h2>
            </div>
            <div className="card_body">
                <form action="">
                    <div className="input-group">
                        <input className='invalid' type="text" placeholder='username'/>
                        <span className="text-danger">Is required</span>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='password'/>
                    </div>
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