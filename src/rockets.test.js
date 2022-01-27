import reducer from './redux/rockets/rockets';

test('Should load rockets to the state', () => {
  const previousState = [];
  const mockRockets = [
    {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickrImages: 'https://imgur.com/DaCfMsj.jpg',
    },
    {
      id: 2,
      rocketName: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      flickrImages: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    },
    {
      id: 3,
      rocketName: 'Falcon Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      flickrImages: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
    },
    {
      id: 4,
      rocketName: 'Starship',
      description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
      flickrImages: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
    },
  ];

  expect(reducer(previousState, { type: 'spaceTraveler/rockets/GET_ROCKETS', payload: mockRockets })).toEqual([[
    {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickrImages: 'https://imgur.com/DaCfMsj.jpg',
    },
    {
      id: 2,
      rocketName: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      flickrImages: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    },
    {
      id: 3,
      rocketName: 'Falcon Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      flickrImages: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
    },
    {
      id: 4,
      rocketName: 'Starship',
      description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
      flickrImages: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
    },
  ]]);
});
