import Axios from "axios";
import { useState, useEffect } from "react";

const useFetchTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await Axios.get("http://localhost:4000/");
        setTasks(res.data.tasks);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { tasks, error, isLoading, setTasks };
};

export default useFetchTasks;
