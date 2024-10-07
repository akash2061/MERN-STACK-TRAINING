// import { StatusBar } from 'expo-status-bar';
// import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Button, Pressable, Modal, ActivityIndicator } from 'react-native';
// import Vector from './assets/adaptive-icon.png';
// import { useState } from 'react';
// import Box from './components/Box';

// export default function App() {
//   const [open, setOpen] = useState(false);
//   return (
//     <View style={{backgroundColor : "black", justifyContent:'center', alignItems:'center', flex:1, paddingTop:30}}>
//       <StatusBar backgroundColor='lightblue' />
//         <ScrollView>
//         {/* <ActivityIndicator size="large" color="azure" animating={true} style={{margin:5}}/> */}
//           {/* <ImageBackground source={Vector} style={{height:200, width:200}}/> */}
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <Text style={{color:"azure", fontSize:50}}>Hello </Text>
//             <ActivityIndicator size="large" color="azure" animating={true} style={{margin:5}}/>
//           </View>
//           {/* <Text style={{color:"azure", fontSize:50}}>Hello </Text>
//           <Text style={{color:"azure", fontSize:50}}>Hello </Text>
//           <Text style={{color:"azure", fontSize:50}}>Hello </Text> */}
//           <Button title="Open Modal" color="blue" onPress={() => {setOpen(true)}} />
//           <Modal visible={open} animationType="fade" transparent={true}>
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
//               <View style={{width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10}}>
//                 <Text style={{fontSize: 20, marginBottom: 20}}>This is a modal!</Text>
//                 <Button title="Close Modal" color="blue" onPress={() => {setOpen(false)}} />
//               </View>
//             </View>
//           </Modal>
//           <Pressable onPress={()=>{alert('Pressable Component')}} style={{ backgroundColor:'midnightblue', marginTop:10}}>
//             <Text style={{color:'white'}}>
//               Pressable Component
//             </Text>
//             <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/>
//           </Pressable>
//           {/* <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/> */}
//           <Box>Hello</Box>
//         </ScrollView>
//     </View>
//   );
// }

import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from "react";
import Box from './components/Box';
import List from './components/List';
import Inputs from './components/Inputs';



export default function App() {
  const [open, setOpen] = useState(false)
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      {/* <List /> */}
      <Inputs />
      {/* <View style={[styles.box , {width : width > 600 ? 800 : 300   , 
    height : height > 600 ? 400 : 400  ,}]}>
        <Text style={styles.boxText}>Hello Techno</Text>
      </View> */}
      {/* <Box style={{backgroundColor : "red"}}>Box-1</Box>
      <Box style={{backgroundColor : "skyblue"}}>Box-2</Box>
      <Box style={{backgroundColor : "orange"}}>Box-3</Box>
      <Box style={{backgroundColor : "green"}}>Box-4</Box>
      <Box style={{backgroundColor : "blue"}}>Box-5</Box>
      <Box style={{backgroundColor : "yellow"}}>Box-6</Box> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} /> */}
      {/* <Button title="Show Alert" color="midnightblue" onPress={()=>{Alert.alert("Invalid Data","Subheading",[
        {
          text : "cancel",
          onPress : ()=>{console.log("Cancel Clicked")}
        },
        {
          text : "Ok",
          onPress : ()=>{console.log("ok Clicked")}
        },
      ])}}/> */}
      {/* <ScrollView>
      <Text>Hello Techno</Text>
      <Image source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 400 , height : 400}} />

      <ImageBackground source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 500 , height : 500}}>
      <Text>Hello Techno</Text>
      </ImageBackground>
      <Button title="Click Me" color="midnightblue" onPress={()=>{console.log("Button Clicked")}}/>
        <Pressable onPress={()=>{console.log("Pressable Component")}} style={{backgroundColor : "green" , padding : 20   }}>
          <Text style={{fontSize : 30 , color : "white" , textAlign : "center"}}>
            Pressable Component
          </Text>
        </Pressable>
        <Button title="Open Modal" onPress={()=>{setOpen(true)}} />
        <Modal visible={open} animationType="slide" presentationStyle="pagesheet" >
          <View style={{padding : 50}}>
          <Button title="Close Modal" onPress={()=>{setOpen(false)}}  />
          </View>
          
        </Modal>
        <View style={{backgroundColor : "pink" , width : 300 , height : 300 , borderWidth : 4 , borderColor : "black" , borderRadius : 20 , padding : 20 }}>
          <Text style={{backgroundColor : "green" , color : "white" , padding : 20 , fontSize : 30   , borderWidth : 3 , borderColor : "white" , borderRadius : 10}}>Box</Text>
        </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    borderWidth: 5, borderColor: "red",
    justifyContent: "center",


  },
  box: {
    backgroundColor: "skyblue",
    justifyContent: "center", alignItems: "center"
  },
  boxText: {
    fontSize: 40,
    fontWeight: "bold",
    color: Platform.OS === "android" ? "blue" : "red"
  }
});