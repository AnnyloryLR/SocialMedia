import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';





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

  const userPosts = [
    {
      firstName:"Allison",
      lastName: "Becker",
      location: "Boston, MA",
      likes:1201,
      comments:24,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id:1,
    },
    {
      firstName:"Jenifer",
      lastName: "Wilkson",
      location: "Worcester, MA",
      likes:1301,
      comments:25,
      bookmarks: 70,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id:2,
    },
    {
      firstName:"Adam",
      lastName: "Spera",
      location: "Worcester, MA",
      likes:100,
      comments:8,
      bookmarks: 3,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id:3,
    },
    {
      firstName:"Anny",
      lastName: "Rosa",
      location: "Cotia, SP",
      likes:121,
      comments:2,
      bookmarks: 2,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id:4,
    },
    {
      firstName:"Nata",
      lastName: "Vacheishvili",
      location: "New York, NY",
      likes:2001,
      comments:24,
      bookmarks: 5,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id:5,
    }
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] =  useState(false);

  const userPostsPageSize = 2;
  const [userPostCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] =  useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage -1) * pageSize;
    const endIndex = startIndex + pageSize;

    if(startIndex >= database.length){
      return [];
    }

    return database.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false); 

    setIsLoadingUserPosts(true);
    const getInitialPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialPosts);
    setIsLoadingUserPosts(false); 
  }, [])
  return (
    <SafeAreaView>
      <View>
        <FlatList 
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={"Let's explore!"} />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'}/>
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList 
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                      if(isLoadingUserStories){
                        return;
                      }
                      setIsLoadingUserStories(true);

                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize
                      );

                      if(contentToAppend.length > 0){
                        setUserStoriesCurrentPage( userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData( prev => [...prev, ...contentToAppend])
                      }
                      setIsLoadingUserStories(false);
                    }
                  }
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData} 
                  renderItem={ ({item}) => (
                    <UserStory 
                      key={"UserStory" + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                )} />
              </View>
            </>
          }

        onEndReachedThreshold={0.5}
        onEndReached={() => {
            if(isLoadingUserPosts){
              return;
            }
            setIsLoadingUserPosts(true);

            const postsToAppend = pagination(
              userPosts,
              userPostCurrentPage + 1,
              userPostsPageSize
            );

            if(postsToAppend.length > 0){
              setUserPostsCurrentPage( userPostCurrentPage + 1);
              setUserPostsRenderedData( prev => [...prev, ...postsToAppend])
            }
            setIsLoadingUserPosts(false);
          }
        }
        showsVerticalScrollIndicator={false}
        data={userPostsRenderedData} 
        renderItem={({item}) => (
          <View style={globalStyle.userPostContainer}>
            <UserPost 
              firstName={item.firstName} 
              lastName={item.lastName} 
              location={item.location}
              image={item.image} 
              likes={item.likes} 
              comments={item.comments} 
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
            />
          </View>
        )} />
      </View>
    </SafeAreaView>
  
  );
}

export default App;
 