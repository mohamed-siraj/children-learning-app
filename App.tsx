import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

/**
 * header
 */
import Header from './src/components/header';

/**
 * navigations
 */
import AuthSideMenu from './src/side-menu/auth.side-menu';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <AuthSideMenu/>
    </NavigationContainer>
  );
}

export default App;
