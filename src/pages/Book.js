import React from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams(); //this use to connect links (click book1 book2 to see)
  return <h1>Book {id}</h1>;
}
