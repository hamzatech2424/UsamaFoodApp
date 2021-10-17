import React from 'react'
import {View,Text,StyleSheet,Dimensions} from "react-native"



const BoilerPlateScreen = () => {
    return (
        <View style={styles.container} >
            {/* <View style={styles.Header} ></View> */}
            <View style={styles.Middle} ></View>
            {/* <View style={styles.Footer} ></View> */}
        </View>
    )
}

export default BoilerPlateScreen


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 3,
        backgroundColor:"yellow"
    },
    Middle:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 4,
        backgroundColor:"green"
    },
    Footer:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 3,
        backgroundColor:"red"
    },

})