import {
    CREATEORDER_ROUTE,
    LOGIN_ROTE,
    MENU_ROUTE,
    ORDERITEM_ROUTE,
    ORDERS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/const";
import Menu from "./Page/Menu";
import Auth from "./Page/Auth";
import CreateOrder from "./Page/CreateOrder";
import Orders from "./Page/Orders";
import OrderPage from "./Page/OrderPage";

export const publicRoutes = [
    {
      path: ORDERS_ROUTE,
      Component: Orders,
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: LOGIN_ROTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CREATEORDER_ROUTE,
        Component: CreateOrder
    },
    {
        path: ORDERITEM_ROUTE + '/:id',
        Component: OrderPage
    }
]