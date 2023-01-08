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
import done from "../assets/done-removebg-preview.png";

function Result() {
  return (
    <View style={styles.container}>
      <Image source={done} />
      <Text>Your Attendence Marked Sucessfully</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Result;
