import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Colors from "@/constants/Colors";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 110,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
