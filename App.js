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
import HookEffect from "./HookEffect";
import { useEffect } from "react";
import QRcodeScan from "./app/screens/QRcodeScan";
import { AppWrapper } from "./Context/sessionHolder";
import AttendencePanel_test from "./app/screens/AttendencePanel_test";
import GiveAttendence from "./app/screens/GiveAttendence";
import Scan from "./app/screens/Scan";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="User" component={UserSelectionScreen} />
          <Stack.Screen name="Teacher" component={TeacherLogin} />
          <Stack.Screen name="Student" component={StudentLogin} />
          <Stack.Screen name="Student Dashboard" component={StudentDashboard} />
          <Stack.Screen name="Teacher Dashboard" component={TeacherDashboard} />
          <Stack.Screen name="QRScan" component={QRCodeScanner} />
          {/* <Stack.Screen name="Attendance" component={AttendencePanel} /> */}
          {/* <Stack.Screen name="QRCode" component={QRcodeScan} /> */}
          <Stack.Screen name="Test" component={AttendencePanel_test} />
          <Stack.Screen name="GiveAttendence" component={GiveAttendence} />
          {/* <Stack.Screen name="Scan" component={Scan} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppWrapper>

    // <QRCodeScanner/>
    // <HookEffect/>
  );
}
