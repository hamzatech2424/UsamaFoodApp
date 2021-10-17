import React from 'react';
import {View,Text,StyleSheet,Dimensions,Image, StatusBar} from "react-native";
// const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../theme';


const SplashScreen = () => {


    // useEffect(() => {
    //     setTimeout(() => {
    //     //Check if user_id is set or not
    //     //If not then send for Authentication
    //     //else send to Home Screen
    //     AsyncStorage.getItem('@storage_Key').then((value) =>
    //       navigation.replace(
    //         value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //       ),
    //     );

    // }, 2000)
  
    // }, []);



    // console.log(height);
    // console.log(width);


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />

<LottieView source={require("../../../Assets/Images/SplashScreenBlack.json")} autoPlay loop
style={{width:260,height:260}}
/>

            {/* <Image 
            style={{width:"24%",height:"18%"}}
            source={require("../Assets/Images/splashScreenLogo.png")}
             />
             */}
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.orange,
        justifyContent:"center",
        alignItems:"center"
        
    }
})