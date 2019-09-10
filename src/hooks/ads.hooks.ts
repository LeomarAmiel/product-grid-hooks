import { useState, useEffect } from "react";

export function useAds(page: number) {
  const [ads, setAds] = useState([Math.floor(Math.random() * 1000)]);

  // get the initial ad in the header!
  useEffect(() => {
    const firstImage = document.querySelector(".ad") as HTMLImageElement;
    setAds(oldAds => [
      firstImage && parseInt(firstImage.src.split("?r=")[1]),
      ...oldAds
    ]);
  }, []);

  useEffect(() => {
    let newAd = Math.floor(Math.random() * 1000);
    do {
      newAd = Math.floor(Math.random() * 1000);
    } while (ads.includes(newAd));
    setAds(oldAds => [...oldAds, newAd]);
  }, [page]);

  return { ads };
}
