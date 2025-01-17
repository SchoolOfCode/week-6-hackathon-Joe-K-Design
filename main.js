//Write a function that takes a list of London Underground station names and returns the most common first letter among all the station names. If there is a tie, return the first letter that appears alphabetically first.

//Find first letter from array below.

export function findFirstLetter(str) {
    if (str.length > 0) {
        return str[0];
    } else {
        return '';
    }
}
    //Providing list of station names, but is not a comprehensive list, some stations are missing.
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
        "Battersea Power Station",
        "Belsize Park",
        "Bermondsey",
        "Blackfriars",
        "Blackhorse Road",
        "Borough",
        "Boston Manor",
        "Bounds Green",
        "Brent Cross",
        "Bromley-by-Bow",
        "Buckhurst Hill",
        "Burnt Oak",
        "Caledonian Road",
        "Camden Town",
        "Canary Wharf",
        "Canning Town",
        "Chadwell Heath",
        "Charing Cross",
        "Chesham",
        "Chigwell",
        "Chiswick Park",
        "Clapham Common",
        "Clapham North",
        "Clapham South",
        "Cockfosters",
        "Colindale",
        "Colliers Wood",
        "Covent Garden",
        "Crossharbour",
        "Dagenham East",
        "Dagenham Heathway",
        "Debden",
        "Dollis Hill",
        "Ealing Broadway",
        "Ealing Common",
        "Earls Court",
        "East Acton",
        "East Finchley",
        "East Ham",
        "East Putney",
        "Edgware",
        "Edgware Road",
        "Elephant & Castle",
        "Elm Park",
        "Embankment",
        "Euston",
        "Euston Square",
        "Farringdon",
        "Finsbury Park",
        "Fulham Broadway",
        "Gants Hill",
        "Gloucester Road",
        "Golders Green",
        "Goldhawk Road",
        "Goodge Street",
        "Grange Hill",
        "Green Park",
        "Greenford",
        "Hainault",
        "Hammersmith",
        "Hampstead",
        "Harrow & Wealdstone",
        "Harrow-on-the-Hill",
        "Heathrow Terminal 4",
        "Heathrow Terminal 5",
        "Heathrow Terminals 1, 2, 3",
        "High Barnet",
        "High Street Kensington",
        "Highgate",
        "Hillingdon",
        "Hounslow Central",
        "Hounslow East",
        "Hounslow West",
        "Hyde Park Corner",
        "Ickenham",
        "Isleworth",
        "Kennington",
        "Kensal Green",
        "Kensington (Olympia)",
        "Kentish Town",
        "King's Cross St. Pancras",
        "Knightsbridge",
        "Ladbroke Grove",
        "Lambeth North",
        "Lancaster Gate",
        "Latimer Road",
        "Leicester Square",
        "Leyton",
        "Leytonstone",
        "Liverpool Street",
        "Loughton",
        "Maida Vale",
        "Mansion House",
        "Marble Arch",
        "Mill Hill East",
        "Monument",
        "Moorgate",
        "Morden",
        "Morden South",
        "North Acton",
        "North Harrow",
        "North Wembley",
        "Northfields",
        "Northolt",
        "Northwick Park",
        "Notting Hill Gate",
        "Oakwood",
        "Old Street",
        "Osterley",
        "Oxford Circus",
        "Paddington",
        "Park Royal",
        "Parsons Green",
        "Peckham Rye",
        "Piccadilly Circus",
        "Pimlico",
        "Pinner",
        "Plaistow",
        "Preston Road",
        "Putney Bridge",
        "Queen's Park",
        "Ravenscourt Park",
        "Rayners Lane",
        "Richmond",
        "Rickmansworth",
        "Rotherhithe",
        "Royal Oak",
        "St. James's Park",
        "St. John's Wood",
        "St. Pancras International",
        "South Acton",
        "South Harrow",
        "South Kensington",
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
    
    // Search for most commonly used first letter
    export function mostUsedFirstLetter(stations) {
        const letterCounts = {};
    
        stations.forEach(station => {
            const firstLetter = findFirstLetter(station);
            if (firstLetter) {
                if (!letterCounts[firstLetter]) {
                    letterCounts[firstLetter] = 0;
                }
                letterCounts[firstLetter]++;
            }
        });
    
        let mostUsedLetter = '';
        let maxCount = 0;
    
        for (const letter in letterCounts) {
            if (letterCounts[letter] > maxCount) {
                maxCount = letterCounts[letter];
                mostUsedLetter = letter;
            }
        }
    
        return mostUsedLetter;
    }
    
    // Result shown in terminal
    console.log(mostUsedFirstLetter(londonUndergroundStations));
    

