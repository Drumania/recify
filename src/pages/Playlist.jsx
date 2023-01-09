import React from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../components/PlaylistItem";

//Fake Api
import { playlists } from "../API/api_playlist";
import { contents } from "../API/api_content";

const Playlist = () => {
  let { playlistSlug } = useParams();

  const playlist = playlists.find((element) => element.slug == playlistSlug);

  console.log(`playlist: `);
  console.log(playlist);

  const contentsIdforThisPlaylist = playlist.contentId;

  return (
    <div>
      <h1>{playlistSlug}</h1>
      <h1>{playlist.title}</h1>
      <h1>{playlist.createdby}</h1>
      <h1>{playlist.createdDay}</h1>
      <h1>{playlist.public}</h1>

      {contents.map(
        (content) =>
          contentsIdforThisPlaylist.includes(content.id) && (
            <PlaylistItem
              key={content.id}
              id={content.id}
              bigImg={content.bigImg}
              slug={content.slug}
              slugArtist={content.slugArtist}
              title={content.title}
              artist={content.artist}
              duration={content.duration}
              year={content.year}
            />
          )
      )}
      {/* itemId === contents.id && ()
        
        const user = users.find(user => user.id === 2); } */}

      {/* {contentsIdforThisPlaylist.map(
        (itemId) =>
          itemId === contents.id && (
            <PlaylistItem
              key={contents[itemId].id}
              id={contents[itemId].id}
              bigImg={contents[itemId].bigImg}
              slug={contents[itemId].slug}
              slugArtist={contents[itemId].slugArtist}
              title={contents[itemId].title}
              artist={contents[itemId].artist}
              duration={contents[itemId].duration}
              year={contents[itemId].year}
            />
          )
      )} */}
    </div>
  );
};

export default Playlist;
