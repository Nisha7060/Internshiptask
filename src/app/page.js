export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to Next.js 🚀</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a beautiful Next.js App Router setup with amazing UI/UX.
      </p>
      <a
        href="/dashboard"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Go to Dashboard
      </a>
    </section>
  );
}
