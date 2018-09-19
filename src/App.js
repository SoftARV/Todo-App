import React, { Component } from "react";
import { Easing, Animated, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import Post from "./Post";
import NavigationService from "./shared/NavigationService";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps;

      const thisSceneIndex = scene.index;

      const scale = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1]
      });

      const scaleAnimation = {
        transform: [{ scaleY: scale }]
      };

      return scaleAnimation;
    }
  };
};

const RootStack = createStackNavigator(
  {
    Home,
    Post
  },
  {
    initialRouteName: "Home",
    transitionConfig: Platform.OS === "ios" ? transitionConfig : null
  }
);

export default class App extends Component {
  render() {
    return <RootStack ref={NavigationService.setTopLevelNavigator} />;
  }
}
