import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput, Alert } from "react-native";

export default function App() {
  const [newForm, setNewForm] = useState(true);

  const [customerName, setCustomerName] = React.useState();
  const [customerEmail, setCustomerEmail] = React.useState();
  const [projectName, setProjectName] = React.useState();

  const [message, setMessage] = React.useState();

  const handleButtonNewPress = () => {
    setNewForm(false);
  };

  const handleButtonClearPress = () => {
    setCustomerName("");
    setCustomerEmail("");
    setProjectName("");
    setMessage("");
  };

  const handleButtonBackPress = () => {
    //TODO
  };

  const handleButtonSentPress = () => {
    setNewForm(true);
    Alert.alert(
      "Confirmation",
      "The message form has been successfully sent.",
      [
        {
          text: "OK",
          onPress: () => {
            handleButtonClearPress();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 75 }}></View>

      {newForm ? (
        <View style={styles.form}>
          <View style={styles.left_right}>
            <View style={styles.buttonLeft}>
              <Button
                color="lightgray"
                title="Back"
                onPress={handleButtonBackPress}
              />
            </View>
            <View style={styles.buttonRight}>
              <Button
                color="lightgray"
                title="New Form"
                onPress={handleButtonNewPress}
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.form}>
            <View style={styles.left_right}>
              <View style={styles.buttonLeft}>
                <Button
                  color="lightgray"
                  title="Back"
                  onPress={handleButtonBackPress}
                />
              </View>
              <View style={styles.buttonRight}>
                <Button
                  color="lightgray"
                  title="New Form"
                  disabled={!newForm}
                  onPress={handleButtonNewPress}
                />
              </View>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>User Details</Text>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Project Name"
                onChangeText={setProjectName}
                value={projectName}
              />
            </View>

            <View style={styles.left_right}>
              <View>
                <TextInput
                  style={styles.inputLeft}
                  placeholder="Customer Name"
                  onChangeText={setCustomerName}
                  value={customerName}
                />
              </View>

              <View>
                <TextInput
                  style={styles.inputRight}
                  placeholder="Customer Email"
                  onChangeText={setCustomerEmail}
                  value={customerEmail}
                />
              </View>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Message Details</Text>

            <View style={styles.message}>
              <TextInput
                style={{ textAlignVertical: "top" }}
                //placeholder="Message"
                multiline
                numberOfLines={10}
                maxLength={500}
                onChangeText={setMessage}
                value={message}
              />
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.left_right}>
              <View style={styles.buttonLeft}>
                <Button
                  color="lightgray"
                  title="Clear Text"
                  onPress={handleButtonClearPress}
                />
              </View>

              <View style={styles.buttonRight}>
                <Button
                  color="lightgray"
                  title="Sent Form"
                  onPress={handleButtonSentPress}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  left_right: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form: {
    marginVertical: 5,
    backgroundColor: `lightgray`,
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 5,
    marginHorizontal: 20,
  },

  buttonLeft: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },

  buttonRight: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },

  input: {
    backgroundColor: `white`,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginHorizontal: 100,
    marginVertical: 5,
    padding: 5,
  },

  inputLeft: {
    backgroundColor: `white`,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginVertical: 10,
    marginLeft: 25,
    padding: 5,
  },
  inputRight: {
    backgroundColor: `white`,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 25,
    padding: 5,
  },

  title: {
    fontSize: 20,
    margin: 5,
  },

  message: {
    backgroundColor: `white`,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 75,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },

  container: {},
});
