import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../theme';


const SelectCountryCompo = ({img,label,itemId,isActive,selected}) => {
    return (
        <TouchableOpacity
        onPress={()=>selected(itemId)}
        style={[styles.mainContainer,{backgroundColor:isActive?Colors.orange:'white'}]}>
            <View style={styles.viewOne}>
                <View style={styles.viewTwo}>
                    <View style={styles.circleView}>
                        <Image source={img}  style={{width:'100%',height:'100%',borderRadius:20}} />
                    </View>
                </View>
                <View style={styles.viewThree}>
                    <Text style={[styles.textOne,{color:isActive?'white':'black'}]}>{label}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default SelectCountryCompo

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:moderateScale(59,0.1),
        borderRadius:10,
        marginVertical:10
    },
    viewOne:{
        width:'100%',
        height:'100%',
        // backgroundColor:'pink',
        flexDirection:'row'
    },
    circleView:{
        width:moderateScale(40,0.1),
        height:moderateScale(40,0.1),
        borderRadius:20,
        // backgroundColor:'purple'
    },
    viewTwo:{
        width:'30%',
        height:'100%',
        // backgroundColor:'grey', 
        justifyContent:'center',
        alignItems:'center'
    },
    viewThree:{
        width:'70%',
        height:'100%',
        // backgroundColor:'orange',
        justifyContent:'center',
        paddingLeft:moderateScale(9,0.1)        
    },
    textOne:{
        fontFamily:'Poppins',
        fontSize:moderateScale(15,0.1),
        fontWeight:'400',
        color:'black'
    }
})
