import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { signUp, signIn, postProfileName, signOut } from '../services/auth.js';
import { useEffect } from 'react';
import { fetchProfileById } from '../services/profile';
import { ContactPageSharp } from '@mui/icons-material';

export const useUser = () => {
  const history = useHistory();
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const { profile, setProfile, setUser, user, setFirstName, setLastName } =
    context;
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

  useEffect(() => {
    const fetchData = async () => {
      console.log(user.id);
      const resp = await fetchProfileById(user.id);
      console.log(resp);
      setProfile(resp);
    };
    fetchData();
  }, [user]);

  return {
    signInUser,
    signUpUser,
    user,
    setFirstName,
    setLastName,
    signOutUser,
    profile,
  };
};
