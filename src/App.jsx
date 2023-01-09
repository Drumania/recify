import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { ContextProvider } from "./context/AuthProvider";

//pages
import Home from "./pages/Home";

import Nuevas from "./pages/Nuevas";
import Discover from "./pages/Discover";

import RecentlyPlayed from "./pages/RecentlyPlayed";
import Favorites from "./pages/Favorites";
import FollowedArtists from "./pages/FollowedArtists";

import Category from "./pages/Category";
import Artist from "./pages/Artist";
import ContentDetail from "./pages/ContentDetail";
import Playlist from "./pages/Playlist";

//Navbar
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Player from "./components/Player";

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <div className="container-fluid">
            <div className="wrap-nav">
              <Navbar />
            </div>
            <div className="wrap-main">
              <Topbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="nuevas" element={<Nuevas />} />
                <Route path="discover" element={<Discover />} />

                <Route path="recentlyplayed" element={<RecentlyPlayed />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="followedartists" element={<FollowedArtists />} />

                <Route path=":artistSlug" element={<Artist />} />

                <Route path="category" element={<Category />}>
                  <Route path=":categoryId" element={<Category />} />
                </Route>
                <Route path="s" element={<ContentDetail />}>
                  <Route path=":contentSlug" element={<ContentDetail />} />
                </Route>

                <Route path="playlist" element={<Playlist />}>
                  <Route path=":playlistSlug" element={<Playlist />} />
                </Route>
              </Routes>
            </div>
          </div>
          <Player />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
