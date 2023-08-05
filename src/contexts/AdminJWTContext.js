import { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from 'axios';
import { setSession } from '../utils/adminjwt';
// ----------------------------------------------------------------------

const baseUrl = process.env.ADMINPORT || 'http://localhost:8080/api';

const initialState = {
  isInitialized: false,
  isAdminAuthenticated: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAdminAuthenticated, user } = action.payload;
    return {
      ...state,
      isAdminAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAdminAuthenticated: true,
      user
    };
  },
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAdminAuthenticated: true,
      user
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAdminAuthenticated: false,
    user: null
  })
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AdminAuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

AdminAuthProvider.propTypes = {
  children: PropTypes.node
};

function AdminAuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('adminAccessToken');

        if (accessToken) {
          setSession(accessToken);
          const headers = {
            Authorization: `Bearer ${accessToken}`
          };
          const response = await axios.get(`${baseUrl}/admin/dashboard`, {
            headers
          });
          const { user } = response.data;
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAdminAuthenticated: true,
              user
            }
          });
          // console.log('initialized');
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAdminAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAdminAuthenticated: false,
            user: null
          }
        });
      }
    };
    initialize();
  }, []);

  const login = async ({ username, password }) => {
    const response = await axios.post(`${baseUrl}/admin/login`, {
      username: username,
      password
    });
    const { token, user } = response.data;
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  // const resetPassword = () => {};

  return (
    <AdminAuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        logout,
        login
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export { AdminAuthContext, AdminAuthProvider };
