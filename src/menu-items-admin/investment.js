// assets
import { IconReportMoney, IconHelp } from '@tabler/icons';

// constant
const icons = {
  IconReportMoney,
  IconHelp,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const investment = {
  id: 'investment',
  type: 'group',
  title: 'Investment',
  icon: icons.IconReportMoney,
  children: [
    {
      id: 'investmentDropdown',
      title: 'Investment',
      type: 'collapse',
      icon: icons.IconReportMoney,
      children: [
        {
          id: 'investmentSummary',
          title: 'Investment Summary',
          type: 'item',
          url: 'admin/investment/summary', // URL for the first child
          breadcrumbs: false
        },
        {
          id: 'aura-Investment',
          title: 'Aura Investment',
          type: 'item',
          url: 'admin/investment/aura-investment',
          icon: icons.IconHelp
        },
        // Add more investment sub-items here if needed
      ]
    }
  ]
};

export default investment;
