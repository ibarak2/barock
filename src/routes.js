import { ConcertDetails } from "./pages/concert-details.jsx"
import { HomePage } from "./pages/home-page.jsx"


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: "/",
        component: <HomePage />,
        label: "Home",
    },
    {
        path: "/concert-details/:id",
        component: <ConcertDetails />,
        label: "Home",
    },
]

export default routes
