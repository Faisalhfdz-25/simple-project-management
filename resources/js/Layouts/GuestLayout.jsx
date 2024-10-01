import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest(props) {
    const {children, type} = props
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
            <div>
                {type === 'register' ? (
                    <Link
                        href={route('login')}
                        className="text-sm text-gray-600 underline dark:text-gray-300"
                    >
                        Already registered?
                    </Link>
                ) : (
                    <Link
                    href={route('register')}
                    className="text-sm text-gray-600 underline dark:text-gray-300"
                >
                    Not registered?
                </Link>
                )}
            </div>
        </div>
    );
}
