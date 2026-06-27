"use client";

import React, { createContext, useContext } from "react";
import { FriendData, GalleryPhotoData } from "./queries";
import { FRIENDS_DATA as mockFriends, GALLERY_PHOTOS as mockGallery } from "./data";

interface DataContextType {
  friends: FriendData[];
  gallery: GalleryPhotoData[];
}

const DataContext = createContext<DataContextType>({
  friends: mockFriends as unknown as FriendData[],
  gallery: mockGallery as unknown as GalleryPhotoData[]
});

export function DataProvider({ children, friends, gallery }: { children: React.ReactNode, friends: FriendData[], gallery: GalleryPhotoData[] }) {
  // Fallback to mock data if DB is completely empty (e.g. before inserting data)
  const finalFriends = friends.length > 0 ? friends : (mockFriends as unknown as FriendData[]);
  // Do not fall back to mock gallery so empty state can be displayed naturally
  const finalGallery = gallery;

  return (
    <DataContext.Provider value={{ friends: finalFriends, gallery: finalGallery }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
