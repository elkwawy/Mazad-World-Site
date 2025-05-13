import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navgit = () => {
  const location = useLocation();

  // Split the path into segments for dynamic breadcrumbs
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Map path segments to breadcrumb labels
  const breadcrumbMap = {
    "user-account": "User Account",
    "sign-in": "Sign In",
    "forget-password": "Forget Password",
    "reset-password": "Reset Password",
  };

  return (
    <nav className="text-sm mt-2">
      <ol className="flex  containerAK">
        {/* Home link */}
        <li>
          <Link to="/" className="text-secondary text-lg hover:underline">
            Home
          </Link>
        </li>
        {/* Add separator after Home */}
        {pathSegments.length > 0 && (
          <span className="px-2 text-lg ">{" >"}</span>
        )}

        {/* Dynamically generate the rest of the breadcrumb */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={path} className="flex items-center">
              {isLast ? (
                <span className="font-semibold text-gray-700 text-lg ">
                  {breadcrumbMap[segment] || segment}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-secondary hover:underline text-lg "
                >
                  {breadcrumbMap[segment] || segment}
                </Link>
              )}
              {/* Separator between breadcrumbs */}
              {!isLast && (
                <span className="mx-2 text-gray-400 text-lg">{" >"}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navgit;
