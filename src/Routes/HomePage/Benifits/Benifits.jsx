import { Box, Flex , Heading, Text, Image, Grid, GridItem} from "@chakra-ui/react";

export default function Benifits(){
    return (
        <Flex width='75%' height='auto' border='1px solid blue' m='auto' justifyContent='space-between'>

            <Box width='60%'  border='1px solid green'>
                <Box textAlign='left'>
                    <Heading color='mainText'>Use time tracking software to boost productivity by 30%</Heading>
                    <Text color='lightText'>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</Text>
                </Box>

                <Grid templateColumns='repeat(2,1fr)' gap={6} placeItems='center' border='1px solid red'>
                    <GridItem w='100%' h='100px' border='1px solid blue'></GridItem>
                    <GridItem w='100%' h='100px' border='1px solid blue'></GridItem>
                    <GridItem w='100%' h='100px' border='1px solid blue'></GridItem>
                    <GridItem w='100%' h='100px' border='1px solid blue'></GridItem>
                </Grid>

            </Box>

            <Box width='30%' border='1px solid green'>
                <Image src="https://desktime.com/assets/img/new-homepage/boost-productivity/boost-productivity@2x.webp"/>
            </Box>

        </Flex>
    )
}