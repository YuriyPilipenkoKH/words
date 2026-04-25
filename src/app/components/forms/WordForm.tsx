'use client'

import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { wordSchema, wordSchemaType } from '@/app/models/wordSchema'
import { Input } from '../ui/Field'
import { ImSpinner4 } from "react-icons/im";

const WordForm = () => {
  const {
    register, 
    handleSubmit,
    formState,
    
    reset,
  } = useForm<wordSchemaType   >({
    defaultValues: {  
      text:  '',
      meaning: '',
      spelling: '',
       },
        mode:'onBlur',
        resolver: zodResolver(wordSchema), })
    const {
      errors,
      isDirty,
      isValid,
      isSubmitting,
    } = formState
    const onSubmit = async (data: wordSchemaType) => {
      try {
        const res = await axios.post("/api/send-email", data);
        console.log("Email sent:", res.data);
      } catch (error) {
        console.error("Failed to send email:", error);
      }
      toast.success('email has been sent')
      reset();
    }


  return (
    <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl max-w-[600px]'
    autoComplete="off" 
    noValidate
     onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-2xl text-accent '>
        Add new word
      </h3>
      <div className='grid grid-cols-1  gap-6 '>
    
          <Input
           {...register('text',)}
          type='text' placeholder='word'
          disabled={isSubmitting}/>
           {errors.text && <div className='text-accent'>{errors.text?.message}</div>}

          <Input
          {...register('meaning',)}
          type='meaning' placeholder='meaning'
          disabled={isSubmitting}/>
           {errors.meaning && <div className='text-accent'>{errors.meaning?.message}</div>}

          <Input
          {...register('spelling',)}
           type='spelling' placeholder='spelling'
           disabled={isSubmitting}/>
            {errors.spelling && <div className='text-accent'>{errors.spelling?.message}</div>}

      </div>
      <Button 
      isDisabled ={!isDirty || !isValid || isSubmitting}
      type='submit' variant={'custom'}>
        { isSubmitting &&  <ImSpinner4 className='LuRefreshCw size-6 animate-spin' />}  
        { isSubmitting  ? "Sending.." :  'Submit'}
      </Button>
    </form>
  )
}

export default WordForm