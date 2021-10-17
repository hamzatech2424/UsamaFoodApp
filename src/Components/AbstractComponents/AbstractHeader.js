import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import BackBtnSvg from '../../../Assets/Icons/FlagsSvgs/BackBtnSvg';
import Colors from '../../theme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AbstractHeader = ({onPressBack, onPressCart}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewOne}>
        <TouchableOpacity onPress={onPressBack} style={styles.backBtn}>
          <BackBtnSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>Dubai</Text>
      </View>
      <View style={styles.viewThree}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={onPressCart}>
          <MaterialCommunityIcon name="basket" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AbstractHeader;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: moderateScale(60, 0.1),
    backgroundColor: Colors.orange,
    flexDirection: 'row',
  },
  viewOne: {
    height: '100%',
    width: '15%',
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  viewTwo: {
    height: '100%',
    width: '70%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontFamily: 'Poppins',
    fontSize: moderateScale(18, 0.1),
    fontWeight: '900',
    color: 'black',
  },
  viewThree: {
    height: '100%',
    width: '15%',
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
