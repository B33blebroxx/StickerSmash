import { Tabs } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: "#25292e",
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      tabBarStyle: {
        backgroundColor: "#25292e",
      },
      }}>
      <Tabs.Screen name="index" options={{
        title:"Home",
        tabBarIcon: ({color, focused }) => (
          <IonIcons name={focused ? "home-sharp" : "home-outline"} size={24} color={color} />
        ),
        headerTitle:"Home",
        headerLeft:()=><></>,
        headerTitleAlign:"center",
      }}/>
      <Tabs.Screen name="about" options={{
        title:"About",
        tabBarIcon: ({color, focused }) => (
          <IonIcons name={focused ? "information-circle" : "information-circle-outline"} size={24} color={color} />
        ),
        headerTitle:"About",
        headerTitleAlign:"center",
      }}/>
    </Tabs>
  );
}
