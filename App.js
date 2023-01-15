import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginNewUser } from './constants/index';
import { IntroLogin, Login } from './screens/index';
import ButtonApp from './components/ButtonApp';

export default function App() {

  const [newUser, setNewUser] = useState(true);

  useEffect(() => {
    const isNewUser = async () => {
      try {
        const data = await AsyncStorage.getItem(loginNewUser);

        if (data === "false") {
          setNewUser(false);
        }

      } catch (e) {}
    }

    isNewUser();
  });

  const notNewUser = async () => {
    try {
      await AsyncStorage.setItem(loginNewUser, "false");
      setNewUser(false);
    }
    catch (e) {}
  }

  return (
    <>
      <View style={styles.body}>
        {
          newUser ? <IntroLogin notNewUser={notNewUser} /> : <Login />
        }
        {
          newUser ? (
            <View style={styles.container}>
              <View style={styles.skipContainer}>
                <ButtonApp fc={notNewUser} />
                <Text style={styles.skipTerms}>Terms & Conditions</Text>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.skipContainer}>
                <ButtonApp fc={() => {}} />
                <Text style={styles.skipTerms}>New user? <Text style={{ color: "#3AD29F" }}>Signup</Text></Text>
              </View>
            </View>
          )
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',

    paddingVertical: 40,
    backgroundColor: "#f1f1f1",
  },
  container: {
    width: "90%",
    marginHorizontal: "5%",
  },  
  skipContainer: {
    width: "100%",
    gap: 20,
  },
  skipTerms: {
    color: "#707070",
    textAlign: 'center',
    marginTop: 15
  }
})