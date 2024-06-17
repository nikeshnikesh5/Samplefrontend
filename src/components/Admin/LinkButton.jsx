import { Button,  VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import {RiDashboardFill} from 'react-icons/ri'


function LinkButton({url,Icon,text,active}){
 
    return(
    <Link to={`/admin/${url}`}>
    <Button fontSize={'larger'} variant="ghost" colorScheme={active ?"purple":""}>
     <Icon style={{ margin:'4px'}} />
    {text}
    </Button>
    </Link>
  )
}
export  default LinkButton