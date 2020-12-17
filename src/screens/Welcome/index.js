import React, {Component} from 'react';
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
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../../components/Constants/theme';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../components/Image/Welcome.png');

 class Welcome extends Component{
    constructor(props) {
        super(props);
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this._handlePressIn = this._handlePressIn.bind(this);
        this._handlePressOut = this._handlePressOut.bind(this);
        this.state = {
            fullName: '',
        }

    }
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
        this._animatedValue = new Animated.Value(1);
    }

    handlePressIn() {
        Animated.spring(this.animatedValue,this._animatedValue, {
            toValue: .5
        }).start()
    }
    _handlePressIn() {
        Animated.spring(this._animatedValue,{
            toValue: .5
        }).start()
    }
    _handlePressOut() {
        Animated.spring(this._animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }
    handlePressOut() {
        Animated.spring(this.animatedValue, this._animatedValue,{
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }
    render(){
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }],
            _transform: [{ scale: this._animatedValue }]
        }
        return(
            <ImageBackground source={bgImage} style={{height: '100%', width: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView style={{flex: 1,}}>
                            <Text style={{fontSize: 40, color: 'white', marginVertical: 200,textAlign:'center'}}>{'Welcome,'}</Text>  
                            <View  style={{alignContent:'center',alignItems:'center'}}>
                            <TextInput
                  placeholder="Enter a String"
                  underlineColorAndroid='transparent'
                  style={{    textAlign: 'left',
                  height:55,
                  fontSize:18,
                  width:300,
                  borderBottomWidth: 2,
                  borderColor:'black',
                  marginBottom: 10,
                  color:'black'}}
                //   keyboardType='email-address'
                  placeholderTextColor ='black'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={this.state.fullName}
                  onChangeText={fullName => this.setState({ fullName })}
                  returnKeyType="next"
                               />
                            </View>
                     
                            <View style={{alignContent:'center',alignItems:'center'}}>
                                <TouchableOpacity
                                 onPress={()=> this.props.navigation.navigate('Login',{p1:this.state.fullName})} 
                                
                                onPressIn={this.handlePressIn}
                                onPressOut={this.handlePressOut}>
                                    <Animated.View style={[animatedStyle._transform]}>
                                    <View  style={{ backgroundColor: theme.colors.primaryCol1,width:350,height:50,justifyContent:'center',alignItems:'center',borderRadius:30,marginTop:100}}>
                                       <Text style={{color:'white'}}>
                                       Description
                                       </Text>
                                    </View>
                                    </Animated.View>
                                </TouchableOpacity>
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
  
  export default Welcome;