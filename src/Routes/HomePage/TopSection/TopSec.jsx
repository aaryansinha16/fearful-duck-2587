import { Box, VStack, Flex, Spacer, Heading , Text, Input, Button, Link, AspectRatio, Center, Stack, Image} from "@chakra-ui/react";


export default function TopSec() {
  return (
    <VStack >
      <Flex w='75%' h='400px' alignItems='center'>

        <Stack w='48%' height='80%' textAlign='left'>
          <Heading color='mainText' >The ultimate all-in-one automatic time tracker</Heading>
          <Spacer/>
          <Text fontSize='lg' noOfLines={5}>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</Text>
          <Spacer/>
          <Flex gap={3}>
            <Input placeholder='Your Work Email' borderColor='' w='55%' bgColor='white' borderRadius={4}/>
            <Button
              varient="solid"
              fontSize="14px"
              p={3}
              colorScheme="green"
              background="primary"
              border='1px'
              borderColor='outline'
              fontWeight="400"
              borderRadius={4}
            >
              START FREE TRIAL
            </Button>
          </Flex>
          <Spacer/>
          <Text>
            Try free for 14 days. No credit card required.<br/>{' '}
            By signing up, you agree to our {' '}
            <Link color='teal.500' href='#'>
              Terms
            </Link>
            {' '}and {' '}
            <Link color='teal.500' href='#'>
              privacy policy
            </Link>

          </Text>
        </Stack>

        <Spacer/>

        <Box w='48%' height='90%' >

          <AspectRatio maxW='100%' ratio={16/9} marginTop='1rem'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sgmDvqlSMF4?rel=0&autoplay=1" title="YouTube video player"  allowFullScreen/>
          </AspectRatio>

        </Box>

      </Flex>

      <Flex w='75%' h='100px' justifyContent='space-between'>
        <Image src='https://desktime.com/assets/img/clients/customer-sixt-logo-white.svg' alt=''/>
        <Image src='https://desktime.com/assets/img/clients/customer-mapon-logo-white.svg' alt=''/>
        <Image src='https://desktime.com/assets/img/clients/customer-montway-logo-white.svg' alt=''/>
        <Image src='https://desktime.com/assets/img/clients/customer-onthemap-logo-white.svg' alt=''/>
        <Image src='https://desktime.com/assets/img/clients/customer-printful-logo-white.svg' alt=''/>
      </Flex>
    </VStack>
  );
}
