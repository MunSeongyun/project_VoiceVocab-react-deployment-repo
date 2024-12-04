import React from 'react'

const Login = () => {


    const onClick = () => {
        window.location.href=`${import.meta.env.VITE_BACKEND_URL}/auth/login`
    }

  return (
    <div>
      <button onClick={onClick}>로그인</button>
    </div>
  )
}

export default Login
