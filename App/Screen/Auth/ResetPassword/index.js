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
} from 'react-native';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../../Components/PixelRatio';
import { Card, Icon } from 'native-base';
import Navigation from '../../../Service/Navigation';

import { COLOR } from '../../../Constants/Color';
import { FONT } from '../../../Constants/Font';

const { height, width } = Dimensions.get('screen');

// create a component
const Reset = () => {

    
    const [password, setpassword] = useState(false)
    const [password1, setpassword1] = useState(false)
    const [password2, setpassword2] = useState(false)
    
    const [input1, setinput1] = useState(false)
    const [input2, setinput2] = useState(false)
    const [input3, setinput3] = useState(false)

    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <ScrollView showsVerticalScrollIndicator={false}>

            <Image source={require('../../../Assets/bohlogo.png')} style={styles.img} resizeMode= 'stretch' />
                <View style={{ marginBottom: moderateScale(40), marginTop: moderateScale(40) }}>
                    <Text style={styles.text1}>Reset Password</Text>
                    <Text style={styles.text2}>Welcome to Apps</Text>
                </View>
                
                <View style={[styles.view,{marginTop:moderateScale(20)}]}>
                    <TextInput placeholder='Old Password' placeholderTextColor={COLOR.fontColourLight} secureTextEntry={!show2 ? true : false} onKeyPress={() => { setpassword2(true), setinput1(true) }} style={styles.input} />
                    {password2 ?
                        <Pressable onPress={() => setshow2(!show2)}>
                            {!show2 ?
                                <Icon name="eye" type="Entypo" style={styles.icon} />
                                :
                                <Icon name="eye-with-line" type="Entypo" style={styles.icon} />
                            }
                        </Pressable>
                        :
                        <Icon name="key" type="FontAwesome5" style={styles.icon} onPress={() => setshow2(true)} />}

                </View>
                <View style={styles.view}>
                    <TextInput placeholder='New Password' placeholderTextColor={COLOR.fontColourLight} secureTextEntry={!show ? true : false} onKeyPress={() => { setpassword(true), setinput2(true) }} style={styles.input} />
                    {password ?
                        <Pressable onPress={() => setshow(!show)}>
                            {!show ?
                                <Icon name="eye" type="Entypo" style={styles.icon} />
                                :
                                <Icon name="eye-with-line" type="Entypo" style={styles.icon} />
                            }
                        </Pressable>
                        :
                        <Icon name="key" type="FontAwesome5" style={styles.icon} onPress={() => setshow(true)} />}

                </View>
                <View style={[styles.view,{marginBottom:moderateScale(20)}]}>
                    <TextInput placeholder='Confirm Password' placeholderTextColor={COLOR.fontColourLight} secureTextEntry={!show1 ? true : false} onKeyPress={() => { setpassword1(true), setinput3(true) }} style={styles.input} />
                    {password1 ?
                        <Pressable onPress={() => setshow1(!show1)}>
                            {!show1 ?
                                <Icon name="eye" type="Entypo" style={styles.icon} />
                                :
                                <Icon name="eye-with-line" type="Entypo" style={styles.icon} />
                            }
                        </Pressable>
                        :
                        <Icon name="key" type="FontAwesome5" style={styles.icon} onPress={() => setshow1(true)} />}

                </View>
                
                </ScrollView>
            

            <Pressable onPress={() => { Navigation.navigate('Login') }} 
            disabled={ input1 && input2 && input3 == (true) ? false : true }
            style={[styles.press, { backgroundColor: input1 && input2 == (true) ? COLOR.themeColour : COLOR.fontColourLight }]}>
                <Text style={styles.text4}>Reset</Text>
            </Pressable>
            

        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: moderateScale(20)

    },
    text1: {
        color: COLOR.themeColour,
        fontFamily: FONT.primaryFontBold,
        fontSize: moderateScale(18),
        textAlign: 'center'
    },
    text2: {
        fontFamily: FONT.primaryFontLight,
        textAlign: 'center',
        fontSize: moderateScale(15)
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR.fontColour,
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        marginBottom: moderateScale(20)
    },
    icon: {
        fontSize: moderateScale(20),
        color: COLOR.fontColourLight
    },
    text3: {
        color: COLOR.fontColourLight,
        textAlign: 'right',
        fontFamily: FONT.primaryFontLight,
        marginBottom: moderateScale(30)
    },
    press: {
        alignItems: 'center',
        borderRadius: moderateScale(5),
        padding: moderateScale(10),
       
    },
    text4: {
        color: COLOR.white,
        fontFamily: FONT.primaryFontBold,
    },
    input: {
        width: '90%',
        color:COLOR.fontColour
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text5: {
        color: COLOR.themeColour,
        fontFamily: FONT.primaryFontLight,

    },
    img: {
        height:moderateScale(50),
        
        width:'40%',
        alignSelf: 'center',
        marginTop: moderateScale(100)
    },
    text6: {
        fontFamily: FONT.primaryFontLight,
    }

});

//make this component available to the app
export default Reset
