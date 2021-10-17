import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ContentContainer from '../../Components/AbstractComponents/ContentContainer';
import SelectCountryCompo from '../../Components/Module/SelectCountryCompo';
import Colors from '../../theme';
import countriesData from '../../DataStorage/FlagsData';

const CountrySelectScreen = () => {

  const [Selected,setSelected] = useState(null)

  const SelectedCountryDetails = (idOfItem) => {
    for (let i = 0; i < countriesData.length; i++) {
        // console.log(countriesData[i].active)
      if(countriesData[i].id == idOfItem){
          countriesData[i].active = true
          setSelected(countriesData[i])
      }
      else {
        countriesData[i].active = false
      }
    }
  }


  return (
    <View style={styles.mainContainer}>
        <StatusBar backgroundColor={Colors.orange} barStyle={'dark-content'} />
      <View style={styles.viewOne}>
        <Text style={styles.headingText}>Select Your Country</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentContainer>
          {countriesData.map((value, index) => {
            return (
                <View style={{paddingTop:8}}>
              <SelectCountryCompo
                key={index}
                label={value.name}
                img={value.imgUrl}
                itemId={value.id}
                isActive={value.active}
                selected={SelectedCountryDetails}
              />
              </View>
            );
          })}
        </ContentContainer>
      </ScrollView>
    </View>
  );
};

export default CountrySelectScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  viewOne: {
    width: '100%',
    height: moderateScale(80, 0.1),
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Poppins',
    fontSize: moderateScale(18, 0.1),
    fontWeight: '800',
    color: 'white',
  },
});
