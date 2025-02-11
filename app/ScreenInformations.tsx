import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import InputComponent from '@/components/InputComponent';
import ButtonComponent from '@/components/ButtonComponent';

const ScreenInformations = () => {
    const [isMale, setIsMale] = useState<boolean>(false)
    const [isFemale, setIsFemale] = useState<boolean>(false)
    const [age, setAge] = useState<number|null>(null)
  return (
    <View className='flex flex-1 bg-gray-800'>
      <View className='m-5 flex flex-col items-center justify-center '>
      <Text className='text-white text-2xl mb-5'>Quel est ton Sexe  ? </Text>
        <Text className='text-white'>Homme</Text>
      <Checkbox  value={isMale} onValueChange={setIsMale} className='m-4'/>
        <Text className='text-white mb-2'>Femme</Text>
      <Checkbox style={styles.checkbox} value={isFemale}onValueChange={setIsFemale}  />
      </View>

      <View>
      <Text className='text-white text-2xl mb-2'> Tu as quel age ? </Text>
        <InputComponent value={age?? undefined}  placeholder='Quel est votre age ?' onChangeText={(text) => setAge(text ? Number(text) : null)}/>
        <Text className='text-white text-2xl mb-2'> Tu as quel ton  poid? </Text>
        <InputComponent value={age?? undefined}  placeholder='Quel est ton poid  ?' onChangeText={(text) => setAge(text ? Number(text) : null)}/>
  
     </View>

      <ButtonComponent title='Scan' backGround='#22c55e' onPress={()=>{}}/>
    </View>
  )
}

export default ScreenInformations

const styles = StyleSheet.create({
    checkbox:{
        
    }
})