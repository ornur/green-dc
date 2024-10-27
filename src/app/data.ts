// Fill with any type of data, this was constructed with a python script

type RawData = [number, string, number, number];

type Location = {
  key: string;
  id: number;
  name: string;
  lat: number;
  lng: number;
};

const locations: RawData[] = [
  [0, "Astana", 51.1038954, 71.1719464],
  [1, "Almaty", 43.2178314, 76.6228714],
  [2, "Karaganda", 49.823515, 72.8393317],
  [3, "Shymkent", 42.3417909, 69.5074047],
  [4, "Atyrau", 47.0970235, 51.7714945],
  [5, "Semei", 50.4129037, 80.1931273],
  [6, "Aktobe", 50.2735672, 57.0289819],
];

const formatted: Location[] = locations.map(([id, name, lat, lng]) => ({
  id,
  name,
  lat,
  lng,
  key: JSON.stringify({ id, name, lat, lng }),
}));

export default formatted;
