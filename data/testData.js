const Tasks = [
  {
    id: "T1",
    title: "Task 1",
    description: "This is the first task.",
    creationDate: "2023-04-07",
    endDate: "2023-04-08",
    status: "Completed",
    priority: "high",
  },
  {
    id: "T2",
    title: "Task 2",
    description: "This is the second task.",
    creationDate: "2023-07-12",
    endDate: "2023-08-12",
    status: "Incompleted",
    priority: "low",
  },
  {
    id: "T3",
    title: "Task 3",
    description: "This is the third task.",
    creationDate: "2021-04-15",
    endDate: "2021-04-30",
    status: "Completed",
    priority: "high",
  },
];

export function getFeaturedTasks() {
  return Tasks.filter((task) => task.isFeatured);
}

export function getAllTasks() {
  return Tasks;
}

export function getFilteredTasks(dateFilter) {
  const { year, month } = dateFilter;

  let filteredTasks = Tasks.filter((task) => {
    const taskDate = new Date(task.creationDate);
    return taskDate.getFullYear() === year && taskDate.getMonth() === month - 1;
  });

  return filteredTasks;
}

export function getTaskById(id) {
  return Tasks.find((task) => task.id === id);
}
