import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constant';

const Header: React.FunctionComponent<{screenName : any}> = ({ screenName }) => {

    const navigation = useNavigation();
    
    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View>
                <Text style={{
                    color: COLORS.white,
                    fontWeight: 'bold'
                }}>{screenName}</Text>
            </View>
        </View>
    )
};

export default Header;

const headerStyles = StyleSheet.create({
    container: {
        top: 30,
        left: 0,
        width: '100%',
        backgroundColor: COLORS.meroon,
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});