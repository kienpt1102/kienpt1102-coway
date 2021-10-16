import React from "react";
import 'react-native-gesture-handler';
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/views/screens/HomeScreen";
import DrawerScreen from "./src/views/screens/DrawerScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
      <NavigationContainer >
        <Drawer.Navigator screenOptions={{headerShown: false}} >
          <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
          <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
        </Drawer.Navigator>
      </NavigationContainer>


    // <View style={{ flex: 1 }}>
    //   <StatusBar backgroundColor="white" barStyle="dark-content" />
    //   <HomeScreen/>
    // </View>
  );
};

export default App;














