import { useFavouritedContext } from "#/contexts/FavouritedContext";
import { ContactNumberFragment } from "#/services/graphql";
import styled from "@emotion/styled";
import React from "react";

type Props = { contact: ContactNumberFragment };
let MainContainer = styled.div({
  color: "black",
  display: "flex",
  backgroundColor: "greys",
  margin: "0",
  "& .headerContainer": {},
});

export default function ContactCard({ contact }: Props) {
  let [listFavouritedId, setListFavouritedId] = useFavouritedContext();
  const isFavourited = listFavouritedId.has(contact.id);
  function toggleFavorite() {
    setListFavouritedId((prev) => {
      if (isFavourited) prev.delete(contact.id);
      else prev.add(contact.id);
      return new Set(prev);
    });
  }

  return (
    <MainContainer>
      <div className="headerContainer">
        <div>
          <div>{contact.first_name + " " + contact.last_name}</div>
          <div>Dibuat pada tanggal {contact.created_at}</div>
        </div>
        <button onClick={toggleFavorite}>favourite</button>
      </div>
      <div className="container">
        <div>Phones</div>

        <div>
          {contact.phones.map((phone) => {
            return <div key={phone.id}>{phone.number}</div>;
          })}
        </div>
      </div>
    </MainContainer>
  );
}
