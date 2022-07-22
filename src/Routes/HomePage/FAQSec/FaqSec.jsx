import { Box, Flex, Heading } from "@chakra-ui/react";
import AccordionFaq from "./AccordionFaq";

export default function FaqSec(){
    return (
        <Flex flexDirection='column' w='75%' border='1px solid blue' m='auto'>
            <Box>
                <Heading color='mainText'>Things worth knowing about using a time tracker</Heading>
            </Box>
            <Box>
                <AccordionFaq/>
            </Box>
        </Flex>
    )
}