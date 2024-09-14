import { PaperProvider } from "react-native-paper";
import Home from "./Home";
import Signup from "./signup";
import Login from "./login";
import Chat from "./chat/chat";
import Doctorscreen from "./doctorscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="signup" screen={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login}  options={{ headerShown: true }}/>
          <Stack.Screen name="signup" component={Signup}  options={{ headerShown: true }}/>
          <Stack.Screen name="chat" component={Chat}  options={{ headerShown: true }} />
          <Stack.Screen name="doctorscreen" component={Doctorscreen}  options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
