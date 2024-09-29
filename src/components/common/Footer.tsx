import styled from "@emotion/styled";
import ThemeButton from "./ThemeButton";

const MainFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export default function Footer() {
  return (
    <MainFooter>
      <p>&copy; 2024 Toss Pre-Assignment Test | Striving for Excellence</p>
      <StyledButtonContainer>
        <ThemeButton buttonType="system" />
        <ThemeButton buttonType="light" />
        <ThemeButton buttonType="dark" />
      </StyledButtonContainer>
    </MainFooter>
  );
}
