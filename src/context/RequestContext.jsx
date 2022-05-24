import { createContext, useReducer, useState } from 'react';
const initialRequest = [];
export const RequestContext = createContext();

function requestReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case 'LOAD':
      return action.payload.map((request) => ({
        id: request.id,
        request: request.request,
        user_id: request.user_id,
        created_at: request.created_at,
      }));
    case 'ADD':
      return [
        ...state,
        {
          id: payload.id,
          request: payload.request,
          user_id: payload.user_id,
          created_at: payload.created_at,
        },
      ];
    case 'UPDATE':
      return state.map((request) =>
        request.id === payload.id ? payload : request
      );
    case 'DELETE':
      return state.filter((request) => request.id !== payload.id);

    default:
      return state;
  }
}

export const RequestProvider = ({ children }) => {
  const [requests, dispatch] = useReducer(requestReducer, initialRequest);
  const [copyOrEdit, setCopyOrEdit] = useState('');
  const [ceForm, setCeForm] = useState('');
  return (
    <RequestContext.Provider
      value={{
        requests,
        dispatch,
        copyOrEdit,
        setCopyOrEdit,
        ceForm,
        setCeForm,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};
