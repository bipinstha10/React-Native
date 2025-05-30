import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native';
function AppPro(): JSX.Element
{ 
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.lightText : styles.darkText } >Heeelllo...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center', //horizontal positioning little bit different from the web
    justifyContent: 'center' // vetical positioning 
  },
  lightText: {
    color: '#FFF'
  },
  darkText: {
    color: '#000'
  }
})

export default AppPro;
