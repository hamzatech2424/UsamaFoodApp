import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContentContainer = ({children,width,bgColor}) => {

   const defWidth = width ? width : '85%'
   const defBgColor = bgColor ? bgColor : 'transparent'

    return (
        <View style={{width:defWidth,height:'100%',alignSelf:'center',backgroundColor:defBgColor}}>
          {children}
        </View>
    )
}

export default ContentContainer

const styles = StyleSheet.create({})
