import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.task);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {

      dispatch(editTask({ ...task, id: params.id }));

    } else {

      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((task) => task.id === params.id);
      setTask(foundTask);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
     <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
      <input
        name="title"
        type="text"
        value={task.title}
        placeholder="title"
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
      <textarea
        name="description"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  );
}

export default TasksForm;
