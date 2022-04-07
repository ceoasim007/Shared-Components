import React, { lazy, Suspense } from 'react';
import { bells, check } from 'rev_ui/icons';

import Button from './Button';


const App = () => {
  return (
    <Suspense fallback={null}>
      <Button />
    </Suspense>
  );
};

export default App;