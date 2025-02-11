import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props{
    title: string,
    onPress:()=>void
    icons?:keyof typeof MaterialIcons.glyphMap,
    backGround?:string
}
const ButtonComponent  = ({ title, onPress, icons, backGround} :Props) => {
  return (
    <TouchableOpacity onPress={onPress}  style={[styles.container,backGround ? { backgroundColor: backGround } : {}]}className={`items-center space-x-2  ${backGround?'':'bg-gray-800'} p-3 `}>
      {icons && <MaterialIcons name={icons} size={24} color="white" />}
      <Text style={{margin:10}} className='text-white , text-2xl'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    padding:6,
    justifyContent:"center",
    borderRadius:5,
    margin:10
  }
})