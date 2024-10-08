import { PaperProvider } from "react-native-paper";
import "react-native-gesture-handler";
import Home from "./Home";
import Logout from './logout';
import Signup from "./signup";
import Login from "./login";
import Chat from "./chat/chat";
import Doctorscreen from "./doctorscreen";
import Donor from "./donor";
import Donorform from "./donorform";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Location from "./location";
import Onboardingscreen from "./onboardingscreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        drawerActiveBackgroundColor: "#D3D3D3",
        drawerLabelStyle: {
          fontSize: 18,
          marginLeft: 10,
          color: "black",
        },
        drawerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ headerTitle: 'Donate-Blood-bank' }} initialRouteName="Home" />
      <Drawer.Screen name="Connect with Doctors" component={Doctorscreen} />
      <Drawer.Screen name="Chat with donors" component={Donor} options={{ headerTitle: 'Chat with donors' }} />
      <Drawer.Screen name="Become a Donor" component={Donorform} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboardingscreen" >
          <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
          <Stack.Screen 
            name="Onboardingscreen" 
            component={Onboardingscreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="chat" 
            component={Chat} 
          
          />
          <Stack.Screen 
            name="signup" 
            component={Signup} 
            options={{ headerShown: false }}
          
          />
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}
          
          />
      
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
