import { test, expect } from "vitest";
import { findFirstLetter, mostUsedFirstLetter } from "./main.js";

test("findFirstLetter with an S", () => {
    expect(findFirstLetter("Stepney Green")).toBe("S")
});
test("findFirstLetter with an O", () => {
    expect(findFirstLetter("Old Street")).toBe("O")
});
test("mostUsedFirstLetter returns the most common first letter", () => {
    const londonUndergroundStations = [
        "Aldgate",
        "Aldgate East",
        "Alperton",
        "Amersham",
        "Angel",
        "Archway",
        "Arnos Grove",
        "Baker Street",
        "Balham",
        "Bank",
        "Barbican",
        "Barking",
        "Barkingside",
        "South Wimbledon",
        "Southfields",
        "Stepney Green",
        "Stockwell",
        "Stonebridge Park",
        "Stratford",
        "Stratford Market",
        "Sudbury Hill",
        "Sudbury Town",
        "Surbiton",
        "Temple"
    ];

    expect(mostUsedFirstLetter(londonUndergroundStations)).toBe("S");
});