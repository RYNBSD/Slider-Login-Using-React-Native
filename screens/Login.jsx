import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeBorder, setActiveBorder] = useState(false);

  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior='padding'
      >
        <View style={styles.container}>
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={styles.title}>Welcome back!</Text>
          </View>
          <View style={{
            borderBottomColor: activeBorder ? "#3AD29F" : "#f1f1f1",   
            ...styles.label
            }}
          >
            <Text style={styles.text}>Username</Text>
            <View>
              <TextInput
                defaultValue={username}
                onFocus={() => setActiveBorder(username.length > 0)}
                onChange={text => setUsername(text)}
                style={{
                  backgroundColor: "#fff",
                  marginTop: 10,
                }}
              />
              {
                (username.length > 0) && <AntDesign name="checkcircle" size={24} color="#3AD29F" />
              }
            </View>
          </View>
          <View style={{
            borderBottomColor: activeBorder ? "#3AD29F" : "#f1f1f1",   
            ...styles.label
            }}
          >
            <Text style={styles.text}>Password</Text>
            <View>
              <TextInput
                defaultValue={password}
                onChange={text => setPassword(text)}
                secureTextEntry={true}
                style={{
                  backgroundColor: "#fff",
                  marginTop: 10,
                }}
              />
              {
                (password.length > 0) && <AntDesign name="checkcircle" size={24} color="#3AD29F" />
              }
            </View>
          </View>
          <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between', paddingTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <BouncyCheckbox
                fillColor="#3AD29F"
                onPress={(isChecked) => {}}
              />
              <Text style={{ color: "#4B5461" }}>Remember me</Text>
            </View>
            <Text style={{ color: "#3AD29F" }}>Forgot password?</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "90%",
    height: "80%",
    marginHorizontal: "5%",
  },
  title: {
    fontSize: 30,
    color: "#3E4A59",
    marginTop: 20,
    paddingLeft: 10
  },
  label: {
    borderRadius: 5,
    borderBottomWidth: 2,
    marginTop: 30,
  },
  text: {
    fontSize: 12,
    color: "#3E4A59",
  },
});