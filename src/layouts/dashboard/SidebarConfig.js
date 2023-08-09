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
        icon: ICONS.teams
      },
      { title: 'My Bot', path: PATH_DASHBOARD.general.mybot, icon: ICONS.robot }
      // { title: 'My Team', path: PATH_DASHBOARD.general.analytics, icon: ICONS.teams },
      // { title: 'Events and News', path: PATH_DASHBOARD.general.events, icon: ICONS.banking }
    ]
  },
  {
    items: [
      {
        title: 'My Profile',
        path: PATH_DASHBOARD.myprofile.editprofile,
        icon: ICONS.user
      }
      // { title: 'My Bot', path: PATH_DASHBOARD.general.mybot, icon: ICONS.robot },
      // { title: 'My Team', path: PATH_DASHBOARD.general.analytics, icon: ICONS.teams },
      // { title: 'Events and News', path: PATH_DASHBOARD.general.events, icon: ICONS.banking }
    ]
  },
  {
    subheader: 'staking',
    items: [
      {
        title: 'staking',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.lable,
        children: [
          { title: 'stake', path: PATH_DASHBOARD.eCommerce.stake },
          { title: 'stake summary', path: PATH_DASHBOARD.eCommerce.stakeSummary }
          // { title: 'shop', path: PATH_DASHBOARD.nftMarket.shop },
          // { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
        ]
      }
    ]
  },
  {
    subheader: 'my team',
    items: [
      {
        title: 'My Team',
        path: PATH_DASHBOARD.personal.root,
        icon: ICONS.cart,
        children: [
          { title: 'my genealogy', path: PATH_DASHBOARD.myteam.mygenealogy },
          { title: 'my direct', path: PATH_DASHBOARD.myteam.mydirect },
          { title: 'my downline', path: PATH_DASHBOARD.myteam.mydownline },
          { title: 'left downlines ', path: PATH_DASHBOARD.myteam.leftdownLine },
          { title: 'righ downlines', path: PATH_DASHBOARD.myteam.rightdownline }
          // { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout }
          // { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice }
        ]
      }
    ]
  },
  // Bonuses
  // ----------------------------------------------------------------------
  {
    subheader: 'Bonuses',
    items: [
      {
        title: 'bonus',
        path: PATH_DASHBOARD.bonus.root,
        icon: ICONS.bonus,
        children: [
          { title: 'Direct Bonus', path: PATH_DASHBOARD.bonus.direct },
          // { title: 'Level Bonus', path: PATH_DASHBOARD.bonus.level },
          { title: 'Matching Bonus', path: PATH_DASHBOARD.bonus.matching },
          { title: 'Staking Bonus', path: PATH_DASHBOARD.bonus.stacking },
          { title: 'Reward Bonus', path: PATH_DASHBOARD.bonus.reward },
          { title: 'Passive Bonus', path: PATH_DASHBOARD.bonus.passive },
          { title: 'monthly Bonus', path: PATH_DASHBOARD.bonus.monthly }
        ]
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
        children: [{ title: 'Withdraw', path: PATH_DASHBOARD.payout.minting }]
      },
      { title: 'transactions', path: PATH_DASHBOARD.personal.transactions, icon: ICONS.calendar },
      { title: 'activation', path: PATH_DASHBOARD.personal.activation, icon: ICONS.calendar }
    ]
  },
  {
    subheader: 'tickets',
    items: [
      { title: 'create ticket', path: PATH_DASHBOARD.ticket.createTicket, icon: ICONS.calendar },
      { title: 'open ticket', path: PATH_DASHBOARD.ticket.openTicket, icon: ICONS.calendar }
    ]
  }
];

export default sidebarConfig;
