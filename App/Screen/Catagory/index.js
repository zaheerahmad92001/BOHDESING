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
} from '../../Components/PixelRatio';
import { Card, Icon } from 'native-base';
import Navigation from '../../Service/Navigation';
import Header from '../../Components/Header';
import { COLOR } from '../../Constants/Color';
import { FONT } from '../../Constants/Font';
import Slider from '../../Components/Slider';
const { height, width } = Dimensions.get('screen');

// create a component
const Catagory = () => {



    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <Card style={styles.card}>
                <Image
                    source={require('../../Assets/Iconfeather-search.png')}
                    style={{marginLeft:moderateScale(5)}}
                />
                <TextInput placeholder='Search by name' placeholderTextColor={COLOR.fontColourLight} style={styles.input} />
            </Card>
           
                
                <View style={styles.view}>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/television.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Television</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/refrigerator.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Refrigerator</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/laundry.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Washing</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/microwave.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Microwave</Text>
                    </View>
                </View>

                <View style={styles.view}>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/laptop.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Laptops</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/computer.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Desktops</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/watch.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Watches</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/car.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Cars</Text>
                    </View>
                </View>

                <View style={styles.view}>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/blender.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Mixer</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/outline.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Air fryer</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/fan.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Fans</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/air-conditioner.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>AC</Text>
                    </View>
                </View>

                <View style={styles.view}>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/fashion.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Fashion</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/mobile-phone.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Mobile</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/tablet.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Tabs</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/camera.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Cameras</Text>
                    </View>
                </View>

                <View style={styles.view}>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/dumbbell.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Fitness</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/guitar.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Music</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/headphones.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Headphone</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/motorcycle.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Bikes</Text>
                    </View>
                </View>
                
                <View style={[styles.view,{justifyContent:'flex-start' ,paddingLeft:moderateScale(25)}]}>
                    <View >
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/outline-1.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>OTG</Text>
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(5),
        marginTop: moderateScale(15),
        marginBottom: moderateScale(15),
        width: '90%',
        height: moderateScale(40),
        alignSelf: 'center'
    },
    input: {

        width: '90%',
        color:COLOR.fontColour
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom:moderateScale(25),
        
    },
    view1: {

        // borderColor:'black',
        // borderWidth:1,
        padding: moderateScale(25),
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(30),
        backgroundColor:COLOR.white,
        elevation:2,
        marginBottom:moderateScale(3)
    },
    text: {
        textAlign: 'center',
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColour,
        fontSize: moderateScale(12)
    },
    view0: {
        alignItems: 'center',
        
    },
    img:{
        // height:moderateScale(25),
        // width:moderateScale(25),

    }
    
    
    

   
    
    
    
     

});

//make this component available to the app
export default Catagory
