
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App(): React.JSX.Element {
  const [randomBg, setRandomBg] = useState('#ffffff');

  const generateColor = ()=>{
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++)
    {
      color += hexRange[Math.floor(Math.random()*16)];
    }
    setRandomBg(color);
  };

  return(
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Change Color</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#f98400',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase',
  }
});

export default App;
