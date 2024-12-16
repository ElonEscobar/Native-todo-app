import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack ScreenOptions={{ headerShown: false }} >
          <Stack.Screen name="index" />
          <Stack.Screen name="todos/[id]" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
