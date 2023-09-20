import dashboard from './dashboard';

import utilities from './utilities';

import investment from './investment';
import withdraw from './withdraw';
import rewards from './rewards.js';
import setting from './setting.js';
import Support from './Support.js';
import Performance from './ParformanceList.js';
// import Bonus from './Bonus.js';
import Allowance from './Allowance';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, utilities, rewards, setting, Performance, investment, withdraw, Allowance, Support]
};

export default menuItems;
