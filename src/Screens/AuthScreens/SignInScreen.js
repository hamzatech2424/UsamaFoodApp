import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Animated, StatusBar } from "react-native";
import { SocialIcon } from 'react-native-elements'
import { Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../../theme';





const SignInScreen = ({ navigation }) => {


    const btnMove = useRef(new Animated.Value(0)).current



    // useEffect(() => {

    //     Animated.timing(btnMove, {
    //         toValue: 50,
    //         timing: 2000,
    //         useNativeDriver: true
    //     }).start()

    // }, [])


    const [emailFocus, setemailFocus] = useState(false)
    const [passwordFocus, setpasswordFocus] = useState(false)
    const [UserCeredentials, setUserCeredentials] = useState({
        email: "",
        password: ""
    })
    const [PasswordValidate, setPasswordValidate] = useState(false)
    const [EmailValidate, setEmailValidate] = useState(false)


    const PasswordValidation = () => {
        if (UserCeredentials.password.length > 5) {
            setPasswordValidate(false)
        }
        else {
            setPasswordValidate(true)
        }
    }

    const EmailValidation = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (UserCeredentials.email.match(mailformat)) {
            setEmailValidate(false)
        }
        else {
            setEmailValidate(true)
        }
    }

    const SignInValidation = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (UserCeredentials.email.match(mailformat) && UserCeredentials.password.length > 5) {
            // PostRequestForSignIn()
        }
        else if (UserCeredentials.email == "" && UserCeredentials.password == "") {
            alert("Fill the Fields")
        }
        else {
            alert("Clear the errors first")
        }
    }




    const PostRequestForSignIn = async () => {


        const Header = {
            'Content-Type': "application/json",
            "Accept": "application/json",
        }

        const requestOptions = {
            method: 'POST',
            headers: Header,
            body: JSON.stringify({ email: UserCeredentials.email, password: UserCeredentials.password })
        };
        try {
            const response = await fetch('https://food-app-apis.herokuapp.com/login', requestOptions)
            const data = await response.text()

            let newData = JSON.parse(data)

            console.log(newData)

            //   if (typeof newData === "object") {

            //     console.log(newData.data.email)

            //     storeData(newData.data.email)
            //     SetloaderCompo(false);

            //     navigation.replace('DrawerNavigationRoutes')
            //     alert(newData.message)
            //     // alert("You are Logged In")

            //   }

            //   else {
            //     SetloaderCompo(false);
            //     alert(newData)

            //   }

        }
        catch (err) {
            console.log(err)
        }
    }





    return (
        <View style={styles.container}>
            
            <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
        

            {/* <Text
            style={{marginTop:80}}
             >Hamza</Text> */}

            <View style={styles.Top}>

            </View>
            {/* 
           <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ height: '100%',width:"100%" ,backgroundColor: "#03B8F7" }}  >  */}

            <View style={styles.Middle}>
                <Text style={styles.SignInTxt} >
                    Sign In
                </Text>

                <View style={styles.innerMiddle} >


                    <View style={styles.EmailView} >
                        <Text style={styles.EmailTxt} >
                            Email ID
                        </Text>

                        <TextInput placeholder="Enter Your Email.."
                            style={emailFocus ? styles.EmailTxtInputFocused : styles.EmailTxtInput}
                            value={UserCeredentials.email}
                            onChangeText={(txt) => {
                                setUserCeredentials({ ...UserCeredentials, email: txt })
                                EmailValidation()

                            }}
                            onFocus={() => {
                                setemailFocus(true)
                                setpasswordFocus(false)
                            }}
                        />
                        {EmailValidate ?
                            <Text style={{ color: "red" }}>*Email must be correctly Formated</Text> : null}
                    </View>


                    <View style={styles.PassWordView}>
                        <Text style={styles.PasswordTxt} >
                            Password
                        </Text>

                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            style={passwordFocus ? styles.PasswordTxtInputFocused : styles.PasswordTxtInput}
                            value={UserCeredentials.password}
                            onChangeText={(txt) => {
                                setUserCeredentials({ ...UserCeredentials, password: txt })
                                PasswordValidation()
                            }}
                            onFocus={() => {
                                setemailFocus(false)
                                setpasswordFocus(true)
                            }}
                        />
                        {PasswordValidate ?
                            <Text style={{ color: "red" }}>*Password must be 6 characters Long</Text> : null}
                    </View>

                    <Text style={styles.ForgetTxt} >
                        Forgot Password?
                    </Text>


                   <View style={{width:"100%",height:"20%",justifyContent:"center",alignItems:"center"}}>
                    <View
                     style={{
                        //  transform: [{ translateX: btnMove }] ,
                         width:"75%",
                         height:"70%",
                         justifyContent:"center",
                         alignItems:"center"
        
                          }}>
                        <TouchableOpacity
                            style={styles.SignInBtn}
                            onPress={() => SignInValidation()}
                        >
                            <Text
                                style={{ color: "white", fontWeight: "bold" }}
                            >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    </View>



                    <Text style={{ width: "100%", textAlign: "center", marginTop: "2%", marginBottom: "2%" }} >Or</Text>

                    <View style={{ flexDirection: "row", width: "90%", height: "13%", marginHorizontal: "5%", justifyContent: "space-between" }}>

                        <TouchableOpacity
                            style={styles.googleBtn}
                        >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "60%", height: "100%", alignItems: "center", }}>
                                <Image
                                    source={require("../../../Assets/Images/google-icon.png")}
                                    style={{ width: 26, height: 27 }}
                                />
                                <Text
                                    style={{ color: "black" }}
                                >Google</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.facebookBtn}
                        >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "70%", height: "100%", alignItems: "center", }}>
                                <Image
                                    source={require("../../../Assets/Images/fb1.png")}
                                    style={{ width: 25, height: 27 }}
                                />
                                <Text
                                    style={{ color: "white" }}
                                >Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NotYet}>
                        <Text>Not yet a member,

                            <Text
                                onPress={() => navigation.navigate("SignUpPage")}
                                style={{ fontWeight: "bold", color: Colors.orange }}>
                                Sign up</Text></Text>
                    </View>

                </View>



            </View>

            {/* </KeyboardAwareScrollView> */}


            <View style={styles.Bottom}>

            </View>




        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    Top: {
        width: "100%",
        height: "12%",
        // backgroundColor: "red"
    },
    Middle: {
        width: "100%",
        height: "73%",
        // backgroundColor: "green",
        alignItems: "center"
    },
    innerMiddle: {
        width: "87%",
        height: "85%",
        // backgroundColor: "purple",
        marginTop: "10%"
    },
    SignInTxt: {
        fontSize: 22,
        fontWeight: "bold"
    },
    EmailView: {
        //    backgroundColor:"orange"  
    },
    EmailTxt: {
        fontSize: 15,
        marginBottom: "2%"
    },
    EmailTxtInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",


    },
    EmailTxtInputFocused: {
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 1.5,
    },
    PassWordView: {
        // backgroundColor:"white",
        marginTop: "6%"
    },
    PasswordTxt: {
        fontSize: 15,
        marginBottom: "2%"
    },
    PasswordTxtInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",
        // backgroundColor: "pink",
        // height:"20%"
        // height:50
    },
    PasswordTxtInputFocused: {
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 1.5,
        // backgroundColor: "pink",
        // height:50
    },
    ForgetTxt: {
        fontSize: 15,
        fontWeight: "bold",
        width: "40%",
        marginTop: "2%",
        marginBottom: "3.5%",
        // backgroundColor:"white",
        left: "60%"

    },
    SignInBtn: {
        width: "100%",
        height: 50,
        backgroundColor:Colors.orange,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        // marginHorizontal: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,

    },
    googleBtn: {
        width: "48%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,
        // marginHorizontal: "5%"
    },
    facebookBtn: {
        width: "48%",
        height: "100%",
        backgroundColor: "#157DC3",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,
        // marginHorizontal: "5%"
    },
    NotYet: {
        width: "100%",
        height: "5%",
        // backgroundColor:"pink",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "6%"
    },
    Bottom: {
        width: "100%",
        height: "15%",
        // backgroundColor: "yellow"
    }
})



export default SignInScreen