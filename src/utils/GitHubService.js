const API_URL = "https://api.github.com/users/your-username/events";
let cache = null;

export async function fetchGitHubData() {
  if (cache) return cache;

  const response = await fetch(API_URL);
  const data = await response.json();

  cache = {
    commits: data
      .filter((event) => event.type === "PushEvent")
      .map((event) => ({
        message: event.payload.commits[0].message,
        timestamp: event.created_at,
      })),
    issues: data
      .filter((event) => event.type === "IssuesEvent")
      .map((event) => ({
        title: event.payload.issue.title,
        timestamp: event.created_at,
      })),
  };

  return cache;
}
