import React from "react";
import SearchForm from "../components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  return (
    <>
      <section className="bg-[#A5C940] h-screen w-full flex flex-col items-center justify-center gap-2">
        <div className="heading font1 ">
          <span className="!capitalize">Pitch Your</span> Startup
        </div>
        <h1 className="heading font1">
          <span className="!capitalize">Connect With</span> Entrepreneurs
        </h1>

        <p className="text-white text-xl font1 ">
          Submit Idea, Vote on Pitches & Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
};

export default Home;
