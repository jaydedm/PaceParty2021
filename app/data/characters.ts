export type Character = {
  actor: string;
  character: string;
  role: string;
  suspectBio?: string;
  costumeSuggestions?: string;
};

const characters: Character[] = [
  {
    actor: "Ginger",
    character: "RECKLESS SALLY HOLLADAY",
    role: "Game Master - Horse Breeder",
  },
  {
    actor: "Dean",
    character: "RED WHISKEY HOLLADAY",
    role: "Game Master - Bartender",
  },
  {
    actor: "Bryant",
    character: "WHITE WILLOW WEEDA",
    role: "Game Master - Banker",
  },
  {
    actor: "Jayde",
    character: "SLIPPERY PETE",
    role: "Game Master - Blackjack Dealer",
  },
  {
    actor: "Glorilyn",
    character: "BELLA STARRY",
    role: "Waitress @ Gravestone Saloon",
    suspectBio:
      "A recent widow, Bella Starry grew up on a Pug Valley farm in West Virginia.  She’s a member of the infamous Hatplain family who were in the midst of a lethal feud of property lines with their Kentucky neighbors, the McToys.  On one side, Bella is an educated lady and accomplished piano player.  On her other side, she’s a notorious outlaw who has served time in federal prison for horse thievery and stagecoach robberies.",
    costumeSuggestions:
      "A mock corset western saloon dress with a hair feather piece and amelia black boots.  Holster (or slightly hidden) fake gun. ",
  },
  {
    actor: "Connor",
    character: "WYLIE ARP",
    role: "Co-Owner of the Gravestone Saloon",
    suspectBio:
      "An Ex-lawman from Duck City, Wylie Arp recently moved to Gravestone with his brothers and long-time flame, Josephine Marco.  Wylie is a Civil War veteran who desperately needs a change of pace and more relaxing way of life.  He recently became the co-owner of the Gravestone Saloon.  Wylie has made it clear that he doesn’t intend on being a lawman again.",
    costumeSuggestions:
      "Black duster coat with a vest, a holster, and a cowboy hat/boots.  A (gunslinger) handlebar mustache.",
  },
  {
    actor: "Kenzi",
    character: "JOSEPHINE MARCO",
    role: "Entrepreneur & Girlfriend of Wylie Arp",
    suspectBio:
      "Josephine Marco made a fortune as an entrepreneur in the California Gold Rush when she was only 15.  She later traveled in her stagecoach through the Wild West in search of the next booming town.  She eventually met her true love, Wylie Arp. Ever since these two met, they’ve been inseparable.  She’s the main reason Wylie left his career as the Duck City Sheriff.  They moved to Gravestone to settle down, get married, and raise a family.",
    costumeSuggestions:
      "Rhinestone western shirt, blue jeans, cowboy hat/boots.  Gun holsters with fake gun.",
  },
  {
    actor: "Gina",
    character: "ABBY OAKLEY",
    role: "Exhibition Sharpshooter",
    suspectBio:
      "Abby Oakley is a feisty exhibition sharpshooter in Bronco Bill’s Traveling Wild Western Show.  Known by the fans of her show as Abby Sure Shot, she is rumored to be able to shoot the ashes off a cigar from across the room!  However, Abby has recently become quite intolerable with her egocentricities.",
    costumeSuggestions:
      "Lace up faux buckskin cowgirl dress, cowboy hat, fake rifle and cowboy boots.",
  },
  {
    actor: "Grady",
    character: "DOC GALADAY",
    role: "Doctor",
    suspectBio:
      "Doc Galaday is Wylie Arp’s right-hand man.  Doc rides the fence on both sides of the law.  His reputation has made him a terror in the hearts of the lawless.  Doc is a physician by trade, but his tuberculosis has drastically reduced his number of patients.  He often supplements his income with gambling.",
    costumeSuggestions:
      "Black duster coat with a vest, a holster, and a cowboy hat/boots.  A (gunslinger) handlebar mustache.",
  },
  {
    actor: "Janie",
    character: "KATIE FISHMAN",
    role: "Waitress @ Gravestone Saloon",
    suspectBio:
      "Katie Fishman helped put the wild in the phrase Wild West!  As Doc Galaday’s longtime girlfriend, she’s also struggled to stay on the right side of the law.  Doc’s solid friendship with the ex-lawman Wylie Arp has proven to be a positive force with this pair.  Katie is originally from Gravestone but moved away as a teen to live with her aunt and uncle in Duck City.  She’s unsure of how she feels about moving back home.",
    costumeSuggestions:
      "A mock corset western saloon dress with a hair feather piece and amelia black boots.  ",
  },
  {
    actor: "County",
    character: "WAVY WILL BRONCHUS",
    role: "Leader of the Rancher Outlaws",
    suspectBio:
      "Wavy Will Bronchus is the leader of the loosely organized criminal faction called The Ranchers.  A sorted group of cattle rustlers, thieves, and even murderers, this group has invaded the now lawless town of Gravestone.  The townsfolk have high hopes that Wylie Arp can reinstate law and order on the streets, but Wavy Will has vowed never to let that happen.",
    costumeSuggestions:
      "Stetson hat, leather vest, bandanas, spurs and buckskins with a fake revolver.  A (gunslinger) handlebar mustache.",
  },
  {
    actor: "Gregan",
    character: "JAMES JESSE",
    role: "American Outlaw",
    suspectBio:
      "The poetic James Jesse has always veered on the wrong side of the law since he could walk!  He’s a member of the Jesse-Young gang made up of a band of brothers.  During the Civil War, he engaged in guerilla warfare.  Today there’s a huge reward out for his capture by the U.S. government for his many crimes of bank robbing, horse thievery, and even murder.",
    costumeSuggestions:
      "Stetson hat, leather vest, bandanas, spurs and buckskins with a fake revolver.  A (gunslinger) handlebar mustache.",
  },
  {
    actor: "Annie",
    character: "CALAMITY JANIE",
    role: "U.S. Army Scout",
    suspectBio:
      "The tall tale telling Calamity Janie is a force to be reckoned with!  Former Great Plains cattle herder turned U.S. scout;  this rugged lady used to be a trick shooter in Bronco Bill’s traveling Wild Western Show.  This is a gal you should never double cross, as she’s not called Calamity Janie for nothing.",
    costumeSuggestions:
      "Brown duster coat with a vest, a holster and a cowboy hat/boots.  Fake guns.",
  },
  {
    actor: "David",
    character: "BRONCO BILL",
    role: "Traveling Entertainer",
    suspectBio:
      "Bronco Bill always had a knack for the arts.  He’s a cool self-contained individual with a great sense of humor.  He’s assembled a nomadic brigade of entertainers called Bronco Bill’s Traveling Wild Western Show.  His troupe travels around the U.S. to perform their eclectic show of bronco riding, roping, trick shooting, singing and dancing, and even Civil War reenactments.",
    costumeSuggestions:
      "Brown duster coat with a vest, a holster and a cowboy hat/boots.  A (gunslinger) handlebar mustache.",
  },
  {
    actor: "Paisley",
    character: "POSEY BASSETT",
    role: "Girlfriend of Hutch Cassaday",
    suspectBio:
      "Posey Bassett is the girlfriend of Hutch Cassaday.  She grew up on a large ranch in Utah and attended a prominent boarding school for a few years before dropping out to return to her father’s ranch.  Her father does business with the outlaws of the Wild West by supplying them with beef and fresh horses.  Posey was destined to end up on the wrong side of the law.",
    costumeSuggestions:
      "Gunslinger costume with cowboy boots.  Fake guns and a cowboy hat.",
  },
  {
    actor: "Lucas",
    character: "HUTCH CASSADAY",
    role: "Leader of the Rowdy Bunch",
    suspectBio:
      "Hutch Cassaday would rather engage in a gunfight than have a civil conversation.  He’s an unstable outlaw of the Wild West, and the leader of a newly-formed gang of outlaws called The Rowdy Bunch.  Hutch has recently been released from the Wyoming State Prison where he served time for horse thievery and running a protection racket among the local ranchers in Wyoming.  ",
    costumeSuggestions:
      "Old west style vintage 3-piece suit and derby hat.  Handlebar mustache.  Fake guns.",
  },
  {
    actor: "Gen",
    character: "SUZANNE B. ANTHONY",
    role: "American Civil Rights Leader",
    suspectBio:
      "Suzanne B. Anthony is the determined American civil rights leader who is currently traveling across the Wild West to give speeches on women’s rights.  She has devoted her life to the cause for American women to have equal rights with men and to be allowed to vote.  In 1869, she created the National Women’s Sufrage Association which was the first organization formed in order to gain a women’s right to vote.  Suzanne has tenacity!",
    costumeSuggestions:
      "Vintage old west day dress with hair slicked back into a bun.",
  },
  {
    actor: "Jose",
    character: "VIRGO ARP",
    role: "Deputy U.S. Marshal for the Arizona Territory",
    suspectBio:
      "Virgo Arp, the older brother of Wylie Arp, has spent his entire adult life as a part of American law enforcement.  He served in the Union Army during the Civil War before he became a U.S. Marshal for the Arizona Territory.  He is visiting Gravestone with his wife since his brother Wylie just moved there.  Virgo is not know for tolerance of outlaws and always gets his man.",
    costumeSuggestions:
      "One arm is to be bandaged up and/or in a sling since you were shot yesterday.    Wild West bounty hunter/gunslinger costume with a fake U.S. Marshal badge and fake guns.",
  },
  {
    actor: "Rachel",
    character: "ELVIRA PACKINGTON ARP",
    role: "Seamstress & Wife of Virgo Arp",
    suspectBio:
      "Elvira grew up in Colorado and as a young woman during her family’s travels, she met, fell in love with, and married a Union Army officer named Virgo Arp.  She is currently visiting Gravestone with her husband.  By trade, she is a seamstress and loves to dress up in her best creations.  She often hangs around saloons to show off her garments and enjoys the nightlife.  This western diva is also a known compulsive gambler.",
    costumeSuggestions:
      "Saloon dress or lucille walking suit - or anything trendy for the late 1800’s.  Amelia boots and a fake gun.",
  },
  {
    actor: "Caleb",
    character: "DOM HORN",
    role: "Detective, Pinkertoon Agency",
    suspectBio:
      'Dom Horn is the top detective at the Pinkerton Detective Agency.  His motto is "I Don’t Sleep" and is often hired by the U.S. Army to retrieve elusive outlaws.  The Pinkertoons are a private U.S. Security Guard and Detective Agency that provides security guards, military contract work, bounty hunting, and private investigation services.  Currently, there are more agents in the Pinkerton Agency than there are in the standing army of the U.S.!',
    costumeSuggestions: " Old west style vintage 3-piece suit.",
  },
  {
    actor: "Haylee",
    character: "LORA ENGEL WILDER",
    role: "Farmer and Aspiring Writer",
    suspectBio:
      "Lora Wilder moved from various rural communities in the midwest finally settling down with her family in the peaceful town of Gravestone.  Her past is sprinkled with crop failures, fires, and illnesses, but she claims these hardships have only made her stronger.  She has recently started writing for a local farming magazine and plans on writing a series of books in the future.",
    costumeSuggestions:
      "Saloon dress or lucille walking suit - or anything trendy for the late 1800’s.  Amelia boots and a fake gun.",
  },
  {
    actor: "Melody",
    character: "VICTORIA MCMURTRY",
    role: "Singer at the Gravestone Saloon",
    suspectBio:
      "Victoria McMurtry is a long-time performer at the Gravestone Saloon.  Victoria was overcome with enjoyment upon hearing the news that Bronco Bill’s Traveling Wild Western Show was making its way toward Gravestone!  Victoria dreams of joining this infamous traveling show and leaving Gravestone’s turmoil in her dust!",
    costumeSuggestions:
      "Saloon dress or lucille walking suit - or anything trendy for the late 1800’s.  Amelia boots and a fake gun.",
  },
  {
    actor: "Brekken",
    character: "SIR NORMAN MCDERMOT",
    role: "Owner, Red River Fur Traders",
    suspectBio:
      "With extensive knowledge of the northwest terrain and his ability to make relationships with the Native Americans, Sir Norman McDermot has grown his fur trading company to be an expansive operation in Northern America!  Sir McDermot has a hard nosed team of loyal fur traders that travel with him across the land in search of new trapping grounds and Native American tribes to increase their fur trade markets.",
    costumeSuggestions: "Old west style vintage 3-piece suit.  Faux fur pelts.",
  },
  {
    actor: "Gaye",
    character: "LANE DRURY",
    role: "Baker",
    suspectBio:
      "Lane Drury moved to Gravestone many years ago and opened the town Bakery.  You can always find her working hard with usually a rolling pin in hand. ",
    costumeSuggestions:
      "Vintage old west day dress with apron and bonnet.  Rolling Pin in the apron pocket.",
  },
  {
    actor: "Gaylen",
    character: "GERALD SMELTER",
    role: "Blacksmith",
    suspectBio:
      "Gerald Smelter is the local blacksmith.  He is a loyal man and a humanitarian.  That is, until you double cross him and his wild side rises to the surface.",
    costumeSuggestions: "Cowboy with leather apron or vest.",
  },
  {
    actor: "Livi",
    character: "LILLY SMITH",
    role: "Traveling Entertainer",
    suspectBio:
      "Lilly Smith is a performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Thus far, the fans haven’t noticed her, as she can’t seem to evade the huge shadow behind the star of the show - Abby Oakley.  Lilly is known to be pretentious and flashy, but lacks the skills to back up her personality.",
    costumeSuggestions:
      "Lace up faux buckskin cowgirl dress, cowboy hat, fake rifle and cowboy boots.",
  },
  {
    actor: "McKell",
    character: "ACE SHOOTOUT ANGUS",
    role: "Gunsmith",
    suspectBio:
      "Ace Angus owns Ace’s Trade House, a gun shop in the town of Gravestone.  Ace knows everything there is to know about guns, and has undergone many gunfights with The Ranchers, a band of outlaws who’ve been taking over the town.  Ace hasn’t lost a fight yet, but his close friends know his day of doom is coming unless Gravestone can restore law and order.",
    costumeSuggestions:
      "Brown duster coat and a vest, a holster and a cowboy hat/boots.  A (gunslinger) handlebar mustache as an optional accessory.",
  },
  {
    actor: "Kody",
    character: "SEWARD FILMORE",
    role: "Traveling Gambler",
    suspectBio:
      "Seward Filmore is a true gentleman.  He’s a former U.S. Marshal and U.S. Army scout.  He retired from his law career after an unfair gunfight with another lawman over a lady.  He ended up with a career-ending injury to his leg, but soon found an unknown talent with gambling.  Seward travels across the country winning huge pots from the biggest gaming tables.",
    costumeSuggestions:
      "White shirt, satin vest, arm garter and bow tie.  Optional to wear a cowboy hat.",
  },
  {
    actor: "Noelle",
    character: "MABEL BLY",
    role: "Saloon Girl",
    suspectBio:
      "Mabel Bly is a dedicated saloon girl at the Gravestone Saloon.  Mabel keeps the peace between the cowboys and outlaws, or at least it is one of her duties to keep the patrons civil.  Mabel has wanted to escape Gravestone since The Ranchers took over, but simply doesn’t have the means to leave.",
    costumeSuggestions:
      "A mock corset western saloon dress with a hair feather piece and Amelia black boots.",
  },
  {
    actor: "GeNille",
    character: "POKER ELLY",
    role: "Poker Player",
    suspectBio:
      "Poker Elly is an infamous poker player in Gravestone.  Originally, hailing from England, she is the daughter of an inflexible and conservative schoolmaster.  Her family moved to America when she was young, and she was raised in a proper boarding school.  She rebelled against her family’s beliefs on gambling and headed west to earn her fortune.  Poker Elly has dreams of opening her own gaming saloon one day and wishes to name it The Poker Palace.   ",
    costumeSuggestions:
      "Wild west cowgirl attire.  Cute cowboy hat and glitzy cowboy boots.  Playing cards in your pockets.",
  },
  // {
  //   actor: "Caleb",
  //   character: "SEAN MCGUIRE",
  //   role: "PINKERTOON DETECTIVE",
  //   suspectBio:
  //     "The Pinkertoons are a private U.S. Security Guard and Detective Agency that provides security guards, military contract work, bounty hunting, and private investigation services.  Currently, there are more agents in the Pinkerton Agency than there are in the standing army of the U.S.!",
  //   costumeSuggestions:
  //     "MALE:  Old west style 3-piece suite.  Fake guns and pinkertoon badge.",
  // },
  {
    actor: "Makhy",
    character: "LEVI SIMON",
    role: "PINKERTOON DETECTIVE",
    suspectBio:
      "The Pinkertoons are a private U.S. Security Guard and Detective Agency that provides security guards, military contract work, bounty hunting, and private investigation services.  Currently, there are more agents in the Pinkerton Agency than there are in the standing army of the U.S.!",
    costumeSuggestions:
      "MALE:  Old west style 3-piece suite.  Fake guns and pinkertoon badge.",
  },
  {
    actor: "Bentley",
    character: "JACK MARSTON",
    role: "PINKERTOON DETECTIVE",
    suspectBio:
      "The Pinkertoons are a private U.S. Security Guard and Detective Agency that provides security guards, military contract work, bounty hunting, and private investigation services.  Currently, there are more agents in the Pinkerton Agency than there are in the standing army of the U.S.!",
    costumeSuggestions:
      "MALE:  Old west style 3-piece suite.  Fake guns and pinkertoon badge.",
  },
  {
    actor: "Liam",
    character: "ARTHUR MORGAN",
    role: "PINKERTOON DETECTIVE",
    suspectBio:
      "The Pinkertoons are a private U.S. Security Guard and Detective Agency that provides security guards, military contract work, bounty hunting, and private investigation services.  Currently, there are more agents in the Pinkerton Agency than there are in the standing army of the U.S.!",
    costumeSuggestions:
      "MALE:  Old west style 3-piece suite.  Fake guns and pinkertoon badge.",
  },
  {
    actor: "Jackson",
    character: "THEODORE NASH",
    role: "RED RIVER FUR TRADER",
    suspectBio:
      "Sir McDermot has a hard nosed team of loyal fur traders that travel with him across the land in search of new trapping grounds and Native American tribes to increase their fur trade markets.",
    costumeSuggestions: "Buckskin/faux leather with faux fur pelts",
  },
  {
    actor: "Leela",
    character: "MILLIE STOOTBERRY",
    role: "RED RIVER FUR TRADER",
    suspectBio:
      "Sir McDermot has a hard nosed team of loyal fur traders that travel with him across the land in search of new trapping grounds and Native American tribes to increase their fur trade markets.",
    costumeSuggestions: "Buckskin/faux leather with faux fur pelts",
  },
  {
    actor: "Steve",
    character: "BEMJAMIN O’BRIAN",
    role: "RED RIVER FUR TRADER",
    suspectBio:
      "Sir McDermot has a hard nosed team of loyal fur traders that travel with him across the land in search of new trapping grounds and Native American tribes to increase their fur trade markets.",
    costumeSuggestions: "Buckskin/faux leather with faux fur pelts",
  },
  // {
  //   actor: "Paisley",
  //   character: "RUBY BARLOW",
  //   role: "Traveling Entertainer",
  //   suspectBio:
  //     "A performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Your group of 5 does everything from singing and dancing to short skits to entertain the audience between the “main acts”.",
  //   costumeSuggestions: "",
  // },
  {
    actor: "Nellie",
    character: "GERTIE SPIRE",
    role: "Traveling Entertainer",
    suspectBio:
      "A performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Your group of 5 does everything from singing and dancing to short skits to entertain the audience between the “main acts”.",
    costumeSuggestions: "",
  },
  {
    actor: "Lola",
    character: "STELLA NIGHTENGALE",
    role: "Traveling Entertainer",
    suspectBio:
      "A performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Your group of 4 does everything from singing and dancing to short skits to entertain the audience between the “main acts”.",
    costumeSuggestions: "",
  },
  {
    actor: "Izzy",
    character: "CORDELIA PEMBLETON",
    role: "Traveling Entertainer",
    suspectBio:
      "A performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Your group of 5 does everything from singing and dancing to short skits to entertain the audience between the “main acts”.",
    costumeSuggestions: "",
  },
  {
    actor: "Molly",
    character: "PRUDIE GRIMSHAW",
    role: "Traveling Entertainer",
    suspectBio:
      "A performer with the nomadic brigade of entertainers called the Bronco Bill’s Traveling Wild Western Show.  Your group of 5 does everything from singing and dancing to short skits to entertain the audience between the “main acts”.",
    costumeSuggestions: "",
  },
  {
    actor: "Addie",
    character: "ELIZA MCGOWEN",
    role: "Wild West Child",
    suspectBio: "",
    costumeSuggestions: "",
  },
  {
    actor: "Maci",
    character: "WINNIFRED BANKS",
    role: "Wild West Child",
    suspectBio: "",
    costumeSuggestions: "",
  },
  {
    actor: "Gwen",
    character: "SADIE ADLER",
    role: "Wild West Child",
    suspectBio: "",
    costumeSuggestions: "",
  },
  {
    actor: "Hiram",
    character: "AMOS JACKMAN",
    role: "Wild West Child",
    suspectBio: "",
    costumeSuggestions: "",
  },
  {
    actor: "Charlie",
    character: "JASPER ENDERS",
    role: "Wild West Child",
    suspectBio: "",
    costumeSuggestions: "",
  },
];

export default characters;
