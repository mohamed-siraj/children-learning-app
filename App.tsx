import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';

/**
 * header
 */
import Header from './src/components/header';

/**
 * screens
 */
import StartScreen from './src/screens/start.screen';
import HomeScreen from './src/screens/home.screen';
import LoginScreen from './src/screens/login.screen';
import { COLORS } from './constant';
import RegisterScreen from './src/screens/register.screen';

/**
 * create native navigation
 */
const Drawer = createDrawerNavigator();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start" screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.meroon,
        },
        drawerLabelStyle: {
          color: COLORS.white
        },
        header: ({ options, route }: DrawerHeaderProps) => {
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : route.name;
          return (<Header screenName={title} />)
        }
      }}>
        <Drawer.Screen name="Start" component={StartScreen} options={{
          headerShown: false,
          drawerItemStyle: {
            display: 'none'
          }
        }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerShown: true,
        }} />

        <Drawer.Screen name="Sign In" component={LoginScreen} options={{
          headerShown: true,
        }} />
        <Drawer.Screen name="Registration" component={RegisterScreen} options={{
          headerShown: true,
          drawerItemStyle: {
            display: 'none'
          }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
