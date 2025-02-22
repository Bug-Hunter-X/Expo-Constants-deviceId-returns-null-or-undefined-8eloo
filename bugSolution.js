```javascript
import * as React from 'react';
import { Text, View } from 'react-native';
import * as Constants from 'expo-constants';
import { v4 as uuidv4 } from 'uuid';

function getDeviceId() {
  const deviceId = Constants.deviceId;
  if (deviceId) {
    return deviceId;
  } else {
    // Generate a UUID if deviceId is null or undefined
    const uuid = uuidv4();
    //Persist the UUID (e.g., using AsyncStorage)
    // AsyncStorage.setItem('deviceId', uuid);
    return uuid;
  }
}

export default function App() {
  const deviceId = getDeviceId();
  return (
    <View>
      <Text>Device ID: {deviceId}</Text>
    </View>
  );
}
```