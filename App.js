import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import Page from './page';
import BottomBar from './BottomBar';
export default function App() {
  return (
    <View style={styles.mainStyle}>
      <Header />
      <Page />
      <BottomBar style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    height: 650
  },
  bottomBar: {
    alignItems: 'flex-start',
  }
});
