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

// import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
// import Vector from "./assets/splash.png"
// import { useState } from "react";
// import Box from './components/Box';
// import List from './components/List';
// import Inputs from './components/Inputs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';



// export default function App() {
//   const [open, setOpen] = useState(false)
//   const { width, height } = useWindowDimensions();
//   const Stack = createNativeStackNavigator();
//   return (
//     <View style={[styles.container]}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='Home' component={Home} />
//           <Stack.Screen name='Login' component={Login} />
//           <Stack.Screen name='Signup' component={Signup} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//   },
//   box: {
//     backgroundColor: "skyblue",
//     justifyContent: "center", alignItems: "center"
//   },
//   boxText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: Platform.OS === "android" ? "blue" : "red"
//   }
// });

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from 'react';
import Box from './components/Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

  const [open, setOpen] = useState(false);

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();


  return (

    <View style={[styles.container]}>

      <NavigationContainer>
        {/* <Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Login' component={Login} />
				</Stack.Navigator> */}


        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Login' component={Login} />
          <Drawer.Screen name='Signup' component={Signup} />
        </Drawer.Navigator>

      </NavigationContainer>

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})