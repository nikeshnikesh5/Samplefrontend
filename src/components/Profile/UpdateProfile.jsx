import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')

  return (
    <Container minH={'90vh'} py="16">
        <form>
            <Heading
            textTransform={'uppercase'}
            children="Update Profile"
            my="16"
            textAlign={['center','left']}
            />
            <VStack spacing={"8"}>
             <Input
               id="name"
               value={name}
               onChange={e => setName(e.target.value)}
               placeholder="Name"
               type={'text'}
               focusBorderColor="yellow.500"
             />



<Input
               id="name"
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="Email address"
               type={'email'}
               focusBorderColor="yellow.500"
             />

{/* <Input
               required
               id="password"
               value={newPassword}
               onChange={e => setNewPassword(e.target.value)}
               placeholder="Enter the New Password"
               type={'password'}
               focusBorderColor="yellow.500"
             /> */}

          <Button w="full" colorScheme='yellow' type='submit'>
            Update
            </Button>

            </VStack>
        </form>
    </Container>
  )
}

export default UpdateProfile