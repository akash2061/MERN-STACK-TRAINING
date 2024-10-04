import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector from './assets/adaptive-icon.png';

export default function App() {
  return (
    <View style={{backgroundColor : "black", justifyContent:'center', alignItems:'center', flex:1, paddingTop:30}}>
      <ScrollView>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <ImageBackground source={Vector} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
      </ScrollView>
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
