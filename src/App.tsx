import React, { Fragment } from "react";
import { useSorting, useFetch, useDate } from "./hooks";
import { SORT_TYPES } from "./components/select/select.types";
import { Ads, Loading, ProductItem, Select } from "./components";
import "./App.css";

function App() {
  const { sort, onChangeSort } = useSorting(SORT_TYPES.UNSORTED);
  const { data, isLoading } = useFetch(sort);
  const dateNow = useDate();
  return (
    <div className="App">
      <Select sort={sort} onChangeSort={onChangeSort} />
      {isLoading ? <Loading /> : null}
      <ul className="products-list" id="products-list">
        {data.map((value, index) => (
          <Fragment key={value.id}>
            <ProductItem {...value} dateNow={dateNow} />
            {(index + 1) % 20 === 0 ? (
              <Ads
                id={value.id}
                src={`http://localhost:5000/ads/?r=${Math.floor(
                  Math.random() * 1000
                )}`}
              />
            ) : null}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default App;
