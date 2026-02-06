import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-extrabold text-error mb-4">
          {error?.status || 404}
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Oops! Something went wrong
        </h2>

        <p className="text-base-content/70 mb-6">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for does not exist or an unexpected error occurred."}
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
