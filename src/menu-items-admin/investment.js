// assets
import { IconReportMoney, IconHelp } from '@tabler/icons';

// constant
const icons = {
  IconReportMoney,
  IconHelp
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const investment = {
  id: 'investment',
  type: 'group',
  title: 'Investment',
  icon: icons.IconReportMoney,
  children: [
    {
      id: 'investmentSummary',
      title: 'Invesment Summary',
      type: 'item',
      url: 'admin/invesment/summary',
      breadcrumbs: false
    },
    {
      id: 'aura-Investment',
      title: 'Aura Investment',
      type: 'item',
      url: 'admin/invesment/aura-investment',
      icon: icons.IconHelp
    }
    // Add more investment sub-items here if needed
  ]
};

export default investment;
