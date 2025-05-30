import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
          uri: 'https://images.pexels.com/photos/30802047/pexels-photo-30802047.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        }}
        style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Sowyambunath Temple</Text>
          <Text style={styles.cardLabel}>Soyambu, Kathmandu</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cumque totam perferendis dolores!
          </Text>
          <Text style={styles.cardFooter}>12km away</Text>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,

  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 12,
  }
})