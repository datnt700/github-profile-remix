import { Header } from './layout/Header';
import { Profile } from './layout/Profile';
import { useEffect, useState } from 'react';
import { UserRepository } from '~/types/user-interface';
import { Repository } from './layout/Repository';
import { Container, Content } from '../styles/styles';

const defaultUserData = {
  avatar_url: '',
  bio: '',
  blog: '',
  name: '',
  follower: 0,
  following: 0,
  location: '',
};

const HomeComponent = () => {
  const [text, setText] = useState('');
  const [profileActive, setProfileActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [repositories, setRepositories] = useState<UserRepository[]>([]);
  const [repositoryLimit, setRepositoryLimit] = useState<number>(4);
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${text}`, {});
      if (response.status === 404) {
        setUserData(defaultUserData);
        setProfileActive(false);
      } else {
        const result = await response.json();
        setProfileActive(true);
        setUserData(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  async function showProfile() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${text}/repos`
      );
      const repos = await response.json();
      setRepositories(repos);
      setProfileActive(false);
      setInfoActive(true);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }

  useEffect(() => {
    if (text.length >= 3) {
      const timeoutId = setTimeout(handleSearch, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [text]);

  return (
    <Container>
      <Header
        setText={setText}
        avatarUrl={userData.avatar_url}
        bio={userData.bio}
        name={userData.name}
        profileActive={profileActive}
        showProfile={showProfile}
      />
      <Content>
        <Profile
          avatarUrl={userData.avatar_url}
          follower={userData.follower}
          following={userData.following}
          location={userData.location}
          name={userData.name}
          bio={userData.bio}
          infoActive={infoActive}
        />
        <Repository
          dataRepository={repositories}
          repositoryLimit={repositoryLimit}
          setRepositoryLimit={setRepositoryLimit}
        />
      </Content>
    </Container>
  );
};

export default HomeComponent;
