// ENUMS in TypeScript

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

// using enums
// enum => reserved word
// Capital is the code Style
enum Status {
  NotStarted,
  inProgress,
  Done,
}

console.log(Status.inProgress);

// advantage ==> can use enum as datatype (different)
// common => obj and enum can be used as values
let notStartedStatus: Status = Status.NotStarted;
// notStartedStatus = "string"  // gives error
notStartedStatus = Status.Done;

// using strings in enums
// values are assigned by "=" and not ":"
enum Status2Enum {
  NotStarted = "Not Started",
  inProgress = "In Progress",
  Done = "Done",
}

const Done: Status2Enum = Status2Enum.Done;
console.log("Done", Done);

// using enums inside interfaces
interface Task {
  id: string;
  status: Status2Enum;
}
