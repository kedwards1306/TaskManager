export const summary = {
    totalTasks: 8,
    tasks: {
      todo: 6,
      "in progress": 3,
      completed: 1,
    },

    last8Tasks: [
      {
        id: "1",
        title: "Finish React Project",
        date: "2025-01-28",
        priority: "high",
        stage: "todo",
        isTrashed: false,
        activities: ["Reviewed API endpoints", "Updated component structure"],
        subTask: [
          { title: "Implement Authentication", date: "2025-01-29", tag: "development" },
          { title: "Set up Redux", date: "2025-01-30", tag: "development" },
        ],
        team: [
          { name: "Alice Johnson", role: "Frontend Dev" },
          { name: "Bob Smith", role: "Backend Dev" },
        ],
      },
      {
        id: "2",
        title: "Prepare Presentation Slides",
        date: "2025-01-27",
        priority: "medium",
        stage: "in-progress",
        isTrashed: false,
        activities: ["Gathered data", "Designed 4 slides"],
        subTask: [{ title: "Add charts to slides", date: "2025-01-28", tag: "design" }],
        team: [
          { name: "Charlie Brown", role: "Designer" },
          { name: "Dana White", role: "Data Analyst" },
        ],
      },
      {
        id: "3",
        title: "Submit Expense Report",
        date: "2025-01-26",
        priority: "low",
        stage: "completed",
        isTrashed: false,
        activities: ["Collected receipts", "Filled out form"],
        subTask: [],
        team: [{ name: "Evan Lee", role: "Finance" }],
      },
    ],

    users: [
      {
        id: "U1",
        name: "Alice Johnson",
        role: "Frontend Developer",
        isActive: true,
        createdAt: "2024-12-15",
      },
      {
        id: "U2",
        name: "Bob Smith",
        role: "Backend Developer",
        isActive: true,
        createdAt: "2024-11-10",
      },
      {
        id: "U3",
        name: "Charlie Brown",
        role: "Designer",
        isActive: false,
        createdAt: "2024-10-05",
      },
      {
        id: "U4",
        name: "Dana White",
        role: "Data Analyst",
        isActive: true,
        createdAt: "2024-09-20",
      },
      {
        id: "U5",
        name: "Evan Lee",
        role: "Finance Manager",
        isActive: false,
        createdAt: "2024-08-18",
      },
      {
        id: "U6",
        name: "Fiona Green",
        role: "Content Writer",
        isActive: true,
        createdAt: "2024-07-12",
      },
      {
        id: "U7",
        name: "George Adams",
        role: "Editor",
        isActive: true,
        createdAt: "2024-06-30",
      },
      {
        id: "U8",
        name: "Henry Black",
        role: "Senior Developer",
        isActive: true,
        createdAt: "2024-05-25",
      },
    ],

};
export const tasks = [
  {
      id: "1",
      title: "Finish React Project",
      date: "2025-01-28",
      priority: "high",
      stage: "todo",
      activities: [
          "Reviewed API endpoints",
          "Updated component structure"
      ],
      team: [
          {
              id: "U1",
              name: "Alice Johnson",
              role: "Frontend Developer",
              email: "alice.johnson@example.com"
          },
          {
              id: "U2",
              name: "Bob Smith",
              role: "Backend Developer",
              email: "bob.smith@example.com"
          }
      ],
      isTrashed: false,
      subTask: [
          {
              title: "Implement Authentication",
              date: "2025-01-29",
              tag: "development",
              id: "1.1"
          },
          {
              title: "Set up Redux",
              date: "2025-01-30",
              tag: "development",
              id: "1.2"
          }
      ],
      comments: [],
      createdAt: "2024-12-01",
      updatedAt: "2025-01-28"
  },
  {
      id: "2",
      title: "Prepare Presentation Slides",
      date: "2025-01-27",
      priority: "medium",
      stage: "in-progress",
      activities: [
          "Gathered data",
          "Designed 4 slides"
      ],
      team: [
          {
              id: "U3",
              name: "Charlie Brown",
              role: "Designer",
              email: "charlie.brown@example.com"
          },
          {
              id: "U4",
              name: "Dana White",
              role: "Data Analyst",
              email: "dana.white@example.com"
          }
      ],
      isTrashed: false,
      subTask: [
          {
              title: "Add charts to slides",
              date: "2025-01-28",
              tag: "design",
              id: "2.1"
          }
      ],
      comments: [],
      createdAt: "2024-12-10",
      updatedAt: "2025-01-27"
  },
  {
      id: "3",
      title: "Submit Expense Report",
      date: "2025-01-26",
      priority: "low",
      stage: "completed",
      activities: [
          "Collected receipts",
          "Filled out form"
      ],
      team: [
          {
              id: "U5",
              name: "Evan Lee",
              role: "Finance Manager",
              email: "evan.lee@example.com"
          }
      ],
      isTrashed: false,
      subTask: [],
      comments: [],
      createdAt: "2024-11-15",
      updatedAt: "2025-01-26"
  }
];
