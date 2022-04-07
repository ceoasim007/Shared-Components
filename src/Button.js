import React, { lazy, Suspense } from 'react';
import { bells, check } from 'rev_ui/icons';

const Button1 = lazy(() => import('rev_ui/Button'));


const Button = () => {
  return (
      <Button1
        startIcon={bells}
        label='test'
        onClick={() => alert('it works!')}
      />
  );
};

export default Button;