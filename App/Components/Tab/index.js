import { Col, Icon } from 'native-base';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { COLOR } from '../../Constants/Color';
import { moderateScale } from '../PixelRatio';
// import { AntDesign } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')
const Tab = ({ color, tab, onPress, image, tabIndex, tintColor }) => {
    return (
        <TouchableOpacity 
            style={[styles.container,{
                // position: 'absolute'
            }]} 
            onPress={onPress}
        >
            {/* {icon && <Icon name={icon} size={20} color={color} />} */}
            {
                tabIndex == 2 ?
                    <View
                        style = {{
                            position: 'absolute',
                            top: -30,
                            backgroundColor:COLOR.themeColour,
                            padding:moderateScale(8),
                            borderRadius:moderateScale(10),
                            borderColor:COLOR.white,
                            borderWidth:2
                        }}
                    >
                        <Image
                            source={image}
                            style = {{
                                height: 45,
                                width: 50,
                                tintColor:COLOR.white,
                                backgroundColor:COLOR.themeColour,
                                borderRadius:moderateScale(10),
                                marginLeft:moderateScale(-5)
                            }}
                            resizeMode='contain'
                        />
                    </View>
                    :
                    tabIndex == 4 ?

                    <View
                        style = {{
                            alignItems:'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={image}
                            style = {{
                                
                            }}
                        />
                        <Text style={{ color }}>{tab.name}</Text>
                    </View>
                    :
                    

                    <View
                        style = {{
                            alignItems:'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={image}
                            style={{ tintColor }}
                        />
                        <Text style={{ color }}>{tab.name}</Text>
                    </View>
            }

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: width,
        // borderWidth: 1,
        // height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 5,
    },
});

export default Tab;