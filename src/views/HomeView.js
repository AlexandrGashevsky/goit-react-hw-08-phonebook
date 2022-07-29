import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

export default function HomeView() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          mx: 'auto',
          my: 2,
          py: 3,
          px: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 3,
          borderRadius: 'sm',
          boxShadow: 'md',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          level="h1"
          component="h1"
          fontSize="sm"
          sx={{ alignSelf: 'center', mr: '65px' }}
        >
          This is a phone book. Here you can register and save names and phone numbers.
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
