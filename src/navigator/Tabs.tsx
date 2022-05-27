import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { Navigator, RootStackParams } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonScreen } from '../screens/PokemonScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParams>();

export const Tab2 = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={SearchScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
        </Stack.Navigator>
    );
}


export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios' ? 0 : 10)
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.93)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios' ? 80 : 60),
                }
            }}
        >
            <Tab.Screen name="Homee" component={Navigator} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({ color }) => <Icon name='list-outline' color={color} size={25} />
            }}
            />
            <Tab.Screen name="Search" component={Tab2} options={{
                tabBarLabel: 'Busqueda',
                tabBarIcon: ({ color }) => <Icon name='search-outline' color={color} size={25} />
            }} />
        </Tab.Navigator >
    );
}