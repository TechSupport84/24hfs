import ButtonComponent from '@/components/ButtonComponent';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Platform ,View,Text} from 'react-native';


export default function HomeScreen() {
  const navigate = useRouter()
  return (
    <View className='flex  flex-1 bg-gray-800  justify-center items-center '>
      <ButtonComponent title='Return ' onPress={()=>navigate.back()}/>
      <Text className='text-white text-4xl'>Welcome </Text>
    </View>
   
  );
}


