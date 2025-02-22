import { OneSignal } from "react-native-onesignal";

export function tagIfoCreate(){
    OneSignal.User.addTags({
        user_name: "Wallison",
        user_email: "wallisonlpq@gmail.com."
    })
}