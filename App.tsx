import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/**
 * screens
 */
import StartScreen from './src/screens/start.screen';
import HomeScreen from './src/screens/home.screen';

/**
 * create native navigation
 */
const Stack = createNativeStackNavigator();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{
        headerShown : false,
        orientation: 'all'
      }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
