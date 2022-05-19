import { createContext, useReducer, useState } from 'react';
const initialRequest = [];
export const RequestContext = createContext();

function requestReducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return action.payload.map((request) => ({
        id: request.id,
        request: request.request,
      }));

    default:
      return state;
  }
}

export const RequestProvider = ({ children }) => {
  const [requests, dispatch] = useReducer(requestReducer, initialRequest);
  return (
    <RequestContext.Provider value={{ requests, dispatch }}>
      {children}
    </RequestContext.Provider>
  );
};
