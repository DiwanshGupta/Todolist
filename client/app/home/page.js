import React from "react";

const Homepage = () => {
  return (
    <div className="p-6 ">
      <div className="m-auto flex text-7xl text-sky-300 font-bold justify-center">
        ToDo List
      </div>
      <div className=" rounded-2xl  font-medium p-4">
        A Todo List website is a valuable tool that simplifies task management
        and boosts productivity. Users can create, edit, and categorize tasks,
        set due dates, prioritize items, and mark tasks as completed. With the
        flexibility to add notes, attach files, and set reminders, it's easy to
        stay organized and never forget an important task. Many Todo List
        websites offer cross-platform accessibility, allowing users to access
        their lists from various devices. Whether it's for managing work
        projects, household chores, or personal goals, a Todo List website
        streamlines task tracking and ensures that nothing falls through the
        cracks, ultimately leading to increased efficiency and a sense of
        accomplishment
      </div>
      {/* <div className="bg-red-500">
        <div className="box-3 w-3/12 items-center">
          <div className="btn btn-three">
            <span>HOVER ME</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
