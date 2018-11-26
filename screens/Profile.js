import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

class Profile extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <Button
                        title='サインアウト'
                        onPress={() => this.handleSignOut()}
                        buttonStyle={{ marginTop: 20 }}
                    />
                </Card>
            </View>
        );
    }

    //サインアウトボタン押したとき
    handleSignOut = () => {
        this.props.navigation.navigate('SignedOut')
    }
}

export default Profile;