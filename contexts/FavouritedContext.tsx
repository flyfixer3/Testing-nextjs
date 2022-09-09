import { ContactNumberFragment } from "#/services/graphql";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export const FavouritedContext = createContext<
  readonly [Set<number>, React.Dispatch<React.SetStateAction<Set<number>>>]
>([new Set(), () => {}]);

export function FavouritedContextProvider({ children }: { children: any }) {
  const state = useState<Set<number>>(new Set());
  const [data, setData] = state;

  useEffect(() => {
    setData(
      new Set<number>(JSON.parse(localStorage.getItem("Favourites") ?? "[]"))
    );
  }, []);

  useEffect(() => {
    if (data.size === 0) return;
    localStorage.setItem("Favourites", JSON.stringify(Array.from(data)));
  }, [data]);

  return (
    <FavouritedContext.Provider value={state}>
      {children}
    </FavouritedContext.Provider>
  );
}

export function useFavouritedContext() {
  return useContext(FavouritedContext);
}

export function useFavouritedContacts(
  contacts: ContactNumberFragment[],
  isFavourited = true
) {
  const [favourited] = useFavouritedContext();
  return useMemo(() => {
    return contacts.filter((contact) => {
      const isInFavourite = favourited.has(contact.id);
      return isFavourited ? isInFavourite : !isInFavourite;
    });
  }, [contacts]);
}
