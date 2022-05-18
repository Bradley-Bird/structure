import { createContext, useContext, useState } from 'react';
import { signUp, signIn, postProfileName } from '../services/auth.js';
import { getUser } from '../services/auth';
// import { Label } from '@mui/icons-material';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { user: {} });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const signUpUser = async (email, password) => {
    const { user } = await signUp({ email, password });
    if (user) {
      setUser(user);
      const { id } = user;
      console.log('reached', id);
      await postProfileName(firstName, lastName, id);
    }
  };
  const signInUser = async (email, password) => {
    const authUser = await signIn({ email, password });
    if (authUser) {
      setUser(authUser.user);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signUpUser,
        signInUser,
        setFirstName,
        firstName,
        setLastName,
        lastName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
