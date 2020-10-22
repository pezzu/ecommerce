import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLogsStart, deleteLogs } from "./logger.slice";

const AuditRecord = (props) => {
  return (
    <div>
      <span>{props.timestamp}</span>
      <span>{props.action}</span>
      <span>{props.log}</span>
    </div>
  );
};

const LogsList = () => {
  const logs = useSelector((store) => store.logs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLogsStart());
  }, [dispatch]);

  if (logs.loading) {
    return <div>Loading stuff</div>;
  }

  return (
    <div>
      {logs.items.map((log) => (
        <AuditRecord key={log.timestamp} {...log} />
      ))}
      <button
        className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded shadow-md"
        onClick={() => dispatch(deleteLogs())}
      >
        Delete
      </button>
    </div>
  );
};

export default LogsList;
