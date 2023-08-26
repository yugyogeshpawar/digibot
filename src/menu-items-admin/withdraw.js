// assets
import { IconBrandChrome, IconHelp, IconCash, IconCashBanknote } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconCash, IconCashBanknote };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const withdraw = {
  id: 'sample-docs-roadmap',
  title: 'Withdraw',
  type: 'group',
  children: [
    {
      id: 'withdraw-request',
      title: 'Withdraw Request',
      type: 'item',
      url: 'admin/withdraw/request',
      icon: icons.IconCashBanknote
    },
    {
      id: 'confirm-withdraw',
      title: 'Confirm Withdraw',
      type: 'item',
      url: 'admin/withdraw/confirm',
      icon: icons.IconHelp
    },
    {
      id: 'withdraw-request-aura',
      title: 'Withdraw Aura Request',
      type: 'item',
      url: 'admin/withdraw/request-aura',
      icon: icons.IconCashBanknote
    }
  ]
};

export default withdraw;
