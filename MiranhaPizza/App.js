import React from 'react';
import { ScrollView } from 'react-native';
import { NativeBaseProvider, Text, Center, Box, Image, HStack } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center marginTop={10} marginBottom={10}>Ajude o Miranha a entregar pizzas</Center>
      <ScrollView horizontal>
      <Box>
        <HStack space={3} justifyContent="center">

        <Box marginTop={100}>
          <Image
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box marginTop={600}>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box marginTop={300}>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box marginTop={400}>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        <Box>
          <Image 
            size={100} 
            resizeMode={"contain"} 
            borderRadius={100} 
            source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
            alt="Alternate Text" 
          />
        </Box>
        </HStack>
      </Box>
      </ScrollView>
      
    </NativeBaseProvider>
  );
}

