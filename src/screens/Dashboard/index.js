
// import { View,Text, BackHandler} from 'react-native';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import React, { Component } from 'react';
// import {database,firebase} from '@react-native-firebase/database';

// // const reference = database().ref('/users/123');
// // const usersCollection = firestore().collection('Users');



// class Dashboard extends Component {

//     constructor(prop){
//         super(prop);
//         this.state = ({
//             name : '' ,
//             lastName : ''
//         })
//     };
//     writeUserData(name,lastName){
//         firebase.database().ref('Users/').set({
//            name : "dfdf",
//            lastName: "dfsd"
//         }).then((data)=>{
//             //success callback
//             console.log('data ' , data)
//         }).catch((error)=>{
//             //error callback
//             console.log('error ' , error)
//         })
//     }

//     render(){

//         return(
//             <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
//              <TextInput
//              placeholder='enter name'
//              onchangeText = {(name) => this.setState({name})}
//              />
//               <TextInput
//              placeholder='enter lastname'
//              onchangeText = {(lastName) => this.setState({lastName})}
//              />
//              <View>
//                  <TouchableOpacity style={{backgroundColor:'blue'}} onPress = {() => this.writeUserData(this.state.name,this.state.lastName)}>
//                      <Text style={{textAlign:'center'}}>
//                          on
//                      </Text>
//                  </TouchableOpacity>
//              </View>
//             </View>
//         );
//     }
// }

//   export default Dashboard;





import React, { Component } from 'react';
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
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { database, firebase } from '@react-native-firebase/database';
// const reference = database().ref('/users/123');
// const usersCollection = firestore().collection('Users');
// ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// THEME IMPORT
import * as theme from '../../components/Constants/theme';

// // HELPER IMPORT
// import Helper from '../../components/Constants/helper';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../components/Image/SignUp.png');

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            count: 0
        };

    }

    _incrementCount = () => {
        this.setState({ count: this.state.count + 1 }, ()=> console.log("count", this.state.count));
      }

    static navigationOptions = {
        headerShown: false,
    };
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    handlePressIn() {
        Animated.spring(this.animatedValue, {
            toValue: .5
        }).start()
    }
    handlePressOut() {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }

    // LIFECYCLE METHODS
    componentDidMount = () => { 
        this._incrementCount()
    };

    writeUserData(Name, Email, Password) {
        this._incrementCount()
        firebase.database().ref('Users/').push({
            id: this.state.count,
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    render() {
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }]
        }
        return (
            <ImageBackground source={bgImage} style={{ height: '100%', width: '100%' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={{ flex: 1, padding: 20 }}>
                                {/* HEADER */}
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <MaterialIcons name={'chevron-left'} size={30} color={'white'} />
                                </TouchableOpacity>

                                {/* SOME MESSAGE */}
                                <Text style={{ fontSize: 30, color: 'white', marginTop: 80, marginBottom: 40 }}>{'Create\nAccount'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder='Name'
                                    placeholderTextColor='white'
                                    // value={this.state.Name}
                                    onChangeText={(text) => this.setState({ Name: text })} />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder='Email'
                                    placeholderTextColor='white'
                                    onChangeText={(text) => this.setState({ Email: text })}
                                />
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder='Password'
                                    placeholderTextColor='white'
                                    onChangeText={(text) => this.setState({ Password: text })} />

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                    <Text style={{ fontSize: 15, color: 'white', marginVertical: 50 }}>Sign up</Text>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            onPress={() => this.writeUserData(this.state.Name, this.state.Password, this.state.Email)}
                                            onPressIn={this.handlePressIn}
                                            onPressOut={this.handlePressOut}
                                        >
                                            <Animated.View style={[animatedStyle]}>
                                                <View style={{ backgroundColor: theme.colors.primaryCol1, height: 70, width: 70, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                    <MaterialIcons style={{}} name={'arrow-forward'} size={30} color={'white'} />
                                                </View>
                                            </Animated.View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ ...styles.textBtn }}>
                                        <Text style={{ ...styles.textBtnLabel }}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 15,
        color: 'white',
        width: '100%',
        marginTop: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 15,
        color: 'white',
    },
});

export default SignUp;