import { Item } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../Components/PixelRatio';
const { height, width } = Dimensions.get('screen');

const Slider2 = () => {

    const [banner, setbanner] = useState([
        { img: require('../../Assets/hp1.png') },
        { img: require('../../Assets/hp.png') },
        { img: require('../../Assets/hp1.png') },
        { img: require('../../Assets/hp.png') },
    ])

    return (
        <View style={{ width: '100%', height: 200 }}>
            <Swiper
                loop
                autoplay={true}
                autoplayTimeout={5}
                showPagination
                removeClippedSubviews={false}
                dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3 }} />}
                activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3 }} />}
            >

                {banner.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            source={item.img}
                            style={{ height: moderateScale(150), width: '100%', alignSelf: 'center', }}
                            resizeMode='contain'
                        />
                    )
                })}


            </Swiper>
        </View>
    )
}

export default Slider2

const styles = StyleSheet.create({})


