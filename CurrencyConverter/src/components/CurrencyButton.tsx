import React from 'react';
import type { PropsWithChildren } from 'react';
//in case we want 100% surity that whatever the data you are passing in this component that should be of particular type then this is being used

import {View, Text, StyleSheet} from 'react-native';

const CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 4,
  },
  country: {
    fontSize: 28,
    color: '#2d3436',
  },
});

export default CurrencyButton