import { Avatar, Button, Container, HStack, Heading,  Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import Founder from './Founder'
import VideoPlayes from './VideoPlayes'
import { RiSecurePaymentFill } from 'react-icons/ri'
import TandC from './TandC'
import data from '../../assets/docs/termsAndCondition'



const About = () => {

  return (
  <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
  <Heading children="About Us"  textAlign={['center','left']} />
 <Founder/>
 <Stack m="8" direction={['column','row']} alignItems='center'>
    <Text fontFamily={'cursive'} m="8" textAlign={['center','left']}>
        We are a vidoe strammer platr form
    </Text>

    <Link to="/subscribe">
    <Button variant={'ghost'} colorScheme='yellow'>
       Subscribe   
    </Button>
    </Link>


 </Stack>

 <VideoPlayes/>
<TandC termsAndCondition={data} />
 <HStack my="4" p="4">
    <RiSecurePaymentFill />
    <Heading size={'xs'} textTransform='uppercase' children={"Payment is secure by RazorPay"} />
 </HStack>
  </Container>
  )
}

export default About