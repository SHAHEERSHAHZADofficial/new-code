import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { auth,createUserWithEmailAndPassword,sendEmailVerification ,db,setDoc,doc,collection,signInWithCredential,firebaseConfig } from "../file.js";
import Logo from "../images/logo.png"
export default function SignUp({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const [userRole, setUserRole] = useState("Needy")

  const handleSignUp = async () => {
  await  createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed in 
        const user = userCredential.user;

    //    await setDoc(doc(db, "User", user.uid), {
    //     UserName:username,
    //     email:user.email,
    //     UID:user.uid,
    //   });

       let users = {
        UserName:username,
        email:user.email,
        UID:user.uid,
        Role:userRole
    };
    // const collectionRef  = doc(db, 'Users', user.uid);
    // const collectionRef = doc(collection(db, "Users"));
    await setDoc(doc(collection(db, "Users")),users)
alert("SignUp successful")
navigation.navigate("login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
    // sendEmailVerification(auth.currentUser)
    //   .then(() => {
    //    alert("Email has been sended")
    //   });
      
  }











  return (
    <ScrollView>
     <View style={styles.container}>

 
      <StatusBar style="auto" />
      <Image style={styles.image} source={Logo} />

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="UserName"
          placeholderTextColor="#003f5c"
          onChangeText={ text => setUsername(text) }  />
      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}  />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
 
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
     
      <TouchableOpacity onPress={handleSignUp} style={styles.signupBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

<Text >Already Registered <TouchableOpacity style={{color:"red"}} onPress={() => navigation.navigate('login')}>Login</TouchableOpacity> </Text>

    </View>
    </ScrollView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    // padding:"100"
  },
 

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "50%",
    // paddingBottom:"1",
    // height: 45,

    // marginBottom: 20,
    alignItems: "center",
    borderWidth: 5,
},

  TextInput: {
    // height: 50,
    width: "100%",

    // flex: 1,
    borderRadius: 30,

    padding: 10,
    // marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  image: {
    marginBottom: 30,
    width: 300,
    height: 250,
    padding: 50
  },
 
 signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    // backgroundColor: "#00000",
  },
});