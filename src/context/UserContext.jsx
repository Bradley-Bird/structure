import { createContext, useState } from 'react';
import { getUser } from '../services/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { user: {} });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profile, setProfile] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setFirstName,
        firstName,
        setLastName,
        lastName,
        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
