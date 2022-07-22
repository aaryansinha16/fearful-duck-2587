import {Box, Button, Heading, Spacer, Link, Text, Icon, IconButton, Image, Flex} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'


  
import SocialBtn from '../../Components/SocialButton';

import styles from '../logsign.module.css'

export default function Signup(){
    return (
        <Flex mt='120px' p={5} w='60vh' ml='auto' mr='auto' flexDirection='column' gap='30px'>
            <Flex flexDirection='column' >
                <Heading fontSize='4xl' color='mainText'>Sign Up to DeskTime</Heading>

                <Flex flexDir='column' gap='20px'>    
                    <FormControl mt='30px'>
                    <FormLabel>First and last name</FormLabel>
                    <Input type='text' placeholder='Type in your first and last name' mt='-10px'/>
                    </FormControl>

                    <FormControl >
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Type in your email address' mt='-10px'/>
                    </FormControl>

                    <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='Password' placeholder='Create a password' mt='-10px'/>
                    </FormControl>
                </Flex>

                <Button type='submit' fontSize='14px' fontWeight='400' bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    SIGNUP FOR FREE
                </Button>

                <Link className={styles.link} color='lightText'>I forgot my Password</Link>
                <Text>Don’t have an account yet? <Link className={styles.link} color='lightText'> Sign up here!</Link> </Text>
            </Flex>
            <Box border='1px solid gray' w='100%'>
                <SocialBtn/>
            </Box>
        </Flex>
    )
}