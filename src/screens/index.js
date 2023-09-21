import {
Container,
Text,
Link,
Flex,
Heading,
Box,
Button,
Image,
Img
} from '@chakra-ui/react';

import Layout from '../layout';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Home()
{
    return(
    <Layout>
        <Box width="80%" mx="auto">
            <Flex justifyContent="center" w="100%" py={32} textAlign="center">
                <Flex w="50%" flexDir='column'>
                    <Heading size="3xl">
                        React.js + Chakra UI Starter.
                    </Heading>
                    <Flex w="100%" mx="auto" mt={12} gap={4}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant="solid" size='lg' w="50%" fontWeight={'semibold'}>
                            Get Started
                        </Button>
                        <Button leftIcon={<ArrowForwardIcon />} colorScheme='teal' variant="outline" size='lg' w="50%" fontWeight={'semibold'}>
                            Github
                        </Button>
                    </Flex>
                </Flex>
                <Box w="50%">
                    <Img src='https://blog.dastasoft.com/assets/posts/preview/chakraui-react.webp'></Img>
                </Box>
                
            </Flex>
        </Box>
    </Layout>    
    
    )
}

export default Home;