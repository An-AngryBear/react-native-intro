import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class GameUI extends Component {
    render() {
        return <Image className= 'ui' source={require('../imgs/ui-bg.png')} style={styles.overlay}>
        </Image>
    }
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1
    },
});

export default GameUI;