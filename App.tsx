import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';

/**
 * header
 */
import { Header } from 'react-native/Libraries/NewAppScreen';

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
        header: ({ options, route }: DrawerHeaderProps) => {
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : route.name;
          return (<Header screen={title} />)
        }
      }}>
        <Drawer.Screen name="Start" component={StartScreen} options={{
          headerShown: false,
        }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerShown: true,
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
