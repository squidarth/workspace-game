import React from 'react';
import './App.css';
import Icon from './Icon';
import './Icons.css'
import Window from './Window'
import store from '../store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import EmailApp from './EmailApp';
import Shack from './Shack';
import XCel from './XCel';

/*
 * This is the desktop component.
 * 
 *
 */



function App() {

  function openNewWindow(windowName: string) {
    store.dispatch({type: "OPEN_WINDOW", window: windowName})

    store.dispatch({type: "FOCUS_WINDOW", window: windowName})
  }
  return (
    <Provider store={store}>
      <div className="App">
        <div className="icons">
          <Icon appName="E-Mail" iconLogo={"E" } openApplication={() => openNewWindow('email') } />

          <Icon appName="Shack" iconLogo={"S" } openApplication={() =>  openNewWindow('shack') } />

          <Icon appName="X-Lerate" iconLogo={"X" } openApplication={() => openNewWindow('xcel')} />
        </div>
        <EmailApp />
        <Shack />
        <XCel />
      </div>
    </Provider>
  );
}

export default App;
