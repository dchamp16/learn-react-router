import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import "../src/nav-style.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              // style={({ isActive }) => {
              //   return isActive ? { color: "red" } : {};
              // }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BookList />}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
