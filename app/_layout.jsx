import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
import { TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const showAlert = () => {
  Alert.alert("Hold todo to complete");
};

const QuestionMarkIcon = () => (
  <TouchableOpacity onPress={showAlert} style={{ marginRight: 10 }}>
    <MaterialIcons name="help-outline" size={24} color="black" />
  </TouchableOpacity>
);

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack ScreenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{
              title: "My Todos",
              headerStyle: { backgroundColor: "	#bbbbbb" },
              headerTitleAlign: "center",
              headerRight: () => <QuestionMarkIcon />,
            }}
          />
          <Stack.Screen
            name="todos/[id]"
            options={{
              title: "Edit Todo",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "	#bbbbbb" },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
