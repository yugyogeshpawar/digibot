// assets
// import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUser, IconReportMoney } from '@tabler/icons';

// constant
// const icons = {
//   IconTypography,
//   IconPalette,
//   IconShadow,
//   IconWindmill,
//   IconUser,
//   IconReportMoney
// };

// ==============================||BOT MENU ITEMS ||============================== //

const rewards = {
  id: 'utilities',
  type: 'group',
  title: 'Rewards',
  children: [
    {
      id: 'Monthly-rewards',
      title: 'Monthly Rewards',
      type: 'item',
      url: 'admin/rewards/Monthly',
      breadcrumbs: false
    },
    {
      id: '/MBonus',
      title: 'Matching Bonus',
      type: 'item',
      url: '/admin/matching-bonus',
      breadcrumbs: false
    }
  ]
};

export default rewards;
