import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Text>Home</Text>
                </ScrollView>
            </View>
        );
    }
}

export default Home;