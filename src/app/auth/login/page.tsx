'use client'

import { TextInput } from '@/components/Inputs'
import { SubmitBtn } from '@/components/buttons'
import { createSessionSchema, createUserInput } from '@/lib/schema/userInput';
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {

  const { register,handleSubmit, formState: {errors}} = useForm<createUserInput>({
    resolver: zodResolver(createSessionSchema)
})

  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
        <form onSubmit={handleSubmit((data)=>console.log(data))} className="group w-full lg:w-2/5 space-y-8 rounded-lg border border-transparent px-5 py-8 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
            <h2 className="font-inter text-2xl font-bold leading-3 text-center ">Sign-in to your account</h2>
            <div className="space-y-4">
            <TextInput placeholder='Email' type='text' name='email' register={register}/>
            {errors.email && <p>{errors.email?.message}</p>}
            <TextInput placeholder='Password' type='password' name='password' register={register}/>
            {errors.password && <p>{errors.password?.message}</p>}
            </div>
            <SubmitBtn />
        </form>
    </div>
  )
}

export default Login