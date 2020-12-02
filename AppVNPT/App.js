import React, { useState, useEffect, useRef } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity, View } from 'react-native'

import HomeScreen from './Components/HomeScreen'
import SearchScreen from './Components/SearchScreen';
import CourseDetailScreen from './Components/CourseDetailScreen';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ListCoursesScren from './Components/ListCoursesScreen';
import { enableScreens } from 'react-native-screens';
import ListContestsScreen from './Components/ListContestsScreen';
import ContestDetailScreen from './Components/ContestDetailScreen';
import NoticeScreen from './Components/NoticeScreen';
import DetailNoticeScreen from './Components/DetailNoticeScreen';
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './Components/LoginScreen';
import CategoryScreen from './Components/CategoryScreen';
import FilterScreen from './Components/FilterScreen';
import ExploreScreen from './Components/ExploreScreen';
import Splash from './Components/Splash';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
enableScreens();



function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomesScreens}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='#A8B3BF' size={24} />
          ),
        }} />
      <Tab.Screen name="Explore" component={ExploreScreen}
        options={{
          tabBarLabel: 'Khám phá',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="star" color='#A8B3BF' size={24} />
          ),
        }} />
      <Tab.Screen name="Contests" component={ContestsScreens} options={{
        tabBarLabel: 'Cuộc thi',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="format-list-checks" color='#A8B3BF' size={24} />
        ),
      }} />
      <Tab.Screen name="Courses" component={CoursesScreens} options={{
        tabBarLabel: 'Khóa học',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="inbox-full" color='#A8B3BF' size={24} />
        ),
      }} />
      <Tab.Screen name="Category" component={CategoryScreens} options={{
        tabBarLabel: 'Danh mục',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="collage" color='#A8B3BF' size={24} />
        ),
      }} />
    </Tab.Navigator>
  );
}



function HomesScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Notice" component={NoticeScreen} options={{ title: 'Thông báo chung' }} />
      <Stack.Screen name="DetailNotice" component={DetailNoticeScreen} options={{ title: 'Nội dung thông báo' }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Tìm kiếm' }} />
    </Stack.Navigator>
  )
}

function ContestsScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListCourses" component={ListContestsScreen}
        options={{
          title: 'Cuộc thi',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("ContestsFilter")}>
              <Icon name='filter' size={24} color='#005ED3'></Icon>
            </TouchableOpacity>
          )
        }} />
      <Stack.Screen name="ContestDetail" component={ContestDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ContestsFilter" component={FilterScreen}
        options={{
          title: 'Lọc'
        }}
      />
    </Stack.Navigator>
  )
}

function CoursesScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListCourses" component={ListCoursesScren}
        options={{
          title: 'Khóa học',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CoursesFilter")}>
              <Icon name='filter' size={24} color='#005ED3'></Icon>
            </TouchableOpacity>
          )
        }} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CoursesFilter" component={FilterScreen}
        options={{
          title: 'Lọc'
        }}
      />
    </Stack.Navigator>
  )
}

function CategoryScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Danh mục' }} />
    </Stack.Navigator>
  )
}

export default function App({ navigation }) {

  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Tab.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}></Tab.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
