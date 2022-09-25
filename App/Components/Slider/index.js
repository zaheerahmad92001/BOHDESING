import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import { moderateScale } from '../PixelRatio';
import { COLOR } from '../../Constants/Color';

const {width, height} = Dimensions.get('window')
export default function index() {
    const [activeOfferIndex, setActiveOfferIndex] = useState(1)
    const renderItem = ({ item, index }) => {
        return (
            <View
                // style = {{
                //     height: 50,
                //     backgroundColor: 'red'
                // }}
            >
                <Image
                    source={require('../../Assets/1.png')}
                    style={{height:130, width:307}}
                    resizeMode='stretch'
                />
            </View>
        )
    }
    return (
        <View>
            <Carousel
                data={[1,2,3]}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={307}
                onSnapToItem={(index) => setActiveOfferIndex(index)}
                inactiveSlideOpacity={1}
            />

            <Pagination
                dotsLength={3}
                activeDotIndex={activeOfferIndex}
                // containerStyle={{ borderWidth: 1  }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                }}
                dotColor={COLOR.themeColour}
                dotContainerStyle={{ marginHorizontal: 1 }}
                inactiveDotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6
                }}
                inactiveDotColor={'rgba(178, 189, 203, 1)'}
            />
        </View>
    )
}
