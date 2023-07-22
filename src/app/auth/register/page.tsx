'use client'

import { TextInput } from '@/components/Inputs'
import { SubmitBtn } from '@/components/buttons'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import React from 'react'
import { createUserInput, createUserSchema } from '@/lib/schema/userInput'
import useAuthStore from '@/store/authStore'
import { createUser } from '@/lib/utils'
import { useRouter } from 'next/navigation';

const Register = () => {

  const router =useRouter()
  const {addUser} = useAuthStore()

  const { register,handleSubmit, formState: {errors}} = useForm<createUserInput>({
      resolver: zodResolver(createUserSchema)
  })

  const Submit = async(data: any) => {

    const {username, email, password } = data

    const userDetails = {username,email,password}

    await createUser(userDetails, addUser)
    
    router.refresh()

  }

  return (
    <div className='flex my-10 justify-center items-center min-h-[100vh]'>
        <form onSubmit={handleSubmit((data)=>Submit(data))} className="group w-full lg:w-2/5 space-y-8 rounded-lg border border-transparent px-5 py-8 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
            <h2 className="font-inter text-2xl font-bold leading-3 text-center ">Create your account</h2>
            <div className="space-y-4">
            <TextInput placeholder='Email' type='text' name='email' register={register}/>
            {errors.email && <p>{errors.email?.message}</p>}
            <TextInput placeholder='Username' type='text' name='username' register={register}/>
            {errors.username && <p>{errors.username?.message}</p>}
            <TextInput placeholder='Password' type='password' name='password' register={register}/>
            {errors.password && <p>{errors.password?.message}</p>}
            <TextInput placeholder='Re-enter Password' type='password' name='passwordConfirmation' register={register}/>
            {errors.passwordConfirmation && <p>{errors.passwordConfirmation?.message}</p>}
            </div>
            <SubmitBtn />
        </form>
    </div>
  )
}

export default Register