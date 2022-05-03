import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { chatUsers } from './Chat';
import { UserCardItem } from './UserCardItem';
export const ListUsers = () => {

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={chatUsers}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(user) => user?.id.toString()}
        renderItem={({ item }) => (
            <UserCardItem item={item} />
        )}
      />
    </View>
  )
}

 

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
        paddingHorizontal: 10,
        minHeight: 100,
        height: '73%',
    }
})