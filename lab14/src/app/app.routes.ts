import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";


const MY_ROUTES=[
    {path:"confirm",component:ConfirmationComponent},
    {path:"**", redirectTo:"/"},
    {path:"", component:UserComponent}
];

export const myRoutes=RouterModule.forRoot(MY_ROUTES);