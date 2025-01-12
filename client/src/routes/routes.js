import Emails from "../components/Emails";
import ViewEmail from "../components/ViewEmail";
import Main from "../pages/Main";

const routes = {
    main : {
        path : '/',
        element : Main
    },
    emails : {
        path : '/emails',
        element : Emails
    },
    view : {
        path : '/view',
        element : ViewEmail
    }
}
export  {routes};