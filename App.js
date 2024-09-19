import { PaperProvider } from "react-native-paper";
import "react-native-gesture-handler";
import Home from "./Home";
import Logout from './logout';
import Signup from "./signup";
import Login from "./login";
import Chat from "./chat/chat";
import Doctorscreen from "./doctorscreen";
import Donor from "./donor";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <PaperProvider>
       <NavigationContainer>
      <Drawer.Navigator  initialRouteName="signup" screenOptions={{headerTitleAlign: 'center',drawerActiveBackgroundColor:"black",drawerLabelStyle:{
        fontSize:18,
        marginLeft:10,
        color:"white",
        

      },drawerStyle:{
        backgroundColor:"red"
      }}} >
        <Drawer.Screen name="Home" component={Home}  options={{ headerTitle: 'Donate-Blood-bank' }} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="signup" component={Signup} />
        <Drawer.Screen name="chat" component={Chat} />
        <Drawer.Screen name="Connect with Doctors" component={Doctorscreen} />
        <Drawer.Screen name="Chat with donors" component={Donor} options={{ headerTitle: 'Chat with donors' }}/>
        <Drawer.Screen name="Logout" component={Logout} />
      
      </Drawer.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="chat" component={Chat} />
      </Tab.Navigator> */}
      </NavigationContainer>



      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="signup"
          screen={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="chat"
            component={Chat}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="doctorscreen"
            component={Doctorscreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </PaperProvider>
  );
}

export default App;
