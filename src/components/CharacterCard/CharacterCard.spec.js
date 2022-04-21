import CharacterCard from "./CharacterCard.vue";
import { render, screen } from "@testing-library/vue";

describe("CharacterCard", () => {
  it("should render", () => {
    render(CharacterCard);
  });

  describe("Displaying the name", () => {
    it('should display the name "Charlie" when passed "Charlie" as the name prop', () => {
      render(CharacterCard, {
        props: {
          name: "Charlie",
        },
      });

      expect(screen.getByText("Charlie")).toBeTruthy();
    });

    it('should display the name "Em" when passed "Em" as the name prop', () => {
      render(CharacterCard, {
        props: {
          name: "Em",
        },
      });

      expect(screen.getByText("Em")).toBeTruthy();
    });

    it.skip("should throw an error if it recieves anything other than a string for the name prop", () => {
      expect(
        render(CharacterCard, {
          props: {
            name: 1,
          },
        })
      ).toThrow("name must be a string");
    });
  });

  describe("Displaying the picture", () => {
    it('should render an img with a src of "/image-of-charlie.jpg" when it is passed as the picture prop', () => {
      render(CharacterCard, {
        props: {
          name: "Charlie",
          picture: "/image-of-charlie.jpg",
        },
      });

      const charlieImg = screen.getByRole("img");
      expect(charlieImg.src).toEqual("http://localhost/image-of-charlie.jpg");
    });

    it('should render an img with a src of "/image-of-em.jpg" when it is passed as the picture prop', () => {
      render(CharacterCard, {
        props: {
          name: "Em",
          picture: "/image-of-em.jpg",
        },
      });

      const emImg = screen.getByRole("img");
      expect(emImg.src).toEqual("http://localhost/image-of-em.jpg");
    });
  });

  describe("Displaying the link", () => {
    it("should render a link to /profiles/charlie/ when passed Charlie as a name", () => {
      render(CharacterCard, {
        props: {
          name: "Charlie",
        },
      });

      const link = screen.getByRole("link");
      expect(link.href).toEqual("http://localhost/profiles/charlie/");
    });

    it("should render a link to /profiles/em/ when passed Em as a name", () => {
      render(CharacterCard, {
        props: {
          name: "Em",
        },
      });

      const link = screen.getByRole("link");
      expect(link.href).toEqual("http://localhost/profiles/em/");
    });

    it("should not render a link if there is no name prop", () => {
      render(CharacterCard, {
        props: {},
      });

      const link = screen.queryByRole("link");
      expect(link).toBeFalsy();
    });
  });

  describe("Clicking a button", () => {
    it("should invoke the onButtonClick function when clicking the button", () => {});
  });
});
