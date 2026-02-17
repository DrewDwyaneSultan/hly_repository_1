"use client";

import { useState } from "react";

export default function Page() {
  const leaderboardItems = [
    { name: "Alice", score: 120 },
    { name: "Bob", score: 110 },
    { name: "Charlie", score: 95 },
  ];

  const favoriteItems = ["Algebra Book", "Flashcards Set 1", "Jazz Notes"];

  const schedule = [
    { time: "08:00 - 09:00", task: "Math Practice" },
    { time: "09:30 - 10:30", task: "Read Science Book" },
    { time: "11:00 - 12:00", task: "Flashcard Review" },
  ];

  const quickActions = [
    { name: "Favorites", icon: "★" },
    { name: "Folders", icon: "📁" },
    { name: "Books", icon: "📚" },
    { name: "Friends", icon: "👥" },
  ];

  return (
    <div className="dashboard-container max-w-7xl mx-auto flex flex-col gap-10">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Your <span className="text-indigo-500">Safe</span> Space
      </h1>

      {/* Quick Actions */}
      <section>
        <h2 className="text-gray-600 font-medium mb-4 text-sm">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-6">
          {quickActions.map((action) => (
            <div key={action.name} className="quick-action-card">
              <div className="quick-action-icon">{action.icon}</div>
              <span className="font-semibold text-lg">{action.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Study Schedule Panel */}
      <section>
        <h2 className="text-gray-600 font-medium mb-4 text-sm">Study Schedule</h2>
        <div className="panel-card study-card flex flex-col gap-3">
          {schedule.map((item, idx) => (
            <div key={idx} className="inner-card flex justify-between font-medium">
              <span>{item.time}</span>
              <span>{item.task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Row Panels */}
      <section className="grid grid-cols-2 gap-6">

        {/* Leaderboard Panel */}
        <div>
          <h2 className="text-gray-600 font-medium mb-4 text-sm">Leaderboards</h2>
          <div className="panel-card bottom-card flex flex-col gap-3">
            {leaderboardItems.map((user, idx) => (
              <div key={idx} className="inner-card flex justify-between font-medium">
                <span>{user.name}</span>
                <span>{user.score} pts</span>
              </div>
            ))}
          </div>
        </div>

        {/* Favorites Panel */}
        <div>
          <h2 className="text-gray-600 font-medium mb-4 text-sm">Favorites</h2>
          <div className="panel-card bottom-card flex flex-col gap-3">
            {favoriteItems.map((item, idx) => (
              <div key={idx} className="inner-card font-medium">{item}</div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
