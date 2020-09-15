import { _actions } from '../../redux/actions';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    ImageBackground,
    TextInput,
    Animated,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

// ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// THEME IMPORT
import * as theme from '../../components/Constants/theme';

// HELPER IMPORT
// import Helper from '../../Constants/helper';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../components/Image/SignIn.png');

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
async function _test(){
    console.log('function')
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const user = await response.json();
    console.log('user resolved')
    return user;   

}
console.log("before calling _test")
 a = _test();
 console.log("after _test")
 console.log(a);
 a.then(dtaa => console.log(data))
 console.log("last")




 class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {fadeIn: new Animated.Value(0),
            fadeOut: new Animated.Value(1),
           };
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
        this._getData();
        this.props.navigation.navigate('Dashboard')
    }  
  


    render(){
        const { isShowDetail, username, data, countFlag } = this.state;
        return(
            <ImageBackground source={bgImage} style={{height: '100%', width: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView style={{flex: 1, padding: 20}}>
                            {/* HEADER */}
                            {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <MaterialIcons name={'chevron-left'} size={30} color={'white'} />
                            </TouchableOpacity> */}

                            {/* SOME MESSAGE */}
                            <Text style={{fontSize: 30, color: 'white', marginVertical: 130}}>{'Welcome\nBack'}</Text>

                            {/* FORM */}
                            <TextInput
                                style={{
                                    ...styles.inputStyle,
                                }}
                                placeholder={'Email'}
                                placeholderTextColor={'grey'}
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })}
                                >

                               
                                </TextInput>

                            <TextInput
                                style={{
                                    ...styles.inputStyle,
                                    marginTop: 50,
                                }}
                                placeholder={'Password'}
                                placeholderTextColor={'grey'}></TextInput>

                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: theme.colors.primaryCol1, marginVertical: 50}}>Sign in</Text>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <TouchableOpacity
                                  onPress={()=> this.functionCombined()} 
                                        style={{
                                            height: 70,
                                            width: 70,
                                            borderRadius: 40,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: theme.colors.primaryCol1,
                                        }}>
                                        <MaterialIcons name={'arrow-forward'} size={30} color={'white'} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity style={{...styles.textBtn}} >
                                    <Text style={{...styles.textBtnLabel}}>Sign up</Text>
                                </TouchableOpacity>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <TouchableOpacity style={{...styles.textBtn}}>
                                        <Text style={{...styles.textBtnLabel}}>Forgot Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 15,
        color: 'black',
        width: '100%',
        marginTop: 100,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: theme.colors.primaryCol1,
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 15,
        color: theme.colors.primaryCol1,
    },
});

const mapStateToProps = (state) => ({
   
    name: state.user.name,

  });
  
  const mapDispatchToProps = (dispatch) => ({
    setName: data => dispatch({ type: _actions._userinfo._setUserinfo, data: data }),

    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);