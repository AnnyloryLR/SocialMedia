import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle'





const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id:1,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Anny',
      id:2,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Nata',
      id:3,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Niki',
      id:4,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Rick',
      id:5,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'May',
      id:6,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'John',
      id:7,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Julia',
      id:8,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Bea',
      id:9,
      profileImage: require('./assets/images/default_profile.png')
    }

  ];
  
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's explore!"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'}/>
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}
            >2</Text>
          </View>
        </TouchableOpacity>
        <View style={globalStyle.userStoryContainer}>
          <FlatList data={userStories} renderItem={ (item) => {}} />

        </View>
        
      
      </View>
    </SafeAreaView>
  
  );
}

export default App;
