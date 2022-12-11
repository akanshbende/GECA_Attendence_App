import * as React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import TeacherLogin from "./TeacherLogin";
import StudentLogin from "./StudentLogin";

// import {useAppContext} from '../../Context/sessionHolder'

// const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function UserSelectionScreen({ navigation }) {
  // const [session, setSession] = useAppContext()

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Select the User :</Text>
      <View style={styles.buttonBar}>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Teacher")}
          >
            <Text style={styles.loginButton}>Teacher </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Student")}
          >
            <Text>Student</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    // paddingTop: 10,
    paddingBottom: 15,
    textTransform: "capitalize",
    // fontFamily: "bold",
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
    marginTop: 40,
    height: 50,
    width: 250,
    borderRadius: 20,

    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBar: {
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  // multilineStyle: {},
});

export default UserSelectionScreen;
