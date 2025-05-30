import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Bipin Shrestha',
      status: 'Human being',
      imageUrl: 'https://instagram.fktm21-1.fna.fbcdn.net/v/t51.2885-19/465806658_436146689505506_4924437944716714244_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fktm21-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QGh4e5ZLrdYisphsstknTiyMLq-_bkXNpcqsiJS4qhBx8xyNi2DgJI5gFAQ7UfptD30buP-Tk7cMne1O0twyfNH&_nc_ohc=UmVuPuXHSH8Q7kNvwGb-1DN&_nc_gid=J9-llBYOed3KIMHraHg8JA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfLGnn1lmd18Q5klTGiT0SJJ6YY8fMJuJeOGqJMpBdfS0Q&oe=683D8895&_nc_sid=7a9f4b',
    },
    {
      uid: 2,
      name: 'Prem Shrestha',
      status: 'Human being',
      imageUrl: 'https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-1/338359864_2329688120524365_8408834719786185361_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=PmE8fOmCSvYQ7kNvwEhzPDH&_nc_oc=AdnjXvxGHRnuVIoRet6pwdBr8ocDlZ-P_0beVaeealL2qnze_FOZSNO3qeR5yPKqoxAvE76sEh__Yh-rYg164Hsl&_nc_zt=24&_nc_ht=scontent.fktm21-2.fna&_nc_gid=ulP0-NkVBu4_Grle-bvPbg&oh=00_AfKxIRoef_nr4NnQ2xes9XkiHCa43Z-XW8JngPXLbfYuwQ&oe=683DB249',
    },
    {
      uid: 3,
      name: 'Shishir Basnet',
      status: 'Human being',
      imageUrl: 'https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-1/211866867_325545422445710_2015248768745800717_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=OMMtKyshFy4Q7kNvwFUI7Vn&_nc_oc=AdmpCxwLJbPPj4NNm_A0gcLeM0BNrLszgxieNWCD8VBPETpm1ZKmgFkZXuXLARlibwEh8W6gcBYBcOVDCU70A6qJ&_nc_zt=24&_nc_ht=scontent.fktm21-1.fna&_nc_gid=gGAjdmaHpOluBH68-rbd0w&oh=00_AfJDS-kOQnKQrOSxlcY5BL0Vb6o796T_tjnIaIPvRnm-oQ&oe=685F3F10',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name,status, imageUrl})=>(
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 14,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: 600
  },
  userStatus: {
    fontSize: 12,
  },
})