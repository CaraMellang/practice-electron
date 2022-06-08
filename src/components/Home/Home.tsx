import React from "react";
import styled from "styled-components";
import { CardContent, Card, Box, Typography } from "@mui/material";

export default function Home() {
  const onClickHome = () => {
    window.alert("클릭!");
  };

  return (
    <HomeWrap>
      <Card sx={{ width: "25%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold  " }}>
            어쩔티비
          </Typography>
          <Typography>우짤래미</Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "25%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold  " }}>
            오쩔티비
          </Typography>
          <Typography>저짤래미</Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "25%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold  " }}>
            크쿠루삥뽕
          </Typography>
          <Typography>우짤래미</Typography>
        </CardContent>
      </Card>
      <Card className="ddd" sx={{ width: "25%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold  " }}>
            오쩔티비
          </Typography>
          <Typography>우짤래미</Typography>
        </CardContent>
      </Card>
    </HomeWrap>
  );
}

const HomeWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1rem;
  .ddd:hover {
    transform: scale(1.02);
  }
`;
