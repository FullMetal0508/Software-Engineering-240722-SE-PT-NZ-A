
const primarchsList = [
        {
            "id": 0,
            "name": "Lion El'Jonson",
            "legion": "Dark Angels",
            "description": "The first Primarch discovered by the Emperor, known for his strategic genius and knightly demeanor. Lion El'Jonson, also known as The Lion and The First, is the Primarch of the Dark Angels. He was scattered along with the other Primarchs to the far corners of the galaxy. He finally came to rest on the world Caliban, a beautiful but blighted world tainted by Chaos due to its proximity to the Eye of Terror. Lion El'Jonson was renowned for a level of strategic brilliance and martial prowess that was rivaled perhaps only by Horus, but was distrusted by his brother Primarchs for his secretive and taciturn nature. The Chaos emissary to Lorgar called him the Duelist. Having disappeared for ten millennia following the Destruction of Caliban after the Horus Heresy, The Lion has finally returned to the Imperium following the Arks of Omen Campaign.",
            "allegiance": "Loyalist",
            "legion_saying": "The Lion shall lead.",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/f/fc/YoungLion.jpg"
          },
          {
            "id": 1,
            "name": "Fulgrim",
            "legion": "Emperor's Children",
            "description": "A master of aesthetics and perfection, he was ultimately corrupted by Chaos.",
            "allegiance": "Traitor",
            "legion_saying": "The perfection of art is the perfection of war.",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/e/ec/YoungFulgrim.jpg"
          },
          {
            "id": 2,
            "name": "Perturabo",
            "legion": "Iron Warriors",
            "description": "A brilliant siege master who harbors a deep resentment towards the Imperium.",
            "allegiance": "Traitor",
            "legion_saying": "Iron within, iron without!",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/4/4b/PertYoung.jpg"
          },
          {
            "id": 3,
            "name": "Jaghatai Khan",
            "legion": "White Scars",
            "description": "Known for his speed and mobility in warfare, he embodies the spirit of the nomadic tribes.",
            "allegiance": "Loyalist",
            "legion_saying": "The hunt is on!",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/9/9c/HHKhan.jpg"
          },
          {
            "id": 4,
            "name": "Leman Russ",
            "legion": "Space Wolves",
            "description": "The wolf lord, famed for his ferocity in battle and loyalty to the Emperor.",
            "allegiance": "Loyalist",
            "legion_saying": "For Russ and the Allfather!",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/5/54/HHRuss.jpg"
          },
          {
            "id": 5,
            "name": "Rogal Dorn",
            "legion": "Imperial Fists",
            "description": "A stalwart defender and master of fortifications, known for his unyielding resolve.",
            "allegiance": "Loyalist",
            "legion_saying": "The Emperor's will is our shield.",
            "image": "https://wh40k.lexicanum.com/mediawiki/images/f/ff/DornYoung.jpg"
          },
          {
            "id": 6,
            "name": "Konrad Curze",
            "legion": "Night Lords",
            "description": "A savant in the practices of psychological warfare, focusing on mass propoganda and torture.",
            "allegiance": "Traitor",
            "legion_saying": "Ave Dominus Nox.",
            "image": "https://example.com/konrad_curze.jpg"
          },
          {
            "id": 7,
            "name": "Sanguinius",
            "legion": "Blood Angels",
            "description": "An angelic figure known for his nobility and tragic fate.",
            "allegiance": "Loyalist",
            "legion_saying": "In the blood, we find our strength.",
            "image": "https://example.com/sanguinius.jpg"
          },
          {
            "id": 8,
            "name": "Ferrus Manus",
            "legion": "Iron Fists",
            "description": "A resolute leader who favours replacing human flesh for more optimal mechanical augmentations.",
            "allegiance": "Loyalist",
            "legion_saying": "The Flesh is weak! Iron Prevails!",
            "image": "https://example.com/ferrus_manus.jpg"
          },
          {
            "id": 9,
            "name": "Vulkan",
            "legion": "Salamanders",
            "description": "A compassionate leader who values humanity and craftsmanship.",
            "allegiance": "Loyalist",
            "legion_saying": "We forge our own destiny.",
            "image": "https://example.com/vulkan.jpg"
          },
          {
            "id": 10,
            "name": "Corvus Corax",
            "legion": "Raven Guard",
            "description": "A master of stealth and guerrilla warfare, he sought vengeance against the oppressors.",
            "allegiance": "Loyalist",
            "legion_saying": "We strike from the shadows.",
            "image": "https://example.com/corvus_corax.jpg"
          },
          {
            "id": 11,
            "name": "Alpharius Omegon",
            "legion": "Alpha Legion",
            "description": "The twin Primarchs known for their deception and manipulation.",
            "allegiance": "Traitor",
            "legion_saying": "The serpent's way is the only way.",
            "image": "https://example.com/alpharius_omegon.jpg"
          },
          {
            "id": 12,
            "name": "Magnus the Red",
            "legion": "Thousand Sons",
            "description": "A powerful psyker whose pursuit of knowledge led to tragic consequences.",
            "allegiance": "Traitor",
            "legion_saying": "Knowledge is power.",
            "image": "https://example.com/magnus_the_red.jpg"
          },
          {
            "id": 13,
            "name": "Mortarion",
            "legion": "Death Guard",
            "description": "A grim warrior who embodies the concept of endurance and resilience.",
            "allegiance": "Traitor",
            "legion_saying": "Death is the price of victory.",
            "image": "https://example.com/mortarion.jpg"
          },
          {
            "id": 14,
            "name": "Angron",
            "legion": "World Eaters",
            "description": "A brutal warrior driven by rage and the desire for bloodshed.",
            "allegiance": "Traitor",
            "legion_saying": "Blood for the Blood God!",
            "image": "https://example.com/angron.jpg"
          },
          {
            "id": 15,
            "name": "Horus Lupercal",
            "legion": "Luna Wolves / Sons of Horus",
            "description": "The favored son of the Emperor, whose fall led to the Horus Heresy.",
            "allegiance": "Traitor",
            "legion_saying": "For the glory of the Warmaster!",
            "image": "https://example.com/horus_lupercal.jpg"
          },
          {
            "id": 16,
            "name": "Lorgar",
            "legion": "Word Bearers",
            "description": "A deeply religious Primarch who worshipped Chaos and sought to spread its influence.",
            "allegiance": "Traitor",
            "legion_saying": "Faith is the greatest weapon.",
            "image": "https://example.com/lorgar.jpg"
          },
          {
            "id": 17,
            "name": "Roboute Guilliman",
            "legion": "Ultramarines",
            "description": "The prime exemplar of the Emperors Will, and a resolute and tactical leader.",
            "allegiance": "Loyalist",
            "legion_saying": "Courage and Honour! For Macragge!!",
            "image": "https://example.com/roboute_guilliman.jpg"
          }
    ]

export default primarchsList