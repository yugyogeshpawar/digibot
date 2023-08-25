// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUser, IconReportMoney } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconUser,
  IconReportMoney
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  type: 'group',
  title: 'User List',
  children: [
    {
      id: 'active-user', // Unique key for the child item
      title: 'Active User List',
      type: 'item',
      url: 'admin/user/active',
      icon: icons.IconCash
    },
    {
      id: 'blocked-user', // Unique key for the child item
      title: 'Blocked User List',
      type: 'item',
      url: 'admin/user/blocked',
      icon: icons.IconCash
    },
    {
      id: 'inactive-user', // Unique key for the child item
      title: 'Inactive User',
      type: 'item',
      url: 'admin/user/inactive',
      icon: icons.IconCash
    },
    {
      id: 'search-user', // Unique key for the child item
      title: 'Search User',
      type: 'item',
      url: 'admin/user/search-user',
      breadcrumbs: false
    },
    {
      id: 'Aura-user', // Unique key for the child item
      title: 'Aura User',
      type: 'item',
      url: 'admin/user/aura-user',
      breadcrumbs: false
    }
  ]
};

export default utilities;
