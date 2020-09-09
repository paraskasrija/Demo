import React from 'react';
import { View,Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { _actions } from '../../redux/actions'

// const TYPE_NAME = 'NAME';
// // const type_Password = 'Password';
// const type_Name = (text) => ({

//     type:TYPE_NAME,
//     text 

// })

// const LoginFromTextInput = connect((state) =>( {
//     value:state.Name,
//     // value:state.Password,
// }),(dispatch) =>({

//    onChangeText: (text) => {
//        dispatch(type_Name(text));
//    }

// }))(TextInput )

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        };
    }

    _onSubmit = () => {
        alert(this.state.name)
        this.props.setName(this.state.name)
    }


    render(){
        return(
            <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
                <View style={{ }}>
                <Text>
                    Name
                </Text>
                <TextInput 
                placeholder='Name'
                value={this.state.Name}
                onChangeText={name => this.setState({ name })}
                />
                <Text>
                    Password
                </Text>
                <TextInput placeholder='Password'/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> this._onSubmit()} style={{backgroundColor:'red',marginHorizontal:100}}>
                        <Text style={{textAlign:'center'}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
    // name: state.user.name,

  });
  
  const mapDispatchToProps = (dispatch) => ({
    setName: data => dispatch({ type: _actions._userinfo._setUserinfo, data: data }),

    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);