export default function GPTInsights({ insights }: { insights: string }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">AI Insights</h2>
      <p className="text-gray-600 dark:text-gray-400">{insights}</p>
    </div>
  );
}
