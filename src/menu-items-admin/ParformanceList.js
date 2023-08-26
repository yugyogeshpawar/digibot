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

const Performance = {
  id: 'utilities',
  type: 'group',
  title: 'Parformance',
  children: [
    {
      id: 'Performance',
      title: 'Add Performance',
      type: 'item',
      url: 'admin/Performance/addPerformance',
      breadcrumbs: false
    }
  ]
};

export default Performance;
