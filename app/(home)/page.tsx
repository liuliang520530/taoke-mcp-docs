import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">欢迎使用taoke-mcp</h1>
      <p className="text-fd-muted-foreground">
        点击这里开始{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        来查看使用文档
      </p>
    </main>
  );
}
