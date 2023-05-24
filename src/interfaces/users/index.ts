import { FeedbackInterface } from 'interfaces/feedbacks';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { RestaurantsInterface } from 'interfaces/restaurants';

export interface UsersInterface {
  id?: string;
  role: string;
  name: string;
  email: string;
  password: string;
  feedback?: FeedbackInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
  restaurants?: RestaurantsInterface[];
}
