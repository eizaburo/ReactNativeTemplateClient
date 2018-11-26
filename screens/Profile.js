import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

//auth
import { onSignOut } from '../auth';

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
        
        //サインアウト処理（tokenを消去して移動）
        onSignOut()
            .then(()=>{
                this.props.navigation.navigate('SignedOut')
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default Profile;