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

export default function Login(){
    return (
        <Flex mt='150px' p={5} w='50vh' ml='auto' mr='auto' flexDirection='column' gap='30px'>
            <Flex flexDirection='column'>
                <Heading color='mainText'>Log in to DeskTime</Heading>

                <FormControl mt='30px' >
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Type in your Email address' mt='-10px'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='Password' placeholder='Type in your Password' mt='-10px'/>
                </FormControl>

                <Button type='submit' bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    Login
                </Button>

                <Link className={styles.link} color='lightText' mt='30px'>I forgot my Password</Link>
                <Text mt='10px'>Don’t have an account yet? <Link className={styles.link} color='lightText'> Sign up here!</Link> </Text>
            </Flex>
            <Box border='1px solid gray' w='100%'>
                <SocialBtn/>
            </Box>
        </Flex>
    )
}