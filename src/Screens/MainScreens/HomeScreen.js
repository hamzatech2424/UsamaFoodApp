import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import AbstractHeader from '../../Components/AbstractComponents/AbstractHeader';
import ContentContainer from '../../Components/AbstractComponents/ContentContainer';
import Colors from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import CategoryItem from '../../Components/Module/CategoryItem';
import PizzaSvg from '../../../Assets/Icons/PizzaSvg';
import BurgerSvg from '../../../Assets/Icons/BurgerSvg';
import WaterMelonSvg from '../../../Assets/Icons/WaterMelonSvg';
import SnacksSvg from '../../../Assets/Icons/SnacksSvg';
import RestaurantItem from '../../Components/Module/RestaurantItem';

const CategoriesData = [
  {
    id: 0,
    name: 'Pizza',
    SvgName: <PizzaSvg />,
  },
  {
    id: 1,
    name: 'Burger',
    SvgName: <BurgerSvg />,
  },
  {
    id: 2,
    name: 'Fresh Fruits',
    SvgName: <WaterMelonSvg />,
  },
  {
    id: 3,
    name: 'Snacks',
    SvgName: <SnacksSvg />,
  },
];

const RestaurantsData = [
  {
    id: 0,
    name: 'KfC',
    image: require('../../../Assets/Images/kfc.png'),
  },
  {
    id: 1,
    name: 'Pizza Hut',
    image: require('../../../Assets/Images/hut.png'),
  },
  {
    id: 2,
    name: 'Burger King',
    image: require('../../../Assets/Images/burger.png'),
  },
  {
    id: 3,
    name: 'MadChef',
    image: require('../../../Assets/Images/madchef.png'),
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />
      <AbstractHeader />

      <View style={styles.viewOne}>
        <View style={styles.viewOneinIt}>
          <View style={{width: '85%', alignSelf: 'center', marginTop: 10}}>
            <Text style={styles.textOne}>Categories</Text>
          </View>

          <View style={styles.viewThree}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {CategoriesData.map((value, index) => {
                return (
                  <CategoryItem
                    key={index}
                    label={value.name}
                    Picture={() => value.SvgName}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.viewTwo}>
        <View style={styles.viewFour}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textOne}>Select Restaurant</Text>
          </View>
        </View>

        <View style={{width: '85%',alignSelf: 'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {RestaurantsData.map((value, index) => {
              return (
                <RestaurantItem
                  key={index}
                  name={value.name}
                  imgUrl={value.image}
                />
              );
            })}
            <View style={{width:'100%',height:moderateScale(44,0.1)}}></View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  viewOne: {
    width: '100%',
    height: moderateScale(230, 0.1),
    backgroundColor: '#F3F3F3',
  },
  viewOneinIt: {
    width: '100%',
    height: moderateScale(230, 0.1),
    backgroundColor: '#F3F3F3',
  },
  viewTwo: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -35,
  },
  viewThree: {
    width: '100%',
    height: moderateScale(150, 0.1),
    // backgroundColor: 'green',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewFour: {
    width: '85%',
    height: moderateScale(25, 0.1),
    marginTop: 10,
    // backgroundColor:'pink',
    alignSelf: 'center',
  },
  textOne: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(17, 0.1),
    fontWeight: '900',
    color: 'black',
  },
});
