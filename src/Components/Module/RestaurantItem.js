import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../theme';


const RestaurantItem = ({imgUrl,name}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.viewOne}>
        <View style={styles.picContainer}>
            <Image source={imgUrl}  style={{width:'100%',height:'100%',borderRadius:35}} />
        </View>
      </View>
      <View style={styles.viewTwo}>
        <View style={styles.viewInner}>
          <View style={{paddingTop:5}}>
            <Text style={styles.textOne}>{name}</Text>
          </View>
          <View>
            <Text style={styles.textTwo}>
              sdasdadasdasdadadadadadasdasdasdasdasdasdsadasdasdsadsadas{' '}
            </Text>
          </View>
          <View>
            <Text style={[styles.textTwo, {color: 'red'}]}>24/7 Open</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: moderateScale(100, 0.1),
    backgroundColor: '#F1F4F3',
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1.5,
  },
  viewOne: {
    width: '30%',
    height: '100%',
    // backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    // backgroundColor: 'red',
  },
  viewTwo: {
    width: '65%',
    height: '100%',
    // backgroundColor:'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInner: {
    width: '100%',
    height: '85%',
    // backgroundColor:'purple'
  },
  textOne: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(16, 0.1),
    fontWeight: '900',
    color: 'black',
  },
  textTwo: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(13, 0.1),
    fontWeight: '200',
    color: '#707070',
  },
});
