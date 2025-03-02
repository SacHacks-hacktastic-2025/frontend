import ThemeToggle from "@/components/ThemeToggle";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold">DevRetro</h1>
        <ThemeToggle />
      </nav>
      <main className="flex flex-grow p-6">{children}</main>
    </div>
  );
}
