import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CartList from './components/CartList';
import Header from './components/Header'
export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
    <CartList></CartList>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
