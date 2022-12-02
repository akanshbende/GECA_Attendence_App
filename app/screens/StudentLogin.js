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

function StudentLogin({ navigation }) {
  const [userName, setuserName] = useState("");
  console.log(userName);
  const [password, setPassword] = useState("");

  //============================SUBMIT==================================
  const submit = () => {
    // return Alert.alert(userName,password);
    if (userName === `BE20F05F003` && password === `akansh@123`) {
      const name = `Akansh Bende`;
      Alert.alert(`Thank You!! ${name}`);
      navigation.navigate("Student Dashboard");
    } else if (userName === `BE20F05F005` && password === `pass@123`) {
      const name = `Shriram Bhople`;
      Alert.alert(`Thank You!! ${name}`);
      navigation.navigate("Student Dashboard");
    } else if (userName === `BE20F05F057` && password === `pass@123`) {
      const name = `Aishwarya Satpute`;
      Alert.alert(`Thank You!!   ${name}`);
      navigation.navigate("Student Dashboard");
    } else if (userName === `BE20F05F068` && password === `pass@123`) {
      const name = `Bhagyashri Vaidya`;
      Alert.alert(`Thank You!! ${name}`);
      navigation.navigate("Student Dashboard");
    } else if (userName === `a` && password === `a`) {
      const name = `Akansh Bende`;
      Alert.alert(`Thank You!! ${name}`);
      navigation.navigate("Student Dashboard");
    } else {
      Alert.alert(`Username and Password is Incorrect!!`);
    }
  };

  //=====================================================================

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Student Login</Text>
      {/* <Text style={styles.description}></Text> */}

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enrollment ID</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setuserName(actualData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => submit()}>
          <Text style={styles.login}>Login</Text>
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
    fontSize: 25,
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
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
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
    marginTop: 20,
    height: 50,
    width: 80,
    borderRadius: 15,
    backgroundColor: "skyblue",
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
