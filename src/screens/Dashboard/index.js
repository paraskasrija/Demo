
import { View,Text, BackHandler} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import {database,firebase} from '@react-native-firebase/database';

// const reference = database().ref('/users/123');
// const usersCollection = firestore().collection('Users');



class Dashboard extends Component {

    constructor(prop){
        super(prop);
        this.state = ({
            name : '' ,
            lastName : ''
        })
    };
    writeUserData(name,lastName){
        firebase.database().ref('Users/').set({
           name : "dfdf",
           lastName: "dfsd"
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    render(){
       
        return(
            <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
             <TextInput
             placeholder='enter name'
             onchangeText = {(name) => this.setState({name})}
             />
              <TextInput
             placeholder='enter lastname'
             onchangeText = {(lastName) => this.setState({lastName})}
             />
             <View>
                 <TouchableOpacity style={{backgroundColor:'blue'}} onPress = {() => this.writeUserData(this.state.name,this.state.lastName)}>
                     <Text style={{textAlign:'center'}}>
                         on
                     </Text>
                 </TouchableOpacity>
             </View>
            </View>
        );
    }
}
  
  export default Dashboard;