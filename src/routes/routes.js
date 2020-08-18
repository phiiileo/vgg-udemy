import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import LandingPage from "../views/LandingPage";
import Dashboard from "../views/Dashboard/Dashboard";
import ForgetPassword from "../views/Auth/ForgotPassord";
import SetPassword from "../views/Auth/SetPassword";
import Profile from "../views/Profile/Profile";
import Videos from "../views/Videos/Videos";
import UploadVideo from "../views/UploadVideo/UploadVideo";

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
    }, {
        id: 4,
        url: '/forget-password',
        component: ForgetPassword
    },
    {
        id: 5,
        url: '/set-password',
        component: SetPassword
    }, {
        id: 6,
        url: "/profile",
        component: Profile
    },
    {
        id: 7,
        url: "/videos",
        component: Videos
    },
    {
        id: 8,
        url: "/upload",
        component: UploadVideo
    }
]

export default routes