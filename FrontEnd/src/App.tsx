import React from 'react';

import GlobalStyles from './components/styles/GlobalStyles';
/**Contem as rotas da aplicação */
import IndexRouter from './router';

function App() {

  return (
    
    <>
      <IndexRouter />
      
      <GlobalStyles />
    </>
  );
}

export default App;
