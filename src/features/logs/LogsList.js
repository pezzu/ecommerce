import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLogsStart, deleteLogs } from "./logger.slice";

const AuditRecord = (props) => {
  return (
    <div className="flex hover:bg-gray-200 m-1">
      <span className="w-1/6 text-sm">{(new Date(props.timestamp)).toLocaleString()}</span>
      <span className="w-2/6 text-sm">{props.action}</span>
      <span className="w-3/6 font-semibold">{props.log}</span>
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
      <div className="border-b pb-4 mb-4"></div>
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
