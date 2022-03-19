import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 既存のスタイルを上書きするには styled.button``;ではなく
// styled()を利用する
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
