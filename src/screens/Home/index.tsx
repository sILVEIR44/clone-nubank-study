import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '@/assets/logo.png';
import setting from '@/assets/setting.png';
import mastercard from '@/assets/mastercard.png';

export function Home() {
  return (
    <View style={styles.container}>
        <View  style={styles.header}>
            <Image  source={logo}/>
            <Image source={setting}/>
        </View>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View/>
                <Image source={mastercard}/>
            </View>
        </View>
        <View style={styles.cardDetails}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    alignItems: 'center',
    paddingHorizontal: 30,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 40
  },
  card: {
    width: '100%',
    height: 190,
    backgroundColor: '#9500F6',
    borderRadius: 20,
    elevation: 5,   
    marginBottom: 20, 
  },
  cardDetails: {
    width: '100%',
    height: 190,
    backgroundColor: '#9500F6',
    borderRadius: 20,
    elevation: 5, 
  },
  cardHeader: {
    flexDirection: "row",
    
  }
});
