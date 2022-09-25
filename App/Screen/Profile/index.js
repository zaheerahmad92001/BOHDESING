import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    Dimensions,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../Components/PixelRatio';
import { Card, Icon, Radio, Item } from 'native-base';
import Navigation from '../../Service/Navigation';

import Header from '../../Components/Header';
import { COLOR } from '../../Constants/Color';
import { FONT } from '../../Constants/Font';
import Slider from '../../Components/Slider';
const { height, width } = Dimensions.get('screen');




// create a component
const Profile = () => {

    const [edit, setedit] = useState(false)


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>

                <Text style={styles.text}>My Profile</Text>
                <Image source={require('../../Assets/384174272.png')}
                    style={{
                        height: moderateScale(100),
                        width: moderateScale(100),
                        
                    }} />
                <Pressable style={styles.button}>
                    <Text style={[styles.text, { color: COLOR.white }]}>Upload</Text>
                </Pressable>
                <Text style={styles.text}>Name</Text>
                <TextInput value='Name' style={styles.input} color={COLOR.fontColour} editable={edit ? true : false} />
                <Text style={styles.text}>Email</Text>
                <TextInput value='Email' style={styles.input} color={COLOR.fontColour} editable={edit ? true : false} />
                <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                <Pressable style={styles.button} onPress={() => setedit(true)}>
                    <Text style={[styles.text, { color: COLOR.white }]}>Edit</Text>
                </Pressable>
                {
                    edit ?
                        <Pressable style={[styles.button,{marginLeft:moderateScale(10)}]} onPress={() => setedit(false)}>
                            <Text style={[styles.text, { color: COLOR.white }]}>Update</Text>
                        </Pressable>
                    : null
                }
                </View>
            </View>




        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: FONT.primaryFontBold,
        fontSize: moderateScale(15),
        paddingVertical: moderateScale(10)
    },
    input: {
        borderColor: COLOR.fontColourLight,
        borderWidth: 1,
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(10)
    },
    button: {
        backgroundColor: COLOR.themeColour,
        alignItems: 'center',
        width: '20%',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(15)

    }


});

//make this component available to the app
export default Profile
