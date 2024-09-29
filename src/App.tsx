import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

import Root from "./pages/Root";
import Post from "pages/Post";
import PostDetail from "./pages/PostDetail";
import Error from "pages/Error";
import NotFound from "pages/NotFound";
import PostEdit from "pages/PostEdit";
import PostCreate from "pages/PostCreate";

import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import { useAppSelector } from "hooks/useRedux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "post/create",
        element: <PostCreate />,
      },
      {
        path: "post/:id",
        element: <PostDetail />,
      },
      {
        path: "/post/:id/edit",
        element: <PostEdit />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
