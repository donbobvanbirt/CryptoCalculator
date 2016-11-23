import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Provider } from 'react-redux';

import NavContainer from './components/NavContainer';
import store from './store';

export default class App extends Component {
  render() {
    // return (
    //
    //   <MarketData />
    // );
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ index: 0 }}
          renderScene={(route, navigator) =>
            <NavContainer
              index={route.index}
              // Function to call when a new scene should be displayed
              onForward={() => {
                const nextIndex = route.index + 1;
                navigator.push({
                  index: nextIndex,
                });
              }}
              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
      </Provider>
    );
  }
}
