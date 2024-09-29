import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import Footer from "components/common/Footer";
import useCustomTheme from "hooks/useCustomTheme";
import { ColorTypes } from "@emotion/react";
import { common } from "styles/theme";

const StyledMain = styled.main<{ theme: ColorTypes }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 100vh;
  padding: 24px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  border-color: ${(props) => props.theme.border};

  h1 {
    font-size: ${common.fontSize.h1};
    font-weight: 700;
  }

  h2 {
    font-size: ${common.fontSize.h2};
    font-weight: 600;
  }

  h3 {
    font-size: ${common.fontSize.h3};
    font-weight: 500;
  }

  p {
    font-size: ${common.fontSize.p};
  }

  caption {
    font-size: ${common.fontSize.caption};
  }
`;

const StyledSection = styled.section`
  height: 100%;
`;

export default function Root() {
  const theme = useCustomTheme();
  return (
    <StyledMain theme={theme}>
      <div id="sidebar">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav></nav>
      </div>
      <StyledSection id="detail">
        <Outlet />
      </StyledSection>
      <Footer />
    </StyledMain>
  );
}
