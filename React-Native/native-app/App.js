import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Button, Pressable, Modal } from 'react-native';
import Vector from './assets/adaptive-icon.png';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{backgroundColor : "black", justifyContent:'center', alignItems:'center', flex:1, paddingTop:30}}>
        <ScrollView>
        <ImageBackground source={Vector} style={{height:200, width:200}}/>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Text style={{color:"azure", fontSize:50}}>Hello </Text>
        <Button title="Open Modal" color="blue" onPress={() => {setOpen(true)}} />
        <Modal visible={open} animationType="fade" transparent={true}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={{width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10}}>
              <Text style={{fontSize: 20, marginBottom: 20}}>This is a modal!</Text>
              <Button title="Close Modal" color="blue" onPress={() => {setOpen(false)}} />
            </View>
          </View>
        </Modal>
        <Pressable onPress={()=>{alert('Pressable Component')}} style={{ backgroundColor:'midnightblue', marginTop:10}}>
          <Text style={{color:'white'}}>
            Pressable Component
          </Text>
          <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
        </Pressable>
        {/* <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/> */}
    </ScrollView>
      </View>
  );
}
