import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
} from '@chakra-ui/react';
import theme from './theme/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Heading>
          Cereal Management System
        </Heading>
      </Box>
    </ChakraProvider>
  );
}
