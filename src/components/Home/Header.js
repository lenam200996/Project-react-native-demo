import React, { Component } from 'react';
import { View , Text , Image ,StyleSheet, Dimensions } from 'react-native';
const {width ,height } = Dimensions.get('window');
export default class Header extends Component {
    render() {
        const { container, icon ,title} = styles;
        return (
            <View style={container}>
                <Image source={require('../../media/images/icons/menu.png')} style={icon}/>
                <Text style={title}>My privy</Text>
                <Image source={require('../../media/images/icons/user.png')} style={icon}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor : 'green',
        width : width,
        height: height / 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    icon: {
        margin: 10,
        width: 30,
        height: 30
    },
    title:{
        color: 'white',
        fontSize: 25,
    }
})