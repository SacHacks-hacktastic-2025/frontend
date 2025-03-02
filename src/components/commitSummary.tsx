export default function CommitSummary({ commits }: { commits: any[] }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Recent Commits</h2>
      <ul className="mt-2 space-y-2">
        {commits.map((commit, idx) => (
          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
            {commit.message} - <span className="text-xs">{commit.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
