import { Link } from "@inertiajs/react";

export default function Guest(props) {
  const { children, type } = props;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {type === "register"
            ? "Sign Up to your account"
            : "Sign in to your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="bg-white shadow-lg rounded-xl p-6">
          {children}
        </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            {type === "register" ? "Already have an account?" : 'Don\'t have an account?'}{' '}

            {type === "login" ? (
              <Link href={"/register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
            ): (
              <Link href={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign In
            </Link>
            )}


          </p>
        </div>
    </div>
  );
}
