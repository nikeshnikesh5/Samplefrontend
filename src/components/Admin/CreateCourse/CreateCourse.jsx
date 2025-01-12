import {Button,Image, Container, Grid, Heading, Input, Select, VStack } from '@chakra-ui/react'

import React, { useState } from 'react'
import SideBar from '../SideBar'
import cursor from "../../../assets/images/cursor.png"
import { fileUploadCss } from '../../Auth/Registration'
const CreateCourse = () => {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [createdBy , setCreatedBy] = useState('');
  const [category , setCategory] = useState('');
  const [image , setImage] = useState('');
  const [imagePrev , setImagePrev] = useState('');
 

 const categories = [
  'Web development',
  'Artificial Intellegence',
  'Data Structure & Algorithm',
  'App Development',
  'Data Science',
  'Game development',
 ];


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
  <Grid
  css={{
    cursor:`url(${cursor}),default`,

  }}
  minH={'100vh'}
  templateColumns={['1fr','5fr 1fr']}
  >
    <Container py="16">
       <form >
       <Heading textTransform={"uppercase"} children="Create Course" my="16"
       textAlign={['center','left']}
       />
       <VStack m="auto" spacing={'8'}>
       <Input
               id="name"
               value={title}
               onChange={e => setTitle(e.target.value)}
               placeholder="Title"
               type={'text'}
               focusBorderColor="purple.300"
             />
 
 <Input
               id="description"
               value={description}
               onChange={e => setDescription(e.target.value)}
               placeholder="Description"
               type={'text'}
               focusBorderColor="purple.300"
             />

<Input
               id="name"
               value={createdBy}
               onChange={e => setCreatedBy(e.target.value)}
               placeholder="Creator Name"
               type={'text'}
               focusBorderColor="purple.300"
             />

          <Select focusBorderColor="purple.300" value={category}
          onChange={e => setCategory(e.target.value)}
          >
             <option value="">Category</option>
            {categories.map(item =>(
              <option key={item} value={item}>
                {item}
                </option>
            ))}
         
          </Select>
         <Input
         accept='image/*'
         required
         id='chooseAvatar'
         type={'file'}
         focusBorderColor='purple.300'
         css={{
          '&::file-selector-button':{
            ...fileUploadCss,
            color:'purple'}
         }}
         onChange={changeImageHandler}
         />

         {imagePrev &&(
          <Image src={imagePrev}  boxSize="64" objectFit={'contain'}/>
         )}
         <Button w="full" colorScheme={'purple'} type="submit">
         Create
         </Button>
        </VStack>
       </form>
     
    </Container>
  <SideBar/>
  </Grid>
  )
}

export default CreateCourse