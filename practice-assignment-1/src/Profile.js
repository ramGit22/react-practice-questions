import React, { useState, useEffect } from 'react';

const Profile = (props) => {
  const [name, setName] = useState(props.user.name);
  const [bio, setBio] = useState(props.user.bio);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Name cannot be empty');
      return;
    }
    setError('');
    props.onUpdateUser(name, bio);
  };

  const handleReset = () => {
    setName(props.user.name);
    console.log(name);

    setBio(props.user.bio);
    props.onUpdateUser(props.user.name, props.user.bio);
  };

  return (
    <div>
      <img src={props.user.picture} alt="Profile Picture" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <textarea
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Profile;
