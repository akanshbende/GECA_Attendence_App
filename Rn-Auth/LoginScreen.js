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

import { AuthContext } from "../Rn-Auth/Context/AuthContext";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const val = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Text>{val}</Text> */}
        <Image style={styles.logo} source={require("./gecalogo.png")} />
        <TextInput
          placeholder="Enter email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button title="Login" />

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
});
export default LoginScreen;
