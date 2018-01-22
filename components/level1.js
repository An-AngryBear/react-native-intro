import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Level1 extends Component {
    render() {
        return <Image className= 'ui' source={require('../imgs/stonefloor.png')} style={styles.container}>
        </Image>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover'
    },
});

export default Level1;