import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

export default function Index({ projects }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects Page
        </h2>
      }
    >
      <Head title="Project" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Image</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Created Date</th>
                    <th className="px-3 py-2">Due Date</th>
                    <th className="px-3 py-2">Created By</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th className="px-3 py-2">{project.id}</th>
                      <th className="px-3 py-2">
                        <img src={project.image_path} className="w-24 h-auto" />
                      </th>
                      <th className="px-3 py-2">{project.name}</th>
                      <th className="px-3 py-2">{project.status}</th>
                      <th className="px-3 py-2">{project.created_at}</th>
                      <th className="px-3 py-2">{project.due_date}</th>
                      <th className="px-3 py-2">{project.createdBy.name}</th>
                      <th className="px-3 py-2">
                        <Link
                          href={route("project.edit", project.id)}
                          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150"
                        >
                          <PencilSquareIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                          Edit


                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
