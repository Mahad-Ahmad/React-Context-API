import React, { Component } from "react";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import MoviePage from "./context/moviePage";
import UserContext from "./context/userContext";
import ProductContext from "./context/productContext";
import Login from "./context/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {
  handleLoggedIn = (username) => {
    const user = { name: "Mahad" };
    this.setState({ currentUser: user });
  };

  handleLogout = (username) => {
    const user = { name: null };
    this.setState({ currentUser: user });
  };

  state = { currentUser: { name: null }, Products: "12" };

  render() {
    return (
      <div>
        <ProductContext.Provider value={{ product: "1122" }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
              onLogout: this.handleLogout,
            }}
          >
            <>
              <MoviePage />
              <Login />
            </>
          </UserContext.Provider>
        </ProductContext.Provider>
      </div>
    );
  }
}

export default App;
