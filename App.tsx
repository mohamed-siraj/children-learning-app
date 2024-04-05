import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

/**
 * navigations
 */
import AuthSideMenu from './src/side-menu/auth.side-menu';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthSideMenu />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
