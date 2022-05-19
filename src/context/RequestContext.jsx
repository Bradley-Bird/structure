import { createContext, useState } from 'react';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  return (
    <RequestContext.Provider value={(requests, setRequests)}>
      {children}
    </RequestContext.Provider>
  );
};
