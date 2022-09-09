import React from "react";
import styled from "@emotion/styled";
import { BsList } from "react-icons/bs";

let Container = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "green",
  margin: "0",
});

type Props = {};

export default function Header({}: Props) {
  return (
    <Container>
      <BsList />
      <div>header</div>
      <div></div>
    </Container>
  );
}
