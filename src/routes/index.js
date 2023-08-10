import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import LoadingScreen from '../components/LoadingScreen';
import { AccountChangePassword } from '../components/_dashboard/user/account';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'digibotUApp',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'Signup', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
        { path: 'DashLogin', element: <DashLogin /> },
        { path: 'changePassword', element: <ChangePassword /> },
        { path: 'adminLogin', element: <AdminLogin /> }
      ]
    },
    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <GeneralApp /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'mystone', element: <MyStone /> },
        { path: 'mybot', element: <MyBotDashboard /> },
        { path: 'events', element: <Events /> },
        {
          path: 'analytics',
          element: <GeneralAnalytics />
        },
        {
          path: 'marketplace',
          children: [
            { path: '/', element: <Navigate to="/dashboard/marketplace/nft" replace /> },
            { path: 'shop', element: <MaketplaceShop /> }
          ]
        },
        {
          path: 'e-commerce',
          children: [
            { path: '/', element: <Navigate to="/dashboard/e-commerce/shop" replace /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            { path: 'checkout', element: <EcommerceCheckout /> },
            { path: 'invoice', element: <EcommerceInvoice /> }
          ]
        },

        {
          path: 'promo-materials',
          children: [{ path: '/', element: <EventsPosts /> }]
        },
        {
          path: 'user',
          children: [
            { path: '/', element: <Navigate to="/dashboard/user/profile" replace /> },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <Tractionsac /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: '/:name/edit', element: <UserCreate /> },
            { path: 'account', element: <UserAccount /> },
            { path: 'password', element: <AccountChangePassword /> }
          ]
        },
        {
          path: 'personal',
          children: [
            { path: '/', element: <Navigate to="/dashboard/personal/payouts" replace /> },
            { path: 'transactions', element: <Tractionsac /> },
            { path: 'activation', element: <Activation /> },
            { path: 'support', element: <UserList /> }
          ]
        },
        {
          path: 'payout',
          children: [
            { path: '/', element: <Navigate to="/dashboard/payouts/minting" replace /> },
            { path: 'minting', element: <MintingPayouts /> }
          ]
        },
        {
          path: 'notification',
          children: [
            { path: '/', element: <Navigate to="/dashboard/notification/allnotification" replace /> },
            { path: 'allnotification', element: <NotificationLIst /> }
          ]
        },
        {
          path: 'tickets',
          children: [
            { path: '/', element: <Navigate to="/dashboard/personal/payouts" replace /> },
            { path: 'create-ticket', element: <CreateTicket /> },
            { path: 'open-ticket', element: <OpenTicket /> },
            { path: 'support', element: <UserList /> }
          ]
        },
        {
          path: 'myteam',
          children: [
            { path: '/', element: <Navigate to="/dashboard/my-team/mydownlines" replace /> },
            { path: 'mydownline', element: <MyDownline /> },
            { path: 'mydirect', element: <MyDirect /> },
            { path: 'mygenealogy', element: <MyGenealogy /> },
            { path: 'leftdownLine', element: <LeftDownLine /> },
            { path: 'rightdownline', element: <RightDownLine /> },
            { path: 'mylevel', element: <MyLevel /> }
          ]
        },
        {
          path: 'myprofile',
          children: [
            { path: '/', element: <Navigate to="/dashboard/my-profile/viewprofile" replace /> },
            { path: 'viewprofile', element: <ViewProfile /> },
            { path: 'editprofile', element: <UserAccount /> },
            { path: 'UserKYC', element: <UserKYC /> }
          ]
        },
        {
          path: 'bonus',
          children: [
            { path: '/', element: <Navigate to="/dashboard/bonus/minting" replace /> },
            { path: 'minting', element: <MintingList /> },
            { path: 'direct', element: <ReferralList /> },
            { path: 'referral', element: <ReferralList /> },
            { path: 'level', element: <LevelList /> },
            { path: 'matching', element: <CapitalList /> },
            { path: 'stacking', element: <StoneList /> },
            { path: 'passive', element: <PassiveList /> },
            { path: 'reward', element: <RewardBonusList /> },
            { path: 'annum', element: <AnnumBonusList /> },
            { path: 'monthly', element: <MonthlyPerRollList /> }
          ]
        },
        { path: 'stake', element: <StakingForm /> },
        { path: 'stakeSummary', element: <StackingSummary /> }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        {
          path: 'components',
          children: [
            { path: '/', element: <ComponentsOverview /> },
            // FOUNDATIONS
            { path: 'color', element: <Color /> },
            { path: 'typography', element: <Typography /> },
            { path: 'shadows', element: <Shadows /> },
            { path: 'grid', element: <Grid /> },
            { path: 'icons', element: <Icons /> },
            // MATERIAL UI
            { path: 'accordion', element: <Accordion /> },
            { path: 'alert', element: <Alert /> },
            { path: 'autocomplete', element: <Autocomplete /> },
            { path: 'avatar', element: <Avatar /> },
            { path: 'badge', element: <Badge /> },
            { path: 'breadcrumbs', element: <Breadcrumb /> },
            { path: 'buttons', element: <Buttons /> },
            { path: 'checkbox', element: <Checkbox /> },
            { path: 'chip', element: <Chip /> },
            { path: 'dialog', element: <Dialog /> },
            { path: 'label', element: <Label /> },
            { path: 'list', element: <List /> },
            { path: 'menu', element: <Menu /> },
            { path: 'pagination', element: <Pagination /> },
            { path: 'pickers', element: <Pickers /> },
            { path: 'popover', element: <Popover /> },
            { path: 'progress', element: <Progress /> },
            { path: 'radio-button', element: <RadioButtons /> },
            { path: 'rating', element: <Rating /> },
            { path: 'slider', element: <Slider /> },
            { path: 'snackbar', element: <Snackbar /> },
            { path: 'stepper', element: <Stepper /> },
            { path: 'switch', element: <Switches /> },
            { path: 'table', element: <Table /> },
            { path: 'tabs', element: <Tabs /> },
            { path: 'textfield', element: <Textfield /> },
            { path: 'timeline', element: <Timeline /> },
            { path: 'tooltip', element: <Tooltip /> },
            { path: 'transfer-list', element: <TransferList /> },
            { path: 'tree-view', element: <TreeView /> },
            { path: 'data-grid', element: <DataGrid /> },
            // EXTRA COMPONENTS
            { path: 'chart', element: <Charts /> },
            { path: 'map', element: <Map /> },
            { path: 'editor', element: <Editor /> },
            { path: 'copy-to-clipboard', element: <CopyToClipboard /> },
            { path: 'upload', element: <Upload /> },
            { path: 'carousel', element: <Carousel /> },
            { path: 'multi-language', element: <MultiLanguage /> },
            { path: 'animate', element: <Animate /> },
            { path: 'mega-menu', element: <MegaMenu /> },
            { path: 'form-validation', element: <FormValidation /> }
          ]
        }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const DashLogin = Loadable(lazy(() => import('../pages/authentication/DashLogin')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
const ChangePassword = Loadable(lazy(() => import('../pages/authentication/ChangePassword')));
const AdminLogin = Loadable(lazy(() => import('../pages/authentication/LoginFromAdmin')));
// Dashboard
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/MyteamDashboard')));
const EventsPosts = Loadable(lazy(() => import('../pages/dashboard/PromoMaterials')));
const MyStone = Loadable(lazy(() => import('../pages/dashboard/MyStoneDashboard')));
const MyBotDashboard = Loadable(lazy(() => import('../pages/dashboard/MyBotDashboard')));
const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/NFTCheckout')));
const EcommerceInvoice = Loadable(lazy(() => import('../pages/dashboard/EcommerceInvoice')));
const Events = Loadable(lazy(() => import('../pages/dashboard/EventsAndNews')));
const MaketplaceShop = Loadable(lazy(() => import('../pages/dashboard/PromoMaterials')));
const CapitalList = Loadable(lazy(() => import('../pages/dashboard/CapitalList')));
const AnnumBonusList = Loadable(lazy(() => import('../pages/dashboard/AnnumBonusList')));
const MonthlyPerRollList = Loadable(lazy(() => import('../pages/dashboard/MonthlyPerRollList')));
const StoneList = Loadable(lazy(() => import('../pages/dashboard/StoneList')));
const PassiveList = Loadable(lazy(() => import('../pages/dashboard/PassiveList')));
const RewardBonusList = Loadable(lazy(() => import('../pages/dashboard/RewardBonusList')));
const LevelList = Loadable(lazy(() => import('../pages/dashboard/LevelList')));
const ReferralList = Loadable(lazy(() => import('../pages/dashboard/ReferralList')));
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const Tractionsac = Loadable(lazy(() => import('../pages/dashboard/TractionsactionList')));
const CreateTicket = Loadable(lazy(() => import('../pages/dashboard/CreateTicket')));
const OpenTicket = Loadable(lazy(() => import('../pages/dashboard/OpenTicket')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
const Activation = Loadable(lazy(() => import('../pages/dashboard/Activation')));
const MintingList = Loadable(lazy(() => import('../pages/dashboard/MintingList')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));
const StakingForm = Loadable(lazy(() => import('../pages/dashboard/StakingForm')));
const StackingSummary = Loadable(lazy(() => import('../pages/dashboard/StackingSummary')));
const MintingPayouts = Loadable(lazy(() => import('../pages/dashboard/MintingPayouts')));
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const MyDownline = Loadable(lazy(() => import('../pages/dashboard/MyDownline')));
const MyDirect = Loadable(lazy(() => import('../pages/dashboard/MyDirect')));
const MyGenealogy = Loadable(lazy(() => import('../pages/dashboard/MyGenealogy')));
const LeftDownLine = Loadable(lazy(() => import('../pages/dashboard/LeftDownLine')));
const RightDownLine = Loadable(lazy(() => import('../pages/dashboard/RightDownLine')));
const ViewProfile = Loadable(lazy(() => import('../components/_dashboard/user/account/ViewProfile')));
const UserKYC = Loadable(lazy(() => import('../components/_dashboard/user/account/UserKYC')));
const MyLevel = Loadable(lazy(() => import('../pages/dashboard/MyLevel')));
const NotificationLIst = Loadable(lazy(() => import('../pages/dashboard/NotificationLIst')));
// Components
const ComponentsOverview = Loadable(lazy(() => import('../pages/ComponentsOverview')));
const Color = Loadable(lazy(() => import('../pages/components-overview/foundations/FoundationColors')));
const Typography = Loadable(lazy(() => import('../pages/components-overview/foundations/FoundationTypography')));
const Shadows = Loadable(lazy(() => import('../pages/components-overview/foundations/FoundationShadows')));
const Grid = Loadable(lazy(() => import('../pages/components-overview/foundations/FoundationGrid')));
const Icons = Loadable(lazy(() => import('../pages/components-overview/foundations/FoundationIcons')));
const Accordion = Loadable(lazy(() => import('../pages/components-overview/material-ui/Accordion')));
const Alert = Loadable(lazy(() => import('../pages/components-overview/material-ui/Alert')));
const Autocomplete = Loadable(lazy(() => import('../pages/components-overview/material-ui/Autocomplete')));
const Avatar = Loadable(lazy(() => import('../pages/components-overview/material-ui/Avatar')));
const Badge = Loadable(lazy(() => import('../pages/components-overview/material-ui/Badge')));
const Breadcrumb = Loadable(lazy(() => import('../pages/components-overview/material-ui/Breadcrumb')));
const Buttons = Loadable(lazy(() => import('../pages/components-overview/material-ui/buttons')));
const Checkbox = Loadable(lazy(() => import('../pages/components-overview/material-ui/Checkboxes')));
const Chip = Loadable(lazy(() => import('../pages/components-overview/material-ui/chips')));
const Dialog = Loadable(lazy(() => import('../pages/components-overview/material-ui/dialog')));
const Label = Loadable(lazy(() => import('../pages/components-overview/material-ui/Label')));
const List = Loadable(lazy(() => import('../pages/components-overview/material-ui/Lists')));
const Menu = Loadable(lazy(() => import('../pages/components-overview/material-ui/Menus')));
const Pagination = Loadable(lazy(() => import('../pages/components-overview/material-ui/Pagination')));
const Pickers = Loadable(lazy(() => import('../pages/components-overview/material-ui/pickers')));
const Popover = Loadable(lazy(() => import('../pages/components-overview/material-ui/Popover')));
const Progress = Loadable(lazy(() => import('../pages/components-overview/material-ui/progress')));
const RadioButtons = Loadable(lazy(() => import('../pages/components-overview/material-ui/RadioButtons')));
const Rating = Loadable(lazy(() => import('../pages/components-overview/material-ui/Rating')));
const Slider = Loadable(lazy(() => import('../pages/components-overview/material-ui/Slider')));
const Snackbar = Loadable(lazy(() => import('../pages/components-overview/material-ui/Snackbar')));
const Stepper = Loadable(lazy(() => import('../pages/components-overview/material-ui/stepper')));
const Switches = Loadable(lazy(() => import('../pages/components-overview/material-ui/Switches')));
const Table = Loadable(lazy(() => import('../pages/components-overview/material-ui/table')));
const Tabs = Loadable(lazy(() => import('../pages/components-overview/material-ui/Tabs')));
const Textfield = Loadable(lazy(() => import('../pages/components-overview/material-ui/textfield')));
const Timeline = Loadable(lazy(() => import('../pages/components-overview/material-ui/Timeline')));
const Tooltip = Loadable(lazy(() => import('../pages/components-overview/material-ui/Tooltip')));
const TransferList = Loadable(lazy(() => import('../pages/components-overview/material-ui/transfer-list')));
const TreeView = Loadable(lazy(() => import('../pages/components-overview/material-ui/TreeView')));
const DataGrid = Loadable(lazy(() => import('../pages/components-overview/material-ui/data-grid')));

//
const Charts = Loadable(lazy(() => import('../pages/components-overview/extra/Charts')));
const Map = Loadable(lazy(() => import('../pages/components-overview/extra/Map')));
const Editor = Loadable(lazy(() => import('../pages/components-overview/extra/Editor')));
const CopyToClipboard = Loadable(lazy(() => import('../pages/components-overview/extra/CopyToClipboard')));
const Upload = Loadable(lazy(() => import('../pages/components-overview/extra/Upload')));
const Carousel = Loadable(lazy(() => import('../pages/components-overview/extra/Carousel')));
const MultiLanguage = Loadable(lazy(() => import('../pages/components-overview/extra/MultiLanguage')));
const Animate = Loadable(lazy(() => import('../pages/components-overview/extra/animate')));
const MegaMenu = Loadable(lazy(() => import('../pages/components-overview/extra/MegaMenu')));
const FormValidation = Loadable(lazy(() => import('../pages/components-overview/extra/form-validation')));
