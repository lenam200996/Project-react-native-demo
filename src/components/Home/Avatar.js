import React, { Component } from 'react';
import { View , Text , Image , StyleSheet ,ImageBackground  } from 'react-native';
 
export default class  extends Component {
    render() {
        const { container, imageBackground, textInfo} = styles;
        return (
           <View style={container}>
                <ImageBackground source={require('../../media/images/coverImage.jpg')}
                    style={imageBackground}
                >
                    <Text style={textInfo}>I'm Nam</Text>
                </ImageBackground>
                
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200 , 
        height: 200,
        backgroundColor: 'gray'
    },
    imageBackground:{
        width: 200,
        height: 200,
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo:{
        color: 'white'
    }
})