import { Order_itemsInterface } from 'interfaces/order_items';

export interface OrdersInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  status: string;
  special_requests?: string;
  order_time: Date;
  pickup_delivery_time: Date;
  order_items?: Order_itemsInterface[];
}
