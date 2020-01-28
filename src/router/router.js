import Home from '~src/components/home/home';
import Cart from '~src/components/cart/cart';
import Checkout from '~src/components/checkout/checkout';
import ProductsGrid from '~src/components/products/productsGrid';
// import Result from '~/components/result';
//import Post from '~/components/post';
import Error404 from '~src/components/errors/error404';

const routes = [
   {
      name: 'home',
      path: '/',
      component: Home,
      exact: true
   },
   {
      name: 'cart',
      path: '/cart',
      component: Cart,
      exact: true
   },
   {
      name: 'checkout',
      path: '/checkout',
      component: Checkout,
      exact: true
   },
   {
      name: 'products',
      path: '/products',
      component: ProductsGrid,
      exact: true
   },
   // {
   //    name: 'result',
   //    path: '/result',
   //    component: Result,
   //    exact: true
   // },
   // {
   //    name: 'post',
   //    path: '/posts/:num',
   //    component: Post,
   //    exact: true
   // },
   {
      path: '**',
      component: Error404
   }
];

const routesMap = {};

routes.forEach((route) => {
   if(route.hasOwnProperty('name')){
      routesMap[route.name] = route.path;
   }
});

export { routes, routesMap }