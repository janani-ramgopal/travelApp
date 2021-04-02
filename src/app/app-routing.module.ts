import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { PlanMyJourneyComponent } from './plan-my-journey/plan-my-journey.component';

const routes: Routes = [{path:'applyNow',component:ApplyNowComponent},
{path:'planMyJourney',component:PlanMyJourneyComponent},
{path:'manageBooking',component:ManageBookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
