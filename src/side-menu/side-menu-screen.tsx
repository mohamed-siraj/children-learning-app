import React from "react";


/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TSideMenu } from '../_type/navigate.type';

type Props = NativeStackScreenProps<TSideMenu, 'Home'>;

const SideMenuScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

    return(<></>)

};

export default SideMenuScreen;