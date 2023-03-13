import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HelloText from './HelloText';

export default function App() {

  let user = 'Supachai'

  const onSignIn = () => console.log('Hello')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>your app!</Text>
      <HelloText username={user} />
      <HelloText/>
      <Button title='Sign In' onPress={onSignIn} />
      <StatusBar style="auto" />
    </View>
  );
}

function LoginForm() {
  return(
    <Text>Login</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 80,
    color: 'white',
    backgroundColor: 'red',
    padding: 10,
  }
});
