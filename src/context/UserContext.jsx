import { createContext, useState } from 'react';
import { getUser } from '../services/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = user || getUser();
  // console.log(currentUser);
  const [user, setUser] = useState(currentUser || { user: {} });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profile, setProfile] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // console.log(profile);
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
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
