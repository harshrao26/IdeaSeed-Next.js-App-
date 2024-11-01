import React from "react";
import SearchForm from "@/app/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 60,
      author: { _id: 1 },
      _id: 1,
      description: "This is description",
      image:
        "https://images.unsplash.com/photo-1569420077790-afb136b3bb8c?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robotes",
    },
  ];
  return (
    <>
      <section className="bg-[#A5C940] h-[90vh] pt-16 w-full flex flex-col items-center justify-center gap-2">
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
      <section>
        <p className="text-2xl font-semibold mt-4 px-8">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
      </section>
    </>
  );
};

export default Home;
