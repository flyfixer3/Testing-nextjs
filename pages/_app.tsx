import Header from "#/components/Header";
import { FavouritedContextProvider } from "#/contexts/FavouritedContext";
import "#/styles/global.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

const client = new ApolloClient({
  uri: "https://wpe-hiring.tokopedia.net/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <FavouritedContextProvider>
        <div>
          <Header />
          <Component {...pageProps} />
        </div>
      </FavouritedContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
