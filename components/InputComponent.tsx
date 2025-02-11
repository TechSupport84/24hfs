import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
interface Props
{
    placeholder:string,
    value?:number
    onChangeText:(text :string)=>void,

    
}
const InputComponent:React.FC<Props>= ({placeholder, value, onChangeText}:Props) => {
  return (
    <View className=' border border-gray-500 rounded p-2'>
      <TextInput style ={{backgroundColor:'gray', margin:10 ,fontSize:16, borderRadius:10}} value={value?.toString()}  keyboardType='numeric' placeholder={placeholder} onChangeText={onChangeText} />
         </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({})