import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const ExploreScreen = () => {
    return (
        <View style={styles.container} >


            <View style={styles.Header} >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[{ backgroundColor: "white", width: "13%", height: "70%", marginRight: "3%", borderRadius: 5, justifyContent: "center", alignItems: "center" }, styles.shadowProperty]}>
                    <Icon
                        name="md-location-outline"
                        size={23}
                    />

                </TouchableOpacity>



                <TouchableOpacity
                 activeOpacity={0.8}
                    style={[{ backgroundColor: "white", width: "75%", height: "70%", borderRadius: 5, flexDirection: "row" }, styles.shadowProperty]}>

                    <View style={{ width: "80%", height: "100%",justifyContent:"center" }}> 
                        <Text style={{paddingLeft:"5%",color:"grey"}}>Search for meal or area</Text>
                        
                    </View>

                    <View
                        style={{ height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>
                        <Icon
                            name="search"
                            size={23}
                        />

                    </View>

                </TouchableOpacity>




            </View>






            <View style={styles.Middle} >

                {/* <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                > */}

                    <View style={{ width: "100%", height: "25%", backgroundColor: "red" }}>



                        <View style={{ backgroundColor: "pink", width: "100%", height: "25%", flexDirection:"row" }}>
                          
                           <View></View>
                        </View>


                    </View>






                {/* </KeyboardAwareScrollView> */}

            </View>



        </View>
    )
}

export default ExploreScreen



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        width: "100%",
        height: "10%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    Middle: {
        width: "100%",
        height: "90%",
        backgroundColor: "green"
    },
    shadowProperty: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 3,
    }


})