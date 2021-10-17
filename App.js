import React, {useEffect, useState} from 'react';
import SplashScreen from './src/Screens/AuthScreens/SplashScreen';
import AuthStack from './src/Navigation/AuthStack';
import TabNavigation from './src/Navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CountrySelectScreen from './src/Screens/MainScreens/CountrySelectScreen';

const Stack = createStackNavigator();

const App = () => {
  const [SplashHide, setSplashHide] = useState(true);
  const [AsynValue, setAsyncValue] = useState('');

  // console.log(AsynValue)

  useEffect(() => {
    setTimeout(() => {
      setSplashHide(false);
    }, 2000);

    // getCurrentUser()
    // getData()
  }, []);

  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* {SplashHide?
  <Stack.Screen
    name="SplashScreen"
    component={SplashScreen}
    options={{ headerShown: false }}
  />
  :null} */}

          {/* <Stack.Screen
            name={'CountrySelect'}
            component={CountrySelectScreen}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={'CountrySelect'}
            component={CountrySelectScreen}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
    name="Auth"
    component={AuthStack}
    options={{ headerShown: false }}
  /> */}

          <Stack.Screen
    name="DrawerNavigationRoutes"
    component={TabNavigation}
    options={{ headerShown: false }}
  />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
