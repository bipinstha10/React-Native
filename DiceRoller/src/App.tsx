import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Vibration } from 'react-native';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import DiceOne from '../assets/dice-six-faces-one.png';
import DiceTwo from '../assets/dice-six-faces-two.png';
import DiceThree from '../assets/dice-six-faces-three.png';
import DiceFour from '../assets/dice-six-faces-four.png';
import DiceFive from '../assets/dice-six-faces-five.png';
import DiceSix from '../assets/dice-six-faces-six.png';

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps):JSX.Element =>{
  return(
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  //<ImageSourcePropType> doesn't allow any random string. It only allows the string that provides an image.

  const rollDiceOnTap = () =>{
    let randomNumber = Math.floor(Math.random() * 6 ) + 1;

    switch(randomNumber)
    {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    Vibration.vibrate(50);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dice Roller</Text>
      <TouchableOpacity onPress={rollDiceOnTap}>
          <Dice imageUrl={diceImage} />
      </TouchableOpacity>
      <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnTxt}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  heading: {
    color: '#212645',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
    borderColor: '#212645',
    fontSize: 16,
    color: '#212645',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 24,
  },
});

export default App;
