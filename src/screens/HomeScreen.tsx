import React from 'react'
import { Button, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export const HomeScreen = ({ navigation }: any) => {


    return (
        <View>
            <Text>Home Screen</Text>

            <Icon name="rocket" size={30} color='#5856D6' />

            <Icon name="arrow-redo-outline" size={30} color="black" />

            <Button
                title="Go to Pokemon"
                onPress={() => console.log(navigation.navigate('Pokemon'))}
            />
        </View>
    )
}
