import { AsyncStorage } from "react-native";

//サインイン時にtokenを保存し、その有無でセッションをコントロール
//tokenはサーバ側APIのアクセストークン等を想定
//全てasync関数となる（する）

//認証用keyの名前を設定
export const ACCESS_TOKEN = 'access_token';

//サインイン
export const onSignIn = (access_token) => AsyncStorage.setItem(ACCESS_TOKEN, access_token);

//サインアウト
export const onSignOut = () => AsyncStorage.removeItem(ACCESS_TOKEN);

//状態確認
//tokenが存在すればtrueとtokenを返す
export const isSignIn = async () => {
    try {
        const access_token = await AsyncStorage.getItem(ACCESS_TOKEN);
        if (access_token !== null) {
            //ログインの状態とtokenを返す
            return { signedIn: true, access_token: access_token };
        } else {
            return { signedIn: false, access_token: '' }
        }
    } catch (error) {
        console.log(error);
    }
}