import { render, screen } from "@testing-library/vue";
import ProfileFetcher from "./ProfileFetcher.vue";
import axios from "axios";

jest.mock("axios");

describe("ProfileFetcher", () => {
  it("should render", () => {
    axios.get.mockResolvedValueOnce({
      data: {
        name: "Rick Sanchez",
        image: "image",
      },
    });

    render(ProfileFetcher);
  });

  describe("should fetch and display the profile of a character", () => {
    it("should fetch characterId 1", async () => {
      axios.get.mockResolvedValueOnce({
        data: {
          name: "Rick Sanchez",
          image: "image",
        },
      });

      render(ProfileFetcher, {
        props: {
          characterId: 1,
        },
      });

      const nameOfCharacter = await screen.findByText("Rick Sanchez");
      expect(nameOfCharacter).toBeTruthy();
    });

    it("should fetch characterId 2", async () => {
      axios.get.mockResolvedValueOnce({
        data: {
          name: "Morty Smith",
          image: "image",
        },
      });

      render(ProfileFetcher, {
        props: {
          characterId: 2,
        },
      });

      const nameOfCharacter = await screen.findByText("Morty Smith");
      expect(nameOfCharacter).toBeTruthy();
    });

    it("should call axios for the correct rickandmortyapi endpoint with the characterId of 1", () => {
      axios.get.mockResolvedValueOnce({
        data: {
          name: "Rick Sanchez",
          image: "image",
        },
      });

      render(ProfileFetcher, {
        props: {
          characterId: 1,
        },
      });

      expect(axios.get).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character/1"
      );
    });

    it("should call axios for the correct rickandmortyapi endpoint with the characterId of 2", () => {
      axios.get.mockResolvedValueOnce({
        data: {
          name: "Morty Smith",
          image: "image",
        },
      });

      render(ProfileFetcher, {
        props: {
          characterId: 2,
        },
      });

      expect(axios.get).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character/2"
      );
    });
  });
});
