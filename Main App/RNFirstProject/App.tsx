import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HomeScreen from "./screens/Home";
import LoginS from "./screens/Login";
import MessageForm from "./screens/Message";
import DashB from "./screens/Dash";


import NotificationsScreen from "./screens/Notification";

const Stack = createNativeStackNavigator();


export default function LoginScreen() {
  return (
  
    <Stack.Navigator initialRouteName="Login">
     <Stack.Screen name= "Login" component={LoginS}/>
      <Stack.Screen name= "Home" component={HomeScreen}/>
      <Stack.Screen name= "Message" component={MessageForm}/>
      <Stack.Screen name= "Dash" component={DashB}/>
      <Stack.Screen name= "Notification" component={NotificationsScreen}/>
    </Stack.Navigator>
  
  )
  /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        CRM App{"\n"}
        <Text style={[styles.subTitle, { fontFamily: 'OpenSans-Regular' }]}>
          Welcome to the CRM App Demo Version!
        </Text>
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 12,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  forgot: {
    color: '#003f5c',
    marginTop: 20,
  },
});

