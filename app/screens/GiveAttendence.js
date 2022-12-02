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

function GiveAttendence() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.section2}>
        <TouchableOpacity
          style={styles.scan}
          // onPress={() => navigation.navigate("Test")}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Give Attendence
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#a5a5a5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section1: {
    margin: 25,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    borderColor: "#555c6f",

    borderWidth: 3,
    width: "80%",
    height: "40%",
  },
  section2: {
    backgroundColor: "#f2f2f2",
    borderColor: "#555c6f",
    margin: 10,
    width: "80%",
    height: "10%",
    borderRadius: 20,
  },

  // scan: {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 20,
  //   borderColor: "#555c6f",
  //   borderWidth: 3,
  //   backgroundColor: "skyblue",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // mainHeader: {
  //   fontSize: 25,
  //   color: "#344055",
  //   fontWeight: "500",
  //   // paddingTop: 10,
  //   paddingBottom: 15,
  //   textTransform: "capitalize",
  //   // fontFamily: "bold",
  // },
  // description: {
  //   fontSize: 20,
  //   color: "#7d7d7d",
  //   paddingBottom: 20,
  //   lineHeight: 25,
  // },
  // inputContainer: {
  //   marginTop: 20,
  // },
  // labels: {
  //   fontSize: 18,
  //   color: "#7d7d7d",
  //   marginTop: 10,
  //   marginBottom: 5,
  //   lineHeight: 25,
  // },
  // inputStyle: {
  //   borderWidth: 1,
  //   borderColor: " rgba(0, 0, 0, 0.3)",
  //   paddingHorizontal: 15,
  //   paddingVertical: 7,
  //   borderRadius: 1,

  //   fontSize: 18,
  // },
  // buttonStyle: {
  //   marginTop: 20,
  //   height: 50,
  //   width: 80,
  //   borderRadius: 15,
  //   backgroundColor: "skyblue",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // login: {
  //   fontSize: 17,
  // },
  // multilineStyle: {},
});

export default GiveAttendence;
