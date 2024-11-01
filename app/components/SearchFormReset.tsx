"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <div>
      <button type="reset" onClick={reset} className=" text-black ">
        <Link href="/">
          <X size={28} className="pt-2" />
        </Link>
      </button>
    </div>
  );
};

export default SearchFormReset;
