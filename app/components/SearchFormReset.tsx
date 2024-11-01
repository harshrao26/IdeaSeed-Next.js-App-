"use client";
import React from "react";
import Link from "next/link";
const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <div>
      <button type="reset" onClick={reset} className=" text-black ">
        <Link href="/">X</Link>
      </button>
    </div>
  );
};

export default SearchFormReset;
