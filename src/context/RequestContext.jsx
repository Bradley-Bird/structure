import { createContext, useReducer } from 'react';
const initialRequest = [];
export const RequestContext = createContext();

function requestReducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return action.payload.map((request) => ({
        id: request.id,
        request: request.request,
        user_id: request.user_id,
        created_at: request.created_at,
      }));
    case 'ADD':
      const { payload } = action;
      return [
        ...state,
        {
          id: payload.id,
          request: payload.request,
          user_id: payload.user_id,
          created_at: payload.created_at,
        },
      ];

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
