import React from "react";
import "./App.css";
import { useSorting } from "./hooks/sort.hooks";
import Select from "./components/select/select";
import { useFetch } from "./hooks/fetch.hooks";
import { useDate } from "./hooks/dateNow.hooks";
import { SORT_TYPES } from "./components/select/select.types";
import { useLoading } from "./hooks/loading.hooks";
import Loading from "./components/loading/loading";

function App() {
  const { sort, onChangeSort } = useSorting(SORT_TYPES.UNSORTED);
  const { data, isLoading } = useFetch(sort);
  const dateNow = useDate();

  return (
    <div className="App">
      <Select sort={sort} onChangeSort={onChangeSort} />
      {isLoading ? <Loading /> : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {data.map(value => (
          <div
            key={value.id}
            style={{
              border: "1px solid black",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              flex: "0 0 33%",
              textAlign: "left"
            }}
          >
            <div
              style={{
                fontSize: value.size
              }}
            >
              Face: {value.face}
            </div>

            <div>Price: ${value.price / 100}</div>
            <div>Date Added: {formatDate(value.date, dateNow)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(date: string, dateNow: Date) {
  const now = dateNow.getTime() / 1000;
  const newDate = new Date(date).getTime() / 1000;
  const secondsFromNow = now - newDate;

  if (
    Math.ceil(secondsFromNow / 3600) >= 24 ||
    (secondsFromNow >= 86400 && secondsFromNow < 604800)
  ) {
    const isOneDay =
      Math.ceil(secondsFromNow / 3600) >= 24 ||
      Math.ceil(secondsFromNow / 86400) === 1;
    return `${isOneDay ? "1" : Math.ceil(secondsFromNow / 86400)} ${
      isOneDay ? "day" : "days"
    } ago`;
  }
  if (secondsFromNow >= 3600 && secondsFromNow < 86400) {
    return `${Math.ceil(secondsFromNow / 3600)} hours ago`;
  }
  if (secondsFromNow >= 60 && secondsFromNow < 3600) {
    return `${Math.ceil(secondsFromNow / 60)} minutes ago`;
  }
  if (secondsFromNow < 60) {
    return `${Math.ceil(secondsFromNow)} seconds ago`;
  }

  return date;
}

export default App;
