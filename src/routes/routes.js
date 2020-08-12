import SignIn from "../views/Auth/SignIn";
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
},{
    id:3,
    url:'/dashboard',
    component: Dashboard
}]

export default routes