import React from 'react';
import {  StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';


function Header1(props) {
    return (
      <View style={styles.container}>
          <View style={styles.menuIcon}>
            <MaterialCommunityIcons name='menu' color={colors.primary} size={35} />
          </View>
          <View style={styles.left}>
            <Feather style={styles.search} name='search' color={colors.primary} size={35} /> 
            <Ionicons style={styles.notify} name='notifications-outline' color={colors.primary} size={35} /> 
             
          </View>
      </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    menuIcon: {
        position: 'absolute',
        top: 60,
        left: 30
    },
    left: {
        flexDirection: 'row',
        top: 60,
        left: 290
    },
    
})

export default Header1;