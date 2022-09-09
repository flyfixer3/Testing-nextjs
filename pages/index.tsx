import ContactCard from "#/components/ContactCard";
import Pagination from "#/components/Pagination";
import { useFavouritedContext } from "#/contexts/FavouritedContext";
import {
  useGetContactListQuery,
  useGetTotalCountQuery,
} from "#/services/graphql";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<
    "all" | "favourite" | "reguler"
  >("all");
  const [searchFieldTemp, setSearchFieldTemp] = useState("");
  const [searchField, setSearchField] = useState("");
  const [listFavouritedId] = useFavouritedContext();
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;
  const tabCondition = {
    _and: [
      {
        id:
          selectedTab === "favourite"
            ? { _in: Array.from(listFavouritedId) }
            : selectedTab === "reguler"
            ? { _nin: Array.from(listFavouritedId) }
            : undefined,
      },
      {
        _or: [
          {
            first_name: { _like: searchField ? `%${searchField}%` : "%" },
          },
          {
            last_name: { _like: searchField ? `%${searchField}%` : "%" },
          },
          {
            phones: {
              number: { _like: searchField ? `%${searchField}%` : "%" },
            },
          },
        ],
      },
    ],
  };

  const { data: totalCount } = useGetTotalCountQuery({
    variables: {
      where: tabCondition,
    },
  });

  const { data: contacts, loading } = useGetContactListQuery({
    variables: {
      where: tabCondition,
      limit: limit,
      offset: currentPage * limit,
    },
  });

  console.log(totalCount);
  console.log(contacts);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedTab]);

  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => setSearchFieldTemp(event.target.value)}
        />
        <button onClick={() => setSearchField(searchFieldTemp)}>search</button>
      </div>
      <button onClick={() => setSelectedTab("all")}>All</button>
      <button onClick={() => setSelectedTab("reguler")}>Reguler List</button>
      <button onClick={() => setSelectedTab("favourite")}>
        Favourite List
      </button>
      <div>
        {contacts?.contact.length === 0 ? (
          <span> None..</span>
        ) : (
          <div>
            <div>
              {loading ? (
                <span>Loading...</span>
              ) : (
                contacts?.contact.map((contact) => {
                  return <ContactCard key={contact.id} contact={contact} />;
                })
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              limit={limit}
              totalCount={totalCount?.contact_aggregate.aggregate?.count ?? 0}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
