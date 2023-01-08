import React from "react";
import { useState, useContext } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";

// import { AuthContext } from "./Context/AuthContext";

function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const val = useContext(AuthContext);

  const [userName, setuserName] = useState("");
  console.log(userName);
  const [password, setPassword] = useState("");

  //============================SUBMIT==================================
  const submit = () => {
    // return Alert.alert(userName,password);
    if (userName === `BE20F05F003` && password === `akansh@123`) {
      const name = `Akansh Bende`;

      navigation.navigate("Done");
    } else if (userName === `BE20F05F005` && password === `pass@123`) {
      const name = `Shriram Bhople`;

      navigation.navigate("Done");
    } else if (userName === `BE20F05F057` && password === `pass@123`) {
      const name = `Aishwarya Satpute`;
      Alert.alert(`Thank You!!   ${name}`);
      navigation.navigate("Done");
    } else if (userName === `BE20F05F068` && password === `pass@123`) {
      const name = `Bhagyashri Vaidya`;

      navigation.navigate("Done");
    } else if (userName === `a` && password === `a`) {
      const name = `Akansh Bende`;

      navigation.navigate("Done");
    } else {
      Alert.alert(`Username and Password is Incorrect!!`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Text>{val}</Text> */}
        <Image style={styles.logo} source={require("./gecalogo.png")} />
        <Text style={styles.title}>Username :</Text>
        <TextInput
          placeholder="Enter Username"
          style={styles.input}
          value={userName}
          autoCapitalize="none"
          onChangeText={(text) => setuserName(text)}
        />
        <Text style={styles.title}>Password :</Text>
        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" style={styles.login} onPress={() => submit()} />

        {/* <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Dont't have a account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: "60%",
    width: "80%",
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
  },
  logo: {
    alignSelf: "center",
    margin: 10,
    width: 150,
    height: 150,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
  login: {
    backgroundColor: "00ff55",
  },
});
export default LoginScreen;
