import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image} from 'react-native';
const {width ,height} = Dimensions.get('window');
export default class WhatIDo extends Component {
    render() {
        const { title, aboutTitle, aboutSubTitle,
             imageBackground, titleItem, infoItem,
              iconItem, textItem,
            infoText, infoTextTitle, wrapper
            } = styles;
        return (
            <ImageBackground source={require('../../media/images/coverIamge.jpg')}
                style={imageBackground}
            >
                <View style={title}>
                    <Text style={aboutTitle}>What I Do ?</Text>
                    <Text style={aboutSubTitle}>MY WORK DETAILS</Text>
                </View>
                <View style={wrapper}>
                    <Text style={infoTextTitle}>Development</Text>  
                    <View style={infoItem}>
                        <View style={iconItem}>
                            <Image source={require('../../media/images/icons/user.png')}/>
                        </View>
                        <View style={textItem}>
                            <Text style={infoText}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={wrapper}>
                    <Text style={infoTextTitle}>Development</Text>
                    <View style={infoItem}>
                        <View style={iconItem}>
                            <Image source={require('../../media/images/icons/user.png')} />
                        </View>
                        <View style={textItem}>
                            <Text style={infoText}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Text>
                        </View>
                    </View>
                </View>
                <View style={wrapper}>
                    <Text style={infoTextTitle}>Development</Text>
                    <View style={infoItem}>
                        <View style={iconItem}>
                            <Image source={require('../../media/images/icons/user.png')} />
                        </View>
                        <View style={textItem}>
                            <Text style={infoText}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../../media/images/coverIamge.jpg')}  style={{width: width, height: 250}}/>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
    },
    aboutSubTitle: {
        fontSize: 13,
        color: '#43c2ed',
    },
    aboutTitle: {
        fontSize: 35,
        color: 'white'
    },  
    imageBackground: {
        width: width,
        
        // opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoItem:{
        width:width,
        flexDirection: 'row',
        justifyContent: 'space-between',
      
    },
    titleItem:{
        width:width,
    },
    iconItem:{
        flex: 1,
        borderWidth: 8,
        borderColor: 'gray',
        borderRadius: 35,
        width : 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textItem:{
        flex: 5,
        marginLeft: 10,
        padding:5
    },
    infoText:{
        color:'white',
        fontSize: 15,
    },
    infoTextTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    wrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
})