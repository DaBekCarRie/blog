import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/Screens/IndexScreen";
import ShowScreen from "./src/Screens/ShowScreen";
import { Provider } from "./src/Context/BlogContext";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit:EditScreen
},{
  initialRouteName: "Index",
  defaultNavigationOptions:{
    title:"Blogs"
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <Provider>
    <App/>
  </Provider>
}