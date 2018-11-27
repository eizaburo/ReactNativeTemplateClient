import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

//redux
import { connect } from 'react-redux';
import { updateUserData } from '../actions/userAction';

class SignIn extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20, flex: 1 }}>
                <ScrollView>
                    <Formik
                        initialValues={{
                            email: 'test@test.com',
                            password: 'testtest',
                        }}
                        onSubmit={values => this.handleSignIn(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup
                                .string()
                                .email('emailの形式で入力して下さい。')
                                .required('emailは必須です。'),
                            password: Yup
                                .string()
                                .min(4, '4文字以上で入力してください。')
                                .required('パスワードは必須です。'),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
                                <Card title='サインイン'>
                                    <FormLabel>Email</FormLabel>
                                    <FormInput
                                        autoCapitalize='none'
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                    />
                                    {(touched.email && errors.email) && <FormValidationMessage>{errors.email}</FormValidationMessage>}
                                    <FormLabel>パスワード</FormLabel>
                                    <FormInput
                                        autoCapitalize='none'
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        secureTextEntry
                                    />
                                    {(touched.password && errors.password) && <FormValidationMessage>{errors.password}</FormValidationMessage>}
                                    <Button
                                        title='サインイン'
                                        onPress={handleSubmit}
                                        buttonStyle={{ marginTop: 20 }}
                                        backgroundColor='#03A9F4'
                                    />
                                    <Button
                                        title='パスワード忘れ'
                                        onPress={() => this.handleForgot()}
                                        buttonStyle={{ marginTop: 30 }}
                                    />
                                </Card>
                            )
                        }
                    </Formik>
                    <Card title='サインアップ'>
                        <Button
                            title='サインアップ'
                            onPress={() => this.handleSignUp()}
                            buttonStyle={{ marginTop: 0 }}
                            backgroundColor='#6666FF'
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }

    //サインインボタン押したとき
    handleSignIn = (values) => {

        //値の取得
        const email = values.email;
        const password = values.password;

        //ダミー認証
        //実際はサーバサイドと連携したりする
        if (email === 'test@test.com' && password === 'testtest') {

            //サインイン処理用データ（access_tokenに何かあればサイン状態）
            const user = {
                id: 88,
                name: 'dummy',
                email: email,
                access_token: 'token',
            }

            //更新
            this.props.updateUserData(user);

            //移動
            this.props.navigation.navigate('SignedIn')

        } else {
            alert('サインインに失敗しました。');
        }
    }

    //サインアップボタン押したとき
    handleSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    //Forgotボタン押したとき
    handleForgot = () => {
        this.props.navigation.navigate('Forgot')
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
// export default SignIn;