import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email , SetEmail] = useState('')
  return (
   <Container py={"16"} h="90vh">
    <form>
        <Heading 
         children="Reset Password"
         my="16"
         textTransform={'uppercase'}
         textAlign={['center' , 'left']}
        />
        <VStack spacing={8}>
            <Input
            required
            id='email'
            value={email}
            onChange={e => SetEmail(e.target.value)}
            placeholder
            />

            <Button type="submit" w={'full'} colorScheme="yellow">
                Send Reset Link
            </Button>
        </VStack>
    </form>
   </Container>
  )
}

export default ForgetPassword