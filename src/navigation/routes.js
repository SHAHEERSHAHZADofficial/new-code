import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from '../Screens/NewUser';
import SignIn from '../Screens/Login';
import Info from '../Screens/Needy/first';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="login" component={SignIn} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="Info" component={Info} />

        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;