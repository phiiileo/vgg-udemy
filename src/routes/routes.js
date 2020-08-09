import SignIn from "../views/Auth/SignIn";
import LandingPage from "../views/LandingPage";

const routes = [{
    id: 1,
    url: "/",
    component: LandingPage
}, {
    id: 2,
    url: "/sign-in",
    component: SignIn
}]

export default routes