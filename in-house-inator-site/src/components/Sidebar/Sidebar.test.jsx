import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sidebar from "./Sidebar";

const sampleCommands = ["commandA", "commandB"];

test("Displays site logo", async () => {
    render(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );

    const inhouseLogo = screen.getByRole("img");

    expect(inhouseLogo).toBeInTheDocument();
});

test("Displays no links when no routes are supplied", async () => {
    render(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );

    const sideBarLinks = screen.getAllByRole("link");

    expect(sideBarLinks.length).toBe(2);
});

test("Displays links from a sample routes object", async () => {
    render(
        <BrowserRouter>
            <Sidebar commands={sampleCommands} />
        </BrowserRouter>
    );

    const sideBarLinks = screen.getAllByRole("link");

    expect(sideBarLinks.length).toBe(2 + sampleCommands.length);
});
