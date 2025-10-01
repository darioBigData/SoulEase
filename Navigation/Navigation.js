import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens - Importamos los componentes de las pantallas
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StackScreen from "../screens/StackScreen";
import ChatBot from "../screens/chatbot/chatbot";
import WellnessDiaryScreen from '../screens/wellnessDiary/WellnessDiary2';

// Icons - Importamos las dependencias de los iconos de la biblioteca
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Creamos un stack navigator para la navegación entre las pantallas de inicio y la pila
const HomeStackNavigator = createNativeStackNavigator();

// Definimos la función para renderizar el stack navigator
function MyStack() {
  // Cada vez que haya que agregar una screen debe notificarse aqui
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="Inicio" component={HomeScreen} />
      <HomeStackNavigator.Screen name="wellnessDiary" component={WellnessDiaryScreen} />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{
          tabBarActiveTintColor: "#f5f5f5",
          headerBackTitleVisible: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

//Creamos un tab navigator para la navegación entre las diferentes pantallas
const Tab = createBottomTabNavigator();

//Definimos la función para renderizar el tab navigator
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: "#81D4FA",
      }}
    >
      {/*Pantalla de inicio */}
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false, //Esto ocultara el header de la pagina que se este mostrando
        }}
      />

      {/*Pantalla del chatbot */}
      <Tab.Screen
        name="ChatBot"
        component={ChatBot}
        options={{
          tabBarLabel: "ChatBot",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" size={size} color={color} />
          ),
          //tabBarBadge: 10, //Es como para las notificaciones de whatsapp
          headerShown: false, //Esto ocultara el header de la pagina que se este mostrando
        }}
      />

      {/*Pantalla de ajustes */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//Componente principal que envuelve la navegación
export default function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
