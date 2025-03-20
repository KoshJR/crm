import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Customer Relationship Management</h1>
          <Link
            href={'/companies'}
            className="text-white bg-gray-900 hover:bg-blue-700 font-medium py-2 px-4 rounded-lg transition"
          >
            Continue to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
