import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/dice-six-faces-one.png';
import DiceTwo from '../assets/dice-six-faces-two.png';
import DiceThree from '../assets/dice-six-faces-three.png';
import DiceFour from '../assets/dice-six-faces-four.png';
import DiceFive from '../assets/dice-six-faces-five.png';
import DiceSix from '../assets/dice-six-faces-six.png';


function App(): React.JSX.Element {
  return (
    <Text>Image</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnTxt: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  }
});

export default App;
