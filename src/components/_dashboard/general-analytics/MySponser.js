import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

MySponser.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  icon: PropTypes.string,
  backgroundColor: PropTypes.object
};

// ------------------------

export default function MySponser({ title1, title2, icon, backgroundColor }) {
  return (
    <RootStyle style={{ backgroundColor }}>
      <IconWrapperStyle>
        <Icon icon={icon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h5">{title1}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title2}
      </Typography>
    </RootStyle>
  );
}
