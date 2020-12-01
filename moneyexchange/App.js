/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [isVNDtoUSD, setIsUSDtoVND] = useState(true)
  const [value, setValue] = useState(0)
  const [rate, setRate] = useState(23050.00)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ padding: 4 }}>
        <Text style={{ fontSize: 24, margin: 4 }}>Please enter the value of currency you want to convert</Text>
        <TextInput
          value={value}
          onChangeText={text => { setValue(text) }}
          keyboardType="numeric"
          style={{ borderWidth: 1, borderColor: 'green', borderRadius: 8, margin: 8 }}
        ></TextInput>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'green', borderRadius: 8, margin: 8, backgroundColor: isVNDtoUSD ? 'green' : 'white' }}
          onPress={() => { setIsUSDtoVND(true) }}>
          <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>VND to USD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'green', borderRadius: 8, margin: 8, backgroundColor: isVNDtoUSD ? 'white' : 'green' }}
          onPress={() => { setIsUSDtoVND(false) }}>
          <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>USD to VND</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>Current currency:</Text>
        <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>{value} {isVNDtoUSD ? "VND" : "USD"}</Text>
        <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>Conversion currency:</Text>
        <Text style={{ fontSize: 16, margin: 4, textAlign: 'center' }}>{isVNDtoUSD ? (value / rate) : (value * rate)} {isVNDtoUSD ? "USD" : "VND"}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
