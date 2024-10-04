import FromRegister from '@/Components/Fragments/FormRegister';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Register() {

    return (
        <GuestLayout type="register">
            <Head title="Register" />

            <FromRegister />
        </GuestLayout>
    );
}
