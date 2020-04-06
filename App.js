import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import Page from './Page';
import BottomBar from './BottomBar';
export default function App() {
  return (
    <View style={styles.mainStyle}>
      <Header />
      <Page />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    width: 360
  },
});
