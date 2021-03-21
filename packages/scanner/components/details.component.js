import React from 'react';
import { SafeAreaView } from 'react-native';
import { decode } from 'base45';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation, route }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Scanna QR kod' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>{decode(route.params.qr)}</Text>
      </Layout>
    </SafeAreaView>
  );
};