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
            data:''
        };
    }

    _onSubmit = () => {
        alert(this.state.name)
        this.props.setName(this.state.name)
    }
    setData() {
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "name": this.state.name,
            }),
        });
    }

    _getData() {
        fetch(`https://reqres.in/api/unknown/2`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data: responseJson.data.name, countFlag: true })
            console.log("data", responseJson.data.name)
          })
          .catch((error) => {
            console.error(error);
          });
      }

    functionCombined() {
        this.setData();
        this._onSubmit();
    }  
  


    render(){
        const { isShowDetail, username, data, countFlag } = this.state;
        return(
            <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
                <View style={{ }}>
                <Text>
                    Name
                </Text>
                <TextInput 
                placeholder='Name'
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                />
                <Text>
                    Password
                </Text>
                <TextInput placeholder='Password'/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> this.functionCombined()} style={{backgroundColor:'red',marginHorizontal:100}}>
                        <Text style={{textAlign:'center'}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this._getData()} style={{backgroundColor:'red',marginHorizontal:100,margin:10}}>
                        <Text style={{textAlign:'center'}}>
                            Get
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text>
                            name:{data}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
   
    name: state.user.name,

  });
  
  const mapDispatchToProps = (dispatch) => ({
    setName: data => dispatch({ type: _actions._userinfo._setUserinfo, data: data }),

    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);