export const summary = {
    totalTasks: 8,
    tasks: {
      todo: 6,
      "in progress": 3,
      completed: 1,
    },

    last8Tasks: [
      {
        _id: "1",
        title: "Finish React Project",
        date: "2025-01-28",
        priority: "high",
        stage: "todo",
        isTrashed: false,
        activities: ["Reviewed API endpoints", "Updated component structure"],
        subTasks: [
          { title: "Implement Authentication", date: "2025-01-29", tag: "development" },
          { title: "Set up Redux", date: "2025-01-30", tag: "development" },
        ],
        team: [
          { name: "Alice Johnson", role: "Frontend Dev" },
          { name: "Bob Smith", role: "Backend Dev" },
        ],
      },
      {
        _id: "2",
        title: "Prepare Presentation Slides",
        date: "2025-01-27",
        priority: "medium",
        stage: "in-progress",
        isTrashed: false,
        activities: ["Gathered data", "Designed 4 slides"],
        subTasks: [{ title: "Add charts to slides", date: "2025-01-28", tag: "design" }],
        team: [
          { name: "Charlie Brown", role: "Designer" },
          { name: "Dana White", role: "Data Analyst" },
        ],
      },
      {
        _id: "3",
        title: "Submit Expense Report",
        date: "2025-01-26",
        priority: "low",
        stage: "completed",
        isTrashed: false,
        activities: ["Collected receipts", "Filled out form"],
        subTasks: [],
        team: [{ name: "Evan Lee", role: "Finance" }],
      },
    ],

  users: [
    {
      _id: "U1",
      name: "Test User",
      role: "Project Manager",
      email: "TestUser@example.com",
      title: "Admin",
      isActive: true,
      isAdmin: true,
      tasks:[],
      createdAt: "2024-12-01",
    },
      {
        _id: "U1",
        name: "Alice Johnson",
        role: "Frontend Developer",
        title: "Developer",
        email:"alice.johnson@example.com",
        isActive: true,
        tasks:[],
        isAdmin: false,
        createdAt: "2024-12-15",
      },
      {
        _id: "U2",
        name: "Bob Smith",
        role: "Backend Developer",
        title: "Developer",
        email: "bob.smith@example.com",
        isAdmin: false,
        isActive: true,
        tasks:[],
        createdAt: "2024-11-10",
      },
      {
        _id: "U3",
        name: "Charlie Brown",
        role: "Designer",
        title: "Designer",
        email: "charlie.brown@example.com",
        isAdmin: false,
        isActive: false,
        tasks:[],
        createdAt: "2024-10-05",
      },
      {
        _id: "U4",
        name: "Dana White",
        role: "Data Analyst",
        title: "Analyst",
        email: "dana.white@example.com",
        isAdmin: false,
        isActive: true,
        tasks:[],
        createdAt: "2024-09-20",
      },
      {
        _id: "U5",
        name: "Evan Lee",
        role: "Finance Manager",
        title: "Manager",
        email: "evan.lee@example.com",
        isAdmin: false,
        isActive: false,
        tasks:[],
        createdAt: "2024-08-18",
      },
      {
        _id: "U6",
        name: "Fiona Green",
        role: "Content Writer",
        title: "Writer",
        email: "fiona.green@gmail.com",
        isAdmin: false,
        isActive: true,
        tasks:[],
        createdAt: "2024-07-12",
      },
      {
        _id: "U7",
        name: "George Adams",
        role: "Editor",
        title: "Editor",
        email: "george.adams@example.com",
        isAdmin: false,
        isActive: true,
        tasks:[],
        createdAt: "2024-06-30",
      },
      {
        _id: "U8",
        name: "Henry Black",
        role: "Senior Developer",
        title: "Developer",
        email: "henry.black@example.com",
        isAdmin: false,
        isActive: true,
        tasks:[],
        createdAt: "2024-05-25",
      },
    ],

};
export const tasks = [
  {
      _id: "1",
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
              _id: "U1",
              name: "Alice Johnson",
              role: "Frontend Developer",
              email: "alice.johnson@example.com"
          },
          {
              _id: "U2",
              name: "Bob Smith",
              role: "Backend Developer",
              email: "bob.smith@example.com"
          }
      ],
      isTrashed: false,
      subTasks: [
          {
              title: "Implement Authentication",
              date: "2025-01-29",
              tag: "development",
              _id: "1.1"
          },
          {
              title: "Set up Redux",
              date: "2025-01-30",
              tag: "development",
              _id: "1.2"
          }
      ],
      comments: [],
      createdAt: "2024-12-01",
      updatedAt: "2025-01-28"
  },
  {
      _id: "2",
      title: "Prepare Presentation Slides",
      date: "2025-01-27",
      priority: "medium",
      stage: "in-progress",
      activities: [
          "Gathered data",
          "Designed 4 sl_ides"
      ],
      team: [
          {
              _id: "U3",
              name: "Charlie Brown",
              role: "Designer",
              email: "charlie.brown@example.com"
          },
          {
              _id: "U4",
              name: "Dana White",
              role: "Data Analyst",
              email: "dana.white@example.com"
          }
      ],
      isTrashed: false,
      subTasks: [
          {
              title: "Add charts to slides",
              date: "2025-01-28",
              tag: "design",
              _id: "2.1"
          }
      ],
      comments: [],
      createdAt: "2024-12-10",
      updatedAt: "2025-01-27"
  },
  {
      _id: "3",
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
              _id: "U5",
              name: "Evan Lee",
              role: "Finance Manager",
              email: "evan.lee@example.com"
          }
      ],
      isTrashed: false,
      subTasks: [],
      comments: [],
      createdAt: "2024-11-15",
      updatedAt: "2025-01-26"
  }
];
