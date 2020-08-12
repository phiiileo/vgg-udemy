import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import LandingPage from "../views/LandingPage";
import Dashboard from "../views/Dashboard/Dashboard";

const routes = [{
    id: 1,
    url: "/",
    component: LandingPage
}, {
    id: 2,
    url: "/sign-in",
    component: SignIn
}, {
    id: 2,
    url: "/sign-up",
    component: SignUp
}, {
    id: 3,
    url: '/dashboard',
    component: Dashboard
}]

export default routes