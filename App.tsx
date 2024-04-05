import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Menu from './src/side-menu/menu';

const App: React.FunctionComponent = () => {

  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  );
}

export default App;
