import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Canvas, ImageUtil, Image } from 'react-native-pytorch-core-canvas';

export default function App() {

  console.log(Canvas);
  console.log(ImageUtil);
  console.log(Image);
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
