import { createContext, useContext, useState } from 'react';
import { signUp, signIn, postProfileName } from '../services/auth.js';
import { getUser } from '../services/auth';
// import { Label } from '@mui/icons-material';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { user: {} });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
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

// export const useUser = () => {
//   const context = useContext(UserContext);

//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }

//   return context;
// };
