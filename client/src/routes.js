import Admin from "./pages/Admin"
import {
    ACTUAL_ROUTE,
    ADMIN_ROUTE,
    ATTENDANCE_ROUTE,
    LOGIN_ROUTE,
    POINTS_ROUTE,
    PUBLIC_ROUTE, REGISTRATION_ROUTE,
    SCHEDULE_ROUTE, STARTLESSON_ROUTE
} from "./utils/consts";
import Actual from "./pages/Actual";
import Attendance from "./pages/Attendance";
import Points from "./pages/Points";
import Schedule from "./pages/Schedule";
import Public from "./pages/Public";
import Auth from "./pages/Auth";
import StartLesson from "./pages/StartLesson";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACTUAL_ROUTE,
        Component: Actual
    },
    {
        path: ATTENDANCE_ROUTE,
        Component: Attendance
    },
    {
        path: POINTS_ROUTE,
        Component: Points
    },
    {
        path: SCHEDULE_ROUTE,
        Component: Schedule
    },
    {
        path: STARTLESSON_ROUTE,
        Component: StartLesson
    }
]

export const publicRoutes = [
    {
        path: PUBLIC_ROUTE,
        Component: Public
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]