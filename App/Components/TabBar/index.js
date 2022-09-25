import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { COLOR } from '../../Constants/Color';
import { useTabBar } from '../contexts/TabBarProvider';
import Tab from '../Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? COLOR.themeColour : COLOR.fontColourLight);

//   const { showTabBar } = useTabBar();

//   const animation = useRef(new Animated.Value(0)).current;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  

//   useEffect(() => {
//     toggleTabBarAnimation();
//   }, [showTabBar]);

  return (
    <View style={styles.wrapper}>
      <View
        style={[styles.container]}
      >
        {routes.map((route, index) => (
          <Tab
            tab={route}
            tabIndex = {index}
            image={route.params.image}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            tintColor={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width,
    // alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: '#fff',
    // flexDirection: 'row',
    height: 90,
    borderWidth: 1,
    borderColor:'transparent',
    // backgroundColor:'green'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 2,
    height: 60,
    // backgroundColor:"red"
  },
});

export default TabBar;