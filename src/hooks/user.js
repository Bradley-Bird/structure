import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { signUp, signIn, postProfileName, signOut } from '../services/auth.js';

export const useUser = () => {
  const history = useHistory();
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const { setUser, user, setFirstName, setLastName } = context;
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
  const signOutUser = async () => {
    await signOut();
    setUser({});
    history.push('/');
  };

  return {
    signInUser,
    signUpUser,
    user,
    setFirstName,
    setLastName,
    signOutUser,
  };
};
