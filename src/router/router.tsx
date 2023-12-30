import { PrivateRoute } from "./PrivateRoute.tsx";
import { createBrowserRouter } from "react-router-dom";
import { CartPage, ErrorInvalidTokenPage, HomePage, LoginPage, RecoveryPassPage, RegisterPage, RestorePassPage, TableSectionsVisitedPage } from "../pages";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />

    },
    {
        path: '/auth/*',
        element: <LoginPage />
    },
    {
        path: '/auth/login',
        element: <LoginPage />
    },
    {
        path: '/auth/register',
        element: <RegisterPage />
    },
    {
        path: '/auth/recovery-password',
        element: <RecoveryPassPage />
    },
    {
        path: '/auth/restore-password',
        element: <RestorePassPage />
    },
    {
        path: '/auth/error-invalid-token',
        element: <ErrorInvalidTokenPage />
    },

    {
        path: `/cart`,
        element: <PrivateRoute>
            <CartPage />
        </PrivateRoute>
    },
    {
        path: '/sections-visited',
        element: <PrivateRoute>
            <TableSectionsVisitedPage />
        </PrivateRoute>
    }

])