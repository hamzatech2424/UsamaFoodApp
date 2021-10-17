import React, { useState,useRef,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,KeyboardAvoidingView,Alert, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PhoneInput from "react-native-phone-number-input";
import Colors from '../../theme';



const SignInScreen = ({navigation}) => {

    const [nameFocus, setnameFocus] = useState(false)
    const [emailFocus, setemailFocus] = useState(false)
    const [passwordFocus, setpasswordFocus] = useState(false)
    const [NumberFocus, setNumberFocus] = useState(false)
    const [PasswordValidate,setPasswordValidate] = useState(false) 
    const [EmailValidate,setEmailValidate] = useState(false) 
    const phoneInput = useRef();
    const [SignUpCredentials,setSignUpCredentials] = useState({
        Fullname:"",
        email:"",
        password:"",
        contact:""

    })

    // useEffect(()=>
    // {

    //     PostRequestForSignUp()

    // },[])


    // PostRequestForSignUp = () => {
    //     fetch()
    // }

    const PasswordValidation = () =>{
        if(SignUpCredentials.password.length>5)
        {
            setPasswordValidate(false)
        }
        else{
            setPasswordValidate(true)
        }
    }

    const EmailValidation = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (SignUpCredentials.email.match(mailformat))
        {
            setEmailValidate(false)
        }
        else{
            setEmailValidate(true)
        }
    }

    const SignUpButtonValidationCheck = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(SignUpCredentials.email.match(mailformat) && SignUpCredentials.password.length>5){
            // PostRequestForSignUp()
        }
        else if(SignUpCredentials.email == "" && SignUpCredentials.password == ""){
            Alert.alert("Fill the Fields")
        }
        else {
            Alert.alert("Clear the errors first")
        }
    } 




    

  const PostRequestForSignUp = async () => {


    const Header = {
      'Content-Type': "application/json",
      "Accept": "application/json",
    }

    const requestOptions = {
      method: 'POST',
      headers: Header,
      body: JSON.stringify({ name: SignUpCredentials.Fullname, email: SignUpCredentials.email, password: SignUpCredentials.password, phone_number: SignUpCredentials.contact })
    };
    try {
      const response = await fetch('http://food-app-heroku.herokuapp.com/api/foodapp/user/registration', requestOptions)
      const data = await response.text()
       console.log(data)


      let newdata = JSON.parse(data)
      console.log(newdata)

      console.log(typeof newdata)

      if (typeof newdata === "object") {
        SetloaderCompo(false);
        // alert(newdata.message + "Now Login")
        navigation.navigate("LoginPage")
      }

      else {
        alert(newdata)
        SetloaderCompo(false)
      }


    }
    catch (err) {
      console.log(err)
    }
  }



    return (
        <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow:1 }}
        showsVerticalScrollIndicator={false}
    > 
                <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />

        <View style={styles.container}>
       
      
       
                <Text style={styles.SignInTxt} >
                    Sign Up
                </Text>

                <View style={styles.innerMiddle} >


                <View style={styles.ViewOfField}>
                        <Text style={styles.TxtOfField} >
                            Full Name
                    </Text>

                        <TextInput placeholder="Full Name"
                            style={nameFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.Fullname}
                            onChangeText={(txt)=>setSignUpCredentials({...SignUpCredentials,Fullname:txt})}
                            onFocus={() => {
                                setemailFocus(false)
                                setpasswordFocus(false)
                                setnameFocus(true)
                            }}
                        />
                    </View>


                    <View style={styles.ViewOfField} >
                        <Text style={styles.TxtOfField} >
                            Email ID
                    </Text>

                        <TextInput placeholder="Enter Your Email.."
                            style={emailFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.email}
                            onChangeText={(txt)=>{
                                setSignUpCredentials({...SignUpCredentials,email:txt})
                                EmailValidation()
                            }}
                            onFocus={() => {
                                setemailFocus(true)
                                setpasswordFocus(false)
                                setnameFocus(false)
                            }}
                        />
                         {EmailValidate?
                        <Text style={{color:"red"}}>*Email must be correctly Formated</Text>:null}
                    </View>




                    <View style={styles.ViewOfField}>
                        <Text style={styles.TxtOfField} >
                            Password
                    </Text>
                    

                        <TextInput placeholder="Password"
                            secureTextEntry={true}
                            style={passwordFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.password}
                            onChangeText={(txt)=>{
                                setSignUpCredentials({...SignUpCredentials,password:txt})
                                PasswordValidation()
                        }}
                            onFocus={() => {
                                setemailFocus(false)
                                setpasswordFocus(true)
                                setnameFocus(false)
                            }}
                        />
                        {PasswordValidate?
                        <Text style={{color:"red"}}>*Password must be 6 characters Long</Text>:null}
                    </View>




                    <View style={styles.ViewOfField}>
                    <Text style={styles.TxtOfField} >
                            Contact 
                    </Text>

                    <PhoneInput
            ref={phoneInput}
            defaultCode="PK"
            layout="first"
            defaultvalue={SignUpCredentials.contact}
            onChangeFormattedText={(txt)=>setSignUpCredentials({...SignUpCredentials,contact:txt})}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            containerStyle={NumberFocus?{width:"100%",borderColor:"#f51929",borderWidth:1,borderRadius:10}:{width:"100%",borderColor:"grey",borderWidth:1,borderRadius:10}}
            textContainerStyle={{borderRadius:10,height:50}}
            textInputStyle={{height:50}}
            // withDarkTheme
            // withShadow
            autoFocus
          />
 
            {/* //phone value stored in formattedValue */}
           {/* <Text>{formattedValue}</Text> */}


                    </View>



                    <TouchableOpacity
                        style={styles.SignInBtn}
                        onPress={()=>SignUpButtonValidationCheck()}
                        
                    >
                        <Text
                            style={{ color: "white", fontWeight: "bold" }}
                        >Sign Up</Text>
                    </TouchableOpacity>

                   

               


                </View>


                

                   

                
 
        </View>

        </KeyboardAwareScrollView>

        
    )
}

export default SignInScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems: "center"
    },

 
    innerMiddle: {
        width: "87%",
        height: "75%",
        // backgroundColor: "purple",
        // marginTop: "10%"
    },
    SignInTxt: {
        fontSize: 22,
        fontWeight: "bold",
        // marginTop:"15%"
    },
    ViewOfField: {
        //    backgroundColor:"orange",
           marginTop:"5%"
    },
    TxtOfField: {
        fontSize: 15,
        marginBottom: "2%"
    },
    TxtInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",


    },
    TxtInputFocused: {
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
 
    SignInBtn: {
        width: "90%",
        height:50,
        marginTop:"10%",
        backgroundColor: Colors.orange,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,
    },


    Bottom: {
        width: "100%",
        height: "15%",
        // backgroundColor: "yellow"
    }
})