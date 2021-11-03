import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationType } from './interfaces'
import tw from 'tailwind-react-native-classnames'
import Home from './components/Home'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Search = () => {
  return (
    <View>
      <Text>home-screen Search</Text>
    </View>
  )
}
const Upload = () => {
  return (
    <View>
      <Text>home-screen Upload</Text>
    </View>
  )
}
const Notifications = () => {
  return (
    <View>
      <Text>home-screen Notifications</Text>
    </View>
  )
}
const Profile = () => {
  return (
    <View>
      <Text>home-screen Profile</Text>
    </View>
  )
}
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Icon tvParallaxProperties color={color} name="home" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Icon tvParallaxProperties color={color} name="search" />
            ),
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Icon tvParallaxProperties color={color} name="backup" />
            ),
          }}
          name="Upload"
          component={Upload}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Icon tvParallaxProperties color={color} name="notifications" />
            ),
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Icon tvParallaxProperties color={color} name="perm-identity" />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}

const Settings = ({ navigation }: { navigation: NavigationType }) => {
  return (
    <View>
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      >
        hola
      </Button>
      <Text> hola settings</Text>
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
