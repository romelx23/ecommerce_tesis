import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Categories } from "./Categories";
import { ItemCategory } from './ItemCategory';
import { PropsNavigationHome } from '../../interfaces/home';

export default function ListCategories({ navigation }: PropsNavigationHome) {
  return (
      <FlatList
        style={{ flex: 1 }}
        data={Categories}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(category) => category?.id!.toString()}
        renderItem={({ item }) => <ItemCategory item={item} navigation={navigation} />}
      />
  );
}

const styles = StyleSheet.create({});
