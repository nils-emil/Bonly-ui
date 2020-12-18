import { Route } from '@angular/router';

import { RegisterPage } from './register.page';

export const registerRoute: Route = {
  path: 'register',
  component: RegisterPage,
  data: {
    authorities: [],
  },
};
