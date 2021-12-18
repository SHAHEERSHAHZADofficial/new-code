import React, { useContext, useState } from "react";
import { View , Text ,TextInput ,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({navigation}){
    const {state , dispatch} = useContext(GlobalContext)
    let [nameInp , setNameInp] = useState('')

//     function Needy({navigation}){
// navigation.push("SignUp")
//     }

    return(
    
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>Branch Manager</TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>Needy</TouchableOpacity>
            </View>
  
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Home;