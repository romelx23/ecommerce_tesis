import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChatItem } from './ChatItem';
import { chatUsers } from './Chat';

export const ChatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={chatUsers}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(user) => user?.id.toString()}
        renderItem={({ item }) => (
            <ChatItem item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        minHeight: 100,
        height: '74%',
    }
});
