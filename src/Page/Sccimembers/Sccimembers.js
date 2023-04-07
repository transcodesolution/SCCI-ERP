import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

const Sccimembers = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))  
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>First name</FormLabel>       
        <Input
          id='name'
          placeholder='name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />       
        <FormErrorMessage>
          {errors.name && errors.name.message}   
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
      id='email'
      placeholder='email'
      {...register('email', {
        required: 'This is required',
        minLength: { value: 4, message: 'Minimum length should be 4' },
      })}
      />
      <FormErrorMessage>
      {errors.email && errors.email.message}   
    </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.company}>
      <FormLabel htmlFor='company'>Company</FormLabel>
      <Input
      id='company'
      placeholder='company'
      {...register('company', {
      required: 'This is required',
      minLength: { value: 4, message: 'Minimum length should be 4' },
      })}
      />
      <FormErrorMessage>
      {errors.company && errors.company.message}   
    </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.IT}>
      <FormLabel htmlFor='IT'>IT</FormLabel>
      <Input
      id='IT'
      placeholder='IT'
      {...register('IT', {
      required: 'This is required',
      minLength: { value: 4, message: 'Minimum length should be 4' },
      })}
      />
      <FormErrorMessage>
      {errors.IT && errors.IT.message}   
    </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default Sccimembers;








