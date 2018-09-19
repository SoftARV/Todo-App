import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import Post from "./Post";

const RootStack = createStackNavigator(
  {
    Home,
    Post
  },
  {
    initialRouteName: "Home",
    transitionConfig
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const scaleY = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ scaleY }] };
    }
  };
};
