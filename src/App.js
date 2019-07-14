import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./shared/store";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import NavigationService from "./shared/NavigationService";

const RootStack = createStackNavigator(
  {
    HomeScreen,
    PostScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack ref={NavigationService.setTopLevelNavigator} />
        </PersistGate>
      </Provider>
    );
  }
}
