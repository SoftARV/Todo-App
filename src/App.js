import React, { Component } from "react";
// import { Easing, Animated, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import NewPostScreen from "./screens/NewPostScreen";
import NavigationService from "./shared/NavigationService";

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 400,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true
//     },
//     screenInterpolator: sceneProps => {
//       const { position, scene } = sceneProps;

//       const thisSceneIndex = scene.index;

//       const scale = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex],
//         outputRange: [0, 1]
//       });

//       const scaleAnimation = {
//         transform: [{ scaleY: scale }]
//       };

//       return scaleAnimation;
//     }
//   };
// };

const RootStack = createStackNavigator(
  {
    HomeScreen,
    PostScreen,
    NewPostScreen
  },
  {
    initialRouteName: "HomeScreen"
    // transitionConfig: Platform.OS === "ios" ? transitionConfig : null
  }
);

export default class App extends Component {
  render() {
    return <RootStack ref={NavigationService.setTopLevelNavigator} />;
  }
}
