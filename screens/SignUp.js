import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

//redux
import { connect } from 'react-redux';
import { updateUserData } from '../actions/userAction';

class SignUp extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20, flex: 1 }}>
                <KeyboardAvoidingView behavior="position">
                    <ScrollView>
                        <Formik
                            initialValues={{
                                name: 'test',
                                email: 'test@test.com',
                                password: 'testtest',
                                passwordConfirm: 'testtest'
                            }}
                            onSubmit={values => this.handleSignUp(values)}
                            validationSchema={Yup.object().shape({
                                name: Yup
                                    .string()
                                    .min(4, '4文字以上です。')
                                    .required('名前は必須です。'),
                                email: Yup
                                    .string()
                                    .email('emailの形式ではありません。')
                                    .required('emailは必須です。'),
                                password: Yup
                                    .string()
                                    .min(4, '4文字以上です。')
                                    .required('パスワードは必須です。'),
                                passwordConfirm: Yup
                                    .string()
                                    .required('パスワードは必須です。')
                                    .oneOf([Yup.ref('password')], 'パスワードが一致しません。')
                            })}
                        >
                            {
                                ({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
                                    <Card title='サインアップ'>
                                        <FormLabel>名前</FormLabel>
                                        <FormInput
                                            autoCapitalize='none'
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                        />
                                        {(touched.name && errors.name) && <FormValidationMessage>{errors.name}</FormValidationMessage>}
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
                                        <FormLabel>パスワード（確認）</FormLabel>
                                        <FormInput
                                            autoCapitalize='none'
                                            value={values.passwordConfirm}
                                            onChangeText={handleChange('passwordConfirm')}
                                            onBlur={handleBlur('passwordConfirm')}
                                            secureTextEntry
                                        />
                                        {(touched.passwordConfirm && errors.passwordConfirm) && <FormValidationMessage>{errors.passwordConfirm}</FormValidationMessage>}
                                        <Button
                                            title='サインアップ'
                                            onPress={handleSubmit}
                                            buttonStyle={{ marginTop: 20 }}
                                            backgroundColor='#6666FF'
                                        />
                                    </Card>
                                )
                            }
                        </Formik>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }

    //サインアップボタン押したとき
    handleSignUp = (values) => {

        //値の取得
        const name = values.name;
        const email = values.email;
        const password = values.password;
        const passwordConfirm = values.passwordConfirm;

        //登録処理
        //実際にはサーバサイドと連携したりする

        //サインイン処理
        const user = {
            id: 99,
            name: name,
            email: email,
            access_token: 'token',
        }

        //更新
        this.props.updateUserData(user);

        //移動
        this.props.navigation.navigate('SignedIn')
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default SignUp;