import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',

  },
};
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
console.log(Navigation)
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="green" />
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
})
