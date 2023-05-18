import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>No New Notifications</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fc5e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#16537e',
    marginBottom: 200,
  },
  box: {
    width: '80%',
    backgroundColor: '#16537e',
    borderRadius: 10,
    padding: 20,
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default NotificationsScreen;
