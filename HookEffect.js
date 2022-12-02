import React from 'react'
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
  } from "react-native";
  import { useEffect } from "react";
  
function HookEffect() {

    //useeffect callback function and input........
    //useeffect page load hone baad on stop call hota hai...not ki onpress
    useEffect(() => {
      
    }, [])
    
    
    
  return (
        <View><Text>HookEffect</Text></View>        
  )
}

const styles =StyleSheet.create({

})


export default HookEffect