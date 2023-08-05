import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from 'axios';
import { isValidToken, setSession } from '../utils/jwt';
import { getProfile } from '../redux/slices/user';
// ----------------------------------------------------------------------

const baseUrl = process.env.PORT || 'http://localhost:8080/api';

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
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  deposite: () => Promise.resolve(),
  refer: () => Promise.resolve(),
  register: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('WTF');
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          // if (true) {
          setSession(accessToken);
          const headers = { Authorization: `Bearer ${accessToken}` };
          const response = await axios.get(`${baseUrl}/users/dashboard`, {
            headers
          });
          const { user } = response.data;
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
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

  const login = async (userId, password) => {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      userId,
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

  const changePassword = async (values) => {
    const accessToken = window.localStorage.getItem('accessToken');
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/Account/changePassword`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: values
    });
    return response.data;
  };
  const deposite = async (values) => {
    const accessToken = window.localStorage.getItem('accessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/Account/changePassword`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: values
    });
    return response.data;
  };

  const register = async (sponsorId, memberName, email, contactNo, password, cpassword, selectedPackage) => {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/Auth/register`,
      data: {
        sponcerid: sponsorId,
        member_name: memberName,
        email,
        contactNumber: contactNo,
        password,
        cpassword,
        position: selectedPackage
      }
    });

    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
    return response;
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = () => {};

  const updateProfile = async (values) => {
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const responseUpdateProfile = await axios({
        method: 'put',
        url: `${baseUrl}/Account/EditProfile`,
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      return responseUpdateProfile.data;
    } catch (error) {
      console.error(error.response.data); // Log the error response data to the console
      return error.response.data;
    }
  };

  const refer = async (values) => {
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/Dashboard/refer`,
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      return response.data;
    } catch (error) {
      console.error(error.response.data); // Log the error response data to the console
      return error.response.data;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        refer,
        register,
        resetPassword,
        changePassword,
        deposite,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
