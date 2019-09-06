import React from "react";
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
      <ul className="products-list">
        {data.map((value, index) => {
          if ((index + 1) % 20 === 0) {
            return (
              <>
                <ProductItem {...value} dateNow={dateNow} />
                <Ads
                  id={value.id}
                  src={`http://localhost:5000/ads/?r=${Math.floor(
                    Math.random() * 1000
                  )}`}
                />
              </>
            );
          }
          return <ProductItem {...value} dateNow={dateNow} />;
        })}
      </ul>
    </div>
  );
}

export default App;
