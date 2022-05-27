import React, { useState } from 'react'
import { Platform, StyleSheet, TextInput, View, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import { useuseDebounceValue } from '../hooks/useuseDebounceValue';

interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: (value: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const deboncedValue = useuseDebounceValue(textValue, 1500);

    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue])


    return (
        <View style={{
            ...styles.container,
            ...style as any
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Ingrese algo para buscar'
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios' ? 0 : 2)
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon name='search-outline' size={30} color='grey' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
});