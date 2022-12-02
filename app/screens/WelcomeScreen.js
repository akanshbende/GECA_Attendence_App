import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

// import {useAppContext} from '../../Context/sessionHolder'

function WelcomeScreen({ navigation }) {
  // const [session, setSession] = useAppContext()
  // console.log(session)
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="contain"
      source={require("../assets/background.png")}
    >
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate("User");
      // setSession("selected")
    }}>
          <Text style={styles.next}>Next </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonStyle: {
    // marginTop: 20,
    height: 50,
    width: "100%",
    // borderRadius: 20,

    backgroundColor: "#2aebff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  next: {
    fontSize: 20,
    opacity: 0.7,
  },
});

export default WelcomeScreen;
