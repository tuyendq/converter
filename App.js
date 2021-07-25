import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Input } from 'react-native';
import logo from './assets/logo.png'
// import Converter from './Converter';


const Converter = function() {

  const [km, setKm] = useState(0);

  const convertkm2mile = (km) => {
    return (km/1.609).toFixed(2);
  };

  return (
    <>
      {/* <Input 
        type="number"
        value={km}
      /> */}
      {/* <input type="number" value={km}/> */}
      <Text>Result: </Text>
    </>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text>Unit Conversion App</Text>
      <StatusBar style="auto" />
      <Converter />
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
  logo: {
    width: 64,
    height: 64
  }
});
