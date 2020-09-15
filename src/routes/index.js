import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { _screens } from '../screens';

const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={_screens._Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={_screens._Login} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={_screens._Dashboard} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;










































{/* <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
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
    <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
        <Text>
            go to main
        </Text>
        </TouchableOpacity>
    </View>
</View>
</View> */}