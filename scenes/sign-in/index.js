import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {signIn} from '../../api/spotify';

export default function SignInScene({navigation}) {
  const submit = async () => {
    const {isLoggedIn} = await signIn ();

    isLoggedIn && navigation.navigate ('Dashboard');
  };
  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      <Button
        title={'Sign in spotify'}
        color={'green'}
        onPress={() => submit ()}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
