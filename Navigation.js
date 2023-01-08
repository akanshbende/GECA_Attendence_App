//rnfe
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import UserSelectionScreen from "./app/screens/UserSelectionScreen";
import TeacherLogin from "./app/screens/TeacherLogin";
import StudentLogin from "./app/screens/StudentLogin";
import StudentDashboard from "./app/screens/StudentDashboard";
import TeacherDashboard from "./app/screens/TeacherDashboard";
import QRCodeScanner from "./app/screens/QRCodeScanner";
import AttendencePanel from "./app/screens/AttendencePanel";
// import HookEffect from "./HookEffect";
import { useEffect } from "react";
import QRcodeScan from "./Other Files/QRcodeScan";

import AttendencePanel_test from "./app/screens/AttendencePanel_test";
import GiveAttendence from "./app/screens/GiveAttendence";
import Scan from "./Other Files/Scan";
import HomeScreen from "./app/Rn-Auth/HomeScreen";
import LoginScreen from "./app/Rn-Auth/LoginScreen";
import RegisterScreen from "./app/Rn-Auth/RegisterScreen";

import { AuthProvider } from "./app/Rn-Auth/Context/AuthContext";
import Result from "./app/screens/Result";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="User" component={UserSelectionScreen} />
        <Stack.Screen name="Teacher" component={TeacherLogin} />
        <Stack.Screen name="Student" component={StudentLogin} />
        <Stack.Screen name="Student Dashboard" component={StudentDashboard} />
        <Stack.Screen name="Teacher Dashboard" component={TeacherDashboard} />
        <Stack.Screen
          name="QRScan"
          component={QRCodeScanner}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Done"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Test" component={AttendencePanel_test} />
        <Stack.Screen name="GiveAttendence" component={GiveAttendence} />
        {/* <Stack.Screen name="Scan" component={Scan} /> */}
        {/* <AuthProvider></AuthProvider> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Network Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{
  /* <Stack.Screen name="Attendance" component={AttendencePanel} /> */
}
{
  /* <Stack.Screen name="QRCode" component={QRcodeScan} /> */
}
