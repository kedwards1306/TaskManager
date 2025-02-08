import React, { useState } from 'react'
import { FiGrid } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Loading from "../components/Loading";
import Title from "../components/Title";
import { Button } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import Tabs from '../components/Tab';
import TaskTitle from '../components/TaskTitle';
import BoardView from '../components/BoardView';
import Table from "../components/Tasks/Table";

const TABS = [
  { title: "Board View", icon: <FiGrid /> },
  {title: "List View", icon: <FaListUl/>},

];

const TASK_TYPE = {
  todo: "blue",
  "in progress": "yellow",
  completed: "green",
};


const Tasks = (tasks) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const status = params?.status || "";


  return loading ? ( <div style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
    <Loading />
  </div>
  ) : (
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginbottom: "1rem" }}>
          <Title title={status  ? `${status} Tasks`: "Tasks"}/>

          {
         !status && (
          <Button
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "16px",
              alignItems: "center",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "0.375rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem", // Optional: Add spacing
              paddingRight: "1rem",
            }}
          >
            <IoMdAdd style={{ fontSize: "medium" }} /> Create Task
          </Button>
        )}
        </div>
        <div>
          <Tabs tabs={TABS} setSelected={setSelected}>
            {
              !status && (
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "16px 0" }}>
                  <TaskTitle label="To Do" className={TASK_TYPE.todo} />
                  <TaskTitle
                    label='In Progress'
                    className={ TASK_TYPE["in progress"]} />
                  <TaskTitle
                    label='Completed'
                    className={TASK_TYPE.completed} />
                </div>
              )}
            {selected !== 1 ? (
              <BoardView tasks={tasks} />
            ) : (
              <div style={{width: "100%"}}>
            <Table tasks={tasks} />
          </div>
        )}

</Tabs>
        </div>
</div>
  );
}

export default Tasks;
