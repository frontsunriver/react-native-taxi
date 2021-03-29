import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Route from "./src/navigations/Route";


export default function App() {
  return (
     <Route></Route>
  );
}

AppRegistry.registerComponent('App', () => App);
