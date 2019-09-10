import React, { Fragment, useState } from "react";
import { useSorting, useFetch, useDate, useAds } from "./hooks";
import { SORT_TYPES } from "./components/select/select.types";
import { Ads, Loading, ProductItem, Select } from "./components";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const { ads } = useAds(page);
  const { sort, onChangeSort } = useSorting(SORT_TYPES.UNSORTED);
  const { data, isLoading } = useFetch({
    sort,
    page
  });
  const dateNow = useDate();
  return (
    <div className="App">
      {/* Don't show isLoading indicator on initialization without data */}
      <Select
        isLoading={Boolean(data.length) && isLoading}
        isDisabled={isLoading}
        sort={sort}
        onChangeSort={onChangeSort}
      />
      <ul className="products-list" id="products-list">
        {data.map((value, index) => {
          return (
            <Fragment key={`${value.id}-${index}`}>
              <ProductItem
                {...value}
                dateNow={dateNow}
                hasIntersect={data.length - 5 === index}
                pageValue={page}
                intersectionIndex={data.length / 20}
                onHandleHasSeenItem={setPage}
              />
              {(index + 1) % 20 === 0 ? (
                <Ads
                  id={value.id}
                  src={`http://localhost:5000/ads/?r=${ads[(index + 1) / 20]}`}
                />
              ) : null}
            </Fragment>
          );
        })}
        {isLoading ? <Loading /> : null}
      </ul>
    </div>
  );
}

export default App;
