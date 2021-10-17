import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ExploreScreen from  "../Screens/MainScreens/ExploreScreen" 
import OfferScreen from "../Screens/MainScreens/OfferScreen"
import ProfileScreen from "../Screens/MainScreens/ProfileScreen"
import CartScreen from "../Screens/MainScreens/CartScreen"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoilerPlateScreen from "../Screens/BoilerPlateScreen"
import HomeScreen from "../Screens/MainScreens/HomeScreen";
import Colors from "../theme";



const Tab = createMaterialBottomTabNavigator();


// activeColor="#F5A623" inactiveColor="grey"

const MyTabs = ({navigation}) => {
     
    return (
      <Tab.Navigator  initialRouteName="Home"   activeColor="black" inactiveColor="grey"    barStyle={{backgroundColor:'#F3F3F3', height:"9%",justifyContent:'center'}} >
  
        <Tab.Screen name="Explore" component={ExploreScreen} options={{ 
            tabBarLabel: 'Explore',
            tabBarIcon: () => (
              <FontAwesome5 name="utensils" color={'black'} size={25}  />
            ),
            
          }}  />
  
  <Tab.Screen name="Home" component={HomeScreen}   options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color="black" size={25} />
            ),
          }}  />
  
  <Tab.Screen name="Cart" component={CartScreen}   options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon name="basket" color="black" size={25} />
            ),
          }}  />


  {/* <Tab.Screen name="Profile" component={ProfileScreen}   options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon name="account-circle" color="black" size={25} />
            ),
          }}  /> */}
  
      </Tab.Navigator>
    );
  }


export default MyTabs 