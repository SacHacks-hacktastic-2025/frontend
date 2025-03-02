export default function UserInfo({ user }: { user: any }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img
        src={user.avatar_url}
        alt="Profile"
        className="w-16 h-16 rounded-full mb-2"
      />
      <h2 className="text-lg font-bold">{user.name || user.login}</h2>
      <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
    </div>
  );
}
