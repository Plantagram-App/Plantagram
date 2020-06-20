/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Allplants} from './plants/AllPlants'
export {default as SinglePlant} from './plants/SinglePlant'
export {Login, Signup} from './auth-form'
export {default as Cart} from './orders/cart'
export {default as CheckoutPage} from './orders/checkout'
