
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { launchImageLibrary } from 'react-native-image-picker';
//import storage from '@react-native-firebase/storage';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(null)
  const [showNext, setShowNext] = useState(false)



  const pickImageAndUpload = () => {
    launchImageLibrary({ quality: 0.5 }, (fileobj) => {
      console.log(fileobj)
      // const uploadTask = storage().ref().child(`/userprofile/${Date.now}`).putFile(fileobj.uri)
      // uploadTask.on('state_changed',
      //   (snapshot) => {
      //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     if (progress == 100) alert('image uploaded')

      //   },
      //   (error) => {
      //     alert("error uploading image")
      //   },
      //   () => {
      //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //       setImage(downloadURL)
      //     });
      //   }
      // );


    })
  }
  return (

    <SafeAreaView>
      <KeyboardAvoidingView behavior='position'>
        <View style={styles.box1}>
          <Text style={styles.text}>Welcome to Whatsapp 5.0</Text>
          <Image source={require('../assets/whatsapp.png')} style={styles.img} />
        </View>
        <View style={styles.box2}>
          {!showNext &&
            <>
              <TextInput
                label='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                mode='outlined'
              />
              <TextInput
                label='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                mode='outlined'
              />
            </>
          }
          {showNext ?
            <>
              <TextInput
                label='Name'
                value={name}
                onChangeText={(text) => setName(text)}
                mode='outlined'
              />
              <Button
                mode='contained'
                onPress={() => pickImageAndUpload()}
              >SELECT PROFILE PIC
              </Button>
              <Button
                mode='contained'
                onPress={() => { }}
              >SIGNUP</Button>
            </>
            :
            <Button
              mode='contained'
              onPress={() => setShowNext(true)}
            >NEXT</Button>
          }
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Already have an account ?</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'green',
    margin: 10
  },
  img: {
    width: 200,
    height: 200
  },
  box1: {
    alignItems: 'center'
  },
  box2: {
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    height: '45%'
  }
})