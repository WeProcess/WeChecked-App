import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/navigation";
import { AppRegistry } from "react-native";

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </>
  );
}

AppRegistry.registerComponent("main", () => App);
