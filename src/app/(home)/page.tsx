

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 pt-12">

      <h1 className="mt-4 text-lg">words.ts</h1>
      <Link href="/dash">Get started</Link>
    </main>
  );
}