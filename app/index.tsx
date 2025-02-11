import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'
import { useRouter } from 'expo-router'
import InputComponent from '@/components/InputComponent'

const index = () => {
  const navigate = useRouter()
  const [username, setUsername] = useState<string>("");
  return (
    <View className='flex flex-1 bg-white'>
    
      <Text className='text-center mt-5 text-4xl text-gray-400'>24hfs</Text>
      <View className=' justify-center  items-center '>
        <Image className='' source={require("../assets/images/logo.jpg")}/>
      </View>
      <View className='p-2 flex  flex-col'>
         <ButtonComponent title='Email' icons='email'backGround='#C54942' onPress={()=>{}}/>

         <ButtonComponent title='Facebook' icons='facebook'  onPress={()=> navigate.replace("/ScreenInformations")}/>
           <Text className='text-center text-2xl mb-5 text-gray-400'>Or</Text>
           <View className='border border-gray-500 p-5 rounded-2xl'>
          <TouchableOpacity >
            <Text className='text-blue-500 text-center text-4xl hover:border-b-1 border-gray-800' >Register</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})