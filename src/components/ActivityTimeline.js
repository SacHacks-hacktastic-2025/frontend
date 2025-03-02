import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GitCommit, Bug } from "lucide-react"; // Icons
import { useEffect, useState } from "react";
import { fetchGitHubData } from "../utils/GitHubService";

const ActivityTimeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchGitHubData().then((data) => {
      const commits = data.commits.map((commit) => ({
        type: "commit",
        message: commit.message,
        timestamp: new Date(commit.timestamp).toLocaleString(),
      }));

      const issues = data.issues.map((issue) => ({
        type: "issue",
        message: issue.title,
        timestamp: new Date(issue.timestamp).toLocaleString(),
      }));

      setEvents(
        [...commits, ...issues].sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        )
      );
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daily Activity Timeline</h2>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.timestamp}
            icon={event.type === "commit" ? <GitCommit /> : <Bug />}
            iconStyle={{
              background: event.type === "commit" ? "#4CAF50" : "#F44336",
              color: "#fff",
            }}
          >
            <h3 className="font-semibold">
              {event.type === "commit" ? "Commit" : "Issue"}
            </h3>
            <p>{event.message}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ActivityTimeline;
