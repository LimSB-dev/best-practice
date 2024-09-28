import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "store";

import Root from "./pages/Root";
import Post from "pages/Post";
import PostDetail from "./pages/PostDetail";
import Error from "pages/Error";
import NotFound from "pages/NotFound";
import PostEdit from "pages/PostEdit";
import PostCreate from "pages/PostCreate";

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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
