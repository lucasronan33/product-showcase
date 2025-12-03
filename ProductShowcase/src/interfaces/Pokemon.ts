interface Pokemon {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }>;
}