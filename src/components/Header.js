import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({ props }) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <FontAwesome size={35} name='angle-left' color='black' />
                <Image style={styles.image} source={require('../assets/images/hummingbird.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.options.title}</Text>
                    <Text style={styles.subTitle}>Last Seen 12:40 AM</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Foundation name='video' color='black' size={24} />
                <Ionicons name='call' color='black' size={20} />
                <Entypo color='black' size={20} name='dots-three-vertical' />
            </View>
        </View>

    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingRight: 8,
        paddingLeft: 8,
        elevation: 4, // Elevation to add shadow on Android
        shadowColor: 'black', // Shadow color for iOS
        shadowOpacity: 0.5, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow radius for iOS
        shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
        top: 0,
        height: 72,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 8,
    },
    leftContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 48,
        margin: 8
    },
    textContainer: { paddingLeft: 8 },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1C1B1F'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#9C9B9B'
    }

})