import FormLogin from "@/Components/Fragments/FormLogin";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Login({ status }) {
  return (
    <GuestLayout type="login">
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <FormLogin />
    </GuestLayout>
  );
}
