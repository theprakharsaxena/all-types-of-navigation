import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const Notifications = () => {
  return (
    <SafeAreaView>
      <Text>Payments</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
