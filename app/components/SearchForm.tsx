import React from "react";
import SearchFormReset from "./SearchFormReset";
import Form from "next/form";
import { Search } from "lucide-react";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form flex search-input w-[40vw] mt-2 bg-white rounded-2xl border-2 border-black-200 py-3 px-4 justify-between"
    >
      <input
        type="text"
        name="query"
        className="w-full focus:outline-none border-0 text-sm"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
