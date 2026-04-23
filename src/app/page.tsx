

export default function Home() {
  return (
    <main className="min-h-screen  bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_HOME_BG})`,
      }}
    >
      <h1>words app</h1>
    </main>
  );
}
