// SCALE SYSTEM:
//
// 1 = makkelijk / vriendelijk / weinig nodig
// 2 = gemiddeld
// 3 = moeilijk / intens / veel nodig

// fairness correction:
// timeNeed == 1 receives reduced mismatch penalty
// to prevent under-ranking low-maintenance breeds

export const breedTraits = {
  Affenpinscher: {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Afghan Hound": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 2,
    size: 2,
  },

  Africanis: {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  Aidi: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Airedale Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Airedoodle: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Akbash: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  Akita: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Aksaray Malaklisi": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Alano Español": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Alapaha Blue Blood Bulldog": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Alaskan Husky": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Alaskan Klee Kai": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Alaskan Malamute": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  Alopekis: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Alpine Dachsbracke": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "American Bulldog": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "American Bully": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "American Cocker Spaniel": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 1,
    size: 1,
  },

  "American English Coonhound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "American Eskimo Dog": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "American Foxhound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "American Hairless Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "American Leopard Hound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "American Pit Bull Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "American Staffordshire Terrier": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "American Water Spaniel": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Andalusian Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Anglo-Français de Petite Vénerie": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Appenzeller Sennenhund": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Argentine Pila": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  Ariégeois: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Ariège Pointer": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Armant: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Armenian Gampr": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Artois Hound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  Aussiedoodle: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Australian Cattle Dog": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Australian Kelpie": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Australian Shepherd": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Australian Silky Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Australian Stumpy Tail Cattle Dog": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Australian Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Austrian Black and Tan Hound": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Austrian Pinscher": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  Azawakh: {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bắc Hà": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Bakharwal Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Banjara Hound": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bankhar Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 2,
    size: 3,
  },

  "Barak Hound": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Barbado da Terceira": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Barbet: {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  Basenji: {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 1,
  },

  "Basque Shepherd Dog": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Bassador: {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Basset Artésien Normand": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Basset Bleu de Gascogne": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Basset Fauve de Bretagne": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Basset Hound": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 2,
  },

  Bassettoodle: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Bavarian Mountain Hound": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  Beagle: {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Beagle-Harrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bearded Collie": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Beauceron: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Bedlington Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Belgian Laekenois": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Belgian Malinois": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Belgian Shepherd": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Belgian Tervuren": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Bergamasco Sheepdog": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Berger Picard": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Bernedoodle: {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  "Bernese Mountain Dog": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  "Bichon Frisé": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Biewer Terrier": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  Billy: {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Black and Tan Coonhound": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Black Mouth Cur": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Black Norwegian Elkhound": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Black Russian Terrier": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Bloodhound: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Blue Picardy Spaniel": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Bluetick Coonhound": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  Boerboel: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Bohemian Shepherd": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bohemian Spotted Dog": {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  Bolognese: {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Border Collie": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Border Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  Bordoodle: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Borzoi: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 2,
    size: 3,
  },

  "Boston Terrier": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Bouvier des Ardennes": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bouvier des Flandres": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Boxer: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  Boxerdoodle: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Boykin Spaniel": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bracco Italiano": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Braque d'Auvergne": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Braque du Bourbonnais": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Braque Français": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Braque Saint-Germain": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Brazilian Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  Briard: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Briquet de Provence": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Briquet Griffon Vendéen": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  Brittany: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Brittanydoodle: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 3,
    size: 2,
  },

  Broholmer: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Bruno Jura Hound": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bucovina Shepherd Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 2,
    size: 3,
  },

  Bugg: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Bulgarian Hound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bulgarian Scenthound": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bull Arab": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Bulldog: {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 2,
      other: 1,
    },
    timeNeed: 1,
    size: 2,
  },

  Bullmastiff: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  Bulloxer: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Bull Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Bull Terrier (Miniature)": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 1,
  },

  "Bully Kutta": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 3,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Burgos Pointer": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Cairn Terrier": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Cane Corso": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Cardigan Welsh Corgi": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Catahoula Leopard Dog": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Caucasian Shepherd Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Cavalier King Charles Spaniel": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Chesapeake Bay Retriever": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Chinese Crested": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Chinese Shar-Pei": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  Chinook: {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Chow Chow": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 3,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 2,
    size: 2,
  },

  "Clumber Spaniel": {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Cocker Spaniel": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Coton de Tulear": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  Dalmatian: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Doberman Pinscher": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Dogo Argentino": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Dutch Shepherd": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "English Setter": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "English Shepherd": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "English Springer Spaniel": {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "English Toy Terrier (Black & Tan)": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  Eurasier: {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Field Spaniel": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Finnish Hound": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Finnish Lapphund": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 2,
  },

  "Finnish Spitz": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "French Bulldog": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "German Pinscher": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "German Shepherd": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "German Shorthaired Pointer": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Giant Schnauzer": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Glen of Imaal Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Golden Retriever": {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  "Gordon Setter": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Great Dane": {
    energy: 2,
    space: 3,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  Greyhound: {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 3,
  },

  Harrier: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Havanese: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Irish Setter": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Irish Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Irish Wolfhound": {
    energy: 2,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Italian Greyhound": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 1,
    size: 1,
  },

  "Japanese Chin": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Japanese Spitz": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Kangal Shepherd Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Keeshond: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "King Charles Spaniel": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  Komondor: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Kooikerhondje: {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  Kuvasz: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Labrador Retriever": {
    energy: 2,
    space: 2,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  "Lagotto Romagnolo": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Lancashire Heeler": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  Leonberger: {
    energy: 2,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Lhasa Apso": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  Maltese: {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Miniature American Shepherd": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  "Miniature Pinscher": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  "Miniature Schnauzer": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 1,
  },

  Newfoundland: {
    energy: 2,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  "Norfolk Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Norwich Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Nova Scotia Duck Tolling Retriever": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Old English Sheepdog": {
    energy: 3,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Olde English Bulldogge": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  Papillon: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  Pekingese: {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Pembroke Welsh Corgi": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Pharaoh Hound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Plott Hound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Pomeranian: {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Poodle (Miniature)": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 1,
  },

  "Poodle (Toy)": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Presa Canario": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 3,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Pug: {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  Puli: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  Pumi: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Pyrenean Mountain Dog": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Rat Terrier": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Redbone Coonhound": {
    energy: 2,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Rhodesian Ridgeback": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Rottweiler: {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Russian Toy": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Saint Bernard": {
    energy: 1,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 3,
  },

  Saluki: {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Samoyed: {
    energy: 3,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  Schipperke: {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Scottish Deerhound": {
    energy: 2,
    space: 3,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 3,
  },

  "Scottish Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Shetland Sheepdog": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  "Shiba Inu": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 1,
  },

  "Shih Tzu": {
    energy: 1,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Shiloh Shepherd": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Siberian Husky": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Smooth Fox Terrier": {
    energy: 3,
    space: 1,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  "Soft Coated Wheaten Terrier": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Spanish Water Dog": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Spinone Italiano": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 2,
    size: 3,
  },

  "Staffordshire Bull Terrier": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Standard Schnauzer": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Swedish Vallhund": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 1,
  },

  "Thai Ridgeback": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 2,
  },

  "Tibetan Mastiff": {
    energy: 2,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 3,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Tibetan Spaniel": {
    energy: 2,
    space: 1,
    experience: 1,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 1,
    size: 1,
  },

  "Tibetan Terrier": {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Toy Fox Terrier": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Treeing Walker Coonhound": {
    energy: 3,
    space: 2,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  Vizsla: {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  Weimaraner: {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 3,
    },
    timeNeed: 3,
    size: 3,
  },

  "Welsh Springer Spaniel": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "West Highland White Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  Whippet: {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 3,
    },
    timeNeed: 2,
    size: 2,
  },

  "White Shepherd": {
    energy: 3,
    space: 3,
    experience: 3,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  "Wire Fox Terrier": {
    energy: 3,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },

  "Wirehaired Pointing Griffon": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 2,
  },

  "Wirehaired Vizsla": {
    energy: 3,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 2,
    },
    timeNeed: 3,
    size: 3,
  },

  Xoloitzcuintli: {
    energy: 2,
    space: 2,
    experience: 2,
    kidFriendly: 1,
    petFriendly: {
      dogs: 1,
      other: 1,
    },
    timeNeed: 2,
    size: 2,
  },

  "Yorkshire Terrier": {
    energy: 2,
    space: 1,
    experience: 2,
    kidFriendly: 2,
    petFriendly: {
      dogs: 2,
      other: 2,
    },
    timeNeed: 2,
    size: 1,
  },
};
