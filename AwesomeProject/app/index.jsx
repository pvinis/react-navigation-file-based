import {Text, View} from 'react-native';

export default function Page() {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 24}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          maxWidth: 960,
          marginHorizontal: 'auto',
        }}>
        <Text style={{fontSize: 64, fontWeight: 'bold'}}>Hello World</Text>
        <Text style={{fontSize: 36, color: '#38434D'}}>
          This is the first page of your app.
        </Text>
      </View>
    </View>
  );
}
