import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
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
