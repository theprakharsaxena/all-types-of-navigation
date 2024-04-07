import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Payments</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
