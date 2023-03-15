import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/main.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="0px">
      <img src={Logo} alt="logo" style={{ width: '190px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="0px" textAlign="center" pb="20px">©2022 by DesignedIT. All Rights Reserved</Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '14px', xs: '9px' } }} mt="0px" textAlign="center" pb="15px">Designed and Developed By Seyran Ghazaryan</Typography>
  </Box>
);

export default Footer