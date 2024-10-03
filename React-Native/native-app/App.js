import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Vector from './assets/adaptive-icon.png';

export default function App() {
  return (
    <View style={{backgroundColor : "black", justifyContent:'center', alignItems:'center', flex:1}}>
      <Text style={{color:"azure", fontSize:50}}>Hello </Text>
      <Image source={Vector} style={{height:100, width:100}}/>
    </View>
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
