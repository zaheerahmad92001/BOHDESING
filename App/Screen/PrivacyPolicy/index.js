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
const Privacy = () => {

    const [edit, setedit] = useState(false)


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>

                <Text style={styles.text}>Comming Soon</Text>
                
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
export default Privacy
