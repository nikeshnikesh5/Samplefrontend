import { Button, HStack, VStack,Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Heading , Text } from '@chakra-ui/react'
import React from 'react'
import "./Course.css"

const Course = ({title,id, description,creator,lectureCount,views,addToPlayListHandler}) => {
  return (
   <VStack className='course' alignItems={(["center","flex-start"])}>
   <Image src= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojdjoZYlC0jJek9LPxMP-bL13g115leRwXg&s'} boxSize="60" objectFit={'contain'} />
   <Heading
    textAlign={["center","left"]}
    maxW="200px"
    fontFamily={"sans-serif"}
    noOfLines={3} 
    children={title}
    size={'sm'}
   />
   <Text 
   noOfLines={2} 
   children={description}
    />

<HStack>
    <Text fontWeight={'bold'}
    textTransform='uppercase'
    children={'Creator'}
    />
    <Text fontWeight={'bold'}
    textTransform='uppercase'
    children={creator}
    />
</HStack>

<Heading textAlign={"center"} size="xs" children={`Lecture - ${lectureCount}`} textTransform="uppercase"/>
<Heading textAlign={"center"} size="xs" children={`Views - ${views}`} textTransform="uppercase"/>

<Stack direction={['column','row']} alignItems="center">
    <Link to={`/course/${id}`}>
    <Button  colorScheme={'yellow'}>Wathc now</Button>
   
    </Link>
    <Button variant={'ghost'} colorScheme={'yellow'} onClick={addToPlayListHandler}>Add to PlayList</Button>
</Stack>


   </VStack>
  )
}

export default Course