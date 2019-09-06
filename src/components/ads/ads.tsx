import React from "react";
import "./ads.css";

interface IProps {
  id: string;
  src: string;
}

export default function Ads({ id, src }: IProps) {
  return (
    <aside className="aside" key={`ad${id}`}>
      <img alt="Ad from sponsor" src={src} />
    </aside>
  );
}
