import { Button } from "@/components/ui/button";

export default function Login() {
  const handleLogin = () => {
    window.location.href = "https://github.com/login/oauth/authorize"; // GitHub OAuth URL
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to DevRetro</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Track your development progress with GitHub insights.
        </p>
        <Button
          onClick={handleLogin}
          className="bg-black text-white hover:bg-gray-800"
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
}
