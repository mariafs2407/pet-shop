import React from "react";
import { PetCareLayout } from "../layout/PetCareLayout";
import { HomeView } from "../views/HomeView";

export const HomePage = () => {
  return (
    <PetCareLayout>
      <HomeView />
    </PetCareLayout>
  );
};
