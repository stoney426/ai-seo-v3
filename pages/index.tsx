import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to SEO AI Agent 🚀</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Use AI to run SEO audits, optimize content, and boost your site rankings.
      </p>
      <Link href="/dashboard">
        <a className="bg-blue-600 text-white px-4 py-2 rounded">Go to Dashboard</a>
      </Link>
    </div>
  );
}
