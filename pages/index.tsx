import ContactCard from "#/components/ContactCard";
import Pagination from "#/components/Pagination";
import { useFavouritedContext } from "#/contexts/FavouritedContext";
import {
  useGetContactListQuery,
  useGetTotalCountQuery,
} from "#/services/graphql";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";

let Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "15px 20px",
});

let Head = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& div button": {
    margin: "0 10px",
  },
});

let Content = styled.div({
  width: "100%",
});

let TableHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  "& h4": {
    width: "25%",
    display: "flex",
    justifyContent: "center",
  },
});

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

  const {
    data: contacts,
    loading,
    refetch,
  } = useGetContactListQuery({
    variables: {
      where: tabCondition,
      limit: limit,
      offset: currentPage * limit,
    },
  });

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedTab]);

  return (
    <Container>
      <Head>
        <div>
          <button onClick={() => setSelectedTab("all")}>All</button>
          <button onClick={() => setSelectedTab("reguler")}>
            Reguler List
          </button>
          <button onClick={() => setSelectedTab("favourite")}>
            Favourite List
          </button>
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            onChange={(event) => setSearchFieldTemp(event.target.value)}
          />
          <button onClick={() => setSearchField(searchFieldTemp)}>
            search
          </button>
          <Link href={"/contacts/newContact"}>Add +</Link>
        </div>
      </Head>

      <Content>
        {contacts?.contact.length === 0 ? (
          <span> None..</span>
        ) : (
          <div>
            <div>
              <TableHeader>
                <h4>Nama</h4>
                <h4>Dibuat pada Tanggal</h4>
                <h4>Phones</h4>
                <h4>Actions</h4>
              </TableHeader>
              {loading ? (
                <span>Loading...</span>
              ) : (
                contacts?.contact.map((contact) => {
                  return (
                    <ContactCard
                      refetch={refetch}
                      key={contact.id}
                      contact={contact}
                    />
                  );
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
      </Content>
    </Container>
  );
}
