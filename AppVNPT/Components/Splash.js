import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage'
import CookieManager from '@react-native-community/cookies';
import md5 from "md5";

export default function Splash({ navigation }) {
  const _retrieveData = async () => {
    try {
      const account = await AsyncStorage.getItem('account')
      return JSON.parse(account);
    } catch (error) { console.log(error) }
  };
  useEffect(() => {
    _retrieveData().then(
      (account) => {
        console.log(account)
        if (account !== null) {
          fetch(`https://mlms-vnpt.vnedu.edu.vn/module/api/service/Security/login?email=${account.username}&password=${md5(account.password)}`)
            .then((respone) => respone.json())
            .then((responeJson) => {
              console.log(responeJson)
              if (responeJson.success) {
                CookieManager.clearAll()
                CookieManager.setFromResponse("https://mlms-vnpt.vnedu.edu.vn/",
                  "app_token=" + encodeURIComponent(responeJson.token))
                navigation.navigate("MainTabs")
              }
              else {
                alert(responeJson.msg)
              }
            })
            .catch((error) => {
              alert(error)
            })
        } else {
          navigation.navigate('Login')
        }
      }
    )
    SplashScreen.hide()
  }, [])
  return (
    <></>
  )
}
