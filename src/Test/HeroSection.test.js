// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import HeroSection from "../Landing_page/home/HeroSection";

// // Test Suite

// describe("HeroSection Component", () => {
//   test("renders HeroSection image", () => {
//     render(<HeroSection />);
//     const heroImage = screen.getByAltText("Hero");
//     expect(heroImage).toBeInTheDocument();
//     expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
//   });

  
// });


import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "../Landing_page/home/HeroSection";
import "@testing-library/jest-dom";

// 1️⃣ Test: Renders hero image with correct alt text
test("renders hero image with alt text", () => {
  render(<HeroSection />);
  const img = screen.getByAltText("Hero");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "media/images/homeHero.png");
});

// 2️⃣ Test: Renders heading and paragraph
test("displays the heading and description", () => {
  render(<HeroSection />);
  expect(screen.getByText("Invest in Everything")).toBeInTheDocument();
  expect(
    screen.getByText(/online platform to invest in stocks/i)
  ).toBeInTheDocument();
});

// 3️⃣ Test: Renders a button with text 'SignUp Now'
test("shows SignUp Now button", () => {
  render(<HeroSection />);
  const button = screen.getByRole("button", { name: /signup now/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("btn btn-primary");
});
