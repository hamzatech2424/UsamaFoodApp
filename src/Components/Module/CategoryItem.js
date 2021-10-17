import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import PizzaSvg from '../../../Assets/Icons/PizzaSvg'

const CategoryItem = ({label,Picture}) => {
    return (
        <TouchableOpacity style={styles.mainContainer}>
              <View>
                  {Picture()}
              </View>
            <View>
                <Text style={styles.textOne}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    mainContainer:{
        width:moderateScale(100,0.1),
        height:moderateScale(130,0.1),
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:8,
        marginVertical:15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 1.5,
    },
    textOne:{
        fontFamily: 'Montserrat',
        fontSize: moderateScale(13, 0.1),
        fontWeight: '900',
        color: 'black',
        paddingBottom:10
    }
})
