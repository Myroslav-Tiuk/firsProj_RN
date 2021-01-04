import React from 'react';
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { THEME } from '../theme';
import { Ionicons } from 'react-native-vector-icons'



const AppHeaderIcon = props => (
<HeaderButton 
{...props}
iconSize={24} 
IconComponent={Ionicons}
color={
    Platform.OS === 'android' 
    ? '#fff' 
    : THEME.MAIN_COLOR} 
    />
)

export default AppHeaderIcon;