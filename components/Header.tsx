import React from "react";
import styled from "@emotion/styled";
import { BsList } from "react-icons/bs";

let Container = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "green",
  margin: "0",
  padding: "15px 20px",
  alignItems: "center",
});

type Props = {};

export default function Header({}: Props) {
  return (
    <Container>
      <h3>Header</h3>
      <div></div>
    </Container>
  );
}
