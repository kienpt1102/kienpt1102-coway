import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const DrawerScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, backgroundColor: '#eee',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5 name="backward" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 30 }}>
                123
            </Text>
        </View>
    );
};

export default DrawerScreen;








