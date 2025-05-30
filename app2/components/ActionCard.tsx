import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink:string)
  { 
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Block Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer} >
          <Text style={styles.headerText}>
            Want to Know let,var, and const ?
          </Text>
        </View>
          <Image source={{uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1703298968470/b289de22-df63-48f6-8c56-dfb8bad43a99.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'}}
          style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nostrum aspernatur amet id quis eaque recusandae a consectetur. Repudiandae, quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, ut?
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://bipinstha019.hashnode.dev/var-let-const-to-declare-a-variable-in-js')}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/bipinshrestha019/')}>
              <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card:{
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width:1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600', 
  },
  cardImage: {
    height:150,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
})