import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-medium">Page not found</h1>
      <Link href="/" className="linkClass">
        Return home
      </Link>
    </section>
  );
}
