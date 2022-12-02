import * as React from "react";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

// const Stack = createNativeStackNavigator();
// function OnPortal(){

// }

function StudentLogin({ navigation }) {
  //=====================================================================

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Cources :</Text>
      {/* <Text style={styles.description}></Text> */}

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Big Data :</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>OnPortal()}>
          <Text style={styles.login}>OFF</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Data Mining :</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>OnPortal()}>
          <Text style={styles.login}>OFF</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    // paddingTop: 10,
    paddingBottom: 15,
    textTransform: "capitalize",
    // fontFamily: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
    display:"flex",
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 20,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: " rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,

    fontSize: 18,
  },
  buttonStyle: {
    marginTop: 15,
    height: 40,
    width: 60,
    borderRadius: 15,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 17,
  },
  // multilineStyle: {},
});

export default StudentLogin;
// ... other code from the previous section
