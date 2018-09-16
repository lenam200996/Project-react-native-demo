import React, { Component } from 'react';
import { View , Text , Image , StyleSheet ,ImageBackground ,Dimensions } from 'react-native';
 const {width , height} = Dimensions.get('window');
export default class  extends Component {
    render() {
        const { imageBackground, textInfo, avatar, textInfo_job, imageContact, iconContact} = styles;
        return (
          
                <ImageBackground source={require('../../media/images/coverIamge.jpg')}
                    style={imageBackground}
                >
                    <Image source={require('../../media/images/coverIamge.jpg')} 
                        style={avatar}
                    />
                    <Text style={textInfo}>I'm Nam Le</Text>
                    <Text style={textInfo_job}>Mobile App Developer</Text>
                    <View style={imageContact}>
                        <Image source={require('../../media/images/icons/fb.png')}  style={iconContact}/>
                        <Image source={require('../../media/images/icons/gg.png')}  style={iconContact}/>
                    </View>
                </ImageBackground>
                
      
        )
    }
}

const styles = StyleSheet.create({
   
    imageBackground:{
        width: width,
        height: height / 2,
       // opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo:{
        color: 'white',
         fontSize: 30,
         fontWeight: 'bold',
    },
    avatar:{
        width: 100 ,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        
    },
    textInfo_job:{
        color: '#43c2ed',
        fontSize: 20,
    },
    imageContact:{
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    iconContact:{
        width:40,
        height: 40,
        margin: 10,
    }
})