import React from "react";
import "./App.css";
import Select from "./components/select/select";
import { useSorting, useFetch, useDate } from "./hooks";
import { SORT_TYPES } from "./components/select/select.types";
import Loading from "./components/loading/loading";

function App() {
  const { sort, onChangeSort } = useSorting(SORT_TYPES.UNSORTED);
  const { data, isLoading } = useFetch(sort);
  const dateNow = useDate();
  return (
    <div className="App">
      <Select sort={sort} onChangeSort={onChangeSort} />
      {isLoading ? <Loading /> : null}
      <ul className="products-list">
        {data.map((value, index) => {
          if ((index + 1) % 20 === 0) {
            return (
              <>
                <li key={value.id} className="products-list--item">
                  <div className="products-list--item--wrapper">
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
                </li>
                <aside className="aside" key={`ad${value.id}`}>
                  <img
                    alt="Ad from sponsor"
                    src={`http://localhost:5000/ads/?r=${Math.floor(
                      Math.random() * 1000
                    )}`}
                  />
                </aside>
              </>
            );
          }
          return (
            <li key={value.id} className="products-list--item">
              <div className="products-list--item--wrapper">
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
            </li>
          );
        })}
      </ul>
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
