import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

//redux
import { connect } from 'react-redux';
import { updateUserData } from '../actions/userAction';

//auth
import { onSignIn } from '../auth';

class SignIn extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
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
                                {touched.email && <FormValidationMessage>{errors.email}</FormValidationMessage>}
                                <FormLabel>パスワード</FormLabel>
                                <FormInput
                                    autoCapitalize='none'
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry
                                />
                                {touched.password && <FormValidationMessage>{errors.password}</FormValidationMessage>}
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
        if(email === 'test@test.com' && password === 'testtest'){
            //とりあえずemailをtoken情報として渡しておく
            onSignIn(email)
                .then(()=>{
                    //storeにユーザーデータ保存（更新）する

                    //本当は認証後、ユーザーデータを取得する
                    const user = {
                        id: 1,
                        name: 'test',
                        email: email,
                    }
                    //更新
                    this.props.updateUserData(user);

                })
                .then(()=>{
                    //移動する
                    this.props.navigation.navigate('SignedIn')
                })
                .catch(error => {
                    console.log(error);
                });
        }else{
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