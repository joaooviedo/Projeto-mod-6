import { auth } from './auth';
import { order } from './order';
import { product } from './product';
import { table } from './table';
import { user } from './user';

export const endpoint = {
    baseUrl: "https://pizza-fresh-server-h8ng.onrender.com",
    ...auth,
    ...user,
    ...order,
    ...table,
    ...product,
};