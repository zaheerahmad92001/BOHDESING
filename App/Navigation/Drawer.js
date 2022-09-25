import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer' 
import DrawerContent from '../Components/Drawer';
// import Home from '../Srceen/Home';
// import {connect} from 'react-redux';
// import Home from '../Screen/Home';

import BottomTab from './BottomTab';

const {width} = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator
      // headerMode="none"
      // initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{width: width / 1.3}}
      drawerPosition="left">
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      {/* <Drawer.Screen name="MoreDrawer" component={MoreDrawer} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
// export default connect()(DrawerNav);
