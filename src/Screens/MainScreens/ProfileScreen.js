import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.AikheContainer} >
                <View style={styles.Top1}>

                    <View style={styles.NameKaView}>
                        <Text style={styles.NameText}>Lorem IpSum Lorem IpSum</Text>
                        <Text style={styles.emailKaText}>0000000- asfsdfsavas@gmail.com</Text>
                    </View>

                </View>

                
                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}>
                    <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="clipboard-list" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>My Orders</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}>
                <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="home-variant-outline" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>Manage Addresses</Text>
                    </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}>
                <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="credit-card" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>Payments</Text>
                    </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}>
                <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="heart-outline" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>Favourites</Text>
                    </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}>
                <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="help-circle-outline" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>Help</Text>
                    </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.Top2} >
                <TouchableOpacity activeOpacity={0.6} style={{width:"100%",height:"100%",flexDirection:"row"}}
                       onPress={()=>{

                        Alert.alert(
                            'Logout',
                            'Are you sure? You want to logout?',
                            [
                              {
                                text: 'Cancel',
                                onPress: () => {
                                  return null;
                                },
                              },
                              {
                                text: 'Confirm',
                                onPress: async ()  => {
         
                                //  let Val = await AsyncStorage.getItem('@storage_Key')
                                // //  console.log(Val)
        
                                //  if(isNaN(Val.charAt(0))){
                                //     AsyncStorage.clear();
                                //     props.navigation.replace('Auth');
                                //  }
        
                                //  else {
                                //      signOut()
                                //   AsyncStorage.clear();
                                //   props.navigation.replace('Auth');
        
                                //  }
                                },
                              },
                            ],
                            {cancelable: false},
                          );
                      
        
                       }
                       
                    }
                >
                <View style={styles.IconkaView}>
                        <MaterialCommunityIcon name="logout" size={26} color="grey" />
                    </View>
                    <View style={styles.headingKaView}>
                        <Text>Logout</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ProfileScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    AikheContainer: {
        height: "75%",
        width: "100%",
        backgroundColor: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    Top1: {
        height: "17%",
        width: "90%",
        marginHorizontal: "5%",
        // backgroundColor: "red"
    },
    NameKaView: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "90%"

    },
    NameText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    emailKaText: {
        fontSize: 13,
        color: "lightgrey"
    },
    Top2: {
        height: "13%",
        width: "90%",
        marginHorizontal: "5%",
        // backgroundColor:"brown" ,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row"

    },
    IconkaView: {
        width: "20%",
        height: "100%",
        // backgroundColor:"yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    headingKaView: {
        width: "80%",
        height: "100%",
        // backgroundColor:"red",
        justifyContent: "center"
    }
})