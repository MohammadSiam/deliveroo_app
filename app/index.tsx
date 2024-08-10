import Colors from "@/constants/Colors";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
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
