import { useSelector } from "react-redux";
import { GroupCardImage, GroupCardStyle } from "./styles";
import React from "react";

const GroupCard = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <GroupCardStyle>
      <GroupCardImage />
    </GroupCardStyle>
  );
};

export default GroupCard;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
