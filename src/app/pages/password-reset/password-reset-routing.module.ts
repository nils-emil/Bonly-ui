import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PasswordResetInitPage} from "./init/password-reset-init.page";
import {PasswordResetFinishPage} from "./finish/password-reset-finish.page";

const routes: Routes = [
    {
        path: 'request',
        component: PasswordResetInitPage,
    },
    {
        path: 'finish',
        component: PasswregiordResetFinishPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasswordResetPageRoutingModule {
}
