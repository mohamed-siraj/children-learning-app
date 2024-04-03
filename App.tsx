import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


/**
 * screens
 */
import StartScreen from './src/screens/start.screen';
import HomeScreen from './src/screens/home.screen';

/**
 * create native navigation
 */
const Drawer = createDrawerNavigator();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start" screenOptions={{
        headerShown : false
      }}>
        <Drawer.Screen name="Start" component={StartScreen} />

        
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
