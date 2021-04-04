import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        //    navigation.navigate('Details', { qr: '8UADZCKFEOEDJOD2KC54EM-DX.CH8FSKDQ$D.OE44E5$CS44+8DK44OEC3EFGVCD2' });
        navigation.navigate('Camera');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='EU Vaccinbevis' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>Scan</Button>
            </Layout>
        </SafeAreaView>
    );
};
