// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  lable: getIcon('ic_label'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
  withdraw: getIcon('ic_withdraw'),
  bonus: getIcon('ic_bonus'),
  robot: getIcon('ic_robot'),
  teams: getIcon('ic_team')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: 'Dashboard',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.analytics
      },
      { title: 'My Bot', path: PATH_DASHBOARD.general.mybot, icon: ICONS.robot },
      { title: 'My Team', path: PATH_DASHBOARD.general.analytics, icon: ICONS.teams },
      { title: 'Events and News', path: PATH_DASHBOARD.general.events, icon: ICONS.banking }
    ]
  },

  // Bonuses
  // ----------------------------------------------------------------------
  {
    // subheader: 'Utilitise',
    items: [
      // MANAGEMENT : USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'Team list', path: PATH_DASHBOARD.user.list },
          { title: 'account', path: PATH_DASHBOARD.user.account }
        ]
      },
      {
        title: 'bonus',
        path: PATH_DASHBOARD.bonus.root,
        icon: ICONS.bonus,
        children: [
          { title: 'Direct Bonus', path: PATH_DASHBOARD.bonus.direct },
          { title: 'ROI Bonus', path: PATH_DASHBOARD.bonus.level },
          { title: 'Matching Bonus', path: PATH_DASHBOARD.bonus.matching },
          { title: 'Staking Bonus', path: PATH_DASHBOARD.bonus.stacking },
          { title: 'Matching Business', path: PATH_DASHBOARD.bonus.reward },
          { title: 'Level Bonus', path: PATH_DASHBOARD.bonus.passive },
          { title: 'monthly Bonus', path: PATH_DASHBOARD.bonus.monthly }
        ]
      },
      // NFT MaketPlace
      {
        title: 'staking',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [{ title: 'stake', path: PATH_DASHBOARD.eCommerce.stake }]
      }
    ]
  },

  // Payout
  // ----------------------------------------------------------------------
  {
    subheader: 'personal',
    items: [
      {
        title: 'payouts',
        path: PATH_DASHBOARD.personal.root,
        icon: ICONS.withdraw,
        children: [{ title: 'minting', path: PATH_DASHBOARD.payout.minting }]
      },
      { title: 'transactions', path: PATH_DASHBOARD.personal.transactions, icon: ICONS.calendar },
      { title: 'activation', path: PATH_DASHBOARD.personal.activation, icon: ICONS.calendar }
    ]
  }
];

export default sidebarConfig;
