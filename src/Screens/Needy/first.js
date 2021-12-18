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
  import { Button } from "react-native";
  import DateTimePicker from '@react-native-community/datetimepicker';
  export default function Info(){
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [cnic, setCnic] = useState()
    const [dob, setDob] = useState()
    const [numofMem, setNumofMem] = useState()
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    

    return(
        <View>
        <View style={styles.inputView}>

        <TextInput
          keyboardType="default"
          style={styles.TextInput}
          placeholder="UserName"
          placeholderTextColor="#003f5c"
          onChangeText={ text => setName(text) }  />
      </View>
      <View style={styles.inputView}>

        <TextInput
         keyboardType="default"
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setFatherName(text)}  />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
        keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setCnic(text)}
        />
      </View>      

      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

</View>
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