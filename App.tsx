import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/**
 * screens
 */
import StartScreen from './src/screens/start.screen';

/**
 * create native navigation
 */
const Stack = createNativeStackNavigator();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
