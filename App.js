import store from './src/store'
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Routes } from './src/routes';


export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer style={styles.container}>
          <StatusBar style="auto" />
          <Routes/>
        </NavigationContainer>
      </Provider> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
