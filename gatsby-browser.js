// Import local CSS
import './src/app.css';
import './src/components/components.css';
import './src/templates/templates.css';

// Import React context
import React from 'react';
import { MenuProvider } from './src/core/menu-context';

export const wrapRootElement = ({ element }) => (
	<MenuProvider>{element}</MenuProvider>
);
