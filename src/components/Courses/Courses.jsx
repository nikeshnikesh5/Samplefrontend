import { Container, Heading, Input,HStack , Stack } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Course from "./Course";

const Courses = () => {
    const [keyboard , setKeyword]= useState()
    const [categories1 , setCategory] = useState()
    const categories =[
        "Web development",
        "Artificial Intellegence",
        "Game Development",
    ]

    const addToPlayListHandler = ()=>{
        console.log("sd")
    }
  return (
  <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
  <Heading children="All Course"/>

  <Input
  value={keyboard}
  onChange={e => setKeyword(e.target.value)}
  placeholder="Search a course..."
  type={'text'}
  focusBorderColor="yellow.500"
  />
<HStack overflow={"auto"} paddingY="8" css={{'&::-webkit-scrollbar':{
    display:'none',

}}}>
    {
        categories.map((item,index)=>(
            <Button minW={'60'} key={index} onClick={()=> setCategory(item)}  >
            <Text children={item} />
        </Button>
        ))
    }
   
</HStack>

<Stack
direction={['column','row']}
flexWrap="wrap"
justifyContent={['flex-start','space-evenly']}
alignItems={['center','flex-start']}
>
 <Course
 title={"Sample"}
 description={"Sample"}
 views={23}
 imageSrc={"Sample"}
 id={"Sample"}
 creator={"Sample"}
 lectureCount={12}
 addToPlayListHandler={addToPlayListHandler}
 />
</Stack>

  </Container>
  )
}

export default Courses