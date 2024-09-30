import styled from '@emotion/styled';
import { Header } from './layout/Header';
import { Profile } from './layout/Profile';
import { useEffect, useState } from 'react';
import { UserRepository } from '~/helpers/user-interface';
import { Repository } from './layout/Repository';
const Container = styled.div`
  background-color: #20293a;
`;

const Content = styled.div`
  padding: 0 1rem 1rem;
  max-width: 1500px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0 5rem 1rem;
  }
`;

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
  const [data, setData] = useState(defaultUserData);
  const [dataRepository, setDataRepository] = useState<UserRepository[]>([]);
  const [repositoryLimit, setRepositoryLimit] = useState<number>(4);
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${text}`, {});
      const result = await response.json();
      if (result.message === 'Not Found') {
        setData(defaultUserData);
        setProfileActive(false);
      } else {
        setProfileActive(true);
        setData(result);
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
      setDataRepository(repos);
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
        avatarUrl={data.avatar_url}
        bio={data.bio}
        name={data.name}
        profileActive={profileActive}
        showProfile={showProfile}
      />
      <Content>
        <Profile
          avatarUrl={data.avatar_url}
          follower={data.follower}
          following={data.following}
          location={data.location}
          name={data.name}
          bio={data.bio}
          infoActive={infoActive}
        />
        <Repository
          dataRepository={dataRepository}
          repositoryLimit={repositoryLimit}
          setRepositoryLimit={setRepositoryLimit}
        />
      </Content>
    </Container>
  );
};

export default HomeComponent;
