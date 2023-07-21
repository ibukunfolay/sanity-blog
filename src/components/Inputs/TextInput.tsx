import React from 'react'

const TextInput = ({placeholder, type, name, register }: {placeholder: string, type: string, name: string, register:any}) => {


    return (
          <input type={type} placeholder={placeholder}  {...register(name)} className='w-full h-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 px-3 outline-none'/>
    )
  }

export default TextInput