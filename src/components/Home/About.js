import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
const {width ,height} =Dimensions.get('window');
export default class About extends Component {
    
    render() {
        const { title, aboutTitle, aboutSubTitle, 
            infoList, item, borderView, titleInfo, subtitleInfo, imageInfo,
        viewImage
        } = styles;
        return (
            <View>
                <View style={title}>
                    <Text style={aboutTitle}>About Me</Text>
                    <Text style={aboutSubTitle}>A FEW WORDS ABOUT ME</Text>
                </View>
                <View style={infoList}>
                    <View style={item}>
                        <Text style={titleInfo}>JOB TITLE</Text>
                        <Text style={subtitleInfo}>Mobile App Developer / Web Developer</Text>
                    </View>
                    <View style={borderView}></View>
                    <View style={item}>
                        <Text style={titleInfo}>NAME</Text>
                        <Text style={subtitleInfo}>Le Van Nam</Text>
                    </View>
                    <View style={borderView}></View>
                    <View style={item}>
                        <Text style={titleInfo}>SEX</Text>
                        <Text style={subtitleInfo}>Male</Text>
                    </View>
                    <View style={borderView}></View>
                    <View style={item}>
                        <Text style={titleInfo}>ADDRESS</Text>
                        <Text style={subtitleInfo}>Vinh university</Text>
                    </View>
                    <View style={borderView}></View>
                    <View style={item}>
                        <Text style={titleInfo}>EMAIL ADDRESS</Text>
                        <Text style={subtitleInfo}>vannam200996@gmail.com</Text>
                    </View>
                    <View style={borderView}></View>
                </View>
                <View style={viewImage}>
                    <Image source={require('../../media/images/coverIamge.jpg')} style={imageInfo}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
    },
    aboutSubTitle:{
        fontSize: 13,
        color: '#43c2ed',
    },
    aboutTitle:{
        fontSize: 35,
    }, 
    infoList:{
        
    },
    item:{
        padding: 15,
    },
    borderView:{
        height: 1,
        borderWidth: 0.5,
        borderColor: '#43c2ed',
    },
    titleInfo:{
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize:15,
        opacity: 0.8
    },
    subtitleInfo:{
        color: 'gray'
    },
    imageInfo:{
        width : width - 70,
        height : height/2
    },
    viewImage:{
        padding:15,
        borderWidth:1,
        borderColor: 'gray',
        margin: 20,
        borderRadius: 10,
    }
})