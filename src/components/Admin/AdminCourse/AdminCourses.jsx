import React from 'react'
import {Button,Image,Table,Th,Td,Tbody,HStack, Container, Grid, Heading, Input, Select, VStack, Box, TableContainer, TableCaption, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import cursor from "../../../assets/images/cursor.png"

import SideBar from '../SideBar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'



const AdminCourses = () => {
  

  const {isOpen ,onClose,onOpen} = useDisclosure();


  const courses = [{
    _id:"2554632754235",
    title:"React Course",
    category:"Web development",
    poster:{
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojdjoZYlC0jJek9LPxMP-bL13g115leRwXg&s',
    },
    createdBy:"nand",
    views: 123,
    numOfVideos: 12,
  }]



  const  courseDetailHandler = () => {
    onOpen();
    console.log("courseDetailHandler","fh");
  } 
  
  const deleteButtonHandler = (courseId,lectureId,description,video) => {
  
    console.log("updateButtonHandle");
  }


  const addLectureHandler=(e,courseId,title)=>{
    console.log("Lecture Handler");
  }
  
  return (
   <Grid css={{
    cursor:`url(${cursor}), default`,
   }}
   minH={'100vh'}
   templateColumns={['1fr','5fr 1fr']}
   >
    <Box p={["0","16"]} overflowX={"auto"}>
     
     <Heading
             textTransform={'uppercase'}
             children="All Course"
             textAlign={['center','left']}
     />
     <TableContainer w={['100vw' ,'full']}>
         <Table variant={'simple'} size="lg">
          <TableCaption>All Course  available users in the databases</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Poster</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Creator</Th>
              <Th isNumeric>Views</Th>
              <Th isNumeric>Lectures</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
           <Tbody>
            {
              courses.map((item)=>(
                <Row key={item._id}  courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} item={item}/>
              ))
            }
           
           </Tbody>
         </Table>
     </TableContainer>
     <CourseModal  isOpen={isOpen} onClose={onClose} deleteButtonHandler={deleteButtonHandler} id={courses.id}
      addLectureHandler={addLectureHandler}
     />
    </Box>
  <SideBar/>
   </Grid>
  )
}

export default AdminCourses


function Row({item,courseDetailHandler,deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
     <HStack justifyContent={"flex-end"}>
      <Button variant={"outline"} onClick={()=>courseDetailHandler(item._id)} color="purple.500">
        View Lecture
      </Button>
      <Button onClick={()=> deleteButtonHandler(item._id)} color={'purple.600'}>
      <RiDeleteBin7Fill/>
      </Button>
     </HStack>
      </Td>
    </Tr>
  )
}