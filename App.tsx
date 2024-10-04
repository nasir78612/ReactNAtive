import { View, Text,Button, Alert } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:30,color:'purple'}}>MuhammAd NAsir</Text>
      <View style={{width:200, alignItems:'center', justifyContent:'center'}}>
      <Button title='press me' color="#F2E5BF" onPress={()=>Alert.alert("Welcome to react native")}/>
     </View>
    </View>
  );
};

export default App;