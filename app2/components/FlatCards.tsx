import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Three</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>One</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row', // by default it will be column
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 100,
    height: 100,
    borderRadius: 4
  },
  cardOne: {
    backgroundColor: '#fa5246'
  },
  cardTwo: {
    backgroundColor: '#faae2b'
  },
  cardThree: {
    backgroundColor: '#ffa8ba'
  }
})