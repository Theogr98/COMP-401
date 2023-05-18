import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DashB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          First Name: Test {'\n'}
          Last Name: Test {'\n'}
          Company: Test Ltd
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          Total Sale: 69 {'\n'}
          Total Revenue: $5,000,000 {'\n'}
          Net Profit: $2,300,000
        </Text>
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
    marginBottom: 100,
  },
  box: {
    width: '80%',
    backgroundColor: '#16537e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DashB;