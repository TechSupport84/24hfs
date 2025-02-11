
import 'react-native-reanimated';
import "../global.css"

import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';




export default function RootLayout() {

  return (
      <Stack initialRouteName='index'screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='screeninformation' />
        <StatusBar barStyle={'light-content'} />
      </Stack>
  

  );
}
