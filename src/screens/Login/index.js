import React from 'react';
import { View,Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Login extends React.Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
                <View style={{ }}>
                <Text>
                    Name
                </Text>
                <TextInput placeholder='Name'/>
                <Text>
                    Password
                </Text>
                <TextInput placeholder='Password'/>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'red',marginHorizontal:100}}>
                        <Text style={{textAlign:'center'}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default Login;