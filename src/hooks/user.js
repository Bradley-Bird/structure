import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';
import { signUp, signIn, postProfileName, signOut } from '../services/auth.js';
import { useEffect } from 'react';
import { fetchProfileById } from '../services/profile';

export const useUser = () => {
  const history = useHistory();
  const location = useLocation();
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const {
    profile,
    setProfile,
    setUser,
    user,
    setFirstName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
  } = context;
  const signUpUser = async (email, password) => {
    const { user } = await signUp({ email, password });
    if (user) {
      setUser(user);
      const { id } = user;
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

  useEffect(() => {
    if (user.email) {
      const fetchData = async () => {
        const resp = await fetchProfileById(user.id);
        setProfile(resp);
      };
      fetchData();
    }
    return;
  }, [user]);

  return {
    signInUser,
    signUpUser,
    user,
    setFirstName,
    setLastName,
    signOutUser,
    profile,
    setEmail,
    setPassword,
    setErrorMessage,
    location,
    email,
    password,
    errorMessage,
  };
};
