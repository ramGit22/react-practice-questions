import React from 'react';
import Profile from './Profile';

const App = () => {
  const [user, setUser] = React.useState({
    name: 'John Doe',
    bio: 'I am a software developer',
    picture: 'https://example.com/profile-picture.jpg',
  });
  console.log(user);

  const handleUpdateUser = (newName, newBio) => {
    setUser({
      ...user,
      name: newName,
      bio: newBio,
    });
  };

  return (
    <div>
      <Profile user={user} onUpdateUser={handleUpdateUser} />
    </div>
  );
};

export default App;
