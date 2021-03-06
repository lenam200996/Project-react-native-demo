import React, { Component } from 'react';
import { ScrollView ,StatusBar} from 'react-native';
import Header from './Header';
import Avatar from './Avatar';
import About from './About';
import WhatIDo from './WhatIDO';

export default class Home extends Component {
    render() {
        return (
         <ScrollView>
                <StatusBar hidden={true}/>
            <Header />
            <Avatar/>
            <About />
            <WhatIDo />
        </ScrollView>
        )
    }
}