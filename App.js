const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge8 from "./screens/AndroidLarge8";
import AndroidLarge7 from "./screens/AndroidLarge7";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge5 from "./screens/AndroidLarge5";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge10 from "./screens/AndroidLarge10";
import AndroidLarge9 from "./screens/AndroidLarge9";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_extralight_italic: require("./assets/fonts/Inter_extralight_italic.ttf"),
    Inter_regular_italic: require("./assets/fonts/Inter_regular_italic.ttf"),
    Inter_medium_italic: require("./assets/fonts/Inter_medium_italic.ttf"),
    Inter_semibold_italic: require("./assets/fonts/Inter_semibold_italic.ttf"),
    Inter_bold_italic: require("./assets/fonts/Inter_bold_italic.ttf"),
    Inika_regular: require("./assets/fonts/Inika_regular.ttf"),
    Montaga_regular: require("./assets/fonts/Montaga_regular.ttf"),
    "Bodoni Moda_regular": require("./assets/fonts/Bodoni_Moda_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge8"
              component={AndroidLarge8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge7"
              component={AndroidLarge7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge5"
              component={AndroidLarge5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge10"
              component={AndroidLarge10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge9"
              component={AndroidLarge9}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
