import { Constants, Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


export const askPermissions = async () => {
  const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let existingStatus=status;
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return false;
  }
  return true;
};


export const sendNotificationImmediately = async () => {
    let notificationId = await Notifications.presentLocalNotificationAsync({
      title: 'This is crazy',
      body: 'Your mind will blow after reading this',
    });
    console.log(notificationId); // can be saved in AsyncStorage or send to server
  };


export const scheduleNotification = async () => {
    await Notifications.dismissAllNotificationsAsync();
    let notificationId = Notifications.scheduleLocalNotificationAsync(
      {
        title: "PLAY FLASH CARDS",
        body: 'Hey wanna waste some more time on your phone and become more miserable? :) how about some more flash cards',
      },
      {
        repeat: 'minute',
        time: Date.now() + 11111,
      },
    );
  };

