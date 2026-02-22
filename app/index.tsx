import { ThemedText } from '@/components/themed-text';
import { usePushNotifications } from '@/hooks/use-push-notification';
import React from 'react';
import { Text, View, Button, Platform, FlatList } from 'react-native';



export default function PushApp() {

    const { expoPushToken, notification } = usePushNotifications()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <ThemedText>Expo token: {expoPushToken}</ThemedText>

            <FlatList
                data={notification}
                keyExtractor={(item) => item.request.identifier}
                renderItem={({ item }) => (
                    <View style={{ paddingVertical: 10 }}>
                        <ThemedText style={{ fontWeight: 'bold' }}>{item.request.content.title}</ThemedText>
                        <ThemedText>{item.request.content.body}</ThemedText>
                        <ThemedText>{JSON.stringify(item.request.content.data, null, 2)}</ThemedText>
                    </View>

                )}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 1, backgroundColor: 'grey', opacity: 0.5 }} />
                )}

                ListEmptyComponent={() => (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                        paddingVertical: 20,
                    }}>
                        <ThemedText
                            style={{ textAlign: 'center', fontSize: 16, color: 'grey' }}
                        >No hay notificaciones</ThemedText>
                    </View>
                )}
            />

            {/* <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification({
            title: 'Titulo desde mi app',
            body: 'Body desde mi app',
            to: [expoPushToken],
            data: {
                chatId: 'ABC-123'
            }
          });
        }}
      /> */}
        </View>
    );
}
