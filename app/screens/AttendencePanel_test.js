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

function AttendencePanel_test({ navigation }) {
  const [press, setpress] = useState(`OFF`);
  const [secButton, setsecButton] = useState(`OFF`);

  //   const but = document.querySelector("#button1");
  //   console.log("but");

  const callColor = () => {
    if (press == "ON") {
      console.log("pressed");
    }
  };

  const ButtonOn = () => {
    //   setpress("ON");
    //   callColor()
    if (press === "OFF") {
      setpress("ON");
    } else if (press === "ON") {
      setpress("OFF");
    }
  };
  const Button2 = () => {
    if (secButton === "OFF") {
      setsecButton("ON");
    } else if (secButton === "ON") {
      setsecButton("OFF");
    }
  };
  //=====================================================================

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Cources :</Text>
      {/* <Text style={styles.description}></Text> */}

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Big Data :</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            ButtonOn();
          }}
        >
          <Text style={styles.login}>{press}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Data Mining :</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Button2();
          }}
        >
          <Text style={styles.login}>{secButton}</Text>
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
    display: "flex",
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

// ... other code from the previous section
export default AttendencePanel_test;
