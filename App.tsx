/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/color';
import font from './src/assets/fonts/font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 135,
      }}>
      <FontAwesome name="wechat" size={155} style={{color: colors.red}} />
      <Text
        style={{
          color: colors.red,
          fontFamily: font.style.chalkReg,
          fontSize: font.size.xlg,
          paddingRight: 15,
        }}>
        What's your Lingo
      </Text>
    </View>
  );
};

export default App;
