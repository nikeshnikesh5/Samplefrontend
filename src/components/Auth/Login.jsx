import { Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <Container h={"95vh"}>
        
        <VStack h={"full"} justifyContent='center' spacing={'16'}>
        <Heading children={'Welcome to CourseBulder'} />
      
        <form style={{width:'100%'}}>
                <FormLabel htmlFor='email' children="Email Adress" />
                <Input  required  id='email' value={email}  onchange={ e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
                />
                 <Box my={'4'}>
                <FormLabel htmlFor='password' children="PassWord" />
                <Input  required  id='password' value={password}  onchange={ e => setPassword(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
                />
                <Box  my={'4'}>
                   <Link to="/forgetpassword">
                    <Button fontSize={'sm'} variant="link" >
                        Forget Password ?
                    </Button>
            </Link>
            </Box>
            </Box>
            <Button my='4' colorScheme={'yellow'} type="submit">
                Login
            </Button>
           <Box my="4">
            New User? <Link to="/register">
            <Button colorScheme={"yellow"} variant="link">
                SignUp
            </Button>{'  '}
            here
            </Link>
           </Box>
            </form>
        
         
        </VStack>
     
       

        
   
        

    </Container>
  )
}

export default Login