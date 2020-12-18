import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {Authority} from "../shared/constants/authority.constants";
import {UserRouteAccessService} from "../core/auth/user-route-access-service";

const routes: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'awards',
        loadChildren: () => import('../pages/tab1/awards.module').then(m => m.AwardsPageModule),
        data: {
          authorities: [Authority.USER],
        },
        canActivate: [UserRouteAccessService],
      },
      {
        path: 'content',
        loadChildren: () => import('../pages/tab2/content.module').then(m => m.ContentPageModule),
        data: {
          authorities: [Authority.USER],
        },
        canActivate: [UserRouteAccessService],
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/tab3/contact.module').then(m => m.ContactPageModule),
        data: {
          authorities: [Authority.USER],
        },
        canActivate: [UserRouteAccessService],
      },
      {
        path: 'my-account',
        loadChildren: () => import('../pages/tab4/my-account.module').then(m => m.MyAccountPageModule),
        data: {
          authorities: [Authority.USER],
        },
        canActivate: [UserRouteAccessService],
      },
      {
        path: '',
        redirectTo: '/tabs/content',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule),
  },

    {
    path: 'password',
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/password/password.module').then(m => m.PasswordPageModule),
      }
    ]
  },
  {
    path: 'reset',
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/password-reset/password-reset.module').then(m => m.PasswordResetPageModule),
      }
    ]
  },

  {
    path: 'account/register',
    loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
