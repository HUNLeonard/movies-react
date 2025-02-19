import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import NoPage from "./components/pages/NoPage"
import About from "./components/pages/About"
import Movies from "./components/pages/Movies"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 300000,
        refetchInterval: 600000
      }
    },

  })
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/movies-react" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="movie" element={<Movies />}></Route>
            {/* <Route path="movie/:movieId" element={<Movie />}></Route> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App