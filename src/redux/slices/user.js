/* eslint-disable no-else-return */
import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from 'axios';
import axios1 from '../../utils/axios';
// import { log } from 'console';
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  posts: [],
  users: [],
  userList: [],
  followers: [],
  friends: [],
  gallery: [],
  cards: null,
  addressBook: [],
  invoices: [],
  minting: [],
  notifications: null
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

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },

    // DELETE USERS
    deleteUser(state, action) {
      const deleteUser = filter(state.userList, (user) => user.id !== action.payload);
      state.userList = deleteUser;
    },

    // GET FOLLOWERS
    getFollowersSuccess(state, action) {
      state.isLoading = false;
      state.followers = action.payload;
    },

    // ON TOGGLE FOLLOW
    onToggleFollow(state, action) {
      const followerId = action.payload;

      const handleToggle = map(state.followers, (follower) => {
        if (follower.id === followerId) {
          return {
            ...follower,
            isFollowed: !follower.isFollowed
          };
        }
        return follower;
      });

      state.followers = handleToggle;
    },

    // GET FRIENDS
    getFriendsSuccess(state, action) {
      state.isLoading = false;
      state.friends = action.payload;
    },

    // GET GALLERY
    getGallerySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },

    // GET MANAGE USERS
    getUserListSuccess(state, action) {
      state.isLoading = false;
      state.userList = action.payload;
    },

    // GET CARDS
    getCardsSuccess(state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },

    // GET ADDRESS BOOK
    getAddressBookSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = action.payload;
    },

    // GET INVOICES
    getInvoicesSuccess(state, action) {
      state.isLoading = false;
      state.invoices = action.payload;
    },

    // GET NOTIFICATIONS
    getNotificationsSuccess(state, action) {
      state.isLoading = false;
      state.notifications = action.payload;
    },
    // GET MYTEAMS
    getTeamsSuccess(state, action) {
      state.isLoading = false;
      state.output = action.payload;
    },
    // GET minting bonus
    getMintingBonusSucess(state, action) {
      state.isLoading = false;
      state.minting = action.payload;
    },
    getLevelBonusSucess(state, action) {
      state.isLoading = false;
      state.levelBonus = action.payload;
    },
    getCapitalBonusSucess(state, action) {
      state.isLoading = false;
      state.capitalBonus = action.payload;
    },
    getStoneBonusSucess(state, action) {
      state.isLoading = false;
      state.stoneBonus = action.payload;
    },
    getRewardBonusSucess(state, action) {
      state.isLoading = false;
      state.rewardBonus = action.payload;
    },
    getAnnumBonusSucess(state, action) {
      state.isLoading = false;
      state.annumBonus = action.payload;
    },
    getMonthlyPayrollBonusSucess(state, action) {
      state.isLoading = false;
      state.monthlyPayrollBonus = action.payload;
    },
    // GET minting bonus
    getRefBonusSucess(state, action) {
      state.isLoading = false;
      state.refbonus = action.payload;
    },
    getDirectMemberSucess(state, action) {
      state.isLoading = false;
      state.directM = action.payload;
    },
    getChangePassword(state, action) {
      state.isLoading = false;
      state.changePassStatus = action.payload;
    },
    getTopPerformersSuccess(state, action) {
      state.isLoading = false;
      state.topPerformance = action.payload;
    },
    getMintingSummarySucess(state, action) {
      state.isLoading = false;
      state.mintingSummary = action.payload;
    },
    getwithdawSummarySucess(state, action) {
      state.isLoading = false;
      state.withdawS = action.payload;
    },
    getNextrankSuccess(state, action) {
      state.isLoading = false;
      state.nextrank = action.payload;
    },
    postDepositeSuccess(state, action) {
      state.isLoading = false;
      state.deposite = action.payload;
    },
    getTopAchiverSuccess(state, action) {
      state.isLoading = false;
      state.topAchivers = action.payload;
    },
    getPriceSuccess(state, action) {
      state.isLoading = false;
      state.tokenPrice = action.payload;
    },
    getIncomeDashRouteSucces(state, action) {
      state.isLoading = false;
      state.incomeDash = action.payload;
    },
    getMyDownLinesucces(state, action) {
      state.isLoading = false;
      state.myDownLineData = action.payload;
    },
    getDownlinesucces(state, action) {
      state.isLoading = false;
      state.downLineData = action.payload;
    },
    getDailyincomeSuccess(state, action) {
      state.isLoading = false;
      state.dailyincomeData = action.payload;
    },
    getStackingSummarysuccess(state, action) {
      state.isLoading = false;
      state.stackingsummary = action.payload;
    },
    postwithdrawsucces(state, action) {
      state.isLoading = false;
      state.withdrawpost = action.payload;
    },
    patchUpdateWalletAddressSuccess(state, action) {
      state.isLoading = false;
      state.updateWalletAddressRes = action.payload;
    }
  }
});

const baseUrl = process.env.PORT || 'http://52.66.191.12:8080/api';
// http://52.66.191.12:8080/api
// http://localhost:8080/api
// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export function getTeams() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/users/dashboard`, {
        headers
      });
      dispatch(slice.actions.getTeamsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getTokenPrice() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/price/`, {
        headers
      });
      console.log(response);
      dispatch(slice.actions.getPriceSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function changePassword(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');

      const response = await axios({
        method: 'put',
        url: `${baseUrl}/Account/changePassword`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      dispatch(slice.actions.getChangePassword(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProfile() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/users/Dashboard`, {
        headers
      });

      dispatch(slice.actions.getProfileSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getNextRank() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/DashBoard/nextrank`, {
        headers
      });

      dispatch(slice.actions.getNextrankSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPosts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/posts');
      dispatch(slice.actions.getPostsSuccess(response.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getFollowers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/social/followers');
      dispatch(slice.actions.getFollowersSuccess(response.data.followers));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getFriends() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/social/friends');
      dispatch(slice.actions.getFriendsSuccess(response.data.friends));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

// export function getGallery() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios1.get('/api/user/social/gallery');
//       console.log(response);
//       dispatch(slice.actions.getGallerySuccess(response.data.gallery));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

export function getGallery() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response2 = await axios1.get('/api/user/social/gallery');
      console.log(response2.data);
      const response = await axios.get(`${baseUrl}/Account/userNft`, {
        headers
      });
      console.log(response.data.image);
      // dispatch(slice.actions.getGallerySuccess(response.data.gallery));
      dispatch(slice.actions.getGallerySuccess(response.data.image));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getUserList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/users/income`, {
        headers
      });
      console.log(response.data);
      dispatch(slice.actions.getUserListSuccess(response.data.output));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMintingBonus() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/users/incomes`, {
        headers
      });
      console.log(response);
      dispatch(slice.actions.getMintingBonusSucess(response.data.output));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getRefBonus(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/users/incomes`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });

      dispatch(slice.actions.getRefBonusSucess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function mintingSummaryapi() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Minting/MintingSummary`, {
        headers
      });
      dispatch(slice.actions.getMintingSummarySucess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function withdawSummaryapi() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/withdraw/Summary`, {
        headers
      });
      console.log(response);
      dispatch(slice.actions.getwithdawSummarySucess(response.data.detail));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function directMember() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/users/directMember`, {
        headers
      });
      console.log(response);
      dispatch(slice.actions.getDirectMemberSucess(response.data.user));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getLevelBonus(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/users/incomes`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      console.log(response);

      dispatch(slice.actions.getLevelBonusSucess(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getCapitalBonus(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/users/incomes`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      dispatch(slice.actions.getCapitalBonusSucess(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getStoneBonus(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/users/incomes`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });

      dispatch(slice.actions.getStoneBonusSucess(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getRewardBonus() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Earning/RewardBonus`, {
        headers
      });
      dispatch(slice.actions.getRewardBonusSucess(response.data.output));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getAnnumBonus() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Earning/AnnumBonus`, {
        headers
      });
      dispatch(slice.actions.getAnnumBonusSucess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getMonthlyPayrollBonus(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/users/incomes`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });

      dispatch(slice.actions.getMonthlyPayrollBonusSucess(response.data.results));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getCards() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/account/cards');
      dispatch(slice.actions.getCardsSuccess(response.data.cards));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getAddressBook() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/account/address-book');
      dispatch(slice.actions.getAddressBookSuccess(response.data.addressBook));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getInvoices() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/account/invoices');
      dispatch(slice.actions.getInvoicesSuccess(response.data.invoices));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getNotifications() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/account/notifications-settings');
      dispatch(slice.actions.getNotificationsSuccess(response.data.notifications));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/all');
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getTopPerformers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/DashBoard/topPerformers`, {
        headers
      });

      dispatch(slice.actions.getTopPerformersSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
///--------------------------------------------------------------------------

export function getTopAchivers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/DashBoard/topAchivers`, {
        headers
      });
      dispatch(slice.actions.getTopAchiverSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function postDeposite(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/Marketplace/deposite`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      dispatch(slice.actions.postDepositeSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function refer(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/Dashboard/refer`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: values
      });
      dispatch(slice.actions.postDepositeSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export async function postStacking(payload, accessToken) {
  console.log('payload :', payload);
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const Url = `${baseUrl}/deposit/`;

    const response = await axios.post(Url, payload, { headers });
    //  console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error data:', error.response ? error.response.data : 'No data available');

    if (error.response) {
      console.log(error.response);
      return error.response.data;
    }
    return 'Something went wrong!';
  }
}

export async function postStackingAura(investmentAura) {
  try {
    const accessToken = window.localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const data = {
      package: 'Aura',
      GusdQty: investmentAura
    };
    console.log(data);
    const Url = `${baseUrl}/deposit/aura-invest`;
    const response = await axios.post(Url, data, { headers });
    //  console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error data:', error.response ? error.response.data : 'No data available');

    if (error.response) {
      console.log(error.response);
      return error.response.data;
    }
    return 'Something went wrong!';
  }
}

export async function getSponcerNameByUplineID(UplineId) {
  try {
    const response = await axios.get(`${baseUrl}/auth/register?UplineId=${UplineId}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getBotData() {
  try {
    const response = await axios.get(`${baseUrl}/users/bots`);

    return response.data;
  } catch (error) {
    return error;
  }
}

export function getIncomeDashRoute() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/users/totalIncomes`;
      const response = await axios.get(urlApi, {
        headers
      });
      dispatch(slice.actions.getIncomeDashRouteSucces(response.data.result));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMyDownLineData() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/users/pair`;
      const response = await axios.get(urlApi, {
        headers
      });
      dispatch(slice.actions.getMyDownLinesucces(response.data.pairData));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getDownline() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/users/team`;
      const response = await axios.get(urlApi, {
        headers
      });

      console.log(response.data);

      dispatch(slice.actions.getDownlinesucces(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getDailyIncome() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/users/dailyProfit`;
      const response = await axios.get(urlApi, {
        headers
      });

      dispatch(slice.actions.getDailyincomeSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getStackingSummary() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/deposit/stakingSummary`;
      const response = await axios.get(urlApi, {
        headers
      });
      dispatch(slice.actions.getStackingSummarysuccess(response.data.output));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function postWithdraw(value) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found. Please log in again.');
      }

      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/withdraw`;
      const response = await axios.post(urlApi, value, { headers });

      if (response.status === 200) {
        console.log(response.data, 'API response');
        dispatch(slice.actions.postwithdrawsucces(response.data));
        return response;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.log(error, 'API error');
      if (error.response) {
        console.log(error.response);
        return error.response;
      }
      return 'Something went wrong!';
    }
  };
}

export function patchUpdateWalletAddress(values) {
  const sendVal = {
    walletAddress: values
  };
  return async (dispatch) => {
    console.log(values);
    dispatch(slice.actions.startLoading());
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found. Please log in again.');
      }

      const headers = { Authorization: `Bearer ${accessToken}` };
      const urlApi = `${baseUrl}/users/updateWallet`;
      const response = await axios.patch(urlApi, sendVal, { headers });

      if (response.status === 200) {
        console.log(response.data, 'API response');
        dispatch(slice.actions.patchUpdateWalletAddressSuccess(response.data));
        return response;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.log(error, 'API error');
      if (error.response) {
        console.log(error.response);
        return error.response;
      }
      return 'Something went wrong!';
    }
  };
}
