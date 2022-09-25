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
const SignUp = () => {

    const [user, setuser] = useState(false)
    const [email, setemail] = useState(false)
    const [password, setpassword] = useState(false)
    const [password1, setpassword1] = useState(false)
    const [input4, setinput4] = useState(false)
    const [input1, setinput1] = useState(false)
    const [input2, setinput2] = useState(false)
    const [input3, setinput3] = useState(false)

    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <ScrollView showsVerticalScrollIndicator={false}>

            <Image source={require('../../../Assets/bohlogo.png')} style={styles.img} resizeMode= 'stretch' />
                <View style={{ marginBottom: moderateScale(60), marginTop: moderateScale(40) }}>
                    <Text style={styles.text1}>Sign Up</Text>
                    <Text style={styles.text2}>Welcome to Apps</Text>
                </View>
                
                <View style={styles.view}>
                    <TextInput placeholder='Username' placeholderTextColor={COLOR.fontColourLight}  onKeyPress={() => { setuser(true), setinput4(true) }} style={styles.input} />
                    {user ?
                        null :
                        <Icon name="user" type="FontAwesome" style={styles.icon} />
                    }
                </View>
                <View style={styles.view}>
                    <TextInput placeholder='Email' placeholderTextColor={COLOR.fontColourLight}  onKeyPress={() => { setemail(true), setinput1(true) }} style={styles.input} />
                    {email ?
                        null :
                        <Icon name="mail" type="Ionicons" style={styles.icon} />
                    }
                </View>
                <View style={styles.view}>
                    <TextInput placeholder='Password' placeholderTextColor={COLOR.fontColourLight} secureTextEntry={!show ? true : false} onKeyPress={() => { setpassword(true), setinput2(true) }} style={styles.input} />
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
                <View style={[styles.view,{marginBottom:moderateScale(50)}]}>
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
            disabled={input4 && input1 && input2 && input3 == (true) ? false : true }
            style={[styles.press, { backgroundColor: input4 && input1 && input2 && input3 == (true) ? COLOR.themeColour : COLOR.fontColourLight }]}>
                <Text style={styles.text4}>Sign Up</Text>
            </Pressable>
            <View style={styles.view2}>
                <Text style={styles.text6}>Already have an account? </Text>
                <Pressable onPress={() => { Navigation.navigate('Login') }} >
                    <Text style={styles.text5}>Login</Text>
                </Pressable>
            </View>

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
        marginBottom: moderateScale(20)
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
        justifyContent: 'center',
        marginBottom:moderateScale(-10)
    },
    text5: {
        color: COLOR.themeColour,
        fontFamily: FONT.primaryFontLight,

    },
    img: {
        height:moderateScale(50),
        
        width:'40%',
        alignSelf: 'center',
        marginTop: moderateScale(80)
    },
    text6: {
        fontFamily: FONT.primaryFontLight,
    }

});

//make this component available to the app
export default SignUp
