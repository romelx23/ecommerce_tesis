import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChatCircleItem } from "./ChatCircleItem";
import { chatUsers } from './Chat';
import { FlatList } from "react-native-gesture-handler";

export const ChatActiveList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={chatUsers}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(user) => user?.id.toString()}
        renderItem={({ item }) => (
            <ChatCircleItem />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        paddingHorizontal: 10,
    }
});
