'use client'

import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

const SignIn = () => {
  return (
    <GoogleLogin onSuccess={(res)=> console.log(res)} onError={()=> console.log('error')}/>
  )
}

export default SignIn