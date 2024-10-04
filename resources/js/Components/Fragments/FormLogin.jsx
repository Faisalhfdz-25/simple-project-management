import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";

export default function FormLogin({ canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={submit} className="space-y-6">
        <div>
          <InputLabel
            htmlFor="email"
            value="Email"
            className="block text-sm font-medium leading-6 text-gray-900"
          />

          <div className="mt-2">
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData("email", e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <InputLabel
              htmlFor="password"
              value="Password"
              className="block text-sm font-medium leading-6 text-gray-900"
            />
            <div className="text-sm">
              <Link
                href={route("password.request")}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              autoComplete="current-password"
              onChange={(e) => setData("password", e.target.value)}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <PrimaryButton
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={processing}
          >
            Log in
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
