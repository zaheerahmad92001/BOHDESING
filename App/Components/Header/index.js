import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Pressable, Image } from 'react-native';
import { Icon } from 'native-base';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../Components/PixelRatio';
import { COLOR } from '../../Constants/Color';
import Navigation from '../../Service/Navigation';
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native-reanimated';
import { FONT } from '../../Constants/Font';
import ImagePicker from 'react-native-image-crop-picker';
const { height, width } = Dimensions.get('screen');
const Header = () => {

    const imageHandler = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    };

    return (
        <View style={styles.header}>
            <StatusBar
                backgroundColor={COLOR.statusColour}

            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Pressable onPress={() => {
                    Navigation.openDrawer();
                }}>
                    <Icon
                        name="menu"
                        type="SimpleLineIcons"
                        style={styles.iconstyle}

                    />
                </Pressable>

                <Text style={styles.text}>ID:150023</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '20%',
                    
                }}>
                    <Pressable onPress={() => Navigation.navigate('Notification')} style={{ color: 'red' }}>
                        <Image
                            source={require('../../Assets/Group1865.png')}

                        />
                    </Pressable>
                    <Pressable onPress={imageHandler} style={{ color: 'red' }}>
                        <Image
                            source={require('../../Assets/Group_1657.png')}
                            style={{
                                height: moderateScale(35),
                                width: moderateScale(35),
                                marginRight:moderateScale(-3)
                            }}
                        />
                    </Pressable>
                </View>
            </View>




        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        alignContent: 'center',
        backgroundColor: COLOR.headerColour,
        height: moderateScale(55)
    },
    iconstyle: {
        color: COLOR.white,
        fontSize: moderateScale(20),

    },
    text: {
        color: COLOR.white,
        fontFamily: FONT.primaryFontLight,
        fontSize: moderateScale(15)
    }


});
