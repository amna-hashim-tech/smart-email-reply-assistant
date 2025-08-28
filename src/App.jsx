import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [replies, setReplies] = useState([]);

  const generateReplies = () => {
    if (!email.trim()) return;

    // Simple keyword-based dynamic replies
    let professional =
      "Thank you for your email. I will review the details and get back to you shortly.";
    let friendly =
      "Hey! Thanks for reaching out 😊 I’ll take a look and get back to you soon!";
    let brief = "Got it, I’ll follow up soon.";

    const lower = email.toLowerCase();

    if (lower.includes("thank")) {
      professional = "Thank you for your message. Happy to assist.";
      friendly = "You're welcome! 😊";
      brief = "You got it!";
    } else if (lower.includes("meeting")) {
      professional = "I have scheduled the meeting as requested.";
      friendly = "Looking forward to our meeting!";
      brief = "Meeting scheduled.";
    } else if (lower.includes("issue") || lower.includes("problem")) {
      professional = "I have noted the issue and will address it promptly.";
      friendly = "I see the problem, let’s fix it soon!";
      brief = "Issue noted, working on it.";
    }

    setReplies([
      { tone: "Professional", text: professional },
      { tone: "Friendly", text: friendly },
      { tone: "Brief", text: brief },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">
        📧 Smart Email Reply Assistant
      </h1>

      <textarea
        className="w-full max-w-2xl h-40 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Paste your email here..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={generateReplies}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
      >
        Generate Replies
      </button>

      <div className="mt-6 w-full max-w-2xl space-y-4">
        {replies.map((reply, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow border flex flex-col"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{reply.tone} Reply:</p>
              <button
                onClick={() => navigator.clipboard.writeText(reply.text)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Copy
              </button>
            </div>
            <p className="mt-2">{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
