import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from 'axios';
import { setSession } from '../utils/jwt';
// ----------------------------------------------------------------------

const baseUrl = process.env.PORT || 'http://65.1.114.226:8080/api';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  confirmOptPassword: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken) {
          setSession(accessToken);
          const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Referrer-Policy': 'unsafe-url'
          };
          const response = await axios.get(`${baseUrl}/dashboard`, {
            headers
          });
          const { data } = response.data;
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: data
            }
          });
          console.log('initialized');
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };
    initialize();
  }, []);

  const login = async ({ email, password }) => {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password
    });
    console.log(email, password);
    const { token, user } = response.data;
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    });
  };

  const register = async ({ sponcerid, memberName, email, contactNumber, password, cpassword, member_name }) => {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/Auth/register`,
      data: { sponcerid, memberName, email, contactNumber, password, cpassword, member_name }
    });
    console.log(response);
    return response.data;
  };

  const forgotPassword = async (values) => {
    const accessToken = window.localStorage.getItem('accessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/admin/forgot-password`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { email: values }
    });
    return response.data;
  };

  const changePassword = async (currentPassword, password, confimrPassword) => {
    const accessToken = window.localStorage.getItem('accessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/Dashboard/changePassword`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { oldPassword: currentPassword, newPassword: password, verifyPassword: confimrPassword }
    });
    return response.data;
  };
  const confirmOptPassword = async (otp, password, confirmPassword, email) => {
    console.log(otp, password, confirmPassword, email);
    const accessToken = window.localStorage.getItem('accessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/admin/confirm-otp`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { token: otp, newPassword: password, verifyPassword: confirmPassword, email }
    });
    return response.data;
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  // const resetPassword = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        changePassword,
        register,
        confirmOptPassword,
        forgotPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
