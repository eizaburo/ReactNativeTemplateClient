import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

//redux
import { connect } from 'react-redux';
import { updateUserData } from '../actions/userAction';

//auth
import { onSignOut } from '../auth';

class Profile extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card title='ユーザー情報'>
                <FormLabel>ID</FormLabel>
                    <FormInput
                        value={this.props.state.userData.user.id}
                        editable={false}
                    />
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        value={this.props.state.userData.user.name}
                        editable={false}
                    />
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        value={this.props.state.userData.user.email}
                        editable={false}
                    />
                </Card>
                <Card title='サインアウト'>
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

//redux
const mapStateToProps = state => (
    {
        state: state,
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateUserData: (user) => dispatch(updateUserData(user)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;