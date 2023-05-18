//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native';

const HomeScreen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerT}></Text>
      <Text style={styles.headerT}>CRM HOME</Text>
       <Text style={styles.headerT}></Text>
      <View style={styles.tapWrapper}>
        <TouchableOpacity
             onPress={() => {
              navigation.navigate( "Dash" );
             }}
            >
            <Text style={styles.tap}>Dashboard</Text>
        </TouchableOpacity>
        <Text style={styles.tap}>File Up</Text>
        <TouchableOpacity
             onPress={() => {
              navigation.navigate( "Message" );
             }}
            >
            <Text style={styles.tap}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
             onPress={() => {
              navigation.navigate( "Notification" );
             }}>
            <Text style={styles.tap}>Notifications</Text>
        </TouchableOpacity>
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
export default HomeScreen;
