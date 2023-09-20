/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as Yup from 'yup';
import { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import queryString from 'query-string';
import { useSnackbar } from 'notistack5';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  Link,
  Checkbox,
  Typography,
  FormControlLabel,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
//
import { MIconButton } from '../../@material-extend';
// eslint-disable-next-line import/order, import/no-unresolved
import { getSponcerNameByUplineID } from 'src/redux/slices/user';
import CountryCodes from './countryCodes';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [succefullyRegisterdUserId, setRegisterdUserId] = useState('');
  // const [value, setValue] = useState(options[0]);
  // const [inputValue, setInputValue] = useState('');
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // eslint-disable-next-line new-cap
  const queryParams = new queryString.parse(window.location.search);
  const [selectedPackage, setSelectedPackage] = useState('');

  const sortedCountryCodes = CountryCodes.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (queryParams.UplineId === undefined) {
      enqueueSnackbar('Sponcer ID is required', {
        variant: 'error',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        )
      });
      // window.location.replace('/digibotUApp/login');
    } else if (queryParams.UplineId === '8497049') {
      // If UplineId is available, fetch the sponsor name
      window.location.replace('/digibotUApp/login');
    }
  }, []);

  const RegisterSchema = Yup.object().shape({
    memberName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('User Name required'),
    sponsorId: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Sponcer id is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Password id is required'),
    // .matches(
    //   /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,20}$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one numeric value, and one special character.'
    // ),
    checkbox: Yup.boolean().oneOf([true], 'Terms and conditions must be agreed').required('Checkbox must be checked')
  });

  const handleSuccessDialogClose = () => {
    // Reset form values and close the dialog
    formik.resetForm();
    setOpen(false);
    setShowSuccessDialog(false);
    window.location.replace('/digibotUApp/login');
  };

  const formik = useFormik({
    initialValues: {
      sponsorId: queryParams.UplineId,
      memberName: '',
      email: '',
      password: '',
      cpassword: '',
      // eslint-disable-next-line object-shorthand
      selectedPackage: selectedPackage,
      checkbox: false
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setDisabled(true);

      if (values.password !== values.cpassword) {
        enqueueSnackbar('Please Confirm Password first', {
          variant: 'error',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        setOpen(false);
        return;
      }
      try {
        const response = await register(
          values.sponsorId,
          values.memberName,
          values.email,
          values.contactNo,
          values.password,
          values.cpassword,
          selectedPackage
        );

        setRegisterdUserId(response.data.userId);

        enqueueSnackbar('Register success', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });

        setDisabled(false);

        setShowSuccessDialog(true);
        if (isMountedRef.current) {
          setSubmitting(false);
        }
        // window.location.replace('/digibotUApp/login');
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error?.response?.data?.message });
          setSubmitting(false);
          setOpen(false);
        }
      }
      setDisabled(false);
    }
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const handleClickOpen = () => {
    if (formik.isValid) {
      setOpen(true);
      setScroll('paper');
    }
    if (formik.isValid && open) {
      formik.submitForm(); // Trigger form submission to display validation errors
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogContentScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const isScrolledToEnd = scrollTop + clientHeight >= scrollHeight - 20;
    setIsScrolledToEnd(isScrolledToEnd);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleTermsClick = () => {
    console.log('called');
  };

  const handlePrivacyClick = () => {
    console.log('called');
  };

  const navigateTologin = () => {
    window.location.replace('/digibotUApp/login');
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          <Grid container>
            <Grid item sx={{ paddingLeft: '0px !important', marginTop: '0px !important' }} xs={12}>
              <TextField
                fullWidth
                autoComplete="sponcer_id"
                type="text"
                InputProps={{
                  readOnly: true
                }}
                label="Sponsor ID"
                focused
                {...getFieldProps('sponsorId')}
                error={Boolean(touched.sponsorId && errors.sponsorId)}
                helperText={touched.sponsorId && errors.sponsorId}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Username"
            {...getFieldProps('memberName')}
            error={Boolean(touched.memberName && errors.memberName)}
            helperText={touched.memberName && errors.memberName}
          />
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          {/* <Grid container spacing={2}>
            <Grid item xs={4} sx={{ paddingLeft: '0px !important', paddingTop: '0px !important' }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="country-code">Country</InputLabel>
                <Select
                  label="Country"
                  id="country-code"
                  {...getFieldProps('countryCode')}
                  error={Boolean(touched.countryCode && errors.countryCode)}
                >
                  {sortedCountryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </MenuItem>
                  ))}
                </Select>
                {Boolean(touched.countryCode && errors.countryCode) && (
                  <div style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.countryCode}</div>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: '10px !important', paddingTop: '0px !important' }}>
              <TextField
                fullWidth
                autoComplete="phone number"
                type="text"
                label="Contact No."
                {...getFieldProps('contactNo')}
                error={Boolean(touched.contactNo && errors.contactNo)}
                helperText={touched.contactNo && errors.contactNo}
              />
            </Grid>
          </Grid> */}
          <Grid container>
            <Grid item sx={{ '@media (min-width:600px)': { paddingRight: '10px' } }} xs={12} md={6}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item sx={{ '@media (max-width:600px)': { marginTop: '10px' } }} xs={12} md={6}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                {...getFieldProps('cpassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="package-label">Select Position</InputLabel>
            <Select
              labelId="package-label"
              id="package"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              label="Select Position"
            >
              <MenuItem value="LEFT">LEFT</MenuItem>
              <MenuItem value="RIGHT">RIGHT</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('checkbox')} checked={formik.values.checkbox} color="primary" />}
              label={
                <div style={{ display: 'flex', whiteSpace: 'nowrap', flexWrap: 'wrap' }}>
                  I agree to digibot&nbsp;
                  <div onClick={handleTermsClick}>
                    <Link underline="always" color="text.primary" href="#" onClick={(event) => event.preventDefault()}>
                      Terms of Service
                    </Link>
                  </div>
                  &nbsp;and&nbsp;
                  <div onClick={handlePrivacyClick}>
                    <Link underline="always" color="text.primary" href="#" onClick={(event) => event.preventDefault()}>
                      Privacy Policy
                    </Link>
                  </div>
                  .
                </div>
              }
              sx={{ marginRight: 0 }}
            />
            {errors.checkbox && <Alert severity="error">{errors.checkbox}</Alert>}
          </Typography>
          <LoadingButton
            fullWidth
            size="large"
            variant="contained"
            onClick={handleClickOpen}
            loading={isSubmitting}
            disabled={!formik.isValid}
          >
            Register
          </LoadingButton>
          <Dialog open={open} onClose={handleClose} scroll={scroll}>
            <DialogTitle sx={{ pb: 2 }}>Terms and Conditions for Investment in Digibot Trading Platform</DialogTitle>
            <DialogContent dividers={scroll === 'paper'} onScroll={handleDialogContentScroll}>
              <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                1. Investment at Your Own Risk: All investments made through Digibot are entirely at your own risk. The
                company does not guarantee profits, and the value of your investments may fluctuate. You acknowledge
                that investing in financial markets involves inherent risks, including the risk of losing part or all of
                your investment. <br />
                2. No Liability of the Company: Digibot and its affiliates shall not be liable for any losses, damages,
                or claims arising from your investment decisions or actions taken based on information provided through
                the platform. You agree that the company is not responsible for any investment outcomes and shall not be
                held accountable for any financial losses.
                <br />
                3. No Financial or Investment Advice: The information, data, analyses, and content presented on Digibot
                are for informational purposes only and should not be considered as financial or investment advice. The
                company does not provide personalized investment recommendations or financial planning services.
                <br /> 4. User Responsibilities: As a user of Digibot, you are responsible for conducting your own
                research, analysis, and due diligence before making any investment decisions. You acknowledge that the
                company does not assess your financial situation, risk tolerance, or investment goals. <br /> 5.
                Third-Party Content: Digibot may include content from third-party sources, such as news articles, market
                analyses, and other information. The company does not endorse, guarantee the accuracy, or assume any
                responsibility for the content provided by third parties. <br /> 6. Trading Regulations and Compliance:
                You agree to comply with all applicable laws, regulations, and financial market rules in your
                jurisdiction while using Digibot for investment purposes. It is your responsibility to ensure that your
                activities on the platform are legal and in compliance with relevant authorities. <br /> 7. Security
                Measures: The company implements reasonable security measures to protect user data and accounts.
                However, you acknowledge that no online platform can guarantee complete security. You are responsible
                for safeguarding your login credentials and account information. <br /> 8. Platform Availability: While
                Digibot strives to maintain continuous platform availability, there may be instances of scheduled
                maintenance, system upgrades, or unforeseen technical issues that could lead to temporary interruptions.
                The company shall not be held responsible for any losses incurred during such periods. <br /> 9. Changes
                to Terms and Conditions: Digibot reserves the right to modify, update, or amend these terms and
                conditions at any time. Any changes will be effective immediately upon posting on the platform.
                Continued use of Digibot after such modifications constitutes acceptance of the revised terms. <br />{' '}
                10. Termination of Service: The company reserves the right to terminate or suspend access to Digibot at
                any time, for any reason, without prior notice. In such cases, the company will not be liable for any
                losses or damages resulting from the termination. <br /> 11. Intellectual Property: All intellectual
                property rights related to Digibot, including but not limited to trademarks, logos, software, and
                content, are the exclusive property of the company. <br /> 12. Dispute Resolution: Any disputes arising
                from your use of Digibot shall be subject to the laws of [Jurisdiction]. You agree to resolve any such
                disputes through arbitration or alternative dispute resolution methods, as determined by the company.{' '}
                <br /> By using Digibot, you acknowledge that you have read, understood, and agreed to these terms and
                conditions. If you do not agree with any part of these terms, please refrain from using the platform for
                investment purposes.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button fullWidth onClick={handleClose}>
                Cancel
              </Button>
              <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                loading={disabled}
                onClick={handleClickOpen}
                disabled={!isScrolledToEnd || disabled}
                style={{ whiteSpace: 'nowrap' }}
              >
                Register Now
              </LoadingButton>
            </DialogActions>
          </Dialog>
          <Dialog open={showSuccessDialog} onClose={handleSuccessDialogClose}>
            <DialogTitle>Registration Successful</DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
              <DialogContentText>Congratulations! Your registration was successful.</DialogContentText>
              <DialogContentText>
                Your UserId is :{' '}
                <span style={{ color: 'white', fontWeight: 'bold' }}> {succefullyRegisterdUserId}</span>
              </DialogContentText>
              <Box m={1}>
                <Box height={50} display="flex" justifyContent="center" alignItems="center">
                  <Button onClick={navigateTologin} variant="contained">
                    Login
                  </Button>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={handleSuccessDialogClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
