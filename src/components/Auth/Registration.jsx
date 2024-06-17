import { Avatar, Container, FormLabel, Heading, Input, VStack, background, color } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'


export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColour:'white',
}

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}

const Registration = () => {
    
    const [email,setEmail] = useState("")
    const [name , setName] = useState('')
    const [password,setPassword] = useState("")
    const [imagePrev,setImagePrev] = useState("")
    const [image , setImage] = useState("")


  const changeImageHandler = e =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        setImagePrev(reader.result);
        setImage(file);
    }
  }


  return (
    <Container h={"95vh"}>
        
    <VStack h={"full"} justifyContent='center' spacing={'16'}>
    <Heading textTransform={'uppercase'} children={'Registration'} />
  
    <form style={{width:'100%'}}>
   <Box my="4" display={'flex'} justifyContent={'center'}>
   <Avatar src={imagePrev} size={'2xl'} />
   </Box>
    <FormLabel htmlFor='text' children="Name" />
            <Input  required  id='name' value={name}  onchange={ e => setName(e.target.value)}
            placeholder="name"
            type={"text"}
            focusBorderColor="yellow.500"
            />

            <FormLabel htmlFor='email' children="Email Adress" />
            <Input  required  id='email' value={email}  onchange={ e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type={"text"}
            focusBorderColor="yellow.500"
            />
             <Box my={'4'}>
            <FormLabel htmlFor='password' children="PassWord" />
            <Input  required  id='password' value={password}  onchange={ e => setPassword(e.target.value)}
            placeholder="abc@gmail.com"
            type={"email"}
            focusBorderColor="yellow.500"
            />
 </Box>
 <Box my={'4'}>
            <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
            <Input 
            accept='image/*'
             required 
              id='chooseAvatar' 
              type={"file"}
            focusBorderColor="yellow.500"
            css={fileUploadStyle}
            onChange={changeImageHandler}
            />
 </Box>

            <Box  my={'4'}>
               <Link to="/forgetpassword">
                <Button fontSize={'sm'} variant="link" >
                    Forget Password ?
                </Button>
        </Link>
       
        </Box>
        <Button my='4' colorScheme={'yellow'} type="submit">
            Login
        </Button>
       <Box my="4">
       Already SignUp? <Link to="/login">
        <Button colorScheme={"yellow"} variant="link">
            Login
        </Button>{'  '}
        here
        </Link>
       </Box>
        </form>
    
     
    </VStack>
 
   

    

    

</Container>
  )
}

export default Registration