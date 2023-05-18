import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {View, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerT}></Text>
      <Text style={styles.headerT}>CRM HOME</Text>
       <Text style={styles.headerT}></Text>
      <View style={styles.tapWrapper}>
        <Text style={styles.tap}>Dashboard</Text>
        <Text style={styles.tap}>File Up</Text>
        <Text style={styles.tap}>Message</Text>
        <Text style={styles.tap}>Notifications</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fc5e8',
  },
  headerT: {
    color: '#16537e',
    fontSize: 50,
    alignSelf: 'center',
  },
  tapWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tap: {
    backgroundColor: '#16537e',
    width: 145,
    height:145,
    margin:20,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize:25,
  }
});
