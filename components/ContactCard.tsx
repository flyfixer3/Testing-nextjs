import { useFavouritedContext } from "#/contexts/FavouritedContext";
import {
  ContactNumberFragment,
  DeleteContactDocument,
} from "#/services/graphql";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

type Props = { contact: ContactNumberFragment; refetch: any };
let MainContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& > div": {
    boxSizing: "border-box",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 15px",
    height: "100%",
  },
});

export default function ContactCard({ contact, refetch }: Props) {
  let [listFavouritedId, setListFavouritedId] = useFavouritedContext();
  const isFavourited = listFavouritedId.has(contact.id);
  const [deleteContact, { data, loading, error }] = useMutation(
    DeleteContactDocument
  );
  function toggleFavorite() {
    setListFavouritedId((prev) => {
      if (isFavourited) prev.delete(contact.id);
      else prev.add(contact.id);
      return new Set(prev);
    });
  }

  return (
    <MainContainer>
      <div>{contact.first_name + " " + contact.last_name}</div>
      <div>{contact.created_at}</div>
      <div>
        {contact.phones.map((phone) => {
          return <div key={phone.id}>{phone.number}</div>;
        })}
      </div>
      <div>
        <button onClick={toggleFavorite}>favourite</button>
        <button
          onClick={() => {
            deleteContact({
              variables: {
                id: contact.id,
              },
              onCompleted() {
                refetch();
              },
            });
          }}
        >
          delete
        </button>
        <Link href={"/contacts/" + contact.id}>Edit</Link>
      </div>
    </MainContainer>
  );
}
