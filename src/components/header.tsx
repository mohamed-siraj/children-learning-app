import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constant';
import { useAppDispatch, useAppSelector } from '../store/hooks/storeTypeHook.hooks';
import { remove } from '../store/slices/auth.slice';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate.type';

type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const Header: React.FunctionComponent<any> = ({ screenName }) => {

    /**
     * action
     */
    const dispatch = useAppDispatch();

    /**
     * global state
     */
    const { isAuth } = useAppSelector(state => state.auth);

    const navigation = useNavigation();

    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: COLORS.white,
                    fontWeight: 'bold'
                }}>{screenName}</Text>
                {
                    isAuth &&
                    <TouchableOpacity onPress={() => {
                        dispatch(remove());
                    }}>
                        <Text style={{
                            marginLeft: 10,
                            color: COLORS.white,
                            fontWeight: 'bold'
                        }}>LogOut</Text>
                    </TouchableOpacity>

                }

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