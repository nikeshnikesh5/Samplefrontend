import { Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState} from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
const Contact = () => {
    const [email,setEmail] = useState("")
    const [name , setName] = useState("")
    const [message , setMessage] = useState("")

  return (
    <Container h="92vh">
        <VStack h="full" justifyContent={'center'} spacing="16">
            <Heading children="Contact Us"/>  
        <form style={{width:'100%'}}>
        <FormLabel htmlFor='text' children="name" />
                <Input  required  id='name' value={name}  onchange={ e => setName(e.target.value)}
                placeholder="Name"
                type={"text"}
                focusBorderColor="yellow.500"
                />
                <FormLabel htmlFor='email' children="Email Adress" />
                <Input  required  id='email' value={email}  onchange={ e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
                />
                 <Box my={'4'}> 
                <FormLabel htmlFor='text' children="Message" />
                <Textarea  required  id='password' value={message}  onchange={ e => setMessage(e.target.value)}
                placeholder="Your Message ....."
                type={"text"}
                focusBorderColor="yellow.500"
                />
              
    
         </Box>
            
            <Button my='4' colorScheme={'yellow'} type="submit">
                Submit
            </Button>
            
            <Box my="4">
                Request for a course?{" "}
                <Link to="/request">
                <Button  colorScheme={'yellow'} variant="link">
                    Click
                </Button>{" "} here
                </Link>
            </Box>
           
            </form>
        </VStack>
    </Container>
  )
}

export default Contact