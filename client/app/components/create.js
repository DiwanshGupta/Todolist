"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import Cookies from "js-cookie";
function Create() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editTaskId, setEditTaskId] = useState("");
  const fetchTasks = () => {
    try {
      const token = Cookies.get("jwtoken");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      axios
        .get("http://localhost:4000/todo/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setTasks(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = () => {
    const token = Cookies.get("jwtoken");
    const taskData = {
      task: newTask,
    };

    axios
      .post("http://localhost:4000/todo/create", taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        fetchTasks();
        setNewTask("");
      })
      .catch((err) => console.log(err));
  };

  const deleteAll = () => {
    axios
      .delete("http://localhost:4000/todo/deleteAll")
      .then((res) => {
        fetchTasks();
      })
      .catch((err) => console.log(err));
  };
  const deleteTask = (taskId) => {
    const token = Cookies.get("jwtoken");
    const headers = {
      Authorization: `Bearer ${token}`,
      id: taskId,
    };

    axios
      .delete(`http://localhost:4000/todo/delete/`, {
        headers: headers,
      })
      .then((result) => {
        fetchTasks();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (taskId) => {
    const token = Cookies.get("jwtoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const updatedTaskData = {
      task: editedTask,
    };

    axios
      .patch(`http://localhost:4000/todo/edit/${taskId}`, updatedTaskData, {
        headers: headers,
      })
      .then(() => {
        fetchTasks();
        setEditTaskId("");
        setEditedTask("");
      })
      .catch((err) => console.log(err));
  };

  const editTask = (task) => {
    setEditTaskId(task._id);
    setEditedTask(task.task);
  };

  return (
    <div className="w-2/4  rounded-2xl m-auto justify-center flex flex-col items-center">
      <div className="flex flex-row w-full items-center justify-center p-3 m-2">
        <div className="mx-2 w-2/3">
          <input
            type="text"
            name="Fname"
            id="Fname"
            className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-lime-900 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-lime-900 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            autoComplete="off"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            className="bg-teal-500 rounded-md p-2"
            onClick={handleAdd}
            type="submit"
          >
            save
          </button>
        </div>
        <div>
          <button className="mx-3 items-center" onClick={deleteAll}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      {tasks.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gray-600 w-3/4 m-2 p-3 rounded-md items-center flex flex-row justify-between"
          >
            {" "}
            <div className="text-justify">
              {task._id === editTaskId ? (
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              ) : (
                <div>
                  <span>{task.task}</span>
                  <p>{task.body}</p>
                </div>
              )}
            </div>
            <div className="flex-row flex">
              <button className="mx-2" onClick={() => deleteTask(task._id)}>
                <AiOutlineDelete />
              </button>
              <div className="items-center">
                {task._id === editTaskId ? (
                  <button onClick={() => handleEdit(task._id)}>
                    <AiOutlineCheck />
                  </button>
                ) : (
                  <button onClick={() => editTask(task)}>
                    <AiFillEdit />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Create;
