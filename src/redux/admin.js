import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from 'axios';

// import Monthly from 'views/Rewards/Monthly';
// ----------------------------------------------------------------------
let stakingHistory = [];
let activeUsers = [];
let inactiveUsers = [];
let Investment = [];
let Matching = [];
let Monthly = [];
let Withdraw = [];
// let dailyIncome = [];
let SearchResult = [];
let SearchDashboard = [];
let blockUser = [];
let activate = [];
const initializer = {
  ActiveUsersSucess: false,
  userBlockedSuccess: false,
  InvestmentSucess: false,
  InactiveUsersSucess: false
};

const initialState = {
  isLoading: false,
  error: false,
  users: [],
  stakingHistory
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET USERS
    getStackingSuccess(state, action) {
      state.isLoading = false;
      state.stakingHistory = action.payload;
    },

    // GET MYTEAMS
    getTeamsSuccess(state, action) {
      state.isLoading = false;
      state.output = action.payload;
    }
  }
});

const baseUrl = process.env.PORT || 'https://backend.digibot.trade/api/admin';

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export async function getActiveUsers() {
  let activeUsers;
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Referrer-Policy': 'unsafe-url'
    };
    const response = await axios.get(`${baseUrl}/activeUser`, {
      headers
    });
    initializer.ActiveUsersSucess = true;
    activeUsers = response.data;
    return activeUsers;
  } catch (error) {
    console.log(error);
    initializer.ActiveUsersSucess = false;
    return activeUsers;
  }
}
// ----------------------------------------------------------------------
export async function getBlockedUsers() {
  let blockedUsers;
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Referrer-Policy': 'unsafe-url'
    };
    const response = await axios.get(`${baseUrl}/blockedUser`, {
      headers
    });
    blockedUsers = response.data;
    return blockedUsers;
  } catch (error) {
    console.log(error);
    initializer.userBlockedSuccess = false;
    return blockedUsers;
  }
}
// ----------------------------------------------------------------------
export async function getInactiveUsers() {
  if (!initializer.InactiveUsersSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Referrer-Policy': 'unsafe-url'
      };
      const response = await axios.get(`${baseUrl}/inactive-users`, {
        headers
      });
      inactiveUsers = response.data;
      initializer.InactiveUsersSucess = true;
    } catch (error) {
      console.log(error);
      initializer.InactiveUsersSucess = false;
    }
  }
  return inactiveUsers;
}
// ----------------------------------------------------------------------
export async function getInvestSummary() {
  if (!initializer.InvestmentSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(`${baseUrl}/summary`, {
        headers
      });
      Investment = response.data;
      initializer.InvestmentSucess = true;
    } catch (error) {
      console.log(error);
      initializer.InvestmentSucess = false;
      Investment = error;
    }
  }
  return Investment;
}
// ----------------------------------------------------------------------
export async function getmonthlyBonus() {
  if (!initializer.MonthlySucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(`${baseUrl}/monthly-bonus`, {
        headers
      });
      Monthly = response.data;
      initializer.MonthlySucess = true;
    } catch (error) {
      console.log(error);
      initializer.MonthlySucess = false;
      Monthly = error;
    }
  }
  return Monthly;
}
// ----------------------------------------------------------------------
export async function getMatchingBonus() {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/matching-bonus`, {
      headers
    });
    Matching = response.data;
    initializer.MatchingSucess = true;
  } catch (error) {
    console.log(error);
    initializer.MatchingSucess = false;
    Matching = error;
  }
  return Matching;
}
// ----------------------------------------------------------------------
export async function getWithdrawReqSummary() {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/withdrawRequest`, {
      headers
    });
    Withdraw = response.data;
    initializer.WithdrawSucess = true;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
// ----------------------------------------------------------------------
export async function getWithdrawSummary() {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/withdrawRequest`, {
      headers
    });
    console.log(response.data);
    Withdraw = response.data;
    initializer.WithdrawSucess = true;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
// ----------------------------------------------------------------------
export async function getWithdrawConfi() {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/withdrawSummary`, {
      headers
    });
    console.log('res'.response);
    Withdraw = response.data;
    console.log(Withdraw);
    initializer.WithdrawSucess = true;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
// ----------------------------------------------------------------------
export async function getSearch(value) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/search?search=${value}`, {
      headers
    });
    SearchResult = response.data;
    return SearchResult;
  } catch (error) {
    console.log(error);
    SearchResult = error;
    return SearchResult;
  }
}
// ----------------------------------------------------------------------
export async function changePasswordUsingAdmin(userID, password) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');

    const response = await axios({
      method: 'post',
      url: `${baseUrl}/change-password`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { userID: userID, newPassword: password }
    });
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
}
// ----------------------------------------------------------------------
export async function getSearchDashboard(value) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/search-dashboard?userID=${value}`, {
      headers
    });
    console.log(response.data);
    SearchDashboard = response.data;
    initializer.SearchDashboardSucess = true;
  } catch (error) {
    console.log(error);
    initializer.SearchDashboardSucess = false;
    SearchDashboard = error;
  }
  return SearchDashboard;
}
// ----------------------------------------------------------------------
export async function putSetDailyIncome(botId, value) {
  const payload = {
    [botId]: value,
    daily_profit: value // Adding daily_profit with the provided value to
  };

  const accessToken = window.localStorage.getItem('adminAccessToken');
  const headers = {
    Authorization: `Bearer ${accessToken}`
  };
  const config = {
    headers
  };

  return axios
    .put(`https://backend.digibot.trade/api/bots/change-profit/${botId}`, payload, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// ----------------------------------------------------------------------
export async function postBlockUser(value) {
  if (!initializer.blockUser) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/block-user`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: { userID: value }
      });
      blockUser = response.data;
      initializer.blockUser = true;
    } catch (error) {
      console.log(error);
      initializer.blockUser = false;
      blockUser = error;
    }
  }
  return blockUser;
}
// ----------------------------------------------------------------------
export async function postUnBlockUser(value) {
  if (!initializer.blockUser) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/unblock-user`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: { userID: value }
      });
      blockUser = response.data;
      initializer.blockUser = true;
    } catch (error) {
      console.log(error);
      initializer.blockUser = false;
      blockUser = error;
    }
  }
  return blockUser;
}
// ----------------------------------------------------------------------
export async function postActivate(value) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/postActivateUser`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { hashcode: value }
    });
    activate = response.data;
    initializer.activate = true;
  } catch (error) {
    console.log(error);
    initializer.activate = false;
    activate = error;
  }

  return activate;
}

///Parformarnace Bonus
export async function Postaddparfromance(botId, payload) {
  const accessToken = window.localStorage.getItem('adminAccessToken');
  const headers = {
    Authorization: `Bearer ${accessToken}`
  };
  const config = {
    headers
  };

  return axios
    .post(`${baseUrl}/addBonus/${botId}`, payload, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
////////////Aura usrs
export async function getAuraUsers() {
  if (!initializer.ActiveUsersSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Referrer-Policy': 'unsafe-url'
      };
      const response = await axios.get(`${baseUrl}/auraUser`, {
        headers
      });
      // initializer.ActiveUsersSucess = true;
      activeUsers = response.data;
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // initializer.ActiveUsersSucess = false;
    }
  }
  return activeUsers;
}
///////Aura Withdraw
export async function getAuraWithdraw() {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(`${baseUrl}/auraInvest`, {
      headers
    });
    // console.log('res'.response);
    Withdraw = response.data;
    console.log(response.data);
    // initializer.WithdrawSucess = true;
    return response.data;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
///////Aura Withdraw
export async function postAuraActiveID(value) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/activate-id`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { hashcode: value }
    });
    // console.log('res'.response);
    Withdraw = response;
    // initializer.WithdrawSucess = true;
    return response;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
///////Aura Withdraw
export async function postAuraActiveIDamt(value, amt) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/activate-id`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { hashcode: value, newAmount: amt }
    });
    // console.log('res'.response);
    Withdraw = response;
    // initializer.WithdrawSucess = true;
    return response;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}

//
export async function getAuraInvest(payload) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.post(`${baseUrl}/other-withdrawRequest`, payload, {
      headers
    });
    // console.log('res'.response);
    Withdraw = response.data;
    console.log(response.data);
    // initializer.WithdrawSucess = true;
    return response.data;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}
///
export async function postwithdraw(value) {
  try {
    const accessToken = window.localStorage.getItem('adminAccessToken');
    console.log(accessToken); 
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/aura-withdraw`,
      headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      data: { reference: value,}
    });
    // console.log('res'.response);
    Withdraw = response;
    // initializer.WithdrawSucess = true;
    return response;
  } catch (error) {
    console.log(error);
    initializer.WithdrawSucess = false;
    Withdraw = error;
  }
  return Withdraw;
}