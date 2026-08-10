export type CentreReview = {
  authorName: string;
  rating: number | null;
  text: string;
  relativePublishTimeDescription: string | null;
  publishTime: string | null;
};

export type Centre = {
  id: string;
  googlePlaceId: string;
  googleMapsUrl: string | null;
  name: string;
  slug: string;
  category: string;
  address: string;
  city: string;
  region: string;
  postcode: string;
  phone: string | null;
  website: string | null;
  rating: number | null;
  reviewCount: number | null;
  latitude: number | null;
  longitude: number | null;
  image: string | null;
  serviceTags: string[];
  reviewKeywords: string[];
  reviews: CentreReview[];
};

// Ireland records requested by the site owner are included. Only the clear North America records remain excluded.
export const excludedNonUkRecords = [
  {
    "name": "Canine Fitness Centre",
    "locality": "Calgary",
    "address": "4515 Manhattan Rd SE, Calgary, AB T2G 4B3, Canada",
    "reason": "Obvious North America record excluded from UK/Ireland directory import"
  },
  {
    "name": "Canine Fitness & Fun Center",
    "locality": "Denver",
    "address": "5390 E Evans Ave, Denver, CO 80222",
    "reason": "Obvious North America record excluded from UK/Ireland directory import"
  }
] as const;

export const centres: Centre[] = [
  {
    "id": "79b723dc-c1b3-4f5f-b872-6625933658f1",
    "googlePlaceId": "manual-4-point-physio",
    "googleMapsUrl": null,
    "name": "4 Point Physio",
    "slug": "4-point-physio",
    "category": "Physiotherapist",
    "address": "North Barn, Perry Mill Farm, Birmingham Road, Hopwood, Birmingham B48 7AJ, United Kingdom",
    "city": "Birmingham",
    "region": "West Midlands",
    "postcode": "B48 7AJ",
    "phone": "+44 7740 902587",
    "website": "https://www.4pointphysio.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 52.3668,
    "longitude": -1.9005,
    "image": null,
    "serviceTags": [
      "Physiotherapy",
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "veterinary physiotherapy",
      "hydrotherapy",
      "rehab"
    ],
    "reviews": []
  },
  {
    "id": "9efd944c-fa93-4c60-9df1-243886fa65bb",
    "googlePlaceId": "ChIJD2OkDuJmdkgRFrWDybSV7nc",
    "googleMapsUrl": "https://maps.google.com/?cid=8642009338678064406",
    "name": "Active Pet",
    "slug": "active-pet",
    "category": "Rehabilitation center",
    "address": "Lucking's Estate, Magpie Ln, Amersham HP7 0LS, United Kingdom",
    "city": "Amersham",
    "region": "England",
    "postcode": "HP7 0LS",
    "phone": "+44 1494 725968",
    "website": "https://www.activepet.co.uk/",
    "rating": 5,
    "reviewCount": 31,
    "latitude": 51.6392254,
    "longitude": -0.6332197,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJD2OkDuJmdkgRFrWDybSV7nc/image-1776467429180-6ad4b8c6.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "acupuncture",
      "hydrotherapy",
      "arthritis treatment",
      "laser therapy",
      "physiotherapy",
      "spinal surgery",
      "friendly team",
      "quality of life"
    ],
    "reviews": [
      {
        "authorName": "R M",
        "rating": 5,
        "text": "Brilliant! Phillipa is an excellent vet specialising in physio and hydrotherapy. Has given us sound advice and support and genuinely cares for our family member. Very grateful to have her and our dog absolutely loves her sessions!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763653234"
      },
      {
        "authorName": "Joanne Coster",
        "rating": 5,
        "text": "In 2023 our labradoodle had major spinal surgery, 12 months later her mobility deteriorated, we couldn't put her through more surgery for her spondylitis and she also has arthritis in her knuckles, so our local vet suggested Active Pets, with Acupuncture and Hydrotherapy, plus home physio exercises we have seen such an improvement in our dogs mobility in just a few months. Vet Philippa has so much knowledge not only about the treatments they do, but about pain relief advice, and cares so much about the pets welfare. We use insurance and the administration of this and making appointments is seamless. I would highly recommend the treatments, practice and staff, So would Lacey as she happily goes on every time.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730987118"
      },
      {
        "authorName": "Neil McDougall",
        "rating": 5,
        "text": "An excellent service is offered by Philippa, Michelle and the team. They are very experienced and seek to provide solutions that help your dog deal with arthritis (in our case) and have as full and pain free life as possible.\n\nWe have been taking our now ten year old Flat Coated Retriever Branston to Active Pet for a couple of years now and he is undoubtedly a healthier and happier dog as a consequence. He has acupuncture, laser and radial shock therapy at each visit and he is well chilled with the experience each time.\n\nWhat I particularly like is how closely they work with our own traditional vets....which provides a joined up approach to treatment.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1583439530"
      },
      {
        "authorName": "Brian M",
        "rating": 5,
        "text": "Philippa and her team looked after our beautiful ageing dog over the last two years of her life. Their treatment of her was at all times caring and professional and I would have no hesitation recommending Active Pet to anyone considering physiotherapy, hydrotherapy, laser treatment, etc. for their pet. Thank you to them.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1731885332"
      },
      {
        "authorName": "Rebecca Vass",
        "rating": 5,
        "text": "Dr Phillipa is so knowledgeable, kind, trustworthy and takes time to listen to the whole story. Phillipa has helped us realise that our dog is not badly behaved, he is in pain that affects his everyday life, and that is affecting his behaviour. We can now pick up on signs that our dog is struggling and we know how to help him. His behaviour has improved because of the knowledge we now have. Phillipa has a plan to help our dog with medication to improve his daily life as best we can. Phillipa being in our life and helping us and our dog is invaluable right now.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748596851"
      }
    ]
  },
  {
    "id": "55af8bf1-4f54-4254-85d1-08e31b1efbbd",
    "googlePlaceId": "ChIJ09dSh2lXWUgRJVGnFkhr-cc",
    "googleMapsUrl": "https://maps.google.com/?cid=14409666440110493989",
    "name": "ADAnimal Physiotherapy",
    "slug": "adanimal-physiotherapy",
    "category": "Physical therapist",
    "address": "Mobile Service, Murneen North, Claremorris, Co. Mayo, F12 D8F2, Ireland",
    "city": "Claremorris",
    "region": "Co. Mayo",
    "postcode": "F12 D8F2",
    "phone": "+353 87 959 3739",
    "website": "https://www.adanimalphysiotherapy.com/",
    "rating": 5,
    "reviewCount": 22,
    "latitude": 53.7770351,
    "longitude": -8.9935956,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ09dSh2lXWUgRJVGnFkhr-cc/image-1776467434655-ff16b955.jpg",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "pet support",
      "communication",
      "compassion",
      "way with humans",
      "surgery",
      "kindness",
      "patience",
      "understanding"
    ],
    "reviews": [
      {
        "authorName": "Eimear O Brien",
        "rating": 5,
        "text": "I can not recommend Aisling enough, she is just amazing. She has been working with my girl for over 2 years and has made a huge difference in her recovery and maintenance of IVDD. The support she offers to owners as well as your pet is second to none. My girl is very shy and nervous around she doesn’t see on a day to day basis, Aisling is soo patient and understanding and works on Lexi’s level. This is something that can’t be thought, this compassion and kindness is something she is naturally gifted with. We can never thank Aisling enough for her help and look forward to work with her for many years to come.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772395533"
      },
      {
        "authorName": "Danielle Heekes",
        "rating": 5,
        "text": "I cannot recommend Aisling highly enough! She is an incredible small animal physiotherapist with an outstanding depth of knowledge and expertise. It’s clear she is truly passionate about what she does, and she takes the time to thoroughly assess each animal, explain everything clearly, and create a treatment plan tailored specifically to their needs.\n\nWhat really sets Aisling apart is how amazing she is with animals. She is calm, patient, and so gentle, putting even the most nervous pets completely at ease. You can see the trust she builds with them straight away.\n\nThanks to her skill and care, we’ve seen such a positive difference. If you’re looking for someone who combines professional excellence with genuine compassion and kindness, Aisling is the one to see. We are so grateful to have found her!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772222195"
      },
      {
        "authorName": "Lisa Wilmoth",
        "rating": 5,
        "text": "Aisling is Amazing, would highly recommend. We have a 2 year old, tripawd GSD who will struggle through-out her life physically and having found Aisling so early on has been such a relief for us. She understands that Penny still needs to be a dog and will over exert herself but also helps us to give her a balanced life so she doesn't do too much damage to herself while enjoying life. We look forward to having many more sessions with Aisling in the future.",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1599493240"
      },
      {
        "authorName": "Elwira Kwiatkowska",
        "rating": 5,
        "text": "Aisling its a wonderful physiotherapist. She is doing great job with Benjamin. Thanks to her Benjamin gets stronger after his surgery. He loves going to her for exercises and belly rubs 🥰 highly recommended 5*",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743328420"
      },
      {
        "authorName": "Aisling Roche",
        "rating": 5,
        "text": "It was such a relief to find someone who understood how to help my Milly (Bichon Friese), the change in her humour and quality of life after just two sessions with Aisling was noticeable. Its very clear that Aisling has extensive understanding of animal physiology.  She also has a great way with humans which is a big plus, she really gets how important pets are to their owners. I",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1724323378"
      }
    ]
  },
  {
    "id": "ebb909ab-59ff-4a7d-9db0-dee3107ec21b",
    "googlePlaceId": "ChIJnWGmpZovd0gR3KmSDEHAHj0",
    "googleMapsUrl": "https://maps.google.com/?cid=4404168871231269340",
    "name": "AG Veterinary Physiotherapy & Canine Hydrotherapy Centre",
    "slug": "ag-veterinary-physiotherapy-canine-hydrotherapy-centre",
    "category": "Rehabilitation center",
    "address": "Manor Farm Offices, Unit 4 CV47 2YY, United Kingdom",
    "city": "Southam",
    "region": "England",
    "postcode": "CV47 2YY",
    "phone": "+44 7494 689566",
    "website": "https://www.agvp.co.uk/",
    "rating": 5,
    "reviewCount": 50,
    "latitude": 52.1700537,
    "longitude": -1.3912865,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJnWGmpZovd0gR3KmSDEHAHj0/image-1776467391347-de8b5894.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Naomi Johnson",
        "rating": 5,
        "text": "We’ve been having change of behaviour issues with one of our spaniels and so we came to have an assessment appointment with David at AG as we were concerned it could be pain related. David was really patient listening to our concerns and background of our dog. He then carried out an extremely thorough examination of Barley. Whilst doing each manipulation/examination he explained what he was doing and the reasons why and what he was looking for. We haven’t needed any further treatment at AG but I would not hesitate in going to them in the future should the need arise. Amy, who organised our appointment, was also superb. Communication from Amy was excellent and so easy via WhatsApp. She also checked in after the appointment to see how Barley was following X-rays. Extremely professional team and would confidently recommend.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1764706572"
      },
      {
        "authorName": "Tracey",
        "rating": 5,
        "text": "My dog , Christie, had a cruciate ligament sprain, and in the aim of avoiding it tearing, I sought guidance from AG Veterinary Physio. David was superb in his care and detailed assessment of Christie, giving us clear exercises to work on at home. He also advised and delivered hydro session to support her gaining strength, which was just amazing and really helped her to heal. I have to also mention Rory, who also delivered some hydro sessions and was fab with Christie, and Amy, who was so helpful in sorting my bookings out.\nThanks again to the team - I highly recommend them!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768664602"
      },
      {
        "authorName": "Andrew Pittendrigh",
        "rating": 5,
        "text": "A huge thanks to Rory and Dave for the amazing care and service they have provided to our best friend - Jerry. We've seen amazing improvements to Jerry over the course of his treatment but have opted to keep up with the hydrotherapy due to the huge benefits for Jerry who has hip displysia. Great facilities, brilliant advice and tips, and more than a few laughs and good conversation along the way. Thanks very much to the team, we are most grateful.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753128788"
      },
      {
        "authorName": "f grief",
        "rating": 5,
        "text": "Have been taking Maggie to see David since she was diagnosed with bilateral elbow dysplasia and had surgery to repair her cruciate ligament in May 2024. He took time to get to know her, the physio exercises really helped her rehabilitation and I couldn’t believe how much stronger she became, even stronger than before the surgery! She can now go for long walks and run and play with my other lab for hours without getting tired or being lame afterwards. However, more importantly for a dog who can be nervous around people I love how excited she gets when we park up and she sees David, she has so much fun and he is doing a great job keeping her strong and healthy and working with me to minimise the need for further medication or elbow surgery currently. Wouldn’t dream of going anywhere else, thank you!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765527249"
      },
      {
        "authorName": "Emma Forsyth",
        "rating": 5,
        "text": "Annabelle and her fantastic team have been an essential part of our stables since my days of 5 star eventing. To more recently keeping my children’s ponies fit and sound for pony club ! Annabelle, Katie and Olivia are my first phone call if I have a lameness or training issue. I am a BE Coach and will regularly signpost my clients to AG Vets Physios. Whether you are looking to represent your country competing or happy hacking with you best friend they will go above and beyond to help you get your horse in tip top shape.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1752571396"
      }
    ]
  },
  {
    "id": "3d021678-e3c4-410c-bac8-886f852b214b",
    "googlePlaceId": "ChIJF6LIfCmJcUgR4YYCSGhxdKM",
    "googleMapsUrl": "https://maps.google.com/?cid=11778163618179352289",
    "name": "All Seasons Animal Rehab",
    "slug": "all-seasons-animal-rehab",
    "category": "Physical therapist",
    "address": "Clutton Hill Farm Estate, Bristol BS39 5QQ, United Kingdom",
    "city": "Bristol",
    "region": "England",
    "postcode": "BS39 5QQ",
    "phone": "+44 7949 897251",
    "website": "https://www.allseasonsanimalrehab.co.uk/",
    "rating": 5,
    "reviewCount": 25,
    "latitude": 51.3378828,
    "longitude": -2.521886,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJF6LIfCmJcUgR4YYCSGhxdKM/image-1776467438847-95a1d4eb.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "dog treatments",
      "knowledgeable team",
      "tailored sessions",
      "gentle staff",
      "friendly staff",
      "caring staff",
      "rehabilitation"
    ],
    "reviews": [
      {
        "authorName": "sam western",
        "rating": 5,
        "text": "My dog hates the vets and shows some big body language around his discomfort. Ellen took her time with him, and he now really enjoys his sessions. There has been a great improvement in his behaviour since he has become stronger, his reactivity has reduced. I’ve already recommended to friends and wouldn’t hesitate to recommend their services to others. 🩷",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758270738"
      },
      {
        "authorName": "Gracie Goldsmith",
        "rating": 5,
        "text": "Tizzy started rehabilitation with Ellen and Katie in July 2025 for conservative management of her CCL tear. As she didn’t undergo surgery for this condition, we knew it wouldn’t be an easy journey.\n\nThe dedicated team have been incredible and have helped us learn how to better manage her condition. Tizzy has also made good progress from where she started and absolutely loves her sessions, especially hydrotherapy where she makes sure everyone gets soaked!\n\nWe can’t thank the team enough and would highly recommend them. 🐾",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768515365"
      },
      {
        "authorName": "Kevin Veale",
        "rating": 5,
        "text": "Ellen & Katie have been fantastic with our cockapoo Maddy.  I think it's fair to say Maddy wasn't keen on hydrotherapy to start with, but both were so caring and gentle with her that by the end she was keen to get inside the building - if only to see \"treat lady\" when she successfully completed her sessions!  We saw some great improvement in Maddy's walking over time following  spinal surgery for a slipped disc and we were always given exercises to do at home and good advice.  I'd recommend to anyone, particularly if your pet is nervous of clinical environments.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763633136"
      },
      {
        "authorName": "Anne Spaven",
        "rating": 5,
        "text": "The team have been treating my 8.5 year old Labrador who has torn her Achilles tendon. We're doing everything to avoid her needing surgery with an incredible 3-d printed split, hands on physio and hydro therapy.\nShe's making incredible progress\nI would highly recommend this knowledgeable, kind and caring team.\nThank you",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742475043"
      },
      {
        "authorName": "Sarah Gregory",
        "rating": 5,
        "text": "Ronnie is quite nervous and will bark at most people but he has come to love his physio and treadmill treatments with Ellen.. so much that he no longer barks and is very eager to get out of the car when we arrive!! I can't thank the team enough for helping get Ronnie back on track.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730389645"
      }
    ]
  },
  {
    "id": "10c6a84d-b522-44c0-b38c-2f9ff215f4c1",
    "googlePlaceId": "ChIJRSblPAybdkgR0YAKtQBklx4",
    "googleMapsUrl": "https://maps.google.com/?cid=2204340496821289169",
    "name": "Animal Physiotherapy Ltd",
    "slug": "animal-physiotherapy-ltd",
    "category": "Physiotherapist",
    "address": "5 Pankhurst Dr, Bracknell RG12 9PS, United Kingdom",
    "city": "Bracknell",
    "region": "England",
    "postcode": "RG12 9PS",
    "phone": "+44 7776 182911",
    "website": "https://www.animalphysiotherapy.org.uk/",
    "rating": 5,
    "reviewCount": 74,
    "latitude": 51.4016212,
    "longitude": -0.7420745,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJRSblPAybdkgR0YAKtQBklx4/image-1776467445258-754364c6.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "animal physiotherapy",
      "cruciate ligament operations",
      "dog rehabilitation",
      "nervous dog handling",
      "care for elderly dogs",
      "understanding dogs",
      "hip replacement",
      "dog training"
    ],
    "reviews": [
      {
        "authorName": "Stan Gillingham",
        "rating": 5,
        "text": "We are just at the start of our journey with Donna, but she has already been of immense help.\nAfter taking a detailed history and listening carefully to my observations of behaviour changes and concerns, she has been able to highlight aspects that I hadn't considered, and consequently point me back to our vet with advice for medication options. We have a long road ahead of us, but Donna has deepened my understanding of my dog, and with the exercises she has set, I am already confident that I am better placed to help my girl in the coming months.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772216155"
      },
      {
        "authorName": "Aya H",
        "rating": 5,
        "text": "We are so grateful to have had Donna's help with our dog's rehabilitation post hip replacement. She really helped to guide us through the whole process which was very daunting for us after a major surgery. We really appreciated her knowledge, experience and advice. She is also a truly lovely and genuine person, who made the sessions really comfortable and friendly for Heidi dog. Heidi enjoyed her physiotherapy and was always excited to arrive there. I can't recommend her enough, and Donna - we can't thank you enough!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772135752"
      },
      {
        "authorName": "Hannah fitsimmons",
        "rating": 5,
        "text": "I was recommended Donna by my vets in Windsor from the first contact Donna was kind and reassuring as my beautiful doggie coco had been going lame on back right .\nWith a plan in place from the word go.\nwith exercises and discussions on a way forward and hydro to coco has become stronger Donna also advise about muscle build up and managing pain .\nWe went from weekly to every two or three weeks and now we have just been in jan 26 and she is so happy with coco we go back in march to see how coco is doing\nThe environment is relax and. Welcoming and Donna is always happy for you to ring or email or just chat about anything that your worry about\nI would recommend Donna for any one who need hep with there pet .\nLovely lady and brilliant sense of humour\nThanks Donna you are truly amazing",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768629503"
      },
      {
        "authorName": "Claire Cox",
        "rating": 5,
        "text": "Donna is a fountain of knowledge on animals and is very kind and caring towards my dog who suffers with arthritis. He very much enjoys going to see Donna and she has helped with advice and ideas to support his long term plan. I would definitely recommend Donna to anyone looking for extra support for the pet.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768571429"
      },
      {
        "authorName": "David Gill",
        "rating": 5,
        "text": "Donna is an extremely knowledgeable veterinary nurse and physio. She was extremely sympathetic to us and very honest as to our lovely dog’s condition. We all love our dogs which Donna clearly understands and she was a wonderful support.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1769979048"
      }
    ]
  },
  {
    "id": "a3e66b70-8c31-4e6b-b0f9-361be5bfac8b",
    "googlePlaceId": "ChIJmZgsxLcpdkgRfq8lFReqTqY",
    "googleMapsUrl": "https://maps.google.com/?cid=11983702674595229566",
    "name": "Animal Rehabilitation Centre",
    "slug": "animal-rehabilitation-centre",
    "category": "Animal hospital",
    "address": "Animal Rehabilitation Centre, Nasty, Ware SG11 1HP, United Kingdom",
    "city": "Ware",
    "region": "England",
    "postcode": "SG11 1HP",
    "phone": "+44 1920 438030",
    "website": "https://www.animalrehabcentre.org/",
    "rating": 4.8,
    "reviewCount": 31,
    "latitude": 51.9043476,
    "longitude": -0.0260697,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJmZgsxLcpdkgRfq8lFReqTqY/image-1776467396060-71a0f9de.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [
      "friendly staff",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Amanda Scarfe",
        "rating": 5,
        "text": "Our dog Milo has had a physio assessment and 3 treadmill hydro therapy sessions at the Centre. The staff have been fantastic and made him feel very comfortable and gone at his pace. They have also been great with us in providing advice. A very professional and friendly service. It is definitely helping our boy.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770581947"
      },
      {
        "authorName": "Lloyd Wade-Jones",
        "rating": 1,
        "text": "Malcolm Adler the owner of The Animal Rehabilitation Centre (ARC) may be a very good Hydrotherapist, but does he care about his animal patients and the business relationship with their owners, his customers? I will let you decide.\n\nAfter 26 sessions at the ARC ARC Animal Rehabilitation Centre over the last 19 months Malcolm Adler no longer wants to treat our dog. This is because we had the audacity to ask Malcom as a gesture of good will to not charge us the £35 cancelation fee for an appointment we could not make and had given 41 hours’ notice rather than the 48 hours’ notice Malcom requires under his T&C’s.\n\nMalcom was aware that we cancelled the appointment because our dog underwent an emergency operation yesterday at the excellent Chestnut Vets in Ware. He didn’t ask how she was or what had happened, his focus was purely on quoting his terms and conditions back to me.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1558812881"
      },
      {
        "authorName": "Stirron Seaborn",
        "rating": 5,
        "text": "A truly fantastic service here. Couldn't recommend highly enough. The friendly staff ensured our dogs happiness came first, now he can't wait to go see them! The service they provide and the explanation of their observations  make what could be a very worrying time, all the easier to deal with.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1579048754"
      },
      {
        "authorName": "Kasey Doyle",
        "rating": 5,
        "text": "I cannot fault this place. Everyone who works at ARC are very lovely and friendly people who truly care about every animal and owner that they meet. They worked wonders with my boy, Bran, who would not be here without them. In 3 weeks he went from being unable to stand, to walking on all 3 legs and swimming confidently. I highly recommend.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1578761732"
      },
      {
        "authorName": "Jean Thomas",
        "rating": 5,
        "text": "Malcolm, Victoria and the team were absolutely brilliant with our golden retriever Sasha and done everything to help her. We would highly recommend them to anyone needing help with their dog.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1706473290"
      }
    ]
  },
  {
    "id": "aee58a00-981f-44b9-9400-bc0454714a0c",
    "googlePlaceId": "ChIJu7iqOYZDdEgRlv49CBoNhZE",
    "googleMapsUrl": "https://maps.google.com/?cid=10485801712860659350",
    "name": "Anna Wilson Veterinary Physiotherapy (including hydrotherapy)",
    "slug": "anna-wilson-veterinary-physiotherapy-including-hydrotherapy",
    "category": "Rehabilitation center",
    "address": "Broadway Stables, Eastland Gate, Lovedean, Waterlooville PO8 0SR, United Kingdom",
    "city": "Waterlooville",
    "region": "England",
    "postcode": "PO8 0SR",
    "phone": "+44 7780 601688",
    "website": "https://www.awvetphysio.co.uk/",
    "rating": 5,
    "reviewCount": 18,
    "latitude": 50.9075382,
    "longitude": -1.0365136,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJu7iqOYZDdEgRlv49CBoNhZE/image-1776467429060-e986ee07.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "arthritis treatment",
      "dog physiotherapy",
      "calm manner",
      "knowledgeable staff",
      "horse treatment",
      "labrador",
      "dog care"
    ],
    "reviews": [
      {
        "authorName": "Rebecca Plumb",
        "rating": 5,
        "text": "I have been taking my dog Elsa to Anna for several months now following her TPLO surgery, and she has been absolutely amazing. I was concerned about Elsa's recovery as she is now 12 and a half and also has arthritis. Seeing Anna for physio and hydro has transformed her recovery process and she is doing brilliantly. Not only is Anna extremely knowledgeable, she is also so kind and patient (my dog is very nervous, and usually hates any kind of vet type environment) but Elsa is always happy to go and see Anna. Anna has a wonderful calm manner that makes every session such a pleasure. I would also like to say a huge thank you to Anna for being so supportive of me as an owner, she has put my mind at rest on many occasions!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1728077135"
      },
      {
        "authorName": "Cassie Hayler",
        "rating": 5,
        "text": "Anna worked with my boy Bertie for 7 years and I can honestly say Physio/Hydro was his favourite place to go. It was clear that his love for Anna was reciprocated.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1688620144"
      },
      {
        "authorName": "Salsify Davies",
        "rating": 5,
        "text": "I would recommend Anna to anyone. She has helped my dog Ilisca tremendously. Her empathy and dedication for Ilisca's recovery from paralysis was  second to none.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754638927"
      },
      {
        "authorName": "Katie Wells",
        "rating": 5,
        "text": "Anna has been brilliant with my cockapoo since her patella surgery. She's not only knowledgeable but also incredibly patient and understanding. Her ability to connect with my dog has helped massively as my dog is quite a nervous dog! I can't recommend her enough!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1724708731"
      },
      {
        "authorName": "fran curtis",
        "rating": 5,
        "text": "I have been taking both of my doggies to Anna for a year now and I cant recommend her enough . In all honesty when I went to see her I thought that I didn't have long with Cooper who is my first ever dog and very much my baby and the vet had told me that he had a bone on bone situation and there wasn't much that could be done . Fast forward three months and he was running around like a puppy and is still going strong . Last year  I faced the same with my second dog lulabell  and she performed miracles , even my vet can't believe how mobile lulabell was .  Anna truly cares , takes the time to get to know your dog and never pushes where risk of injuring them is considered . Lula and cooper loved going to see Anna .\nToday my dog sadly passed away from cancer and I had to cancel my appointments,  This evening I had a knock on my front door and there was Anna with flowers , she came to pay her respects to lulabell. She really is unique and that shows just how much . I have found a lovely long term and trusting  relationship with her and anyone in need of help please go to see her she knows what she is doing.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1738447268"
      }
    ]
  },
  {
    "id": "033b7e27-3b8e-459a-bea9-0b1b26d0279f",
    "googlePlaceId": "ChIJUQ34tIADYUgRV57TnBZD3wI",
    "googleMapsUrl": "https://maps.google.com/?cid=206957872281787991",
    "name": "Aqua Dog Hydrotherapy",
    "slug": "aqua-dog-hydrotherapy",
    "category": "Physical therapy clinic",
    "address": "Unit 6, 171 Moira Rd, Lisburn BT28 1RW, United Kingdom",
    "city": "Lisburn",
    "region": "Northern Ireland",
    "postcode": "BT28 1RW",
    "phone": "+44 28 9210 6220",
    "website": "https://www.aquadogni.co.uk/",
    "rating": 4.9,
    "reviewCount": 63,
    "latitude": 54.5062513,
    "longitude": -6.0757376,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJUQ34tIADYUgRV57TnBZD3wI/image-1776467432918-e9d0a6ff.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "friendly team",
      "working with dogs",
      "caring staff",
      "animal care",
      "leg",
      "dogs",
      "staff"
    ],
    "reviews": [
      {
        "authorName": "Jen S",
        "rating": 5,
        "text": "A very professional and friendly team that works really well with my dog. Sasha loves her weekly appointment and getting to see her new friends. Since starting hydrotherapy in Nov, 24, I have seen a vast improvement in Sasha's mobility, fitness and mood.",
        "relativePublishTimeDescription": "12 months ago",
        "publishTime": "1746384597"
      },
      {
        "authorName": "Lynne O'H",
        "rating": 5,
        "text": "After two sessions for my senior lab George at Aqua Dog, the difference was unbelievable his back legs were getting stronger and he was a lot more mobile, still on pain relief for nerve pain but definitely showing less muscular pain and discomfort.\n\nI've since taken my two girls down who equally love their sessions thanks to the staff who are extremely professional and knowledgeable.\n\nI can't give higher praise to the staff at Aqua Dog.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1659902094"
      },
      {
        "authorName": "Mark Gibson",
        "rating": 5,
        "text": "We brought both our dogs last Saturday and they had an amazing time. Our Labrador Homer, had been before and loved it. Our greyhound Blue is 11 and  has some pain in her legs, but after just 1 session we have noticed an improvement. She was treated so well, even music was played while she was in the water and she glided as if she was dancing with her partner!! Great advice given on how to help her and we will definitely be back. Well done to all the staff!!!",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1595444315"
      },
      {
        "authorName": "Wayne Murphy",
        "rating": 5,
        "text": "Brought our dog Bucket here for the last couple of years of his life and the improvement to his quality of life was massive!! The staff are so friendly, knowledgeable and spoilt Bucket with so much attention you could see he loved going there every week, even getting so excited in the car when he realised the route we were going!!\nAmazing place, amazing results and amazing staff!!\nThank you Aqua Dogs",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1692432698"
      },
      {
        "authorName": "Moira O'Hare",
        "rating": 5,
        "text": "We took our elderly dog here in the last months of his life, the care attention and love he was shown was amazing.  We learnt so much from the staff who took the time to explain the best treatment options to help keep George comfortable in his last months, the difference after treatment was unbelievable, just sorry we didn't research the benefits of hydrotherapy and take him sooner.  Extremely knowledgeable, friendly and attentive staff, nothing was too much trouble and they genuinely cared for our boy.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1716892978"
      }
    ]
  },
  {
    "id": "0128864d-49e8-427b-adfc-7fb7cb15e619",
    "googlePlaceId": "manual-aqua-dogs-bury",
    "googleMapsUrl": null,
    "name": "Aqua Dogs Bury",
    "slug": "aqua-dogs-bury",
    "category": "Hydrotherapy center",
    "address": "Unit 19 Bolholt Industrial Estate, Walshaw, Bury BL8 1PL, United Kingdom",
    "city": "Bury",
    "region": "Greater Manchester",
    "postcode": "BL8 1PL",
    "phone": "+44 7968 971281",
    "website": "https://aquadogsbury.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 53.6012,
    "longitude": -2.3355,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab"
    ],
    "reviewKeywords": [
      "dog hydrotherapy",
      "warm pool"
    ],
    "reviews": []
  },
  {
    "id": "2bb2c6dd-a6a2-46c2-aaff-30963b76c5ed",
    "googlePlaceId": "ChIJJ1PCkQqZdUgRRWA6fCukX_E",
    "googleMapsUrl": "https://maps.google.com/?cid=17392800792602894405",
    "name": "Aquahounds Ltd",
    "slug": "aquahounds-ltd",
    "category": "Swimming pool",
    "address": "Unit 1, 7 Kings Cres, Shoreham-by-Sea BN43 5LE, United Kingdom",
    "city": "Shoreham-by-Sea",
    "region": "England",
    "postcode": "BN43 5LE",
    "phone": null,
    "website": "https://www.aquahounds.co.uk/",
    "rating": 5,
    "reviewCount": 31,
    "latitude": 50.8269267,
    "longitude": -0.2885657,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJJ1PCkQqZdUgRRWA6fCukX_E/image-1776467455683-41028f43.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog wash",
      "dog swims",
      "blow dryer",
      "helpful staff",
      "dog hairdryer",
      "warm pool",
      "wash and blow dry",
      "life jackets"
    ],
    "reviews": [
      {
        "authorName": "Freya R",
        "rating": 5,
        "text": "Could not recommend highly enough!\nMy dogs love this place so much. Our first session we got in the pool with them, from then on we realised there was no need for us anymore as they didn’t need coaxing to get in, the moment we arrive and open the pool gate they’re in the water!\nGreat selection of toys, life jackets if needed, balls etc. There’s a fantastic dog hair dryer for afterwards so they come home dry. Nina and her father are so lovely and have built a great set up here that’s warm, welcoming and great for dogs. Freedom to swim with them if you want or just throw toys and give them a chance to swim freely and safely.\nThe hardest part for us is convincing them it’s time to go home and get out the pool!\nThey also do a bulk buy of sessions so you get EXCELLENT value for money and lots of booking options/flexibility.\nA real gem in Sussex and somewhere I recommend to everyone I know.\nIf you haven’t tried already, take your dog along, you won’t regret it.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768236874"
      },
      {
        "authorName": "Vicky Birch",
        "rating": 5,
        "text": "Absolutely brilliant, we had bought our 9 month old GSD here with my daughters 10.5 month old GSD, and he enjoyed it so much, (after he realised that it wasn't that scary) We felt really welcome by the owners and not rushed, even booked the wash and blow dry after, nothing was to much trouble and everything was catered for a doggy wash. Just wished we had something like this where we are in Kent. Would throughly recommend and give 5*. Would definitely come back again when we come back to Sussex.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772292317"
      },
      {
        "authorName": "luke newell",
        "rating": 5,
        "text": "So we took our 6 month puppy swimming for the first time here and  I couldn't fault it brilliant place. The staff were so helpful and happy as this was our first time explained everything. The setup is great with lots of toys easy access for dogs to get in and out. Plenty big enough for our 30kg+ dog to paddle around. Didn't try the washing station but I am sure we will soon. Definitely recommend and will definitely going back soon.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1754200740"
      },
      {
        "authorName": "Paige Kelton",
        "rating": 5,
        "text": "Our black labrador had a fantastic time here at Aquahounds. Really clean, fresh towels, lovely smelling soups, hair dryer and ear defenders.\nFriendly staff and lots of places to sit.\nWe will definitely be coming back again soon.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1741782005"
      },
      {
        "authorName": "Patricia Ulliott",
        "rating": 5,
        "text": "Just took my cockapoo for a wash and blow dry which went really well.\n\nWe booked the next available slot which was just an hour away and had a lovely stroll on the beach beforehand. It was easy to find on street parking.\n\nWe were shown how everything works and had a peek at the pool which looks really good! We’ll definitely give it a try.\n\nThe water for the shower was nice and warm and the shampoo and conditioner smelled very nice.\n\nGreat to be able to use the blow dryer too.\n\nAll looked very well kept and my dog was calm.\n\nPleased there were towels available too so you can essentially arrive and leave with nothing but your dog.\n\nAnd best of all, no bad back or mucky bathroom to clean at home afterwards!\n\nThank you :)",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758983494"
      }
    ]
  },
  {
    "id": "e9dbb9dd-1dfa-4fba-bf62-7d8e396d67f7",
    "googlePlaceId": "ChIJAU0a9O8C2UcRYWKQJMQxcK4",
    "googleMapsUrl": "https://maps.google.com/?cid=12569601278487847521",
    "name": "Blue Bear Animal Rehabilitation",
    "slug": "blue-bear-animal-rehabilitation",
    "category": "Rehabilitation center",
    "address": "73c London Rd, Copford, Colchester CO6 1LG, United Kingdom",
    "city": "Colchester",
    "region": "England",
    "postcode": "CO6 1LG",
    "phone": "+44 1206 213999",
    "website": "https://www.bluebearanimalrehabilitation.co.uk/",
    "rating": 5,
    "reviewCount": 66,
    "latitude": 51.8804423,
    "longitude": 0.8026571,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJAU0a9O8C2UcRYWKQJMQxcK4/image-1776467397290-387b3050.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "dog physio",
      "arthritis treatment",
      "dog care",
      "friendly staff",
      "amazing staff",
      "hip dysplasia",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "PETER Harris",
        "rating": 5,
        "text": "So very happy to give 5 stars to Blue Bear for their care and expertise. Our Cassie attends weekly hyrotherapy sessions in the pool for elbow dysplasia. We are at week 3 and already noticing an improvement. Cassie really enjoys her swims and becomes more confident with each visit. It is a joy to witness her enjoyment and progress. Every , member of staff is so caring and quiet obviously puts their doggy clients at the heart of all they do. Thank you very much.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769520463"
      },
      {
        "authorName": "Carole sansom",
        "rating": 5,
        "text": "I can't rate these guys highly enough! They are all absolutely amazing and have made such a difference to my dog in the last 6 weeks.  I wasn't sure what to expect but they're so caring and considerate.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761308617"
      },
      {
        "authorName": "Ruth Pollington",
        "rating": 5,
        "text": "We have been taking our 9 year old German Shepherd to Blue Bear for treatment after a diagnosis of arthritis in her elbows and hips. The staff clearly love dogs and are so good with our nervous girl. Starting with physio before introducing her to the underwater treadmill.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748596295"
      },
      {
        "authorName": "HDG",
        "rating": 5,
        "text": "Really cool place, and friendly staff. I done a first aid course here, but the rest of the facilities look amazing. Would love to take my puppy swimming here. They also sell lots of treats and the prices were really great.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1713235088"
      },
      {
        "authorName": "Bronwyn Bowles",
        "rating": 5,
        "text": "Blue bear has become a second home for my staffie, Thor, and I. His arthritis was debilitating when he first started and now he has built his muscle back up and the team at Blue Bear are so kind and they always ask how he has been. So happy to have been referred by our vet to this team ❤️ we go for hydrotherapy and physio.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742923371"
      }
    ]
  },
  {
    "id": "68f04572-72f6-4710-bd7f-f44c277317f1",
    "googlePlaceId": "ChIJ-wwuAivlc0gRlBvL4bY_fD0",
    "googleMapsUrl": "https://maps.google.com/?cid=4430486188130507668",
    "name": "Bluestone Canine Hydrotherapy",
    "slug": "bluestone-canine-hydrotherapy",
    "category": "Rehabilitation center",
    "address": "2, Sun Rise Wy, Amesbury, Salisbury SP4 7YR, United Kingdom",
    "city": "Salisbury",
    "region": "England",
    "postcode": "SP4 7YR",
    "phone": "+44 1980 258608",
    "website": "https://www.bluestonehydrotherapy.com/",
    "rating": 5,
    "reviewCount": 22,
    "latitude": 51.1750143,
    "longitude": -1.7596072,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ-wwuAivlc0gRlBvL4bY_fD0/image-1776467393330-e652a037.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Kate Blenkinsop",
        "rating": 5,
        "text": "I phoned round a number of hydrotherapy places when I found at my cockapoo had luxating patella’s on both back legs and might possibly need surgery. I remember leaving a message and Nicki coming back to me. She was friendly and knowledgable and was the person that made me feel the most comfortable and at ease- so I booked a consultation. This turned out to be with Elise who was also really lovely and knowledgeable and took me through things step by step ( I was quite anxious!) we started on the treadmill and have since advanced to the pool. In a short space of time my cockapoo has gone from strength to strength - with the vet confirming that he is happy Bertie will not need surgery- such a relief. We continue to go on a less regular basis as part of his maintain programme and he just love it! I booked him in on his birthday last year and valentines this year! A wonderful bunch of people with outstanding service. We think they are great! Thank you",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769105333"
      },
      {
        "authorName": "Caroline Milne",
        "rating": 5,
        "text": "We have been coming to Bluestone hydrotherapy for  about 15 months now after being recommended to try hydrotherapy for pur 6 year old lab retriever Willow who has struggled with hip pain since she was around 18month old. We have been to another hydrotherapy centre in the past, they had the treadmill in water tank but Bluestone also have a pool which we felt given Willow was a keen swimmer whenever near water would really help. Nicki and all the team have been fantastic, willow has gained muscle mass in back legs, lost some much needed weight and is happier and healthier, she absolutely loves her sessions.  Over the time we have reduced from weekly, to fornightly and now monthly as maintenance, fun and keeping an eye on her movement, joints and muscles. She's enjoying walks more and is running about much more comfortably with no signs of after walk stress or pain.  Thank you Bluestone, Willow is a much happier dog for your treatment.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768906259"
      },
      {
        "authorName": "CJ Wild",
        "rating": 5,
        "text": "The team at Bluestone are fabulous. When we had our first visit and assessment for our dog staff were great, answered all our questions about hydrotherapy and gave info and advice about best exercise for our dog and keeping him healthy and active.  Our dog was nervous at first but the staff are patient and friendly he soon relaxed. He now really enjoys his sessions from what we can tell.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767819085"
      },
      {
        "authorName": "Sammie Brad",
        "rating": 5,
        "text": "My dog Helly was referred to Bluestone Hydrotherapy by Southern Counties Veterinary Specialist’s in Ringwood following TPLO cruciate ligament surgery on her right hind.  Helly was assessed and given exercises by the head physiotherapist at SCV who suggested Bluestone would meet Hellys needs and was closer to me (in Andover).\nIt is a quick easy journey from Andover taking me 15 mins with ample parking.\nAfter Helly’s recovery treatment plan was completed I continued to take her purely for maintenance and monitoring.\nThere is now physio, massage and laser available but as yet we haven’t used these services but may in the future.\nI have no hesitation in recommending Bluestone!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767728096"
      },
      {
        "authorName": "Leanne Turner-Gray",
        "rating": 5,
        "text": "My dog is a regular at Bluestone, his care has been amazing and he is making good progress. The team are professional, caring, and genuinely helpful. The environment is calm and welcoming adding to a great overall experience. I can highly recommend Bluestone for professional care in a lovely setting.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1769851554"
      }
    ]
  },
  {
    "id": "d8fcee4e-3bb9-4314-bb89-650742b1c82f",
    "googlePlaceId": "manual-bristol-canine-hydrotherapy-centre",
    "googleMapsUrl": null,
    "name": "Bristol Canine Hydrotherapy Centre",
    "slug": "bristol-canine-hydrotherapy-centre",
    "category": "Hydrotherapy center",
    "address": "Unit 2 WBP, Tower Lane, Warmley, Bristol BS30 8FS, United Kingdom",
    "city": "Bristol",
    "region": "Bristol",
    "postcode": "BS30 8FS",
    "phone": "+44 7917 733850",
    "website": "https://tdgrooming.co.uk/bristol-canine-hydrotherapy/",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.4528,
    "longitude": -2.4755,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab",
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "canine hydrotherapy",
      "warm pool",
      "rehabilitation"
    ],
    "reviews": []
  },
  {
    "id": "fe8a409d-1243-4794-b0c0-9569e3eef61e",
    "googlePlaceId": "ChIJkRqSaQ03ckgRu_dvrJDOxMY",
    "googleMapsUrl": "https://maps.google.com/?cid=14322799835708651451",
    "name": "Brook Barn Canine Rehabilitation",
    "slug": "brook-barn-canine-rehabilitation",
    "category": "Hydrotherapy center",
    "address": "Brook Barn Lattiford, Wincanton BA9 8AG, United Kingdom",
    "city": "Wincanton",
    "region": "England",
    "postcode": "BA9 8AG",
    "phone": "+44 1963 34251",
    "website": "https://www.brookbarnrehab.com/",
    "rating": 5,
    "reviewCount": 46,
    "latitude": 51.0382614,
    "longitude": -2.4346077,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJkRqSaQ03ckgRu_dvrJDOxMY/image-1776467403752-d644158b.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "anxious dog",
      "knowledgeable staff",
      "reactive dog",
      "dog care",
      "understanding team",
      "caring staff",
      "dog mobility"
    ],
    "reviews": [
      {
        "authorName": "Cheryl Coates",
        "rating": 5,
        "text": "We can not thank or reccomend Hannah and her team enough. Our Rottweiler Bella tore both her cruciate ligaments and had to undergo TPLO surgery on each rear leg 6 months apart. One thing to note about Bella is that she is extremely reactive. Especially with strangers and dogs. We explained this to Hannah over the phone and arranged a few meetings just to allow Bella the time to get know Hannah, and understand she wasn't a threat. Bella then started her hydrotheraphy and through Hannahs relaxed and experienced way of working Bella soon began to relax more in her company and on the treadmill. Hannah understood that Bella was touch sensitive and simply took her time to gain Bellas trust, whilst being aware of what Bella was and was not comfortable with. Thankfully Hannah was ultimately able to touch Bella and feel her legs properly whilst she was in the water. This meant Hannah was able to notice that things weren't quite right with Bellas second operation site. After numerous months of Hannah advising it felt infected, a week of antibiotics for Hannah to notice a week after Bellas courses ended that again it felt swollen, Hannah eventually wrote to our vet speculating she felt that possibly Bella was rejecting the plate in her leg. The vet agreed and we decided to remove the plate. I'm happy to say following the removal operation Bella is doing really well. Hannahs said the leg has never felt better and hopes that with just a few months of hydro to build her muscles back up she will be back to normal. We can't thank Hannah enough for having the patience to work with Bella. Had it not of been for Hannahs ability to get close to Bella to investigate her scars we may not have realised something wasn't right until it was too late. Bella now enjoys her visits with Hannah, or as she will forever be known to our family \"Pate Lady\". Thank you Hannah for all your help and support.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1696775443"
      },
      {
        "authorName": "Graham Gillions",
        "rating": 5,
        "text": "Brilliant service from Hannah and all at Brook Barn. They've really helped our little foster puppy to learn to walk properly. Sensitive, caring, and highly effective - can't recommend them highly enough",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1664447719"
      },
      {
        "authorName": "Niall Cumming",
        "rating": 5,
        "text": "First assessment appointment went brilliantly, Hannah was ultra professional and just brilliantly at handling my Golden Retriever Rory. She explained what she found very clearly and the next steps of treatment. If you think your dog might have issues underlying then Hannah is the lady to see.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1746882925"
      },
      {
        "authorName": "Emily Rose",
        "rating": 5,
        "text": "Thank you Brook Barn for making Ellie's final months with us much happier and more comfortable! You definitely bought us more time with her.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1714504949"
      },
      {
        "authorName": "Liz Humpert",
        "rating": 5,
        "text": "We Thoroughly recommend Hannah and the girls at Brook barn, very easy to work with and get along with. Our dog had hydro therapy and clinical massages which helped him for a long time and he seemed to enjoy going. Thanks for everything Hugo’s family",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1716306180"
      }
    ]
  },
  {
    "id": "da0bb51a-2ed1-4064-9934-8ca50a0bda91",
    "googlePlaceId": "ChIJfefkgN0rdEgR0y5y0QjcbMw",
    "googleMapsUrl": "https://maps.google.com/?cid=14730390411653820115",
    "name": "Burnside Animal Rehabilitation Centre",
    "slug": "burnside-animal-rehabilitation-centre",
    "category": "Animal hospital",
    "address": "41 Connaught Rd, Fleet GU51 3LR, United Kingdom",
    "city": "Fleet",
    "region": "England",
    "postcode": "GU51 3LR",
    "phone": "+44 1252 621631",
    "website": "https://www.burnsiderehab.co.uk/",
    "rating": 4.7,
    "reviewCount": 27,
    "latitude": 51.2812254,
    "longitude": -0.8361762,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJfefkgN0rdEgR0y5y0QjcbMw/image-1776467439995-afc2f8de.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [
      "dog rehabilitation",
      "caring staff",
      "team",
      "staff"
    ],
    "reviews": [
      {
        "authorName": "Tina Mcgilvray",
        "rating": 5,
        "text": "Our dog Rudi had a hip replacement at a year old. He required physio before and after the operation. Hollie at Burnside has been amazing, from the first consultation to the last which Rudi had today. She has been a great support , helping us whenever  we have needed some advice. Hollie is so professional and has an amazing way with her, encouraging Rudi in such a gentle way, he loved going to see her - which says it all really. Would not hesitate to recommend Burnside.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1740490689"
      },
      {
        "authorName": "Alex Ricketts",
        "rating": 5,
        "text": "We have been using Burnside for a while and the service has been outstanding with great results. The staff are very efficient and professional. Would highly recommend.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1664388734"
      },
      {
        "authorName": "Dean Armstrong",
        "rating": 5,
        "text": "The ladies here at Burnside have provided us with outstanding service on every occasion we have visited. Our labradoddle was suffering from lameness on all 4 legs and with in 4 treatments he has become a different dog. It is like he is 5 years younger, he is now no longer in pain, he moves well and he is happy again, all thanks to Leanne and Hannah from Burnside.\n\nI would highly recommend this facility for any of you pet needs.",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1532714978"
      },
      {
        "authorName": "Jackie Woodman",
        "rating": 5,
        "text": "Hannah and Holly are fantastic, very professional and caring. Producing amazing results with our young cat.\nHighly recommend them!",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1699522761"
      },
      {
        "authorName": "Clare Stafford",
        "rating": 5,
        "text": "Hannah and Leanne provide a first class and professional physio and hydrotherapy service which I have used regularly for many months for my elderly retriever. It has undoubtedly helped to keep her more mobile and comfortable. I can't recommend them highly enough.",
        "relativePublishTimeDescription": "8 years ago",
        "publishTime": "1518944200"
      }
    ]
  },
  {
    "id": "391730c2-179a-44ee-bfea-3b05810ba764",
    "googlePlaceId": "ChIJgwhvTJGOfkgRO3ZK8JFiYWw",
    "googleMapsUrl": "https://maps.google.com/?cid=7809631607778342459",
    "name": "Butterwick Animal Rehab Clinic",
    "slug": "butterwick-animal-rehab-clinic",
    "category": "Physical therapy clinic",
    "address": "Barrington Way, Darlington DL1 4FA, United Kingdom",
    "city": "Darlington",
    "region": "England",
    "postcode": "DL1 4FA",
    "phone": "+44 1325 802738",
    "website": "https://butterwickanimalrehab.co.uk/",
    "rating": 5,
    "reviewCount": 193,
    "latitude": 54.5233748,
    "longitude": -1.5121815,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJgwhvTJGOfkgRO3ZK8JFiYWw/image-1776467399085-71965328.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Treadmill"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "cruciate ligament surgery",
      "arthritis treatment",
      "underwater treadmill",
      "dog rehabilitation",
      "animal rehabilitation",
      "luxating patella treatment",
      "elbow dysplasia treatment"
    ],
    "reviews": [
      {
        "authorName": "Sophie Clark",
        "rating": 5,
        "text": "Honestly one of the best veterinary teams I’ve ever met! Oscar has been working with Melissa & Lorelei for a couple of months now and his progress has been incredible!\n\nThe team there are so kind, gentle and friendly with Oscar (and the people!) and he’s a dog that normally doesn’t like that type of setting, but he’s really comfortable at his appointments.\n\nIt’s been so great to see his improvements with Butterwick and I’d easily recommend the place to anyone who’s dog is in need :)",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769412782"
      },
      {
        "authorName": "Toni Bibby",
        "rating": 5,
        "text": "Fantastic! Butterwick have helped us and our Staffordshire Bull Terrier, Roxie, following her spinal surgery. The staff are all very frriendly and brilliant with reactive dogs. They always check to make sure the waiting area is clear for us to enter/leave our private room.\n\nRoxie has been using the treadmill for hydrotherapy and has had physio sessions too whereby we are given home exercises to follow up with. The exercises are realistic and effective. Roxie’s now back walking and living a normal life again (something which didn’t feel achievable at first). Highly recommend! 🐾",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770752175"
      },
      {
        "authorName": "AM Robertson",
        "rating": 5,
        "text": "When Millie, our four-year-old Sprocker Spaniel, underwent a complete hip replacement, we contacted Butterwick to discuss her recovery plan.\nFrom the moment we arrived, we were warmly welcomed by Emma at reception, who was brilliant at calming and reassuring Millie—no small feat, as she is often wary and nervous in unfamiliar environments. Mark then carried out a thorough assessment of Millie’s condition, taking the time to understand her stage of recovery, her fitness level prior to surgery, and our own hopes for her future. He recommended a course of hydrotherapy sessions, supplemented with occasional physiotherapy assessments, and provided clear guidance on exercise routines we could follow at home to support Millie’s progress.\nWe were struck by Mark’s caring and professional approach. At no point did we feel pressured into making decisions about her treatment plan; it was evident throughout that Millie’s recovery was the team’s top priority.\nThe facilities at Butterwick are excellent, with a spacious physiotherapy studio and well-equipped hydrotherapy rooms. Millie genuinely enjoys her visits, thanks to the staff who always take the time to welcome and reassure her. We’ve also had hydrotherapy sessions with Lorelei and Melissa, both of whom have been equally professional and attentive, making the experience effective and enjoyable for Millie.\nSeveral months on from her surgery, we are delighted to see Millie’s recovery (now approaching 100%) thanks to the dedication and expertise of the Butterwick team.\nBeyond the outstanding medical care, the administrative process has been seamless. Booking appointments is straightforward, with confirmation emails and calendar entry files that make scheduling easy to manage. Emma also handles our veterinary insurance claims with efficiency and care, ensuring everything runs smoothly.\nAny pet owner will understand the fear and anxiety experienced following medical issues with their animals, and I can’t recommend Butterwick highly enough for their expertise and genuine care.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765972497"
      },
      {
        "authorName": "Kieran Pickering",
        "rating": 5,
        "text": "I have not long been going to butterwick with simba after getting told off the vets it would be good to start hydro, im pleased I picked butterwick, due to the staff been really friendly and they treat simba brilliant they take there time with him and do everything at his pace, its really nice to see people treat your dog the way they should be treat, can't thank them enough he seems to of settled in straight away wich is a big bonus for me thank you 😀",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769463317"
      },
      {
        "authorName": "cadi price",
        "rating": 5,
        "text": "Wow what an amazing place. Apollo had been recovering from a tplo surgery after a torn crucial ligament he also suffers from a lot of nerves and anxiety which caused us lots of worry about getting him into physio and hydro and wether it would actually possible. However Melissa at Butterwick has been absolutely amazing with him. The first session he was absolutely petrified and now he goes in wagging. Everything’s been taken at Apollos pace with adjustments made to ensure it’s as positive as possible for him everyone has been absolutely wonderful!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1734984066"
      }
    ]
  },
  {
    "id": "1d5e4501-5add-4e98-a634-de87f1f12773",
    "googlePlaceId": "ChIJU_xUb-cVdkgRa076AySCL00",
    "googleMapsUrl": "https://maps.google.com/?cid=5561807156023021163",
    "name": "Canine Aqua Splash",
    "slug": "canine-aqua-splash",
    "category": "Dog day care center",
    "address": "fieldgrove farm, Elstree Rd, Elstree, Borehamwood WD6 3FS, United Kingdom",
    "city": "Borehamwood",
    "region": "England",
    "postcode": "WD6 3FS",
    "phone": "+44 7963 656556",
    "website": "https://www.canineaquasplash.com/",
    "rating": 4.7,
    "reviewCount": 81,
    "latitude": 51.6426841,
    "longitude": -0.3184897,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJU_xUb-cVdkgRa076AySCL00/image-1776467450044-b5482e4c.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "changing rooms",
      "younger dog swimming",
      "30 minute slots",
      "warm pool",
      "no showers",
      "helpful staff",
      "confidence building"
    ],
    "reviews": [
      {
        "authorName": "Emma Davis",
        "rating": 5,
        "text": "Thank you Luke for a very fun 1st session with my dogs Ronnie & Reggie. My older boy has always been too nervous of water to swim..especially if he can’t touch the bottom. But thanks to your expert instruction and physical assistance we witness his first swim! It was wonderful to see his confidence grow so quickly and our younger boy swimming freely after his favourite toys. We shall be coming regularly!!",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758980377"
      },
      {
        "authorName": "Ally Thacker",
        "rating": 5,
        "text": "Such a wonderful experience, we came with 5 people and 2 dogs and everyone left smiling. The gentleman on hand was excellent- our Jack Russell mix has always hated water but by the end of the session he had grown her confidence to a point that she didn’t want to leave the pool!\nWe will definitely be returning, Thank you Canine Aquasplash for a great session (Be prepared for big splashes!)",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760361689"
      },
      {
        "authorName": "Joe Coggins",
        "rating": 5,
        "text": "Thank you Luke ! Was great, such a friendly and fun time for us and the dogs.\nHe had such great knowledge of dogs and really engaged throughout the swim.\n\n5 min introduction\n20 minute swim\n5 min leaving , towel dry.\n\nWe have two Labradors and they are shattered now. Certainly an 30 minutes is perfect !\n\nWill see you at the airport, good luck 👍",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1750423541"
      },
      {
        "authorName": "Leanne Kelly",
        "rating": 5,
        "text": "Our 2 year old chocolate lab has always been too tall to swim in rivers so we thought we’d give him a go in a deep pool, it was soo good! 20 mins of swimming time doesn’t sound long but he was knackered by the end of the session. Luke was great talking us through how to build up our boys confidence and it worked wonders he was swimming in no time with a life jacket on that they supply and he made great use out of the toy box they have. Will 100% be back",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749475567"
      },
      {
        "authorName": "stella fifton",
        "rating": 5,
        "text": "Fantastic place to take your pup for swimming. Took my 1 yr old for private session and Luke was on hand to offer me advice.  My little Waffles loved it and although he was nervous, he done really well  they give life vests and have lots of toys to entice your pup into the water.",
        "relativePublishTimeDescription": "12 months ago",
        "publishTime": "1746477445"
      }
    ]
  },
  {
    "id": "d34f3945-56f9-499a-a8f1-3956904feba1",
    "googlePlaceId": "ChIJI2JVra6id0gRlyuHg94SLOI",
    "googleMapsUrl": "https://maps.google.com/?cid=16297421898445695895",
    "name": "Canine Conditioning Academy",
    "slug": "canine-conditioning-academy",
    "category": "Canine therapy centre",
    "address": "Wellingborough Rugby Football Club, Cut Throat Ln, Great Doddington, Wellingborough NN29 7TZ, United Kingdom",
    "city": "Wellingborough",
    "region": "England",
    "postcode": "NN29 7TZ",
    "phone": "+44 7958 656119",
    "website": "https://canineconditioningacademy.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 52.2750992,
    "longitude": -0.7262679,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJI2JVra6id0gRlyuHg94SLOI/image-1776467465270-8eb06e5b.jpg",
    "serviceTags": [
      "Mobility"
    ],
    "reviewKeywords": [],
    "reviews": []
  },
  {
    "id": "d6ac0e10-a55a-4c07-9dba-bd141dce73b4",
    "googlePlaceId": "ChIJY29QYT0bbkgRdEgwGBbD1j8",
    "googleMapsUrl": "https://maps.google.com/?cid=4600078569068054644",
    "name": "Canine Rehab Cardiff",
    "slug": "canine-rehab-cardiff",
    "category": "Rehabilitation center",
    "address": "87 Caerphilly Rd, Birchgrove, Cardiff CF14 4AE, United Kingdom",
    "city": "Cardiff",
    "region": "Wales",
    "postcode": "CF14 4AE",
    "phone": "+44 7848 144274",
    "website": "https://caninerehabcardiff.co.uk/",
    "rating": 5,
    "reviewCount": 35,
    "latitude": 51.5105978,
    "longitude": -3.2000171,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJY29QYT0bbkgRdEgwGBbD1j8/image-1776467441342-8f30a566.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Lindsey Jones",
        "rating": 5,
        "text": "I honestly cannot recommend Denise and her team enough.\nMy dog Steffan required spinal surgery last year for a spinal disc protrusion, causing temporary paralysis in his hind legs. I was recommend Canine Rehab by the hospital team for post operative follow-up, and Steffan received 4 months tailored physiotherapy and hydrotherapy under this amazing team. When we first started bringing him, he was still requiring a sling harness to support his back legs. He is now walking independently, and is almost back to his pre- injury abilities. From the moment we first attended, Denise was professional and incredibly caring, and always provided a relaxed environment for us all, constantly putting us at ease. The hydrotherapy helped strengthen Steffan’s back legs considerably, and he really seemed to enjoy all of his sessions here. He is now back to his cheeky, happy self which is a joy to see.\nI cannot speak highly enough of Denise, and just how knowledgeable she is, and it is clear that she cares so much for the animals that she encounters.\nThank you so much Canine Rehab for everything, and for making a considerably stressful situation a much more positive one.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772112034"
      },
      {
        "authorName": "Holly Rose",
        "rating": 5,
        "text": "We took our dog Hank to the Canine Rehabilitation Centre for an assessment and hydro session, and the experience was outstanding. Dennis was absolutely amazing, her depth of knowledge, experience, and genuine care were obvious from the moment we arrived. She was incredibly patient with Hank, explained everything clearly, and made us feel completely confident in the plan moving forward. It’s rare to meet someone so skilled and so compassionate, and we’re incredibly grateful to have Dennis looking after Hank. We wouldn’t hesitate to recommend her and the Canine Rehabilitation Centre to anyone.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770212340"
      },
      {
        "authorName": "Danielle Jones",
        "rating": 5,
        "text": "Denise and the team are fantastic! Skye had 10 sessions following her cruciate ligament surgery in october as part of her rehabilitation. She’s come on leaps and bounds. The team were always so welcoming and accommodating and fantastic with Skye. Skye loved going to her sessions, and loved the fuss (and treats) from the team. Thank you all so much!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743792671"
      },
      {
        "authorName": "Rod C",
        "rating": 5,
        "text": "After our little West Highland cross suffered a cruciate ligament injury and subsequent surgery, he lost so much muscle in his leg, he was finding walkies very uncomfortable and placing a lot of stress on his other legs. It was very worrying. However,  our vet recommended CRC and after Denise's expert assessment our little man started weekly hydrotherapy and gradually his leg muscle and movement returned to normal. Walkies became a pleasure once again. We carried on a monthly maintenance for a while and this allowed Denise and team to continue monitoring him.\nWe are very grateful to have had this excellent service and would highly recommend it.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762712015"
      },
      {
        "authorName": "tamsin jackson",
        "rating": 5,
        "text": "We highly recommend canine rehabilitation, Cardiff! Our 4 year old labrador, Benji, had an on-off limp & joint stiffness for many months, so we asked the vet for a referral. Denise & her team made us all feel welcome & completely at ease from the onset.\nFollowing an initial assessment in the clean, well equipped clinic, Denise clearly explained her findings & treatment options, and Benji received a combination of physiotherapy & hydrotherapy. We were also provided with top lifestyle advice & an optimum weight for Benji which he has reached with Denise's help!\nBenji loved going into clinic, he clearly adores Denise & is always enthusiastic to see her & jump straight on to the scales to show off his weightloss!\nEven after the initial treatment, we saw a dramatic improvement in Benji's mobility & spirits! He is no longer stiff & slow in the mornings, but wakes up with a bounce in his step & is just like a puppy again! Even our neighbours have commented on his longer stride & bounciness!\nIt's not just Benji that feels better...as owners we felt reassured from the moment we met Denise that he was in good hands - her compassion & expertise shines through & we can't be more grateful for the difference she has made to all of our lives!\nDenise also handled all of our paperwork & insurance claims, which removed the stress from the process.\nThank - you Denise! You really are an expert in your field, with so much compassion ❤️",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730626263"
      }
    ]
  },
  {
    "id": "171134d1-fc41-4a3b-9595-dd7b92863841",
    "googlePlaceId": "ChIJ7ZOXtsB1ekgRtXNyqBpFLZ8",
    "googleMapsUrl": "https://maps.google.com/?cid=11469899806780060597",
    "name": "Cannock Canine Hydrotherapy",
    "slug": "cannock-canine-hydrotherapy",
    "category": "Rehabilitation center",
    "address": "426 Pye Green Rd, Hednesford, Cannock WS12 4HS, United Kingdom",
    "city": "Cannock",
    "region": "England",
    "postcode": "WS12 4HS",
    "phone": "+44 7773 991070",
    "website": "https://www.cannockcaninehydrotherapy.com/",
    "rating": 5,
    "reviewCount": 83,
    "latitude": 52.7131563,
    "longitude": -2.0234573,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ7ZOXtsB1ekgRtXNyqBpFLZ8/image-1776467394807-5d483657.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "S R",
        "rating": 5,
        "text": "Marianne is wonderful. She is very knowledgeable, helpful and makes you feel at ease. My dog has had three surgeries on her leg this year, and I was recommended hydrotherapy to help with her recovery. I found Marianne online and got in touch and she responded to me very quickly and I was soon booked in to see her with my dog.\nSusie has been attending for about three months now and will continue to attend, as I can really see how beneficial this is for her. She doesn't love it and can be a bit of a diva, but Marianne does her best to put Susie's best paw forward and afterwards when we get home, she will get the zoomies!\nIf you are looking for a hydrotherapy service for your dog, Cannock Canine Hydrotherapy is the place to go!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764082977"
      },
      {
        "authorName": "Lucy Thornton",
        "rating": 5,
        "text": "Could not recommend enough, the difference that she has made to our dog is unbelievable! She provides the best hydrotherapy for our little dog Minnie, who has been recovering from a stroke. She had lost total use of her back leg and has since become far stronger and confident in using. Something that was really evident was Marianne’s genuine love and care for Minnie. Hence, it made the process of recovery far easier and less stressful for us and our dog! If your pet needs hydrotherapy, we highly recommend Marianne. She has changed our lives for the better. Thank you, Marianne, for your incredible work, time, dedication and care for every single dog in your care. Minnie and I are so grateful!",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748705511"
      },
      {
        "authorName": "Hannah Skidmore",
        "rating": 5,
        "text": "We have been taking our 12 year old border terrier Beck for just over a year now and Marianne is brilliant with her. You can really tell she loves the dogs. Her arthritis has improved and muscle mass since starting the hydrotherapy after an injury.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748439651"
      },
      {
        "authorName": "Rebecca Holmes",
        "rating": 5,
        "text": "We took our jack Russell to Marianne for hydrotherapy following a cruciate injury to try and avoid surgery and she has been fantastic, from the first time I rang she has been so friendly and helpful and our dog loves her and can't wait to get in the pool with her, she makes it fun for him and the improvement in him is amazing, he is so much stronger and able to enjoy walks again. I would definitely recommend her to anyone thinking of hydrotherapy for their dog, we had tried somewhere closer to home but they used a water treadmill and it didn't work for him at all so tried Marianne and he has improved every time he has been, we can't thank her enough.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748379078"
      },
      {
        "authorName": "Mat",
        "rating": 5,
        "text": "We have been taking our 2 year old rottweiler Remi for sessions with Marianne after we were auto referred to her after our pup had surgery for elbow displacia at 9 months old. She had all of our dogs vets notes and knew straight away what would be needed in Remi's recovery and future development.\n\nOver a year later we continue with swimming sessions as we know it's good for her but also because she genuinely enjoys it. We drive 45 mins and wouldn't consider going anywhere else.\n\nFrom never setting a paw in water to happily swimming for the full 30 mins it's clear to see why we were referred to cannock canine hydrotherapy. Marianne is professional, friendly and genuinely caring for the dogs she looks after.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749498771"
      }
    ]
  },
  {
    "id": "fd092535-1e01-4e69-aae0-2756fbf3b9c0",
    "googlePlaceId": "ChIJK4o2E7wcbkgR1Fs0eyx686c",
    "googleMapsUrl": "https://maps.google.com/?cid=12102150955138833364",
    "name": "Cardiff University Fitness and Conditioning Centre",
    "slug": "cardiff-university-fitness-and-conditioning-centre",
    "category": "Canine therapy centre",
    "address": "4AY, Senghennydd Rd, Cardiff, United Kingdom",
    "city": "Cardiff",
    "region": "England",
    "postcode": "",
    "phone": "+44 29 2087 0540",
    "website": "https://www.cardiff.ac.uk/sport/facilities/fitness-and-squash-centre",
    "rating": 4.3,
    "reviewCount": 34,
    "latitude": 51.4887153,
    "longitude": -3.1779706,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJK4o2E7wcbkgR1Fs0eyx686c/image-1776467425233-957eaf0a.jpg",
    "serviceTags": [
      "Mobility"
    ],
    "reviewKeywords": [
      "students",
      "equipment",
      "machine"
    ],
    "reviews": [
      {
        "authorName": "Stell",
        "rating": 5,
        "text": "Love both gyms and how many racks and weights they have. I only wish you would open up earlier (5-6am) or give 24h access. It is also a bit annoying that it closes over Christmas for weeks and all bank holidays. Working times suit students but not staff and the public!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1650208884"
      },
      {
        "authorName": "Steven Harper",
        "rating": 1,
        "text": "£25 per month for a multi site gym where the equipment is old, half of the gym in one of the buildings was closed off and not one of the gyms had the full range of equipment ie a working leg press machine in one site but not in the other one. I would have been better off joining Pure gym or Easy gym for my time in  Cardiff.  One of the worst university gyms I've ever been in",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1535813269"
      },
      {
        "authorName": "Jack Bishop",
        "rating": 5,
        "text": "THE first gym I visited when beginning my strength training journey while studying at Cardiff University. A lot of nostalgia here when coming back to Cardiff to train. Equipment is ideal for teams and students on strength-based programs, with a good amount of squat racks, plates and barbells.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1646353592"
      },
      {
        "authorName": "Sara Sable Zulú",
        "rating": 4,
        "text": "I really like it, three floors of machines of many types, maybe small building with no swimming pool and I missed an elevator for my recent knee surgery.",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1588818590"
      },
      {
        "authorName": "Samir Ullah Khan",
        "rating": 4,
        "text": "A decent gym, lack equipment for preacher curls. The ground floor tends to get cramped up and people usually hogs the equipment even when they are resting.",
        "relativePublishTimeDescription": "8 years ago",
        "publishTime": "1521379161"
      }
    ]
  },
  {
    "id": "abde0221-1353-4002-9501-f7960802071f",
    "googlePlaceId": "ChIJxV3UvbMjd0gRVt6ewHodGMM",
    "googleMapsUrl": "https://maps.google.com/?cid=14058018649891855958",
    "name": "CF Veterinary Physiotherapy",
    "slug": "cf-veterinary-physiotherapy",
    "category": "Physical therapist",
    "address": "Heyford Hills Farm, Furnace Ln, Northampton NN7 3LB, United Kingdom",
    "city": "Northampton",
    "region": "England",
    "postcode": "NN7 3LB",
    "phone": "+44 7545 498183",
    "website": "https://www.clairefvetphys.co.uk/",
    "rating": 4.9,
    "reviewCount": 20,
    "latitude": 52.2112422,
    "longitude": -1.0416379,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJxV3UvbMjd0gRVt6ewHodGMM/image-1776467444084-ab78054e.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "dog recovery",
      "laser therapy",
      "hydrotherapy",
      "dog physiotherapy",
      "attentive",
      "core strength",
      "friendly staff",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Cate Gillet",
        "rating": 5,
        "text": "When I first went with Skye  to the Physio I saw Ellie Skye is quite a nervous dog, Ellie was brilliant with her and she now absolutely loves it. She cannot wait to get in there. It’s like Something possessed. She is walking a lot better now and I am absolutely delighted with the progress she’s made, at first I was worried but then she suddenly started to get a bit better. She’s now going on  walks , just short ones but she loves it. She loves the hydrotherapy sessions",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760290490"
      },
      {
        "authorName": "Nick Chatt",
        "rating": 5,
        "text": "My dog Adur has been receiving laser therapy at the Heyford clinic following an unprovoked dog attack.\n\nElly has been wonderful and friendly and loving to our dog. 100% care and compassion.\n\nClaire has been corresponding with me and has been equally helpful.\n\nThis had aided Adur's recovery no end! So great to have a service like this on our door step.\n\nI've just read the two star review on this page, my advice, ignore it. This is a 5 star service!\n\nThanks Elly and Claire x",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770406840"
      },
      {
        "authorName": "Sophie Sparrowhawk",
        "rating": 5,
        "text": "Claire has treated my most precious pony for over a year now. She is professional and caring and super attentive! My horse has had numerous issues that Claire has resolved, aswell as aiding with my vet and providing recommendations for other professionals (saddle fitter). We have monthly sessions and she keeps my horse sound and happy! Highly recommend I wouldn’t use anyone else!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760041198"
      },
      {
        "authorName": "Carla Bowers",
        "rating": 5,
        "text": "We have claire visit our stud farm, young and older racehorses seen….her results speak for themselves, they improve instantly, look better and are so much happier once they have been treated! Rewarded by better sale results and winners on the racetrack! Highly recommended!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760027966"
      },
      {
        "authorName": "Rachel Moxon",
        "rating": 5,
        "text": "Will my lurcher has been going to CF Vet Physio for over a year now for laser and hydrotherapy. He loves it (even though he isn't a water dog) and Elly is so brilliant, friendly and knowledgeable. Will started off going once a week and now goes once every four weeks. He has built muscle, improved how he uses his core, and noticeably improved his movement, using his back legs 'properly' as his strength and muscle has increased. Elly gives us exercises to practice at home and advice anytime we need it. Would give more stars if I could!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760086256"
      }
    ]
  },
  {
    "id": "2ee66d72-dc43-4bd4-b1aa-43e2a52cf4cb",
    "googlePlaceId": "ChIJbfGk5uhRekgRgoKu7y57bAc",
    "googleMapsUrl": "https://maps.google.com/?cid=534937897270149762",
    "name": "Cheshire Canine Hydrotherapy Centre Ltd",
    "slug": "cheshire-canine-hydrotherapy-centre-ltd",
    "category": "Rehabilitation center",
    "address": "Sundown, Chelford Rd, Knutsford WA16 8TA, United Kingdom",
    "city": "Knutsford",
    "region": "England",
    "postcode": "WA16 8TA",
    "phone": "+44 1565 318639",
    "website": "https://www.cheshirecaninehydrotherapy.co.uk/",
    "rating": 4.8,
    "reviewCount": 32,
    "latitude": 53.2813593,
    "longitude": -2.315186,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJbfGk5uhRekgRgoKu7y57bAc/image-1776467386736-9abfc9b2.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Elizabeth Stanhope",
        "rating": 5,
        "text": "I highly recommend Cheshire Canine Hydrotherapy.\nThey are absolutely brilliant, very knowledgeable and so helpful.\nEmma, Daniel & Izzy have been amazing, looking after and making a fuss of Honey who is a four year old Labrador with hip problems and anxiety, but after six weeks I can’t believe the improvement in her physically and mentally. She loves going and never wants to leave.\nThank you so much and I look forward to Honeys continued care with you.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761820487"
      },
      {
        "authorName": "Olivia Antony",
        "rating": 5,
        "text": "My 6 year old Labrador has been doing the water treadmill as part of a treatment plan for a degenerative disc in her spine and hip instability. Nova is a shy character but Emma was so patient and kind with her, and now she absolutely adores her sessions and gets so excited to see Emma and get in the treadmill! I've seen such improvements in Nova's lameness and she's back to enjoying her walks. Thank you so much to Emma and the team x",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1764864160"
      },
      {
        "authorName": "Diane Mansell",
        "rating": 5,
        "text": "This is our 2nd labrador to visit here for hydrotherapy and his 2nd  run of sessions to help long term with elbow dysplasia. Paddy gets really excited about going, Daniel is very encouraging and caring with him throughout and it is a lovely environment to  visit with the owners made as welcome as the dogs! We claim through our insurance and Sam is excellent at keeping the admin uptodate with invoices etc. Our vet recommended them to us nearly ten years ago and we are SO glad he did.....\nThank you to All!\nD&P Mansell",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762337178"
      },
      {
        "authorName": "Jude Day",
        "rating": 5,
        "text": "Excellent place! All the team have been amazing in helping Freddie recover from his back injury and build him up to walking. We & Freddie cannot thank them all enough!!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760028756"
      },
      {
        "authorName": "Hil Bowen",
        "rating": 5,
        "text": "My little spaniel, Minty, has been working with the hydrotherapy unit for quite a while now. She adores all the staff, they make exercise fun for her, and they're always interested in her progress and her medical needs from session to session. I've found them to be reliable, courteous, friendly and very knowledgeable in their craft. I wouldn't hesitate to bring future pets here, whether for treatment or for fun. Thanks team!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1741372707"
      }
    ]
  },
  {
    "id": "9f41ed64-7a14-448b-813f-65f246bc14ae",
    "googlePlaceId": "manual-company-of-animals-pet-centre",
    "googleMapsUrl": null,
    "name": "Company of Animals Pet Centre",
    "slug": "company-of-animals-pet-centre",
    "category": "Rehabilitation center",
    "address": "Ruxbury Farm, St Ann's Hill Road, Chertsey KT16 9NL, United Kingdom",
    "city": "Chertsey",
    "region": "Surrey",
    "postcode": "KT16 9NL",
    "phone": "+44 1932 574300",
    "website": "https://companyofanimals.com/uk/pet-centre/hydrotherapy-and-physiotherapy/appointments-pricing/",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.3915,
    "longitude": -0.5208,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Treadmill"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "underwater treadmill"
    ],
    "reviews": []
  },
  {
    "id": "2e638db3-347f-45d5-9e98-86d513199a0e",
    "googlePlaceId": "ChIJs7vS5FDF2EcRA0aLd8NY9_Q",
    "googleMapsUrl": "https://maps.google.com/?cid=17651674861049431555",
    "name": "Completely K9 Hydrotherapy & Rehabilitation",
    "slug": "completely-k9-hydrotherapy-rehabilitation",
    "category": "Rehabilitation center",
    "address": "1, Tavistock House, Charfleets Rd, Canvey Island SS8 0PQ, United Kingdom",
    "city": "Canvey Island",
    "region": "England",
    "postcode": "SS8 0PQ",
    "phone": "+44 1268 514996",
    "website": "https://www.completelyk9.co.uk/",
    "rating": 5,
    "reviewCount": 12,
    "latitude": 51.5212749,
    "longitude": 0.5574509,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJs7vS5FDF2EcRA0aLd8NY9_Q/image-1776467461344-d8658a3e.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Michelle Perry",
        "rating": 5,
        "text": "I was advised by my vet that my English Bulldog would benefit from Hydrotherapy sessions after clicking sounds in her back leg were noticed and the subsequent possibility of her needing cruciate surgery.\n\nAfter receiving recommendations for K9 Hydrotherapy and doing my own research I booked D'Arcy in. Initially she was a bit sceptical about getting in the water, but after just a couple of sessions she now jumps out of the car and gets so excited for her swim.\n\nNow after sessions with Amber not only is the clicking noise in her back leg virtually non existing, D'Arcy has also lost weight and is noticeably fitter.\n\nAmber has been monitoring D'Arcy and her back leg, and is hugely knowledgeable. I know D'Arcy is in good hands with Amber, and the whole team.\n\nI will be continuing sessions going forwards, as not only is it great for D'Arcy's health and wellbeing, but she absolutely loves her sessions here.\n\nI would recommend K9 Hydrotherapy without hesitation.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768062381"
      },
      {
        "authorName": "Cathy Chambers",
        "rating": 5,
        "text": "Friendly, experienced staff with a wealth of knowledge. I’ve had everything from a fun swim for a young puppy to rehab work on older and ill dogs. Nothing is too much trouble and the dog’s welfare is front and centre at all times. I wouldn’t go anywhere else",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759673080"
      },
      {
        "authorName": "Lorraine Davis",
        "rating": 5,
        "text": "Never took my dogs swimming before started with 1 dog now take all 3 absolutely brilliant. they're  love it.staff are lovely very patient with my one nervous dog,great with the other 2 nutters",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1754032086"
      },
      {
        "authorName": "Denise Connelly",
        "rating": 5,
        "text": "I have been bringing my dogs here for 10 years. It's such a friendly environment and the therapists are really knowledgable.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759684840"
      },
      {
        "authorName": "Chloe Chapman",
        "rating": 5,
        "text": "I swim both my dogs here for fun swims. My eldest loves the pool and it's great exercise for him. The staff have been excellent from day one, introducing him to the pool when he wasn't used to water and now he loves it. My puppy has not long been swimming here but the confidence and progress she had shown in the water due to the encouragement from the staff is amazing. This is a fantastic way to exercise your dogs and you can even join them in the pool as I have done a few times. Highly recommend.",
        "relativePublishTimeDescription": "9 years ago",
        "publishTime": "1493066815"
      }
    ]
  },
  {
    "id": "8542fa90-f7df-476b-b131-69f1646973c2",
    "googlePlaceId": "ChIJVVUV5v0MdkgRcBBeOwEzk2c",
    "googleMapsUrl": "https://maps.google.com/?cid=7463365087867048048",
    "name": "Conditioning Your Canine",
    "slug": "conditioning-your-canine",
    "category": "Canine therapy centre",
    "address": "Unit 11, isleworth business complex, St John's Rd, Isleworth TW7 6NL, United Kingdom",
    "city": "Isleworth",
    "region": "England",
    "postcode": "TW7 6NL",
    "phone": "+44 7954 287706",
    "website": "https://conditioningyourcanine.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.4714236,
    "longitude": -0.3355929,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJVVUV5v0MdkgRcBBeOwEzk2c/image-1776467418139-71f1a03c.jpg",
    "serviceTags": [
      "Mobility"
    ],
    "reviewKeywords": [],
    "reviews": []
  },
  {
    "id": "b13aea77-0629-487f-8a54-662978de9c8b",
    "googlePlaceId": "ChIJrez40YzVcEgRfCByqW1K36Y",
    "googleMapsUrl": "https://maps.google.com/?cid=12024411364957233276",
    "name": "Cotswold Canine Rehab Group - hydrotherapy pool & underwater treadmill",
    "slug": "cotswold-canine-rehab-group-hydrotherapy-pool-underwater-treadmill",
    "category": "Rehabilitation center",
    "address": "Unit 3, Blackwell Business Park, Blackwell, Shipston-on-Stour CV36 4PE, United Kingdom",
    "city": "Shipston-on-Stour",
    "region": "England",
    "postcode": "CV36 4PE",
    "phone": "+44 7413 926127",
    "website": "https://cotswoldcaninerehabgroup.com/#contact",
    "rating": 5,
    "reviewCount": 17,
    "latitude": 52.0867545,
    "longitude": -1.6457854,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJrez40YzVcEgRfCByqW1K36Y/image-1776467437499-5ad990ce.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "red light therapy",
      "arthritic dog friendly",
      "laser therapy",
      "physiotherapy",
      "calm environment",
      "treadmill training",
      "knowledgeable staff"
    ],
    "reviews": [
      {
        "authorName": "Sarah Penny",
        "rating": 5,
        "text": "If you are looking for an well educated, knowledgeable hydrotherapist for your dog, look no further! Bex is absolutely fantastic with my 2 who aren't the easiest of clients due to reactivity but with Bex, they are calm and really well looked after. We go once a month due to my dogs wonky legs and I have seen a massive improvement in his health with hydrotherapy. She massages them which Arthur-Bear is so relaxed, he almost falls asleep and laser therapy. Highly recommend to anyone who has a dog as it's amazing for their health.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765655828"
      },
      {
        "authorName": "Lynne Tyler",
        "rating": 5,
        "text": "My two Cocker Spaniels have been attending Cotswold Canine Rehab and I can’t recommend Bex and her team highly enough. They are absolutely brilliant, and my girls have come on leaps and bounds thanks to their expertise.\nBex has been amazing with my anxious girl, introducing everything slowly and patiently until she felt comfortable enough to use the treadmill. Both dogs are doing really well and are becoming noticeably stronger and fitter. We’ve seen such positive results and I’m so grateful for the care and support they receive.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768837606"
      },
      {
        "authorName": "Natalie Fisher",
        "rating": 5,
        "text": "Archer has been going for hydrotherapy (swimming and treadmill) sessions as part of his maintenance and strength building for hip dysplasia after a not great start in life. He wasn’t initially keen on the pool but is now enjoying his treadmill sessions. Becky is knowledgeable and has a good way of building a relationship with the dogs to make them comfortable with her and in their treatment - would thoroughly recommend! Archer is looking stronger and fitter already and moving better!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762973454"
      },
      {
        "authorName": "Sue Clark",
        "rating": 5,
        "text": "Bex and her husband were wonderful with our older greyhound, Max. They were patient, kind and understanding. Max really enjoyed his sessions and his mobility has definitely improved. He’s been running like a pup again! Lovely people to both the dog and their human! Thank you for helping Maxi!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765479455"
      },
      {
        "authorName": "Sharon Stockdale",
        "rating": 5,
        "text": "Fantastic experience for a 13 week collie who needed rehab after breaking her leg. Bex was brilliant at reassuring Peggy and got her swimming happily very quickly",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765620886"
      }
    ]
  },
  {
    "id": "359b5aeb-0962-4632-a7ae-ff3838c52a58",
    "googlePlaceId": "ChIJfU6Mk74bcUgR3BXQDCIN7lw",
    "googleMapsUrl": "https://maps.google.com/?cid=6696304135841519068",
    "name": "Cotswold Vet Physio",
    "slug": "cotswold-vet-physio",
    "category": "Rehabilitation center",
    "address": "Freedom House, 2 Rutherford Way, Swindon Village, Cheltenham GL51 9TU, United Kingdom",
    "city": "Cheltenham",
    "region": "England",
    "postcode": "GL51 9TU",
    "phone": "+44 7591 712902",
    "website": "https://www.cotswoldvetphysio.co.uk/",
    "rating": 5,
    "reviewCount": 6,
    "latitude": 51.916262,
    "longitude": -2.1013901,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJfU6Mk74bcUgR3BXQDCIN7lw/image-1776467458860-cc87008f.png",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Lorraine Fulford",
        "rating": 5,
        "text": "Alia is a wonderful practitioner. Very knowledgeable, experienced and is fantastic with our dog. Lilly was diagnosed with arthritis in all joints and spine and elbow displasia at age 5. She’s 13.5 now and I put much of her longevity down to Alia’s care and can’t thank her enough.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769762968"
      },
      {
        "authorName": "B Urquhart",
        "rating": 5,
        "text": "Alia is brilliant with dogs, our 15 years old always full of energy after sessions. Molly actually looking forward to her hydrotherapy every week. Thank you❤️",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1719832150"
      },
      {
        "authorName": "Skylar",
        "rating": 5,
        "text": "Alia has been really great with our 'old man' who is an 11 year old rescue dog. He has hip issues and she works with him weekly to help build up muscle. She is really great with him and he's never once been scared even in the water treadmill. She also provides advice and a plan for us to follow at home to ensure we keep his physio up at home. Can't recommend enough!",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1668674945"
      },
      {
        "authorName": "samantha newell",
        "rating": 5,
        "text": "Alia is an absolute superstar! Our Lab x GSD has hip issues and we were referred by our vet, Dolly is so much stronger and no longer yelps jumping up on the sofa. Alias new set up in Kingsditch is super clean and modern, with parking right outside. Cant recommend her highly enough.",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1599394273"
      },
      {
        "authorName": "Karen East",
        "rating": 5,
        "text": "Alia has done wonders for our dog frankie\nUsing hydro and physio therapy would highly\nRecommend her",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1614352185"
      }
    ]
  },
  {
    "id": "85b4a25b-5ce3-481e-a3a0-47e7018d1c92",
    "googlePlaceId": "ChIJQfnMxfXrekgRfU-sdD8kwaA",
    "googleMapsUrl": "https://maps.google.com/?cid=11583579571532615549",
    "name": "Country Canines Hydrotherapy",
    "slug": "country-canines-hydrotherapy",
    "category": "Rehabilitation center",
    "address": "Nantwich Rd, Chester CH3 9JH, United Kingdom",
    "city": "Chester",
    "region": "Wales",
    "postcode": "CH3 9JH",
    "phone": "+44 1829 782627",
    "website": "https://www.cchydrotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 63,
    "latitude": 53.0830277,
    "longitude": -2.7553573,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJQfnMxfXrekgRfU-sdD8kwaA/image-1776467386754-0815e128.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Ji Siu Tai Chi Chuan",
        "rating": 5,
        "text": "Hydrotherapy has significantly helped my old collie’s quality of life. His mobility, agility and posture has improved .. less falling on the stair and more confident jumping in the car. Worthwhile investment for our best mate. Really happy with the service from Emma and team, thank you.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1755969085"
      },
      {
        "authorName": "Jade Read",
        "rating": 5,
        "text": "I cannot recommend Country Canines highly enough! Shadow started on the underwater treadmill in February due to a spinal condition & muscle wastage in his back legs. He wasn't used to water so I was a bit nervous as to how he would react but Emma makes him comfortable at every session and he doesn't seem that bothered about the water anymore. Within a few weeks, Shadow was putting on muscle and looked a lot more comfortable in his daily life. I was able to increase his walks without him being in discomfort and his stance & stride are continuing to improve. I'll continue taking him to Country Canines as long as he needs it as I can see the difference it makes. Big thank you to Emma for all her hard work and patience with Shadow as he can sometimes get distracted, she gets him back on track quite quickly.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751311745"
      },
      {
        "authorName": "Alex Smith",
        "rating": 5,
        "text": "My pup Juanita had a funny walk due to an under developed glute. Emma at Country Cannines quickly diagnosed the issues, took .measurements and began building her muscles back up. Over 10 months Juanita's walk improved. She grew in confidence when tackling obstacles in the woods, where in the past she'd ask for a lift over obstacles. Her walk has vastly improved and she put on a significant amount of muscle. She's much quicker now and can compete more easily with her bigger brother when playing fetch. I cannot fault anything about the treatment. Emma is absolutely lovely to work with and extremely caring towards her clients. Would highly recommend this service to anyone!",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758105873"
      },
      {
        "authorName": "Philip Brunt",
        "rating": 5,
        "text": "Country Canine Hydrotherapy provide an excellent service. We have been with Country Canines Hydrotherapy for some years now and they have done excellent hydrotherapy work with Freya our Golden Labrador who has had two TPLO surgeries. The follow up hydrotherapy was excellent and the staff are always friendly and knowledgeable, Sian and staff are always professional and caring. Country Canines Hydrotherapy prior to Freya's second TPLO enabled Freya to recover much faster, such that her gait and ability to move freely without pain was really good. This meant that She was well prepared for her second TPLO, so we now have a happy dog who has quite literally bounced back. Freya cannot wait for her next session. Well done,  Phil and Jane.",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1603295868"
      },
      {
        "authorName": "Michelle EWalker",
        "rating": 5,
        "text": "Our border collie boy has just completed a 10 week treadmill hydro course with Emma following a medial shoulder injury sustained last year.\n\nEmma has been absolutely fantastic with Pickle, very friendly, accommodating and extremely knowledgeable.  Her expertise shines through.  We were blown away with Pickle's progress at his 10 week measure.  We knew he was doing well but didn't expect to see such amazing results gaining 4cm on his injured shoulder and now completely balanced on all four.  A true testament to Emma's amazing work.\n\nThe agility start line creeps closer.  Emma, we can't thank you enough. 😊🐾",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749932160"
      }
    ]
  },
  {
    "id": "b63f1547-3aaa-4209-9856-3f4daa6a7b1c",
    "googlePlaceId": "ChIJVRioUaXcYEgRe_2Z7owXs94",
    "googleMapsUrl": "https://maps.google.com/?cid=16047195791317138811",
    "name": "Craniaa Neuro Rehab Centre",
    "slug": "craniaa-neuro-rehab-centre",
    "category": "Physical therapist",
    "address": "21 Newry Rd, Camlough, Newry BT35 7JP, United Kingdom",
    "city": "Newry",
    "region": "Northern Ireland",
    "postcode": "BT35 7JP",
    "phone": "+44 29 2233 8154",
    "website": "https://www.craniaaneurorehabcentre.com/",
    "rating": 5,
    "reviewCount": 21,
    "latitude": 54.1818634,
    "longitude": -6.4009713,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJVRioUaXcYEgRe_2Z7owXs94/image-1776467415399-6dbf07b8.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "injury treatment",
      "back pain treatment",
      "improved movement",
      "injection",
      "knee pain",
      "lower back pain relief",
      "gentle",
      "kindness"
    ],
    "reviews": [
      {
        "authorName": "pfmcmullan84",
        "rating": 5,
        "text": "Goshi and His wife provided exceptional support for our son, who had spent 4 months seriously ill in the hospital after he was born. The physiotherapy he received contributed massively to his recovery. He was walking at 10 Months old, which is remarkable given the length of time he was in the hospital. Goshi advised us our son would be walking before he was 1, we couldnt belive it when he did so early.  Appreciate every case is differnt but we cannot recommend them both enough, our sincere thanks to you both.  P & L McMullan",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769772386"
      },
      {
        "authorName": "Christopher Smith",
        "rating": 5,
        "text": "I have had lower back pain a long time and have been to see a lot of people to get some relief.  I then heard of Crania and made an appointment.  After 4 sessions the nerve pain and inflammation is gone. Cannot speak highly enough of Dr Goshi and his wife Ramia. Two lovely and talented people.  Highly recommend to anyone suffering with back pain.  Plus took my son who has autism to see Dr Goshi and through treatment helped him with his speech and movement.  Honestly,  cannot thank them enough.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1709131673"
      },
      {
        "authorName": "aisling m",
        "rating": 5,
        "text": "I can only rate dr Goshi so highly for his kindness and care towards patients he went above and beyond with treatment and care while suffering 3 buldging discs and pain was so serve I couldn’t walk he rang me to see how I was he was able to give me inthrathecal injection which helped he organised scans and his kindness and care through the pain I was suffering was outstanding he is such a lovely man and his wife they helped me so much throughout the recovery I have honestly never been  to a better man he went above and beyond for me and I am almost pain free thanks to this man! He is honestly amazing 🤩",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1739223965"
      },
      {
        "authorName": "Deri Lewis",
        "rating": 5,
        "text": "We have been coming here for about two years. We come because they do Neuro physiotherapy and all the tequniques my son needs but the NHS won't do because of the time it would take each session.   Coming to Craniaa has meant my son's muscles and mobility did not deterate before major surgery as predicted but also actively improved in some area's. Now post surgery Remya and  Dr Goshi are again helping us to reach his full potential with sessions at their practice and showing us tequniques we can do at home to.\nWe feel so lucky to be able to attend Craniaa and the continuing care and support we receive from them all.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1712418357"
      },
      {
        "authorName": "Damian Rice",
        "rating": 5,
        "text": "Oh my goodness I wish I could put into words the pain relief Dr Goshi has given me in my knees. I've spent years with pain in both knees had been given lots of different medical diagnosis but never any relief from the symptoms. Last night I walked through the fields for the first time in I can't remember with no pain in my knees been told I've no need for operation which in the past I had been told was a must to get any relief. The kindest most intelligent gentle man I've had the pleasure of meeting in a long time I just wish I knew of him 20 years ago. Highly recommended a call for anyone and everyone. Go and meet someone who genuinely knows what they're talking about and genuinely wants to help.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1656801451"
      }
    ]
  },
  {
    "id": "3c2e98f0-6f57-408e-ba0c-03a569609576",
    "googlePlaceId": "ChIJHXXqceYXbEgRDhpXNUGd0R4",
    "googleMapsUrl": "https://maps.google.com/?cid=2220728994663701006",
    "name": "Devon Dog Pool",
    "slug": "devon-dog-pool",
    "category": "Swimming facility",
    "address": "Caddsdown Industrial Estate, 6 Pine close, Bideford EX39 3SG, United Kingdom",
    "city": "Bideford",
    "region": "England",
    "postcode": "EX39 3SG",
    "phone": null,
    "website": "https://www.devondogpool.com/",
    "rating": 5,
    "reviewCount": 23,
    "latitude": 51.0080169,
    "longitude": -4.2279281,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJHXXqceYXbEgRDhpXNUGd0R4/image-1776467467237-70fdf627.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog pool",
      "dog confidence building",
      "helpful staff",
      "anxious dog",
      "safe environment",
      "dog toys",
      "confidence boost",
      "photos and videos"
    ],
    "reviews": [
      {
        "authorName": "Edward Scott-Finnigan",
        "rating": 5,
        "text": "What a wonderful discovery - we drove up from Exeter, and had the best 30 minutes ever! Jac was so welcoming and made both our nervous pooches feel at ease. Plenty of parking available - and such a nice atmosphere once inside. Can’t recommend more highly, whatever your pooches level of swimming this is a must visit - oh and the water‘s lovely and warm! See you lovely folks again next month!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760874171"
      },
      {
        "authorName": "Tubby Bozzer",
        "rating": 5,
        "text": "Friendly lovely staff member running the dog pool today who was great with the dogs. The two labs had a fantastic time and loved all the toys. Gave them a good workout to get rid of their energy when the weather outside is awful.  It’s a great facility",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770398360"
      },
      {
        "authorName": "Michelle Watson",
        "rating": 5,
        "text": "This place is absolutely amazing i certainly highly recommend we are on holiday here and I’ve booked as many as we could fit in . The dogs absolutely loved it and soon has we turned onto the estate they started with excitement. The staff are incredible lovely and knowledgeable and took lots of photos and videos for us has we wanted to be in with them. Thank you guys 🫶🏼 until we return",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756302322"
      },
      {
        "authorName": "Tami Norris",
        "rating": 5,
        "text": "Casey our 4 month old puppy loved his session in the pool so much we booked again for the following week. Jackie was amazing with him , Casey has a new best friend 🥰, she was so positive and encouraging. I would definitely recommend a session at Devon Dog Pool. Heather took much better photos and videos than I managed to get .",
        "relativePublishTimeDescription": "12 months ago",
        "publishTime": "1746174592"
      },
      {
        "authorName": "Glenn Perry",
        "rating": 5,
        "text": "First visit to the pool today and the 3 pups had a whale of a time - their first time swimming.\nDefinitely recommended - we'll be back !\nVery friendly, clean & safe environment, and it was great to get in the pool with the pups.\nHeather was fantastic with the 3 pups and all 3 ended up swimming happily. Siri, in particular, was very confident and Heather took some great photos & videos - great memories 😃\nLoved it !",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756311169"
      }
    ]
  },
  {
    "id": "999c7b22-abf1-4b16-aca5-b7635875b7bf",
    "googlePlaceId": "ChIJZ5x0kARudkgRA2X2oXlEdWs",
    "googleMapsUrl": "https://maps.google.com/?cid=7743170423532446979",
    "name": "Dipping Dogs",
    "slug": "dipping-dogs",
    "category": "Hydrotherapy center",
    "address": "Tomo Industrial Estate, Cowley, Uxbridge UB8 2JP, United Kingdom",
    "city": "Uxbridge",
    "region": "England",
    "postcode": "UB8 2JP",
    "phone": "+44 1895 446406",
    "website": "https://www.dippingdogs.co.uk/",
    "rating": 4.7,
    "reviewCount": 95,
    "latitude": 51.5199509,
    "longitude": -0.4807505,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJZ5x0kARudkgRA2X2oXlEdWs/image-1776467454166-fd243120.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "dog swimming",
      "dog dipping",
      "friendly staff",
      "swim session",
      "confidence building",
      "dog pool",
      "passionate staff"
    ],
    "reviews": [
      {
        "authorName": "Priya S",
        "rating": 5,
        "text": "We’ve had a wonderful experience with the lovely Caitlin who was very kind and helpful. Our dog had a great time. She’s an asset to the Dipping Dogs team.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769532608"
      },
      {
        "authorName": "Zhen May Cheung",
        "rating": 5,
        "text": "We started taking my dog Tula to dipping dogs after things started reopening after lockdown. Compared to the previous hydrotherapy centre that we had taken Tula for 10+ years, I can hand on heart say dipping dogs is far superior. The quality of service received, personal touch from the staff, the ability to swim with your own dog and reasonable price (to have the pool all to yourself during each session is amazing, the previous centre we took Tula to you could be sharing with up to 3 other dogs per session). Wish we would have known about dipping dogs when Tula was first diagnosed with hip dysplasia. Since Tula passed I’ve been back to dipping dogs with my boyfriends 13 year old beagle, Henry and I’ve noticed they’ve put up something to remember all the dogs that are no longer with us. Such a touching and thoughtful gesture. Thank you ♥️",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1679905409"
      },
      {
        "authorName": "jonathan aloia",
        "rating": 5,
        "text": "We love dipping dogs! The staff are friendly and knowledgable and our dog has a great time. He gets so excited and can’t wait to get in the pool.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1689851727"
      },
      {
        "authorName": "Kimberly Bayliss",
        "rating": 5,
        "text": "We absolutely loved Dipping Dogs! Our dog wouldn't stop wagging his tail the whole time we were there. We booked an hour 'fun swim' (without a hydrotherapist) where we got to swim with our pup and it was a dream come true. Our 3-year-old beagle, Dunder, loves the water and we cannot keep him out of ponds, etc., so thought he would love a proper swim and he did! It took him a bit of getting used to, but the lovely staff at Dipping Dogs showed us just how to get him used to the water and, within 5 minutes, he was jumping in on his own, having a blast. We will definitely be regulars here! The sheer joy on his little face swimming and retrieving toys from the water is worth every penny (which, by the way, we found to be extremely reasonable). After our swim, the lovely staff gave Dunder a quick shower and dried him off for us. It was the most wonderful service and just so perfectly laid out. Thank you for an amazing day and see you soon!",
        "relativePublishTimeDescription": "8 years ago",
        "publishTime": "1525003253"
      },
      {
        "authorName": "Sandy C",
        "rating": 5,
        "text": "My Rottweiler Aurora absolutely LOVES her swims with Sim! She has really helped build my dog’s confidence getting in the pool and after a few sessions she is always excited to get in the pool. Sim is very knowledgable and has given me some good recommendations for my dog which have been very useful for me. From conversations, I can tell she is extremely passionate about her job and hydrotherapy! Lovely place, would definitely recommend :)",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1715236933"
      }
    ]
  },
  {
    "id": "60d55245-ec03-44a2-a118-c5ca099cbdb5",
    "googlePlaceId": "ChIJi97Bju5z30cRGNK4YjDVS7M",
    "googleMapsUrl": "https://maps.google.com/?cid=12919654359833825816",
    "name": "Dog Splash",
    "slug": "dog-splash",
    "category": "Indoor swimming pool",
    "address": "Eastbourne Rd, Westham, Pevensey BN24 5NJ, United Kingdom",
    "city": "Pevensey",
    "region": "England",
    "postcode": "BN24 5NJ",
    "phone": "+44 7713 580207",
    "website": "https://dogsplash.co.uk/",
    "rating": 4.9,
    "reviewCount": 76,
    "latitude": 50.810657,
    "longitude": 0.3236065,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJi97Bju5z30cRGNK4YjDVS7M/image-1776467455616-44461058.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "swimming for dogs",
      "dog experience",
      "welcoming atmosphere",
      "dog toys",
      "warm pool",
      "pool cleanliness",
      "pool size",
      "life jackets"
    ],
    "reviews": [
      {
        "authorName": "Millie Crosby",
        "rating": 5,
        "text": "Our dogs absolutely love coming to Dog Splash! We have 2 Rottweilers, our girl loves to dive and bomb into the pool, whilst our boy will often lifeguard and occasionally get in. Regardless, he loves to watch his sister have fun! Today we used their DIY Grooming Station and wow what a great idea! For those who don’t want to take their dogs to a groomer, this is a brilliant way to give your pooches a pamper whilst they feel safe and comfortable. There is a grooming bath and table, shampoo, dryers, brushes and dog friendly colognes all to use for a great price. Thank you Lindsey we will be back again soon! 🥰",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770490102"
      },
      {
        "authorName": "Michael Pini",
        "rating": 5,
        "text": "Amazing place to go and watch your doggies enjoy swimming in a heated pool. I have been taking my border collie cross every week for the past 6 months and he absolutely loves it!! We recently rescued a 9 month old border collie who now also now loves it!! ❤️ big thanks to Lindsey who makes the dogs feel so safe and secure in such a friendly environment. Look forward to this every week 😊 xx",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769608664"
      },
      {
        "authorName": "Jane Gray",
        "rating": 5,
        "text": "We were made to feel very welcome. The place is secure and the water was lovely and warm. There were lots of toys to throw into the water. We were also able to go into the changing room together which was roomy. There was a doggy hairdrayer but my dog didnt like it.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771000451"
      },
      {
        "authorName": "Leanne Atkins",
        "rating": 5,
        "text": "My elderly arthritic dog absolutely loves swimming and this pool is perfect for him. It's the best form of exercise for his joints and on just his second visit he started barking excitedly when we parked because he knew where we were! Great pool and assistance for him. Big selection of toys which he loves swimming after and brilliant changing facilities for both dogs and owners.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769168613"
      },
      {
        "authorName": "Dan Grover",
        "rating": 5,
        "text": "The new pool and ramp is awesome! My dog was quite happy playing on the ramp but a bit unsure about swimming, luckily there's a changing room so it was simple to get in with him! He did get a good few laps in after warming up to it, feeling more confident with me right there. Excellent selection of dog toys available and although we didn't use any, saw a good variety of dog life jackets available for use.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1736270174"
      }
    ]
  },
  {
    "id": "e0a2236b-3bf5-4067-a0bf-c991e7090f97",
    "googlePlaceId": "ChIJS5ja1k7ZdUgRVjQMx5MDYBg",
    "googleMapsUrl": "https://maps.google.com/?cid=1756407787909035094",
    "name": "Doggie Dips",
    "slug": "doggie-dips",
    "category": "Indoor swimming pool",
    "address": "Valentines Farm, Ripley, Woking GU23 6NE, United Kingdom",
    "city": "Woking",
    "region": "Scotland",
    "postcode": "GU23 6NE",
    "phone": "+44 7553 365250",
    "website": "https://doggiedips.co.uk/",
    "rating": 5,
    "reviewCount": 571,
    "latitude": 51.2964534,
    "longitude": -0.4874106,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJS5ja1k7ZdUgRVjQMx5MDYBg/image-1776467465256-ea14a506.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "confidence building",
      "doggy dips",
      "warm pool",
      "welcoming staff",
      "30 minute sessions",
      "life jackets",
      "safe environment"
    ],
    "reviews": [
      {
        "authorName": "Ariana Politi",
        "rating": 5,
        "text": "Had the best time at Doggie Dips! Took my 7 year old German Shepherd with some back leg problems as swimming helps relieve some pain, and he adored it! There were so many toys to choose from and the facilities were very clean and well looked after. Stefan was also very attentive and a big help - will definitely be back!!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768648885"
      },
      {
        "authorName": "lexy",
        "rating": 5,
        "text": "we have been 4 times now and the people who run it are so lovely and the place is super clean. My dogs have a blast every time and are always so excited to go for a swim! I took our puppy so he could learn to swim and he's such a confident swimmer now and loves every second of it. The pool is heated so it perfect to get in with them. Couldn't recommend it more",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762293469"
      },
      {
        "authorName": "Ruth Quinn",
        "rating": 5,
        "text": "I took my young weimaraner to Doggie Dips after she’d had a frightening experience of falling into a river, and showing no signs of any natural instinct to swim… I wanted her to learn to be safe in the water, but also ideally to learn to enjoy it. Our first session at Doggie Dips with Stefan was excellent.  Having been nervous and very unsure, my pup ended up making great progress and feeling decidedly pleased with herself. Stefan was absolutely incredible with her - instilling confidence, making it fun, and constantly checking she was ok. Thank you Stefan and Doggie Dips for such a wonderful introduction to water.  We will definitely be regularly visitors now 😃",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1764842783"
      },
      {
        "authorName": "Sally Witney",
        "rating": 5,
        "text": "Absolutely fantastic! It was our first time doing something like this with our dogs and we walked away really happy and impressed.\n\nStefan was so welcoming and took the time to make sure both our dogs were comfortable. One of our dogs was quite nervous but we had lots of help and Stefan's great advice to make sure things went smoothly. We will definitely be booking again!!\n\nThe facility is easy to find, has great parking and was clean and organised. Nice and isolated as well so great for those of us with nervous or reactive dogs :)",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761051842"
      },
      {
        "authorName": "H H",
        "rating": 5,
        "text": "We took our 10 month old puppy today and he had the best time! The guy was so helpful in guiding us how to introduce our boy to the water and the life jacket meant he could be confident in the water and enjoy the experience. The facilities are really good with clean changing rooms and plenty of toys for big and small dogs. The pool was also really warm which was a bonus for my partner who usually refuses to swim as he hates the cold! 😂\n\nWe will definitely be back and would recommend to anyone with a dog, big or small!",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758989546"
      }
    ]
  },
  {
    "id": "f687b29f-3c43-4967-a891-e9ef03b28311",
    "googlePlaceId": "ChIJOw7EcR8pe0gRlBg4s66Apmg",
    "googleMapsUrl": "https://maps.google.com/?cid=7540856113897937044",
    "name": "Doggy Paddle",
    "slug": "doggy-paddle",
    "category": "Swimming pool",
    "address": "12 Carrock Rd, Bromborough, Wirral CH62 3RA, United Kingdom",
    "city": "Wirral",
    "region": "England",
    "postcode": "CH62 3RA",
    "phone": "+44 7988 624189",
    "website": "https://www.doggypaddlewirral.co.uk/",
    "rating": 4.9,
    "reviewCount": 112,
    "latitude": 53.3391689,
    "longitude": -2.9728102,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJOw7EcR8pe0gRlBg4s66Apmg/image-1776467452896-8a188d99.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "dog swimming lessons",
      "confidence building",
      "dog training",
      "dog comfort",
      "back leg therapy",
      "warm pool",
      "gentle staff"
    ],
    "reviews": [
      {
        "authorName": "Nicole Coventry",
        "rating": 5,
        "text": "Went for my dogs first ever swim today. He is an old dog so we wanted something good for his joints. Mike was super helpful and friendly, showing us how to help the dog feel comfortable and confident! Jet was unsure at first but after encouragement, ended up enjoying the session a lot. We will definitely rebook him in!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769018810"
      },
      {
        "authorName": "Beryl Williams",
        "rating": 5,
        "text": "Marcel my 10 year old cross Staffie just loves this place and Mike. He absolutely loves swimming in the sea but can be very apprehensive with anything new. it took about 20 seconds for him to realise it was fun and not scary, thanks to Mike. Marcel has OA in his elbows and these sessions are really helping 🙏👍😊 bx 🎅🎄🐝",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765840849"
      },
      {
        "authorName": "Vicky Griffiths",
        "rating": 5,
        "text": "A truly amazing place and Mike is brilliant! My golden retriever was nervous of the water and never swam before. After great encouragement and advice from Mike, he was off! Didn’t want to leave in the end. Can’t wait for the next session. Thoroughly recommend!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749295334"
      },
      {
        "authorName": "Ally C",
        "rating": 5,
        "text": "A great place to take your dog(s). My spaniel absolutely loves his sessions and I know, due to Mikes knowledge and experience he’s totally safe. It’s great exercise now he’s getting a bit older and tires him out for the rest of the day. Would definitely recommend Doggy Paddle 100%.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1737322746"
      },
      {
        "authorName": "Larisa Atkin",
        "rating": 5,
        "text": "Sully went for his first swimming lesson and it was amazing! The setup is great and both us and Sully were made to feel extremely comfortable. Sully absolutely loved his swim and we were so proud. They gave him so much encouragement but it was clear his safety was of the utmost importance. Would 100% recommend and we will absolutely be booking another swim soon.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1737314703"
      }
    ]
  },
  {
    "id": "0f85e41a-f7cb-48fd-b9db-ff9ef142f819",
    "googlePlaceId": "ChIJG2VCMqtFckgRaRi5HberRTE",
    "googleMapsUrl": "https://maps.google.com/?cid=3550432684217538665",
    "name": "DSVP Veterinary Rehabilitation & Hydrotherapy Centre",
    "slug": "dsvp-veterinary-rehabilitation-hydrotherapy-centre",
    "category": "Rehabilitation center",
    "address": "Tiley Knap, Sherborne DT9 5QW, United Kingdom",
    "city": "Sherborne",
    "region": "England",
    "postcode": "DT9 5QW",
    "phone": "+44 7867 483834",
    "website": "https://www.dsvp-rehab.co.uk/",
    "rating": 5,
    "reviewCount": 6,
    "latitude": 50.8602363,
    "longitude": -2.4667255,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJG2VCMqtFckgRaRi5HberRTE/image-1776467438745-3f07d41e.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Liv",
        "rating": 5,
        "text": "Super kind/knowledgeable.\nTakes her time and my mare loves her. I won’t trust anyone else with my girl. Rosin has helped her so much over the last few years with her sore back.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769198987"
      },
      {
        "authorName": "Emily Goddard",
        "rating": 5,
        "text": "Roisin is professional, knowledgable, and generous in her work. My spaniel is definitely feeling better and is competing better since seeing Roisin and doing the prescribed exercises at home. Thank you!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769187062"
      },
      {
        "authorName": "Ella Coleman",
        "rating": 5,
        "text": "Incredibly knowledgeable, professional and compassionate team! Wouldn’t use anyone else! 10/10 time and time again!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769187768"
      },
      {
        "authorName": "Lucy Hill",
        "rating": 5,
        "text": "Saw Ellen with my black lab - Very professional and really good with the dog! Highly recommend",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754416787"
      },
      {
        "authorName": "Gill Corcoran",
        "rating": 5,
        "text": "We have just had our first visit with our spocker honey. There was a lovely welcome, honey was very happy from start to finish. Next trip Monday, thank you",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1709822449"
      }
    ]
  },
  {
    "id": "62e81e40-faea-49fc-9938-1c3e367c7c8e",
    "googlePlaceId": "manual-ease-in-motion-canine-rehabilitation",
    "googleMapsUrl": null,
    "name": "Ease In Motion Canine Rehabilitation and Hydrotherapy",
    "slug": "ease-in-motion-canine-rehabilitation",
    "category": "Rehabilitation center",
    "address": "Broadway Vets, 1 The Broadway, Herne Bay CT6 8SR, United Kingdom",
    "city": "Herne Bay",
    "region": "Kent",
    "postcode": "CT6 8SR",
    "phone": "+44 7854 085263",
    "website": "https://www.easeinmotion.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.3708,
    "longitude": 1.1271,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Treadmill"
    ],
    "reviewKeywords": [
      "canine rehabilitation",
      "hydrotherapy",
      "physiotherapy"
    ],
    "reviews": []
  },
  {
    "id": "af011cca-6887-4db6-ad72-8eb3cfde0c94",
    "googlePlaceId": "ChIJYZtSpWnd2EcR8kM3q9xu7To",
    "googleMapsUrl": "https://maps.google.com/?cid=4246171917724632050",
    "name": "Essex Canine Hydrotherapy",
    "slug": "essex-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "2 Raymonds, London Rd, Wickford SS11 8UA, United Kingdom",
    "city": "Wickford",
    "region": "England",
    "postcode": "SS11 8UA",
    "phone": "+44 7497 827889",
    "website": "https://www.essex-canine-hydrotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 32,
    "latitude": 51.5998804,
    "longitude": 0.5692993,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJYZtSpWnd2EcR8kM3q9xu7To/image-1776467382132-8bb2cbe4.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "dog care",
      "caring staff",
      "friendly staff",
      "team",
      "leg",
      "swimming",
      "pool"
    ],
    "reviews": [
      {
        "authorName": "Rebecca Lee",
        "rating": 5,
        "text": "Our senior rescue lost his leg 9 years ago (to chemical burns before rescue) understandably he's nervous with other people. The staff are so lovely and gentle with him.\nFrom the first session his need for pain killers was greatly reduced. He is more mobile and less stiff after his sessions (and he always smells lovely afterwards!)",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768667148"
      },
      {
        "authorName": "Dorothy Daly",
        "rating": 5,
        "text": "My lab has been going for a while now, Mia absolutely loves it, looks forward to going mention swimming,  her ears pop up..staff are really lovely and friendly, and  will give advice if you need it. Feel like one of the family now .\nThank you Essex Canine Hydrotherapy for taking such good care of my dogs, I know they are in good hands x",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729251729"
      },
      {
        "authorName": "Kayleigh Daniels",
        "rating": 5,
        "text": "I've been taking my Sussex Spaniel twice a month for 6 months. I've noticed a big difference in the way he swims as well as the confidence he has in the water. The ladies are all so friendly & helpful. Highly recommended.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1670798272"
      },
      {
        "authorName": "Tracy Lang",
        "rating": 5,
        "text": "My dog has a luxating patella and it has definitely helped having hydrotherapy. The ladies here are lovely and really care about the dogs. Highly recommend.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751395686"
      },
      {
        "authorName": "Julie Fitzpatrick",
        "rating": 5,
        "text": "To Kelly, Gina and the team. Andy and I would like to thank you all so much for looking after Luther. Sadly Luther passed over to the rainbow bridge on 7th May 2023.\n\nHe really suffered with his back legs but we know that having the regular hydro sessions extended his life as he stayed stronger for longer.\n\nThank you all for being so caring and professional. We know you will all have a special place in your heart for Luther too.\n\nThank you xxxx",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1684166693"
      }
    ]
  },
  {
    "id": "31edf7e3-7835-4b03-acef-698376878b24",
    "googlePlaceId": "ChIJ-xPy4_0ZdkgRV5nI1XXrevA",
    "googleMapsUrl": "https://maps.google.com/?cid=17328421407591799127",
    "name": "Fields Veterinary Physiotherapy",
    "slug": "fields-veterinary-physiotherapy",
    "category": "Physiotherapist",
    "address": "12 Slades Gardens, Enfield EN2 7DR, United Kingdom",
    "city": "Enfield",
    "region": "England",
    "postcode": "EN2 7DR",
    "phone": "+44 7762 964283",
    "website": "https://www.fieldsveterinaryphysiotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 2,
    "latitude": 51.6561579,
    "longitude": -0.1058736,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ-xPy4_0ZdkgRV5nI1XXrevA/image-1776467448835-e4840eab.jpg",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "James Rice",
        "rating": 5,
        "text": "Ellen has helped my 15 year old springer spaniel with arthritis. We've noticed she's a lot more comfortable since starting physio. Couldn't be happier with her service, highly recommend!",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756224834"
      },
      {
        "authorName": "Shannen Blackall",
        "rating": 5,
        "text": "Very friendly, knowledgeable, professional lady who treated my horse with nothing but kindness and compassion. My horse feels incredible after her treatment, using many therapies to get the best outcome",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756237793"
      }
    ]
  },
  {
    "id": "c366bbfa-9491-4f76-a80c-8b87c9e93b63",
    "googlePlaceId": "ChIJczW-pOfRdUgRaX_s1wCsNUQ",
    "googleMapsUrl": "https://maps.google.com/?cid=4915023687967342441",
    "name": "Fitzpatrick Referrals",
    "slug": "fitzpatrick-referrals",
    "category": "Rehabilitation center",
    "address": "Halfway Ln, Eashing, Godalming GU7 2QQ, United Kingdom",
    "city": "Godalming",
    "region": "England",
    "postcode": "GU7 2QQ",
    "phone": "+44 1483 423761",
    "website": "https://www.fitzpatrickreferrals.co.uk/",
    "rating": 4.8,
    "reviewCount": 953,
    "latitude": 51.1860198,
    "longitude": -0.6324731,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJczW-pOfRdUgRaX_s1wCsNUQ/image-1776467425195-a367b3e2.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "mri scan",
      "spinal surgery",
      "cruciate ligament surgery",
      "hip replacement",
      "neurologist",
      "hydrotherapy",
      "physiotherapy",
      "pin removal"
    ],
    "reviews": [
      {
        "authorName": "The Londoner Collies",
        "rating": 5,
        "text": "I’ve been through more surgeries than most dogs dream of biscuits, and each time, the amazing team at Fitzpatrick Referrals have given me not only a second chance, but also dignity, kindness, and a whole lot of love (and the occasional snack).\nFrom Professor Noël Fitzpatrick ,who somehow always found time to check on me, even late at night , to every nurse, physio and receptionist who treated me like I mattered, they’ve all been part of my journey.\n\nEven when things didn’t go perfectly, my mum and I always felt that I was in hands that cared as much about how I lived as how long I lived. That’s a rare kind of magic.\n\nNow, 16 weeks post-surgery, I’m back doing my physio and trying to remember how to use that leg properly. It’s a long road, but one filled with hope and that hope started at Fitzpatrick Referrals.\n\nIf you’re a worried parent wondering whether there’s still light after heartbreak, I can tell you: there is.\nSometimes it even comes with a wagging tail. 🐾💙\n\nWith love,\nHermes and his deeply grateful mummy",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762366308"
      },
      {
        "authorName": "Eva Law",
        "rating": 5,
        "text": "Ended up at Fitzpatrick’s as an urgent referral for IVDD treatment for our 6 year old dachshund Reggie who underwent spinal surgery. Every aspect of the whole treatment journey has been 5*- from initial diagnosis to surgery, physio, hydrotherapy, reception team-every member of staff has been so lovely and professional and we were kept well informed at all times. I knew Reggie was in best hands and received the best treatment possible. We are now 7 weeks post surgery and he’s making a good progress. Still a way to go but I’m sure Reggie will make a full recovery. Thank you from the bottom of my heart :)",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762642311"
      },
      {
        "authorName": "Kelly Rothwell",
        "rating": 5,
        "text": "Following an open fracture and other complications following his injury (ulcerated eyes) Fitzpatricks treated my cat Tinker with the most exceptional level of care and attention. Surgical expertise, attentive and responsive care 24/7, and step by step management and support of his rehabilitation turned this devastating injury into a full recovery and he’s now running, jumping and playing again like nothing happened. Noel has created a fantastic practice and his whole team are outstanding.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768035818"
      },
      {
        "authorName": "Carl Madgwick",
        "rating": 5,
        "text": "Thank you so much, your passion for animals is purely magical. And ore inspiring to anyone who wants to join the field. Nadia and the team who looked after our Prince and helped give him a lovely time. Enough to bring out even more of his love and charm than he had before. 🥰",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763916242"
      },
      {
        "authorName": "Amy Smith",
        "rating": 5,
        "text": "We have 'unfortunately' been referred here twice for our British Bulldog.\nI say unfortunately as the circumstances have been stressful, but every member of staff here are amazing.\nThey are all experts in their fields. So knowledgeable.\n\nHe had septic arthritis at 8 weeks old. He stayed with them for a week and they managed to save him from the brink of death. And then again just recently for IVDD which needed spinal surgery.\n\nThe aftercare is excellent too. We've felt really supported through our dogs recovery.\n\nMoose is scared of the vets, but strangely he's happy here!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761596745"
      }
    ]
  },
  {
    "id": "a31375cb-3d35-4f2b-bea7-b35042c79f4b",
    "googlePlaceId": "ChIJQ0o5-LYRcUgR6_yBOMO8CAA",
    "googleMapsUrl": "https://maps.google.com/?cid=2459346466372843",
    "name": "Five Valleys Canine Hydrotherapy",
    "slug": "five-valleys-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Henley Farm Cottage, Miserden, Stroud GL6 7HZ, United Kingdom",
    "city": "Stroud",
    "region": "England",
    "postcode": "GL6 7HZ",
    "phone": "+44 1452 290092",
    "website": "https://www.fvchc.co.uk/",
    "rating": 5,
    "reviewCount": 55,
    "latitude": 51.7845878,
    "longitude": -2.0993757,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJQ0o5-LYRcUgR6_yBOMO8CAA/image-1776467388207-0bda1f62.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "full hip replacement",
      "dog grooming",
      "good with dogs",
      "knowledgeable staff",
      "dog swimming",
      "caring staff",
      "patient staff"
    ],
    "reviews": [
      {
        "authorName": "Shazzy MN",
        "rating": 5,
        "text": "My Collie started going here following cruciate surgery and she really loves it. The ladies there are all lovely & share helpful information. There is parking available & I would recommend it",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1624638894"
      },
      {
        "authorName": "Pierre Needham",
        "rating": 5,
        "text": "I recommend 5 Valleys to anyone who's dog requires hydrotherapy: Patient, caring and very knowledgeable.\n\nThere's a nice internal ramp for dogs, who like ours, isn't a natural swimmer and needs a breather between laps!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1643883740"
      },
      {
        "authorName": "Rosie Lane",
        "rating": 5,
        "text": "We swim 3 dogs regularly it really helps keep Patch and Sprocket in shape both have hip dysplasia. Meg the collie comes for fun. Recently my cat Topsey has been swimming to help build muscle back up following full hip replacement. I can’t speak highly enough of the facility or customer care and would highly recommend to everyone",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1668611021"
      },
      {
        "authorName": "Alice Kennedy",
        "rating": 5,
        "text": "Came here after seeing good reviews after my previous hydrotherapy place shut down. (For reference- we go for treatment of a 10yo arthritic, sassy border collie). Staff were super friendly, knowledgeable and very, very good with the dog. I've booked in more very reasonably priced sessions.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1638303592"
      },
      {
        "authorName": "Steven Edwards",
        "rating": 5,
        "text": "Incredibly kind and patient with out beautiful 9 year old Great Dane. Highly recommended!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761037298"
      }
    ]
  },
  {
    "id": "c6372aab-27ce-4879-8339-3b94ea8537a8",
    "googlePlaceId": "ChIJBaCZirfRWIoRS4iswtqnl8s",
    "googleMapsUrl": "https://maps.google.com/?cid=14670378869193476171",
    "name": "Fleetfoot Animal Physiotherapy",
    "slug": "fleetfoot-animal-physiotherapy",
    "category": "Physical therapy clinic",
    "address": "Lettertreane, Letterbarra, Co. Donegal, F94 T922, Ireland",
    "city": "Letterbarra",
    "region": "Co. Donegal",
    "postcode": "F94 T922",
    "phone": "+353 83 887 6381",
    "website": "https://fleetfootanimalphysio.com/",
    "rating": 5,
    "reviewCount": 2,
    "latitude": 54.7015228,
    "longitude": -8.1793984,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJBaCZirfRWIoRS4iswtqnl8s/image-1776467421089-21a2ab13.jpg",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "animal physiotherapy",
      "surgeries",
      "treatment",
      "dog"
    ],
    "reviews": [
      {
        "authorName": "Selina Russell",
        "rating": 5,
        "text": "Highly recommend Fleetfoot Animal Physiotherapy.  Ellie (our dog) loves her physio sessions and is always happy to see Caoimhe.  Ellie has had two cruciate surgeries and suffers badly from arthritis, but thanks to Caoimhe, Ellie still on her feet and comfortable. We really appreciate the excellent care and treatment Ellie receives from Fleetfoot Animal Physiotherapy. x Thank you",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1741470051"
      },
      {
        "authorName": "Jonathan Patterson",
        "rating": 5,
        "text": "Excellent service provided by Caoimhe at Fleetfoot Animal Physiotherapy.  My dog has had multiple surgeries and problems with joint pain.  Thanks to Caoimhe's  treatment , care and advice my black lab continues to do well and I know how to.help manage her condition",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1741471088"
      }
    ]
  },
  {
    "id": "03423a19-9018-4e26-8737-43e9b8773f20",
    "googlePlaceId": "ChIJzRwmFaMddkgR2Mrde-Q79AA",
    "googleMapsUrl": "https://maps.google.com/?cid=68745746834115288",
    "name": "FlowMotion Canine Hydrotherapy",
    "slug": "flowmotion-canine-hydrotherapy",
    "category": "Animal hospital",
    "address": "7, Bow Business Centre, Bow Triangle Business Centre, Eleanor St, London E3 4UR, United Kingdom",
    "city": "London",
    "region": "England",
    "postcode": "E3 4UR",
    "phone": "+44 20 3576 0317",
    "website": "https://www.flowmotion.uk/",
    "rating": 4.9,
    "reviewCount": 32,
    "latitude": 51.5251157,
    "longitude": -0.0225485,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJzRwmFaMddkgR2Mrde-Q79AA/image-1776467390032-5ef46930.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "hip dysplasia",
      "knowledgeable team",
      "calm vibe",
      "dachshund",
      "tailored sessions",
      "calm staff"
    ],
    "reviews": [
      {
        "authorName": "Lori Wilson",
        "rating": 5,
        "text": "My dog has never been a fan of water, so I didn’t think hydrotherapy would be something that could work for her, but thanks to Gina and Jay at FlowMotion she is making such good progress. They were so patient and up for the challenge of coaxing her in! They have also given me so much good advice - about changes to her diet, changes to how we exercise, they showed me how to help massage her muscles and so many other tips that have massively helped improve my dog’s life. They also work closely with the vets to ensure she is getting the best care all round. Having used another company before without much success I was a bit dubious but I can’t believe how wonderful they are at FlowMotion and how much of a difference it has made - well worth the weekly trip east!",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753881655"
      },
      {
        "authorName": "Andrei Zgirouski",
        "rating": 5,
        "text": "I’m extremely satisfied with my experience at FlowMotion and would highly recommend it.\n1) It really works. My golden retriever got back and knees problems and she started to limp and her legs were shaking after long walks. We saw improvements after a few sessions and after 12 all the trembling was gone my dog was capable of long walks and jumps again. It was an amazing progress.\n2) The staff are highly professional, they know what they are doing, very attentive to the dog and very nice people as well. I had a pleasure of sessions with 3 different specialists and they were all brilliant.\n3) It’s fun for the dog. My dog was really looking forward to each session. She normally hates washing but here she is jumping into the bath to get to the pool as quickly as possible. It felt like it’s not an exercise therapy but like I’m throwing a party for my dog.\n\nThank you so much and all the best!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764175384"
      },
      {
        "authorName": "Henrietta Griffiths",
        "rating": 5,
        "text": "We had a fantastic experience at FlowMotion! From the very beginning, the team made sure our reactive dog, Jim, felt safe and supported. A special thank you to Eleanor, our hydrotherapist—she was incredibly calm, patient, and extremely knowledgeable. Her gentle and confident approach made a world of difference for Jim, and it was clear she genuinely cared about his comfort and well-being.\n\nThe facilities at FlowMotion are clean, peaceful, and thoughtfully set up—ideal for dogs who need a calm environment. Jim responded so well to the sessions and came away more relaxed and happy each time.\n\nWe’re so grateful to have found a place that truly understands and respects dogs as individuals. Highly recommend FlowMotion to anyone, especially if your dog needs extra care or a more tailored approach.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754330068"
      },
      {
        "authorName": "Natasha Gyseman",
        "rating": 5,
        "text": "We took our Dachshund, who has hip dysplasia and spinal kyphosis, to Flow Motion for hydrotherapy and physiotherapy on our vet’s recommendation, and we were not disappointed. The entire team are amazing!!! extremely knowledgeable, kind, and supportive.\n\nOur dog is very anxious, was initially reluctant to enter the water, and can be reactive when touched or handled by unfamiliar people. The team were incredibly patient and encouraging, always working at her pace. Over the course of the sessions, they took the time to build trust and a positive relationship with her, supporting her confidence both in and out of the water.\nThe sessions themselves were invaluable, but they also provided us with plenty of practical advice and exercises to do at home between sessions, which really helped with her progress and long-term maintenance.\n\nWe were consulted at every step of the process, and when our dog began showing improvements, they carefully talked us through a graduation plan, taking our thoughts and concerns into consideration.\n\nThey also supported us with submitting our insurance claim—something we usually find very stressful—removing that burden so we could focus entirely on our dog’s recovery.\n\nFrom start to finish, it is clear how passionate and committed the team are to what they do. I cannot recommend Flow Motion highly enough",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768039519"
      },
      {
        "authorName": "Lauren Henry",
        "rating": 5,
        "text": "We took our dog to FlowMotion while recovering from knee surgery. It was an immediate relief meeting the staff - they were knowledgeable, kind, and gave us helpful suggestions from session to session. The space is clean and well maintained. We saw such a big improvement in our dog’s mobility, and enjoyed our sessions so much, it was bittersweet when they were over.\n\nFor anyone who’s looking for support for their dog’s mobility or needing expert physio help, this is the place to go.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1731790733"
      }
    ]
  },
  {
    "id": "f7eb417c-4228-4aa1-baa6-dcd6b33f836b",
    "googlePlaceId": "ChIJB5t5wBAdd0gRcwgNJOtzVRg",
    "googleMapsUrl": "https://maps.google.com/?cid=1753435083690018931",
    "name": "FP Animal Therapy Centre",
    "slug": "fp-animal-therapy-centre",
    "category": "Rehabilitation center",
    "address": "Unit 2, Weavers Coving, Towcester Rd, Whittlebury, Towcester NN12 8TD, United Kingdom",
    "city": "Towcester",
    "region": "England",
    "postcode": "NN12 8TD",
    "phone": "+44 7837 756751",
    "website": "https://www.fpatc.co.uk/",
    "rating": 5,
    "reviewCount": 8,
    "latitude": 52.0980298,
    "longitude": -0.9918303,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJB5t5wBAdd0gRcwgNJOtzVRg/image-1776467431738-a8a5dc44.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Charlotte Walker",
        "rating": 5,
        "text": "Flora and Jess are amazing! I couldn't reccomend any more if I tried! Poor Flora was on the back foot due to Hugo's first experience with Physio and Hydrotherapy, but they build trust, interact with your poochie, personable, explain things to you in a language we understand! They listen to us as we know our pet. I am so pleased we found them and we are looking forward to continuing our journey with this fantastic team! Highly recommend",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1714572712"
      },
      {
        "authorName": "Ian Humphreys",
        "rating": 5,
        "text": "We have used Flora both at her Therapy Centre and also previously at Moulton Therapy Centre and she is very professional with a talent for making our dog relax, and we have seen steady improvement after our dog Harvey had suffered a stroke. I would say it would be unlikely you could find better treatment for your dog elsewhere, and I have no hesitation in giving her 5 stars although she's worth ten.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1679219418"
      },
      {
        "authorName": "Julie Lewis",
        "rating": 5,
        "text": "Flora has been treating my young border collie since January. At a really worrying time she got us in at short notice, quickly won over the trust of Stardust and provided both diagnosis and ongoing treatment.\nNothing has been too much trouble with service above and beyond, answering concerns and worries out of hours and looking at videos of our physio exercises to check we are doing them right.\nThank you Flora for helping Stardust to return to activities she so enjoys and for providing such a caring and excellent service.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1678389446"
      },
      {
        "authorName": "Carolyn James",
        "rating": 5,
        "text": "Couldnt recommend more highly\n\nMy spaniel had TPLO surgery in April having ruptured her cruciate ligament.  We were advised physio and hydro would aid her recovery. I found FP animal therapy online and as soon as we could started treatment.  She initially had physio and laser with Flora and we soon noticed an improvement in her and then as soon as her wound was healed we started hydro and continued laser with Jess.\nI could not recommend both of them highly enough.  They are both incredibly knowledgeable, caring and great at what they do. They are also lovely which is always a bonus. Our spaniel has just been signed off as she has regained full muscle mass on the operated leg, she is completely sound and back to normal exercise. I honestly don’t think this would have been the case if we hadn’t bothered.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1724918812"
      },
      {
        "authorName": "David Matthews",
        "rating": 5,
        "text": "We were first introduced to Flora back in 2020. A mobile physiotherapy service at the time. Our beloved dog Cocoa a10 year old Labradoodle had been diagnosed with Spondylosis of the spine. Over subsequent years Flora has tailored treatments including Hydrotherapy at the newly established Therapy Centre. The supplementary treatments stabilised Cocoa's condition whilst greatly improving his quality of life over this period.\nWe would highly recommend Flora based on her expertise, compassion and care given our experience.\nDavid & Jan Matthews\nBuckingham",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1678450938"
      }
    ]
  },
  {
    "id": "e5336eab-e424-4897-9b47-4e1fd8121c9b",
    "googlePlaceId": "ChIJO3EWNdmccUgRfdx9LOn1oHA",
    "googleMapsUrl": "https://maps.google.com/?cid=8115756910344264829",
    "name": "Freedom Vet Rehab Clinic",
    "slug": "freedom-vet-rehab-clinic",
    "category": "Rehabilitation center",
    "address": "Units 1-3, The Barn, Upper Castle Combe, Chippenham SN14 7HE, United Kingdom",
    "city": "Chippenham",
    "region": "England",
    "postcode": "SN14 7HE",
    "phone": "+44 1454 329300",
    "website": "https://www.freedomvetrehab.com/",
    "rating": 5,
    "reviewCount": 20,
    "latitude": 51.4972122,
    "longitude": -2.2201816,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJO3EWNdmccUgRfdx9LOn1oHA/image-1776467434636-98a1c079.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [
      "knowledgeable staff",
      "dog grooming",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Michelle Cleary",
        "rating": 5,
        "text": "Tamsin came highly recommended to me, and I can pass that recommendation on. She is thorough and  very considerate of each animals needs, and I feel we received really helpful and useful advice. Great facilities for all types of physio and rehab work.",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1549099798"
      },
      {
        "authorName": "Kim Shepherd",
        "rating": 5,
        "text": "Tamsin has such a way with dogs that they can't fail to love her. Great range of treatments and therapies to get them fit and well again. Beautiful, spacious clinic. Highly recommended by my boy Ziggy",
        "relativePublishTimeDescription": "8 years ago",
        "publishTime": "1498235903"
      },
      {
        "authorName": "Jo Burt",
        "rating": 5,
        "text": "Fantasic service and care from tamsin who has a huge amount of knowledge and experience and to top it off she is a vet who really is interested in my dogs and thier wellbeing.  Freedom rehab location is perfect just off m4 with a field behind to walk the dogs before and after. Building is warm and welcoming, tamsin will only see one customer at a time so you have her attention, perfect",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1579620525"
      },
      {
        "authorName": "Renee Rogers",
        "rating": 5,
        "text": "Dr. Tamsin is an absolute gem! She's treated 2 of my dogs with great skill and compassion.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1584648321"
      },
      {
        "authorName": "Mandy Dorrington",
        "rating": 5,
        "text": "Tamsin a lovely clever caring lady who knows what she's doing.definately helps the ole lady woofers I've taken there.highly recommend.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1678652125"
      }
    ]
  },
  {
    "id": "10b0bbaa-b8a5-4a9c-a537-8847605f2cc0",
    "googlePlaceId": "ChIJTw0Tmlv72EcR2ld9fbHFcjs",
    "googleMapsUrl": "https://maps.google.com/?cid=4283703561688012762",
    "name": "Greenstead Green Canine Hydrotherapy",
    "slug": "greenstead-green-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Laurel Cottage, Greenstead Green, Halstead CO9 1QZ, United Kingdom",
    "city": "Halstead",
    "region": "England",
    "postcode": "CO9 1QZ",
    "phone": "+44 1787 581263",
    "website": "https://www.gghydrocentre.co.uk/",
    "rating": 5,
    "reviewCount": 20,
    "latitude": 51.9186955,
    "longitude": 0.6483238,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJTw0Tmlv72EcR2ld9fbHFcjs/image-1776467458845-d62ad004.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "calm experience",
      "massage",
      "arthritis",
      "swimming"
    ],
    "reviews": [
      {
        "authorName": "Chris Hone",
        "rating": 5,
        "text": "Can't give enough praise for this service. I have a 7 year old Springer that has severe arthitis in his paws and here he can get stress free exercise and a chance to relax after his swim. Has been going to Lynda for over a year now. Thank you very much",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1747387674"
      },
      {
        "authorName": "Victoria Gratton",
        "rating": 5,
        "text": "I have now taken my old, stiff Staffy Peggy to Lynda for two sessions of hydrotherapy. The love that Lynda has for dogs is indescribable. It truly melts your heart when you see it first hand ❤️. On our first visit, Peggy who is not a fan of the water, was not 100% convinced that Lynda wasn’t trying to drown her 😂 and more water seemed to be out of the pool than in it! But by the end of the first session, you could already see how Peggy had gained so much confidence. Peggy has just had her second session and she has made a remarkable improvement and is doing a lot more beneficial swimming than splashing which is a true testament to Lynda and her skills. She gains the dogs trust and builds a bond immediately! 🐶  Lynda said she could feel that Peggy was a lot more relaxed all over and I can see that the benefits will be endless to her stiff hips. Of course, Peggy‘s favourite is the endless attention she receives from the minute she arrives. She absolutely loves the out of the water magnetic therapy and massage. I highly, highly recommend Lynda. She is knowledgeable, honest and caring. Five star all day long, Peggy cannot wait for her third session 🐾",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1696668790"
      },
      {
        "authorName": "Lisa Rolls",
        "rating": 5,
        "text": "Lyn was recommended by our vets, Nora loves it she has many problems with arthritis and her spine but since coming to lyn we have seen a massive change.\nLyn is such a natural and very calming we love her. Would highly recommend  x",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1679226002"
      },
      {
        "authorName": "Janina Huckson",
        "rating": 5,
        "text": "My 11 yr old black lab who is riddled with arthritis loves going for a pamper session. Rushes to get in the pool quite often refuses to get out, then has a massage. Can't recommend enough",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1630530345"
      },
      {
        "authorName": "Colin Baines",
        "rating": 5,
        "text": "A bit tucked away, but very friendly and professional. Would recommend them to anyone.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1562005696"
      }
    ]
  },
  {
    "id": "1d8cf1b6-ec39-416a-9cbc-810d8b022177",
    "googlePlaceId": "ChIJxTeXqX7RdUgRt7uSm-qQ03g",
    "googleMapsUrl": "https://maps.google.com/?cid=8706461841944132535",
    "name": "Greyfriars Rehabilitation and Hydrotherapy Centre",
    "slug": "greyfriars-rehabilitation-and-hydrotherapy-centre",
    "category": "Rehabilitation center",
    "address": "Greyfriars Farm Veterinary Centre, Hogs Back, Guildford GU3 1AG, United Kingdom",
    "city": "Guildford",
    "region": "Surrey",
    "postcode": "GU3 1AG",
    "phone": "+44 1483 811172",
    "website": "https://www.greyfriarsrehab.co.uk/",
    "rating": 4.9,
    "reviewCount": 100,
    "latitude": 51.224517,
    "longitude": -0.6491921,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJxTeXqX7RdUgRt7uSm-qQ03g/image-1776467369043-8f3f0dad.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "spinal surgery",
      "physiotherapy",
      "canine hydrotherapy",
      "dog rehabilitation",
      "acupuncture",
      "dog training",
      "arthritic conditions"
    ],
    "reviews": [
      {
        "authorName": "Emma Lomas",
        "rating": 5,
        "text": "Wonderful staff and facilities, they really get to know the dogs and owners and are incredibly respectful of all needs (and quirks!). Just superb all round!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759501106"
      },
      {
        "authorName": "Yasemin Demir",
        "rating": 1,
        "text": "I’m writing this review to raise awareness.\nI am best placed to review Greyfriars as I was going there with my dogs on and off over a 20 plus year period. Most reviews are from people’s first day experience.\nGreyfriars used to be one of the best hydrotherapy centres around. It was all about the dog’s welfare until it was sold a few years ago. Now it’s all about maximising profit.\nMy dog had spinal surgery. I was taking my dog to Greyfriars twice a week for treadmill work. After many sessions we weren’t seeing much improvement so I asked if swimming in the pool may benefit my dog. The owner said it’s far too risky for my dog  to swim in the pool but she couldn’t tell me exactly what the risk was.\nI wasn’t convinced so I asked the specialist surgeon that worked on my dog and he explained that there was no risk and he asked me to get Greyfriars to contact him to discuss which they didn’t.\nThe price of the treadmill was £120 compared to £35 for the swimming pool.\nI took my dog  to another hydrotherapy centre where he has been swimming in their pool happily for around 2 years after we stopped using Greyfriars.\nI understand that Greyfriars is a business but deceiving customers isn’t a good look at all.\nAVOID!!!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768513274"
      },
      {
        "authorName": "J H",
        "rating": 5,
        "text": "The amazing team at Greyfriars gave our dog a far better final year than we ever thought possible. Thanks to their expert care and personalised treatment, he stayed active, comfortable, and happy for much longer than expected. He had hind-leg weakness and, over the course of a year, swam once or twice a week. The care he received was exceptional—kind, skilled, and genuinely life-enhancing.\n\nSuzanna did a very thorough assessment early on and worked closely with our vet to get him on the right medication. That made a huge difference, and I was especially grateful for her support in his final days. Kate was a brilliant help with his physiotherapy - she was inventive at introducing exercises into his routine so they were fun and easy to carry out, and had thoughtful advice about how best to manage his walks and daily activity.\n\nAll the hydrotherapy team were amazing; he often swam with Kirsten, Becca, and Leanne, whose kindness and encouragement made a big difference to him. He had had a bad experience at another local centre and wasn’t keen at first, but their kindness and patience completely changed that. He came to love his sessions, even if he firmly refused the underwater treadmill! Their ability to adapt things to what worked best for him made all the difference.\n\nTanya made booking easy and stress-free, always friendly and efficient. The whole team drew on their extensive experience helping other dogs to give him the best possible care.\n\nAs he grew older, the support I received from the team at Greyfriars made a huge difference to both him and me. Their practical advice, positivity, and compassion were a constant source of strength.\n\nThank you, Greyfriars!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764286259"
      },
      {
        "authorName": "Lisa Reading",
        "rating": 5,
        "text": "I visited recently for a work experience day. All the staff were extremely friendly and polite. All visitors received a warm welcome and their pets couldn't wait for their hydrotherpy session.\nOnsite the also have a veterinary physiotherapist and laser treatment so the patients can receive their care all on the same site",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763325053"
      },
      {
        "authorName": "Naked Eating",
        "rating": 5,
        "text": "I cannot recommend Greyfriars highly enough! The whole team is exceptional, they are kind, highly trained and go above and beyond to offer the best experience. You can tell that they care deeply about the work they do and are all animal lovers.\n\nMy 10.5yr old, nervous rescue dog has regular physio and hydrotherapy appointments.\nFrom the start they took the time and care to build trust with him and make him feel comfortable (a special shoutout to Kate who was amazing with him and made both of us feel seen and at ease).\n\nDue to his arthritis he struggled with muscle wastage, reduced mobility and some pain. Since he has been having treatment at Greyfriars, his strength and mobility has increased, his muscles are getting stronger and his quality of life has greatly improved. He is having less falls and accidents and is less reactive and more playful with other dogs.\n\nHe now has so much energy, dashes around like a puppy on his walks and is much happier in himself.\n\nHe has improved to the extent that he no longer needs his librela injections; before he was having these every month! He is honestly a different dog!\n\nThe care that the team have provided has honestly been life changing for both of us and I am so grateful that I have access to such an amazing service. A huge thank you to everyone at Greyfriars from Kezra and Rupert.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730118179"
      }
    ]
  },
  {
    "id": "a3fd4dd8-63e0-49a6-ba4c-d5b6de2ac265",
    "googlePlaceId": "ChIJAdY_fG6k2EcRKBMVUbjC4kE",
    "googleMapsUrl": "https://maps.google.com/?cid=4747571054092030760",
    "name": "Hainault Hydrotherapy",
    "slug": "hainault-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Equestrian Centre, Noak Hill Rd, Romford RM3 7LD, United Kingdom",
    "city": "Romford",
    "region": "England",
    "postcode": "RM3 7LD",
    "phone": "+44 20 3540 8736",
    "website": "https://www.canine-hydrotherapy.com/",
    "rating": 4.8,
    "reviewCount": 170,
    "latitude": 51.6143226,
    "longitude": 0.2108532,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJAdY_fG6k2EcRKBMVUbjC4kE/image-1776467383678-2835838e.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "rescue dog",
      "hip dysplasia treatment",
      "arthritis relief",
      "dog session",
      "thorough staff",
      "weekly sessions",
      "proactive help"
    ],
    "reviews": [
      {
        "authorName": "Martyn Richards",
        "rating": 5,
        "text": "We have been bringing our 10 year old rescue here since we adopted him nearly 2 years ago. Due to being in a Romanian kennel with limited exercise for nearly 2 years he had little muscle and potentially early stages of arthritis. Unfortunately he is not a natural water baby unlike some of the other dogs who enjoy their swimming but thanks to the patience and understanding of the staff we have stuck with it. The change is obvious to see, he has put on muscle and hopefully our continued sessions will help keep arthritis at bay. Whether it’s to help with a medical condition or just for fun exercise I would definitely recommend Hainault Hydro…",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770481160"
      },
      {
        "authorName": "A Benjeddi",
        "rating": 5,
        "text": "Harley's favourite place for swimming.\nFriendly staff, good set up.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761656297"
      },
      {
        "authorName": "Ana Man",
        "rating": 5,
        "text": "Update : one year on, doing weekly sessions, Arch is in very good shape, has built good muscle mass and pool days are the highlight of his week.\n\nAmazing team, brilliant pool, Arch loves his new activity.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1746870745"
      },
      {
        "authorName": "A",
        "rating": 5,
        "text": "Hainault Hydrotherapy provided exceptional care for our Nugget, who had a forelimb deformity. The entire team guided him through hydrotherapy sessions that not only strengthened his joints but also aided in his post-surgery recovery. Nugget's progress was astounding, and we were consistently impressed by the staff's professionalism and compassion. Thanks to their expertise, Nugget is now happier, healthier, and more energetic. We cannot recommend Hainault Hydrotherapy highly enough for anyone seeking top-notch care for their pets.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1715506831"
      },
      {
        "authorName": "Frankie Gadd",
        "rating": 5,
        "text": "We travel 30 miles from South London to come here and have done on and off for a few years. The staff are calm, friendly and most importantly brilliant with the dogs. Although sessions can sometimes be short, I trust the staffs judgement on the amount of time needed in the pool and have seen amazing results in not only my dogs physical health but mental health too! I'd like you thank the girls here for all their hard work, especially Megan and Summer. I highly recommend Hainault Hydrotherapy to anyone considering hydro for their furry babies!",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1691317127"
      }
    ]
  },
  {
    "id": "517099c9-4cc6-45c0-9f78-af2c92a4cb0f",
    "googlePlaceId": "ChIJ9aMvlT_hdkgRj5qwx7YpIls",
    "googleMapsUrl": "https://maps.google.com/?cid=6566857071670631055",
    "name": "Haybridge Veterinary Physiotherapy",
    "slug": "haybridge-veterinary-physiotherapy",
    "category": "Physical therapy clinic",
    "address": "glanwin meadow, Banbury Rd MK18 4AQ, United Kingdom",
    "city": "Buckingham",
    "region": "England",
    "postcode": "MK18 4AQ",
    "phone": null,
    "website": "https://www.haybridgevetphysio.co.uk/",
    "rating": 5,
    "reviewCount": 7,
    "latitude": 51.9880395,
    "longitude": -1.0786863,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ9aMvlT_hdkgRj5qwx7YpIls/image-1776467435847-a43d4f43.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "arthritis treatment",
      "expert staff",
      "eye",
      "dog",
      "care"
    ],
    "reviews": [
      {
        "authorName": "Karin Lane",
        "rating": 5,
        "text": "I really couldn’t have asked for more caring and loving girls for my dog. The dedication shown throughout my dog’s rehabilitation from a severed cruciate ligament was just incredible. The speed of recovery was so impressive with hydrotherapy and physio that I would definitely recommend Haybridge for any injury, arthritis and any pain your dog is suffering from.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767518892"
      },
      {
        "authorName": "sarah shute",
        "rating": 5,
        "text": "Highly recommended both Katy and Elly. Katy trains my young dog in agility which is great because she can keep an eye out on his leg. He has grade 1 luxating patella and has seen both for physio sessions and he goes every 2 weeks for hydrotherapy to maintain his muscle and keep his knee stable.\nI also take both my old dog and my competing dog for regular maintenance physio sessions and I would be happy to allow either Katy or Elly to treat them as they are both very qualified and lovely people. ☺️",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1750874856"
      },
      {
        "authorName": "Bonnie Conlin",
        "rating": 5,
        "text": "We can’t recommend Katy highly enough. Follow leg surgery she helped our Spaniel Ozzie walk properly again. He developed arthritis later in life and Katy worked with him using hydrotherapy, laser therapy and physio. She is absolutely committed to her work and Ozzie loved going for his treatments with her. If I could give ten stars, I would! . Thank you Katy for everything you did for Ozzie",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753025615"
      },
      {
        "authorName": "leigh atkinson",
        "rating": 5,
        "text": "What do you do when your dog gets a bit ‘fluffy’ and the vet says it’s time to lose weight? Your dog also has a touch of arthritis and too much exercise causes pain and stiffness. Diet and Haybridge Physiotherapy were the answers. Booked Chester in for a course of hydrotherapy with Katy. Each week the intensity increased a little under Katys expert eye. He loved it, pulling to get into the place and onto the treadmill. A few weeks passed and we had a happy boy who was more than 5kgs lighter and in no pain. Would highly recommend this place.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753021329"
      },
      {
        "authorName": "Linda Marriott",
        "rating": 5,
        "text": "It was a pleasure to take Lemmy to see Katy.  Her care and professional approach was excellent especially during the hydrotherapy sessions as Lemmy hated water.  He was always happy to participate because of Katy's calm and encouraging  approach.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753173706"
      }
    ]
  },
  {
    "id": "064c45b5-c309-4dce-9c21-fffb0b6bc0a7",
    "googlePlaceId": "ChIJd4D2_vg4dkgRjhI1IZPuRX8",
    "googleMapsUrl": "https://maps.google.com/?cid=9170998531894612622",
    "name": "Healing Hounds Clinic",
    "slug": "healing-hounds-clinic",
    "category": "Rehabilitation center",
    "address": "6 Grove Rd, Harpenden AL5 1PX, United Kingdom",
    "city": "Harpenden",
    "region": "England",
    "postcode": "AL5 1PX",
    "phone": "+44 7517 645974",
    "website": "https://healinghoundsclinic.com/",
    "rating": 5,
    "reviewCount": 38,
    "latitude": 51.8070507,
    "longitude": -0.3409141,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJd4D2_vg4dkgRjhI1IZPuRX8/image-1776467426527-88f0bf98.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Treadmill"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "dog therapy",
      "water treadmill",
      "elbow dysplasia",
      "post surgery recovery",
      "reactive dog",
      "hip dysplasia"
    ],
    "reviews": [
      {
        "authorName": "Louise Shrigley",
        "rating": 5,
        "text": "Healing hounds have been extremely beneficial for our large dog who was diagnosed with hip dysplasia at 10min the old. Weekly visits on the water treadmill have helped our dog build muscle and strength to live an almost normal life. She has improved ten fold and now enjoys running and is so much happier!\nWe highly recommend the team, very friendly, professional and our dogs gets soooo excited when she knows we’re going to”swimming”!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771600060"
      },
      {
        "authorName": "Dalia Matkeviciene",
        "rating": 5,
        "text": "I cannot recommend Healing Hounds enough! We have been visiting for nearly 3 years now with our dog Zeus, who was diagnosed with elbow dysplasia at just 8 months old. A professional doctors' hospital suggested an operation as the only option but couldn't promise it would help. We decided to try the hydrotherapy treadmill instead, and the improvement was significant within the first few weeks. He stopped limping entirely and has been able to live a normal, happy life ever since. We still continue maintenance sessions every 6 weeks to keep him in top shape.\nNow, we’ve started sessions for our 4-year-old, Athena, for knee ligament syndrome. Although vets suggested surgery for her as well, we are trying laser and water therapy instead. She was limping when she started, but she is already improving, and we are looking forward to her full healing.\nThe team at Healing Hounds is amazing—very friendly, professional, and caring. Our dogs love going in, and we love seeing them happy and mobile. It has truly changed their lives!\nThank you xx",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1773088448"
      },
      {
        "authorName": "megan smedley",
        "rating": 5,
        "text": "Tamsin and her team are spectacular. My terrier had an accident last year, leaving her partially paralyzed with very weak back legs. Hydrotherapy has helped her to be able to walk again and she is a much happier dog to be more mobile! You can buy a block of sessions which is good value for money, plus all of the staff are so warm, professional and will go out of their way to help you. Thank you so much for everything!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768900600"
      },
      {
        "authorName": "Glen B",
        "rating": 5,
        "text": "Our vet recommended Healing Hounds for our 12-year-old pug, Poppy, and it has improved her quality of life no end. Before starting hydrotherapy, she was struggling to walk due to old age, and medication just wasn't helping.\nHydrotherapy has helped her regain strength and coordination, so she is now much more active around the home and on walks—she’s even lost nearly 2kg in the process! Tamsin and Maddie are fantastic; they are always super friendly and genuinely love what they do, which makes every visit enjoyable. I can’t recommend them enough.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770651070"
      },
      {
        "authorName": "Christina Cannon",
        "rating": 5,
        "text": "My boy has been loving everything about going for his hydrotherapy with Zoe. He can't wait to get in the door!  He's had elbow dysplasia since birth and operation on both elbows at 9 months. Going to hydrotherapy has worked wonders with strengthening him, especially in such a safe and enjoyable way. Thank you so much Zoe and Tamsin",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771429470"
      }
    ]
  },
  {
    "id": "25f17c86-fec1-4299-a1b7-6a008770195a",
    "googlePlaceId": "manual-high-lane-hydrotherapy",
    "googleMapsUrl": null,
    "name": "High Lane Hydrotherapy",
    "slug": "high-lane-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Unit 10 Lomber Hey Farm, Andrew Lane, High Lane, Stockport SK6 8HY, United Kingdom",
    "city": "Stockport",
    "region": "Greater Manchester",
    "postcode": "SK6 8HY",
    "phone": "+44 7965 384650",
    "website": "https://www.highlanehydro.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 53.3635,
    "longitude": -2.0675,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab",
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "hydrotherapy pool",
      "large breeds",
      "rehabilitation"
    ],
    "reviews": []
  },
  {
    "id": "0040eada-b59c-4da9-900d-972ff4cf449e",
    "googlePlaceId": "ChIJ6TaMi_zldkgRqv6HYXHec04",
    "googleMapsUrl": "https://maps.google.com/?cid=5653106535829077674",
    "name": "Hill's Canine Rehabilitation",
    "slug": "hill-s-canine-rehabilitation",
    "category": "Rehabilitation center",
    "address": "Unit 5, Lawn Farm Business Centre, Grendon Underwood, Aylesbury HP18 0QX, United Kingdom",
    "city": "Aylesbury",
    "region": "England",
    "postcode": "HP18 0QX",
    "phone": "+44 7770 319739",
    "website": "https://www.hillscaninehydro.co.uk/",
    "rating": 4.9,
    "reviewCount": 36,
    "latitude": 51.8733479,
    "longitude": -0.9892737,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ6TaMi_zldkgRqv6HYXHec04/image-1776467397282-74c59421.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Julia Spittles",
        "rating": 5,
        "text": "We’ve been using Hills Canine Rehabilitation for about 6 months for our 11 year old yellow lab who was suffering with a cruciate ligament injury. We wanted to avoid surgery which our then vet wanted.\nWow what a great place! Emily & Laura have been so supportive with physio and treadmill treatments and our dog is recovering so well. She is happier and her mobility much improved so that she can manage walks again. Cannot recommend them high enough! Thank you ladies 😊",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771588267"
      },
      {
        "authorName": "Laura Townsend",
        "rating": 5,
        "text": "I brought our elderly whippet/lurcher cross Benji for hydrotherapy on the treadmill for over a year. Although never a water lover, Benji soon found his feet and regular hydrotherapy did wonders for his mobility and even prolonged his life. Katherine and her team were superb - knowledgeable, caring, friendly and always keen to do as much as possible to help Benji keep moving. Benji just made it to the age of 17 thanks in no small part to Katherine and her team. I shall miss my weekly visits.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759596120"
      },
      {
        "authorName": "Kate Thomas",
        "rating": 5,
        "text": "Our Staffy Sammi has had hyrotherapy & now physio…she absolutely loves her sessions & all the staff, strutting in eagerly every time! …Her recovery from knee surgery is going great, with lots of knowledge & exercises to do at home! Wouldn’t go anywhere else!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770746526"
      },
      {
        "authorName": "The Sunset Kid",
        "rating": 5,
        "text": "I have been coming here with my dog every week for well over a year now, and we wouldn't want to go anywhere else for his hydro. He absolutely loves the venue and the staff, and it's his favourite thing to do. Hill's are always punctual, their staff are lovely and professional, the pool is well looked after, and the treadmill and shower facilities are great.\n\nI'm not entirely sure what that other review is talking about; I've always felt that the staff put dog care above all else. They've been great with understanding my dog's complex needs and have worked with him to really make the most of his sessions. I have also been really late before due to road closures (HS2, what are you going to do?), and Hill's happily accommodated me to work something out.\n\nVery pleased with this place and will continue coming here until my dog can no longer swim from old age, which would be a shame because since coming here, he's become half dog half dolphin.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756225341"
      },
      {
        "authorName": "Helen Whitehouse",
        "rating": 5,
        "text": "We came to see Katherine and the team at Hills after our 12 year old black lab Charlie was diagnosed with arthritis and was knucking on his back paws. The team were brilliant and he soon gained more strength and flexibility and walked much better.  Even after he had a vestibular episode and lost his sight, they really looked after him. He loved nothing more than to sit on Gabby's lap during his rests. Unfortunately we lost him in October 2023 aged 13 and I'm sure the team miss his weekly kisses",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1708350592"
      }
    ]
  },
  {
    "id": "13b0abb8-fcbf-4348-a383-8c13b74b3db4",
    "googlePlaceId": "ChIJ-6p2Lwd3YUgRSobb1BcQh6Y",
    "googleMapsUrl": "https://maps.google.com/?cid=11999577426693424714",
    "name": "Holistic Pet",
    "slug": "holistic-pet",
    "category": "Rehabilitation center",
    "address": "Windmill Rd, Millisle, Donaghadee BT22 2ED, United Kingdom",
    "city": "Donaghadee",
    "region": "Northern Ireland",
    "postcode": "BT22 2ED",
    "phone": "+44 7873 197356",
    "website": "https://www.holisticpetni.com/",
    "rating": 5,
    "reviewCount": 31,
    "latitude": 54.6123888,
    "longitude": -5.5672361,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ-6p2Lwd3YUgRSobb1BcQh6Y/image-1776467407013-bd3c633f.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "acupuncture",
      "laser treatment",
      "hydrotherapy",
      "arthritis treatment",
      "injury care",
      "holistic pet care",
      "physio",
      "hip dysplasia"
    ],
    "reviews": [
      {
        "authorName": "kate wilson",
        "rating": 5,
        "text": "Elsa, Emma and the Team at HolisticPetNI are second to none, with their care, experience and treatment of our very arthritic 14yr old Labrador Victor. They’ve literally given him/us, 3 years extra of a quality of life and love we thought he was past having.\nOur family (and Victor!) are immeasurably grateful (the our other two dogs, too!) 🥰♥️",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758106293"
      },
      {
        "authorName": "Becky",
        "rating": 5,
        "text": "Holistic Pet are a fantastic team of friendly, enthusiastic and caring people. Our dog Ellie had to go twice in her life, once for hydrotherapy and acupuncture and once for acupuncture and laser therapy.\n\nShe loved to see them each session and enjoyed the work. The team really care about what they do and it shines through in the care they provide.\n\nI always felt happy that things were explained clearly and they were always available for extra questions or support.\n\nI'd highly recommend them.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1744325208"
      },
      {
        "authorName": "Cody",
        "rating": 5,
        "text": "I can’t recommend Elsa at Holistic Pet NI enough!\n\nI got my rescue Rottweiler, Ruby, in March. She’d been used in a puppy farm and was in poor condition — around 53kg, with a sore left shoulder (later found to be a calcification) and mild hip dysplasia. She was put on Metacam and told to lose weight, but I wanted to explore some alternative therapies, so I made an appointment with Elsa.\n\nFrom the very first session, Elsa was brilliant. Ruby can be very wary of new people and enclosed spaces, but Elsa worked so patiently and gently with her. Even when Ruby had a few scared outbursts, Elsa handled it with complete calm and kindness, which really helped both Ruby and me feel more at ease.\n\nShe’s made such a difference in Ruby’s recovery and overall comfort — Ruby absolutely loves her now! I’m so grateful for the care, patience, and expertise Elsa has shown throughout.\n\nIf you’re looking for someone who truly understands and connects with your dog, Elsa is amazing.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762351319"
      },
      {
        "authorName": "Kim Hamilton",
        "rating": 5,
        "text": "Holistic Pet provides an excellent veterinary service. My shih tzu Ben was with them for two years before he passed. They gave him hydrotherapy, acupuncture and laser treatment for his back legs which slowed down his illness and gave us more time together. I could not recommend this place highly enough. The vets are very friendly and supportive. Kim Hamilton",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1744055299"
      },
      {
        "authorName": "Peter Walker",
        "rating": 5,
        "text": "Siobhan, Elsa and Helen have been brilliant with our pups, successfully nursing our terrier to a complete recovery from a horrible whiplash injury, and massively improving the quality of life of our 12 year old tripod collie. Superb.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1744054461"
      }
    ]
  },
  {
    "id": "16e8e93a-4f23-4320-9731-0168e83f1472",
    "googlePlaceId": "ChIJX5pVFYQPd0gRU-gSasKtRtg",
    "googleMapsUrl": "https://maps.google.com/?cid=15584334611077064787",
    "name": "Holistic Vet Care",
    "slug": "holistic-vet-care",
    "category": "Canine therapy centre",
    "address": "Blisworth Marina, Blisworth Arm, Northampton NN7 3FG, United Kingdom",
    "city": "Northampton",
    "region": "England",
    "postcode": "NN7 3FG",
    "phone": "+44 7718 133854",
    "website": "https://holisticvetcare.co.uk/",
    "rating": 4.9,
    "reviewCount": 96,
    "latitude": 52.1880248,
    "longitude": -0.9490428,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJX5pVFYQPd0gRU-gSasKtRtg/image-1776467438765-b621115a.jpg",
    "serviceTags": [
      "Mobility"
    ],
    "reviewKeywords": [
      "acupuncture",
      "herbal medicine",
      "laser therapy",
      "arthritis treatment",
      "euthanasia alternative",
      "epilepsy care",
      "holistic approach",
      "anxiety treatment"
    ],
    "reviews": [
      {
        "authorName": "Jain Galliford",
        "rating": 5,
        "text": "A  superb  wonderful Vet, whose gentleness and love are  Paramount. I cannot speak highly enough of this  practice and Catherine the new Vet is again a Vet full of love,  Care and attention.. Plus the care you get as you walk in as you can help yourself to a nice coffee. The practice is located in wonderful surroundings of a boat marina and there are some fabulous walks by the side of the canal when you have finished. All in all a score Of 100 out of 100.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772216159"
      },
      {
        "authorName": "Elena Violeta Albu",
        "rating": 5,
        "text": "I am really grateful for finding Dr Rinnert . He is very kind, patient and great even with stubborn German shepherds like my dog. Bandit has been seeing Dr Rinnert mainly for his constant itching and skin issues. Acupuncture combined with herbs is amazing and works wonders for him. Every acupuncture session turns him from being an active 24 h  operating cctv into a sleeping baby. I have attached pictures of Bandit being himself and after his acupuncture session.\n\nI think everyone should consider Dr Rinnert’s approach first as it is not about treating symptoms, but going to the root cause to address it.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771519866"
      },
      {
        "authorName": "Caroline F",
        "rating": 5,
        "text": "I have been bringing my Dalmatian, Gracie, here for around two years now. She is now 16 years old and struggled initially with arthritis and joint pain, along with some other varying symptoms as she continues to age. With the support of Rinnert and his team, she has had laser therapy, acupuncture and traditional Chinese herbal remedies to support her over this time. As her symptoms change, her therapies have been adjusted to best support her at each specific time and it has greatly improved her pain levels in particular. The team at Holistic Vet Care have always been personable, professional and supportive. Their approach and support alongside traditional, western, pharmaceuticals is appreciated, as the balance can feel difficult at times and is also a very personal choice. I feel very supported by the team and particularly Rinnert as Gracie’s final days seem to be drawing closer - she has the best care and support any dog could receive. Thank you Holistic Vet Care!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766062759"
      },
      {
        "authorName": "Lucie B",
        "rating": 5,
        "text": "I can’t recommend Dr. Rinnert at Holistic Vet Care highly enough – he has literally given my dog Xena her life back, and I’m still in awe of the results.\n\nXena’s severe, non-stop itching started in January 2025. From that very first month until July 2025, she was on steroids (on and off, higher doses, lower doses, different kinds) just to keep her from tearing herself apart. In July we finally saw the dermatologist, who took her off steroids and started her on Apoquel. It stopped the itching, but I was never able to reduce her to the proper maintenance dose without the itch coming roaring back. Twice-weekly medicated baths, prescription hypoallergenic food, and the cone 24/7 became our exhausting routine. After almost a full year we were no closer to an answer or a real fix – only lifelong drugs and management.\n\nIn October 2025, completely out of hope and options, I found Dr. Rinnert at Holistic Vet Care and booked an appointment. From the first visit the difference was night and day. Dr. Rinnert truly listened to every detail of the past year, asked insightful questions, and spent as much time as we needed. You can feel how much he loves animals – Xena, who is usually nervous at vets, relaxed with him right away.\n\nTwo months later, in December 2025, Xena is OFF Apoquel completely – no rebound itching, no cone, no scratching, nothing. Her skin and coat look amazing, and her overall health has improved she is like a puppy again (she’s almost 8) most importantly, she’s happy and comfortable again.\n\nIf you’ve been stuck in the steroid → dermatologist → Apoquel cycle with no real resolution, do yourself and your dog a favor and see Dr. Rinnert. He finds and treats the root cause instead of just suppressing symptoms, he’s incredibly kind, patient, and genuinely brilliant with animals. Xena and I are forever grateful. Holistic Vet Care is worth every single mile and every penny – five stars feels nowhere near enough! ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1764953952"
      },
      {
        "authorName": "Laura Porter",
        "rating": 5,
        "text": "Over the last six months, Rinnert and the team at Holistic Vet Care have been a huge support. They’ve been treating my senior dog for arthritis with acupuncture, and the results have been impressive and have exceeded my expectations - in terms of the return of mobility and energy and more. Not only has my dog improved significantly, but each visit has been met with curiosity, care and professionalism. They are clearly dedicated to the well-being of their patients. I’m truly grateful for their help and would recommend them to fellow pet owners.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765541506"
      }
    ]
  },
  {
    "id": "37e68a9f-f641-46c0-ab3f-2f4903001887",
    "googlePlaceId": "manual-horner-pet-wellness-rehab-centre",
    "googleMapsUrl": null,
    "name": "Horner Pet Wellness & Rehab Centre",
    "slug": "horner-pet-wellness-rehab-centre",
    "category": "Rehabilitation center",
    "address": "Unit 5 Morrisons Supermarket, Coventry Road, Sheldon, Birmingham B26 3PD, United Kingdom",
    "city": "Birmingham",
    "region": "West Midlands",
    "postcode": "B26 3PD",
    "phone": "+44 121 270 5800",
    "website": "https://www.hornercentre.com/",
    "rating": null,
    "reviewCount": null,
    "latitude": 52.4565,
    "longitude": -1.7802,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Treadmill"
    ],
    "reviewKeywords": [
      "veterinary physiotherapy",
      "underwater treadmill",
      "rehab"
    ],
    "reviews": []
  },
  {
    "id": "5e47c0c0-f2eb-4cdf-915d-fca1fd48427e",
    "googlePlaceId": "ChIJLfZZQEJNdkgRxifxMX-aSYo",
    "googleMapsUrl": "https://maps.google.com/?cid=9964665521623345094",
    "name": "House of Hydro - Canine Hydrotherapy Centre",
    "slug": "house-of-hydro-canine-hydrotherapy-centre",
    "category": "Rehabilitation center",
    "address": "Maulden Road Industrial Estate, Unit 3D Enterprise Way, Flitwick, Bedford MK45 5BX, United Kingdom",
    "city": "Bedford",
    "region": "England",
    "postcode": "MK45 5BX",
    "phone": "+44 7852 239392",
    "website": "https://www.houseofhydro.co.uk/",
    "rating": 5,
    "reviewCount": 65,
    "latitude": 52.0076752,
    "longitude": -0.486548,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJLfZZQEJNdkgRxifxMX-aSYo/image-1776467367138-da49af17.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Bhuvandeep Bains",
        "rating": 5,
        "text": "The team at House of Hydro have been absolutely lovely! We came to them after our dog was diagnosed with IVDD and suffered from paraparesis and they have been absolutely fantastic. The relationship they’ve built with our dog in such a short time is heart warming & we’re always excited to have a session.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771967880"
      },
      {
        "authorName": "Bee Cesar",
        "rating": 5,
        "text": "A Tale About Worfie! 💙 So, it’s been almost a year here having moved from London & we’ve made some great progress which we have been able to sustain in our pain management journey.\n\nIn the beginning we started with the pool, it was familiar, warm, he had a buoyancy aid, & it was reward based. He loves these sessions but hoomans quickly noticed that as a show cocker he has a ‘Worf speed’, meaning a casual swim suited him fine lol. It was paired it with a quick PEMF session, a mat that he lays on with pulsed magnetic waves. Loves this one too.\n\nSessions also include the Underwater treadmill - a new piece of equipment & for him, this one was hard. He bobbed & weaved at first , couldn’t walk in a straight line, back legs were stiff to lift up, adding pace meant a lot of effort & left him very tired. However, it gave us hoomans good visibility on how he moves in the water. We had some breakthroughs but not one of his favourites lol.\n\nNext was Physio! We’ve learnt simple daily exercises that we could do at home, give him treatos for & bond closer with him as we suppawt him. He likes these ones & often does a few without prompt & for free. Show cockers, like to show! 🐶\n\nA few weeks ago we tried K-laser & this was a game changer! It targets the cells & promotes the body’s natural repair mechanisms. Despite being at daycare for a full week after, there was no muscle spasms, no spine wiggling, no stiffness, an even gait, square placement, he looked strong and Mama got teary - even did a big run for a whole minute with another floof, slower walks are comfortable & he has better paw placement.\n\nRecently he had another Underwater Treadmill day (again) & he smashed it. Higher lifts on the back paws, a bit of pace, good rotations, even strides, better placement on his paws, eureka!\n\nA BIG & heartfelt thank you to Charlotte, Millie & Natasha for their patience, being so welcoming, cheering him on, being kind but being so damn good at what they do, that he now has a higher quality of life! The care is on another level - we’re so grateful! #livingwithhipdysplasia",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766516177"
      },
      {
        "authorName": "Mandi hudson",
        "rating": 5,
        "text": "House of Hydro have been fantastic for my dog. They are very knowledgeable and have supported my pet through a huge operation. My dog absolutely loves going for her hydro sessions, thank you ladies!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1767087300"
      },
      {
        "authorName": "Tracy Palmer",
        "rating": 5,
        "text": "Today was the first time I said the word walkies to my 6 year old dog, Lola and she didn’t run away, she was actually crying with excitement. After only 9 sessions with you she is obviously more comfortable. With no hopping on her back legs through the whole walk today. Thank you for all your kindness and work you have done. Charlotte has been a massive part in Lola’s success. Thanks from a very happy dog owner and Lola.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1718203365"
      },
      {
        "authorName": "Melanie Dempsey",
        "rating": 5,
        "text": "Can’t recommend House of Hydro highly enough.  Maverick my 3 legged cat first went for hydro therapy about 3 years ago, when he put on weight and hurt his only back leg.  Maverick was a great little swimmer and once we got his weight down and leg muscles stronger, we moved to laser treatment to keep his joints healthy at the age of 12 he now has no problem keeping up with his 3 year old house mate. Natasha, Charlotte and the team have worked wonders with Maverick and he loves his visits.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1707562542"
      }
    ]
  },
  {
    "id": "3c7bb277-d265-41bd-b1ac-f996d543ca85",
    "googlePlaceId": "ChIJm0P8h337c0gR8aASc2da1Z4",
    "googleMapsUrl": "https://maps.google.com/?cid=11445153428390715633",
    "name": "HS Canine Hydrotherapy",
    "slug": "hs-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Block B Unit B16 & 17, Business Park, Grateley, Cholderton Rd, Grateley, Andover SP11 8SH, United Kingdom",
    "city": "Andover",
    "region": "England",
    "postcode": "SP11 8SH",
    "phone": "+44 7384 778397",
    "website": "https://www.hscaninehydrotherapy.com/",
    "rating": 5,
    "reviewCount": 32,
    "latitude": 51.1710904,
    "longitude": -1.6266565,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJm0P8h337c0gR8aASc2da1Z4/image-1776467373648-2f8bf926.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Treadmill",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "hip dysplasia treatment",
      "muscle loss recovery",
      "calm atmosphere",
      "hardworking staff",
      "arthritis",
      "knowledgeable staff",
      "fun experience"
    ],
    "reviews": [
      {
        "authorName": "Leoni Horne",
        "rating": 5,
        "text": "Highly recommend HS canine hydrotherapy!! Buttercup has made huge progress thanks to Harvey and Cody’s support, knowledge and hard work. We couldn’t recommend them enough for creating a welcoming, fun, stress free experience every session! Buttercup adores them 🐶 Thank you guys 😊",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768478369"
      },
      {
        "authorName": "vanessa cruz",
        "rating": 5,
        "text": "Harvey and the team are amazing! Our GSD has several health issues including hip dysplasia and over her course of treatment she is now able to walk and play properly. She has gained muscle mass to keep her joints in place and is so much more comfortable, the difference is remarkable! Cannot recommend enough, Harvey has given her a new lease of life and it’s one less thing for us to worry about! Fantastic people who really care 🥰",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768298638"
      },
      {
        "authorName": "Scarlett Harrison",
        "rating": 5,
        "text": "Dakota loves her sessions with Harvey! She’s an anxious girl who otherwise wasn’t accepted in other centers without a muzzle. Harvey is very patient yet affectionate with the dogs to a degree they’re comfortable in. Any interactions we’ve had with Cody have been genuinely positive and Dakota is slowly getting used to taking treats! If you have a fear aggressive/reactive/nervous dog, don’t ponder on if your dog will be respected here - they’ll be accepted like any other 🥰",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768137151"
      },
      {
        "authorName": "Scott Bailey",
        "rating": 5,
        "text": "What an amazing experience. Pip, our 13 year old did so well for her first time. This is testament to the caring and friendly way that Harvey and Cody worked with her.\nThank you guys!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767714539"
      },
      {
        "authorName": "Jax Reade",
        "rating": 5,
        "text": "Absolutely fantastic service at HS Canine Hydrotherapy in Grateley Business Park.\n\nHarvey and Cody are incredibly knowledgeable, patient, and genuinely care about the animals they work with.\n\nFrom the first time we arrived with our rescue Labrador, everything was handled professionally and calmly.\nThey took the time to explain the process, made sure our foster dog was comfortable and happy throughout, and tailored the session perfectly to his needs. You can really see their passion and experience in how they handle each animal with confidence and kindness.\n\nWe highly recommend HS Canine Hydrotherapy to anyone looking for professional, caring, and effective hydrotherapy for their dog, cat or rabbit. Harvey and Cody are brilliant at what they do. Their enthusiasm shines out of them.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766089226"
      }
    ]
  },
  {
    "id": "8f24670d-3493-45d6-81e0-3318eca7c700",
    "googlePlaceId": "ChIJXX3mcoOTYEgRmXQuMpA1cW0",
    "googleMapsUrl": "https://maps.google.com/?cid=7886143315935917209",
    "name": "HydroDogs NI",
    "slug": "hydrodogs-ni",
    "category": "Rehabilitation center",
    "address": "1A Killuney Rd, Armagh BT61 9HR, United Kingdom",
    "city": "Armagh",
    "region": "Northern Ireland",
    "postcode": "BT61 9HR",
    "phone": "+44 7435 907898",
    "website": "https://businewmap.org/details/hydrodogs-ni-ChIJXX3",
    "rating": 5,
    "reviewCount": 1,
    "latitude": 54.3574476,
    "longitude": -6.626928,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJXX3mcoOTYEgRmXQuMpA1cW0/image-1776467400332-ce802da1.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Donna Donnelly",
        "rating": 5,
        "text": "Dawn is doing a fantastic job with Sparks rehabilitation ❤️",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1654787349"
      }
    ]
  },
  {
    "id": "4bbf9522-08cb-400c-8395-1fe7d5c7de06",
    "googlePlaceId": "manual-hydrotherapy-at-battersea",
    "googleMapsUrl": null,
    "name": "Hydrotherapy at Battersea",
    "slug": "hydrotherapy-at-battersea",
    "category": "Hydrotherapy center",
    "address": "Battersea Dogs & Cats Home, 4 Battersea Park Road, London SW8 4AA, United Kingdom",
    "city": "London",
    "region": "Greater London",
    "postcode": "SW8 4AA",
    "phone": "+44 20 7627 9250",
    "website": "https://www.battersea.org.uk/what-we-do/caring-for-our-animals/hydrotherapy",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.4778,
    "longitude": -0.1445,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Treadmill",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy pool",
      "underwater treadmill",
      "rehabilitation"
    ],
    "reviews": []
  },
  {
    "id": "c1f1a1c3-e109-4fee-ab31-a56e7f3e5492",
    "googlePlaceId": "ChIJYX-bUuHvekgRx6cay8k0LfM",
    "googleMapsUrl": "https://maps.google.com/?cid=17522719766469060551",
    "name": "Jump In Dog Therapy Pool",
    "slug": "jump-in-dog-therapy-pool",
    "category": "Rehabilitation center",
    "address": "6, Burton Units, Burton, Tarporley CW6 0ER, United Kingdom",
    "city": "Tarporley",
    "region": "England",
    "postcode": "CW6 0ER",
    "phone": "+44 1829 830577",
    "website": "https://dogtherapypool.co.uk/",
    "rating": 4.9,
    "reviewCount": 54,
    "latitude": 53.1705854,
    "longitude": -2.7330003,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJYX-bUuHvekgRx6cay8k0LfM/image-1776467458830-3fe33136.jpg",
    "serviceTags": [
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Esme Booth",
        "rating": 5,
        "text": "I would 100% recommend Jump In Dog Therapy Pool for anyone considering it. It is a completely safe space for dogs, including reactive dogs due to their one way system. The pool is huge and incredibly clean. All of the team working there are knowledgeable, supportive and kind. My dog wasn't sure at first as at 3yrs old I hadnt seen him swim (which was why I took him), now he loves it, cannot wait to get in and zooms round the changing room when he has finished. If in doubt try it, it is a great way to relationship build with your dog, we love it! 🥰🥰",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764498944"
      },
      {
        "authorName": "Gaz John",
        "rating": 5,
        "text": "One of the best decisions I’ve made to get in touch with the guys at Jump. From the moment they (quickly) responded to my enquiry I could tell every part of the process would be done with my little Marjorie’s best interest in mind. From the moment we got there, Kevin made us feel totally at ease. It was clear to me how good Kevin is with dogs, with such a calming and kind nature. It put any nerves I had out of mind straight away because I could tell immediately just how safe and professional of an environment we were in, and that we were in safe hands.\nIt’s a slow process for us because Marjorie’s confidence was very low to start with and I did not want to rush it at all, but thanks to Kevin and everyone at Jump, their patience, expertise, understanding and knowledge with all things dog/water related, we are making small but noticeable improvements each and every time. The benefits for her health, fitness, mobility & flexibility long term are next level, and especially with her being a brachycephalic dog, that is a super important aspect for me, but also it’s something different and an activity we can do together each week, to have fun and stimulate her physically and mentally. She’s full of energy and this absolutely wipes her out for the rest of the day…so even those of you out there that have dogs that are difficult to tire, I can’t recommend this enough.\nVisiting Jump each Sunday is something we look forward too so much now, I cannot speak highly enough of this facility and the team of amazing & skilled dog-loving trainers that run it.\nWhether your dog is a competent, confident swimmer/jumper and you want a safe & controlled environment to go and have fun together, or if you haven’t tried your dog swimming before but would love to start them under some expert guidance, then do not hesitate to get in touch with these guys. It could be one of the best things you do for your dog.",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757241331"
      },
      {
        "authorName": "Joanne Clews",
        "rating": 5,
        "text": "This was our first time at Jump in Dog therapy and it was absolutely brilliant. Kevin who was overseeing our fun swim was so kind, patient and gentle with my dog and I.\nJump is Dog therapy is a very organised business and I particularly thought the set up of the one way dog system was very beneficial to the experience.\nMy dog Luna absolutely loved her fun swim and by the end was enjoying making some big splashes!\nI even got in the pool and was able to bond and spend some time with my dog doing what we love the best, being in the water!\nThanks for a great experience we will definitely come back.\nJo and Luna xx",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749399623"
      },
      {
        "authorName": "Julie Forrest",
        "rating": 5,
        "text": "Our dogs LOVE this pool. We go regularly for them to have a safe swim in an environment free from blue green algae. They howl as soon as we stop the car because they know where they are. They can't contain their excitement. Both dogs have learnt to jump off the platform, and Billy can now dive under water. They are always exhausted when we leave, so we have a nice quiet night - win win. The staff are so knowledgeable and experienced and really know and love dogs. I can't recommend them enough.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1731777919"
      },
      {
        "authorName": "Lauren Dowdeswell",
        "rating": 5,
        "text": "Our boys LOVE jump in! Our Northern Inuit adores swimming, so we knew he’d have the best time. But our golden retriever guide dog foster puppy has also had the best time! My NI can be a bit aloof with people but both staff members we’ve had, he’s made fast friends which is lovely to see when he’s not always a fan of people. We’ve had nothing but positive experiences and can’t wait to come back!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1731781374"
      }
    ]
  },
  {
    "id": "cca7542c-6204-4ffd-8a5c-be2da70e5656",
    "googlePlaceId": "ChIJy9K2t1d1dEgR9INEH5wnKjs",
    "googleMapsUrl": "https://maps.google.com/?cid=4263263548752561140",
    "name": "K9 Aquacise & Hydrotherapy",
    "slug": "k9-aquacise-hydrotherapy",
    "category": "Swimming pool",
    "address": "Unit 10, Belbins business park, Romsey SO51 7JF, United Kingdom",
    "city": "Romsey",
    "region": "England",
    "postcode": "SO51 7JF",
    "phone": "+44 1794 512232",
    "website": "https://www.k9aquacise.co.uk/",
    "rating": 4.9,
    "reviewCount": 37,
    "latitude": 51.0084086,
    "longitude": -1.486727,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJy9K2t1d1dEgR9INEH5wnKjs/image-1776467455575-f767c709.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "friendly staff",
      "patience",
      "dog grooming",
      "hydrotherapy",
      "dog"
    ],
    "reviews": [
      {
        "authorName": "Gwyneth Jones",
        "rating": 5,
        "text": "Pam is friendly and very professional, and knows how to handle my dog and put him at ease. At first, my dog was nervous and a bit worried, but after a couple of sessions, once my dog had got use to the routine, he now gets really excited about going, and barks all the way there. His mobility has improved immensely.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1718692388"
      },
      {
        "authorName": "Andy Bunting",
        "rating": 5,
        "text": "We’ve been taking our GSD’s Harry  and amber there since Pam opened. Excellent service.",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1541176270"
      },
      {
        "authorName": "Shaun Bowen",
        "rating": 5,
        "text": "Great results from Pam with Kibo the Husky Labrador cross. She gets excited to get every week!",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1603548706"
      },
      {
        "authorName": "Meg Conroy",
        "rating": 5,
        "text": "Pam and company have been fantastic with my old labrador Lily. Lily can be a little sensitive with change. But their patience and expertise have helped her relax and enjoy the process. Plus, the squeezy cheese helps 😋.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1689195392"
      },
      {
        "authorName": "Tom Campbell",
        "rating": 5,
        "text": "My bulldog has benefited greatly from hydrotherapy she used to limp after not alot of  play or walking due to hip dysplasia, now she is a proper trooper tons more energy faster and 🤞 hasn't hurt herself or suffered from her hips in weeks. Thankyou Sarah and Pam I know she is grateful as are we 🙏",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1693340605"
      }
    ]
  },
  {
    "id": "4af5d97d-fbda-405f-b059-e85bf3280271",
    "googlePlaceId": "ChIJ3Zhc_Suxe0gRpiJ1YDU_LSA",
    "googleMapsUrl": "https://maps.google.com/?cid=2318578881649779366",
    "name": "K9 Swim mcr LTD",
    "slug": "k9-swim-mcr-ltd",
    "category": "Pet groomer",
    "address": "50 Graver Ln, Newton Heath, Manchester M40 1QW, United Kingdom",
    "city": "Manchester",
    "region": "England",
    "postcode": "M40 1QW",
    "phone": "+44 161 681 0096",
    "website": "https://www.k9swim.com/",
    "rating": 4.8,
    "reviewCount": 307,
    "latitude": 53.4958083,
    "longitude": -2.1674689,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ3Zhc_Suxe0gRpiJ1YDU_LSA/image-1776467455563-fb3027ff.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "hydrotherapy",
      "confidence building",
      "lifejackets provided",
      "dog drying",
      "polite staff",
      "dog exercise",
      "nervous dog"
    ],
    "reviews": [
      {
        "authorName": "Andrew O'DONNELL",
        "rating": 5,
        "text": "Barney our 8 yr old Yorkshire terrier has benefited immensely from his weekly swims at K9 following a cruciate ligament operation.\nAll the staff are lovely and really friendly. I highly recommend this great facility especially given Barneys improvement. 🐾",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770051286"
      },
      {
        "authorName": "Caitlyn Farrar",
        "rating": 1,
        "text": "Brought my dog here for the first time for a groom. Firstly the appointment stated it would be a half an hour slot so ended up turning up early to be told he’s not ready yet. I was told it would be at least an hour for him to be done. I came back half hour later to be told again he’s still not ready. 1 hour and 45 minutes later I received the call to say he was ready by the way I was parked outside that whole time. At first glance his cut was ok, he smelt lovely and he was very happy to see me. After getting home and having some cuddles I noticed one of his eyes (outer pupil) was bloodshot. My first initial thought was maybe he got some shampoo in his eye that caused it to irritate. The next day I looked at his eye again and it was significantly worse! Could not see one bit of white around his pupil due to the bloodshot, his eye was regularly oozing. Obviously this caused me concern so I took him to the vets that day and upon examination the vet could see part of his eye lid was cut potentially from the scissors or blade. I was absolutely raging to find out this as I specifically asked the groomer how was he when i collected him and her words was he was fine but wasn’t a fan of the hair dryer. There was no mention of clipping his eye. It was evident this was done in that session. I’m absolutely raging £50 down the drain and I’ve had to pay double that on a emergency vet appointment and eye drops for him. Would avoid grooming here, got nothing to say about the pool as never used it but as for the grooming it’s a BIGFAT NO! Not gone in demanding a refund would rather warn other people from using this so called  “luxury grooming salon”. Also if anyone of the employees would like to question this review you have my number👍",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1772671739"
      },
      {
        "authorName": "Dog House Mcr",
        "rating": 5,
        "text": "LOVE K9 Swim! After your induction - get your swim wear on and get in the water with them next time :-) Let’s support small local businesses who give their all. Ignore 1 star reviews by owners who have not introduced their dogs to water before booking and then blame staff for their dog's pre-existing anxiety issues! KNOW your dog and it's bred. Go into water with them in summer ASAP,  young - and if they don't like water - end of ! If your dog needs hydrotherapy and has never swam before - K9 swim still work magic, and even get bulldogs in with a life jacket - who would otherwise sink ! :-)",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772392309"
      },
      {
        "authorName": "Julie Threlfall",
        "rating": 5,
        "text": "My 15 year old Lurcher has been  coming for regular sessions, she only has 15 minutes assisted swims but it's enough to keep her active.\nThe staff are lovely and were very helpful when I had to change her appointment recently.\nIt's the best pool we've been to, some have been too small for a large dog but this one has lots of room to move about in.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1755603543"
      },
      {
        "authorName": "Frances Chorley",
        "rating": 5,
        "text": "We've been taking Peanut since he was 10months old, he absolutely loves going and he can't wait to jump in the water.\nAbsolutely fantastic team, so helpful and friendly, they've always made us feel so welcome 💛",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729205803"
      }
    ]
  },
  {
    "id": "076b5bef-135b-4fdf-b039-a9c833bb7924",
    "googlePlaceId": "ChIJDWd7Iw6jdUgRCArbtt_YYQU",
    "googleMapsUrl": "https://maps.google.com/?cid=387829498287688200",
    "name": "KB Vet Physio",
    "slug": "kb-vet-physio",
    "category": "Physical therapist",
    "address": "Blakewood Stables, Beaglejack Barn, Black Gate Ln, Pulborough RH20 1DD, United Kingdom",
    "city": "Pulborough",
    "region": "England",
    "postcode": "RH20 1DD",
    "phone": "+44 7896 465839",
    "website": "https://www.kbvetphysio.com/",
    "rating": 5,
    "reviewCount": 27,
    "latitude": 50.9858764,
    "longitude": -0.4979315,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJDWd7Iw6jdUgRCArbtt_YYQU/image-1776467446431-af5d67cf.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "dog physio",
      "spinal surgery recovery",
      "dog care",
      "arthritis treatment",
      "maintenance sessions",
      "knowledgeable staff",
      "clear explanations",
      "daily exercises"
    ],
    "reviews": [
      {
        "authorName": "Catherine Gent",
        "rating": 5,
        "text": "Katherine was very knowledgeable , and empathetic towards my nervous dog. She explained the exercises and activities clearly so that we were able to continue practising between sessions. Her advice and support has led to really strong improvement post surgery.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762522488"
      },
      {
        "authorName": "Della",
        "rating": 5,
        "text": "Katherine at KB Vet Physio has supported us in getting our hound back to his full energetic and active self after presenting lame and unable to walk. He was a complex case, but she guided us through every stage with understanding and a comprehensive rehab programme, where we saw visible progress after each session. Fully recommended and our go to vet physio.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761655721"
      },
      {
        "authorName": "Ellie O'Donnell",
        "rating": 5,
        "text": "Katherine is super knowledgeable and knows dogs inside out.\nShe analysed each nuance of my dogs and constructed a detailed plan to help with their issues.\nShe was attentive and helpful to their individual needs and knew exactly\nhow to help.\nI thoroughly recommend.",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1759260916"
      },
      {
        "authorName": "Emily de Luzy",
        "rating": 5,
        "text": "Katherine was truly fantastic. We have a very sensitive cockapoo, Cornelius who needed to relearn walking on four legs.\n\nCornelius immediately warmed to Katherine (as did we) and within the first few sessions we saw huge improvements in his progress. Katherine always made sure we left each appointment feeling confident and clear on how to deliver his daily exercises and the demonstration videos she provides are super thorough and easy to follow if you need a recap when at home.\n\nAfter a 10 month journey he is fully recovered and living a normal, energetic life with no pain thanks to Katherine’s support.\n\nBoth myself and Cornelius would highly recommend Katherine and we are forever grateful for her support. 🐶",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751097706"
      },
      {
        "authorName": "Jenny holt",
        "rating": 5,
        "text": "My collies have really enjoyed their physio session.  Katherine makes it very relaxed for them and me.  The office space and courtyard are perfect for examining and there is an abundance of kit if needed. She is mindful of their different characters and treats them accordingly.  I have found her very thorough and extremely knowledgeable.  She explains and demonstrates the homework  exercises and ensures you understand.  She very quickly follows up with all her notes so you can’t forget.  My youngster has improved and I received great advice about putting weight on him. Looking forward to our next session and wouldn’t hesitate to recommend.  The setting is beautiful too.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751302152"
      }
    ]
  },
  {
    "id": "7f85d737-c870-410a-8d96-bb4c520b7816",
    "googlePlaceId": "ChIJbyS-E1Lb3kcRi0u74T5HLO0",
    "googleMapsUrl": "https://maps.google.com/?cid=17090113021364882315",
    "name": "Kent canine rehabilitation Ltd",
    "slug": "kent-canine-rehabilitation-ltd",
    "category": "Hydrotherapy center",
    "address": "Unit 14, the creative enterprise quarter, Javelin Way, Ashford TN24 8DE, United Kingdom",
    "city": "Ashford",
    "region": "England",
    "postcode": "TN24 8DE",
    "phone": "+44 7837 570173",
    "website": "https://www.kentk9rehab.co.uk/",
    "rating": 5,
    "reviewCount": 5,
    "latitude": 51.1508777,
    "longitude": 0.8899912,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJbyS-E1Lb3kcRi0u74T5HLO0/image-1776467438779-e4efee0d.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Swimming Pool",
      "Treadmill"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "knowledgeable staff",
      "treadmill",
      "patient staff",
      "swimming"
    ],
    "reviews": [
      {
        "authorName": "Jenni Newman",
        "rating": 5,
        "text": "Lovely and friendly, Charlene is very welcoming, along with her mum!\nStan had ligament surgery in August, and started hydro therapy after the vet gave the go ahead. He had 6 weeks on the treadmill which he took to very well, and 4 weeks in the pool. He enjoyed the treadmill but loved the swimming!\nWould highly recommend Kent Canine Rehabilitation to everyone I meet.\nWe will now be going to 1 season a month just because Stan loves swimming so much.\nCharlene is very patient with my anxiety regarding stan’s lump after the surgery, reassuring me week after week!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765022604"
      },
      {
        "authorName": "Samantha Bishop",
        "rating": 5,
        "text": "Charlene, Rebecca & Julie are so knowledgeable and just amazing !\nReggie was diagnosed with hip dysplasia in 2024 and has been attending Treadmill and Pool sessions ever since. The improvement he has made has been unreal and the support and advice the team offer is invaluable. They cater for an understand every individual dogs needs and bend over backwards to ensure that they feel safe and secure and confident in the water. Reggie has always been funny around different floor textures wasn’t a problem. They provided Mats to give him his confidence and his now started to walk on the floor without them! Reggie was our first dog and him being diagnosed with hip displaced at seven months was really scary, but the team have supported us not only with Reggie’s needs but with advice and help for us as owners too. They are just amazing !",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770015075"
      },
      {
        "authorName": "Jess Ottaway",
        "rating": 5,
        "text": "The best hydrotherapy centre I have been too. The ladies are so patient and so knowledgeable we go for fitness swims I have been to different places that just let the dogs swim Charlene and Becky do not do this they work them. They have also been so patient and spent so much time getting my young dog to swim confident I would be lost without them",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764364834"
      },
      {
        "authorName": "Meg Knight",
        "rating": 5,
        "text": "Absolutely brilliant. All morning movements and paw placements are carefully monitored and placed throughout treadmill session. Improved already. Pool also available. I highly recommend. Thank you.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1747579124"
      },
      {
        "authorName": "Clare Ball",
        "rating": 5,
        "text": "They were excellent with my nervous dog. Almost got him swimming but alas it was not to be. Definitely recommend them though.",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1774978908"
      }
    ]
  },
  {
    "id": "678acf67-5a42-4b03-b9d5-cf698ebb6ea0",
    "googlePlaceId": "ChIJrRSDYPrN2EcRDoWwaLFc1Ms",
    "googleMapsUrl": "https://maps.google.com/?cid=14687466201797395726",
    "name": "Kent Canine Swim",
    "slug": "kent-canine-swim",
    "category": "Swimming facility",
    "address": "Bunters Hill Rd, Cliffe Woods, Rochester ME3 8EU, United Kingdom",
    "city": "Rochester",
    "region": "England",
    "postcode": "ME3 8EU",
    "phone": "+44 1634 553990",
    "website": "https://www.kentcanineswim.co.uk/",
    "rating": 5,
    "reviewCount": 49,
    "latitude": 51.42185,
    "longitude": 0.4905268,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJrRSDYPrN2EcRDoWwaLFc1Ms/image-1776467455780-31de62fd.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "helpful staff",
      "encouraging staff",
      "swimming lessons",
      "spaniel",
      "encouraging dogs",
      "welcoming atmosphere",
      "confidence building"
    ],
    "reviews": [
      {
        "authorName": "Secret Visitor",
        "rating": 5,
        "text": "Took my four beloved spaniels for their first session with Jess today. The experience exceeded my expectations totally.\nJess is knowledgeable and professional,\nShe showed me how to get the best experience for the boys and they loved it!  All four didn’t make a sound on the hour long journey home, they were all worn out!\nThank you Jess, we will be back soon",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772042377"
      },
      {
        "authorName": "Rox Summers",
        "rating": 5,
        "text": "I took my dogs here yesterday, It was such great fun, for the dogs and myself. Jess was incredible, so kind and patient.\nMy boy dog who is usually confident in the water wasn't sure at all, she went out of her way to help me with him. My younger dog must have been a mermaid in a previous life because I couldn't get her out of there.\n\nFun all round and super worn out pups! A big win in a border collie household. 🥳😁",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1773085100"
      },
      {
        "authorName": "Jo Moon",
        "rating": 5,
        "text": "Jess was so welcoming and encouraging.  We had such a better experience with her guidance and assistance (and another pair of hands) I'd highly recommended not trying to do your dogs first swim alone. We had so much fun, he went from being unsure and unimpressed when I lifted him, to doing laps and jumping in! He looked very disappointed when we got out to go home!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771856983"
      },
      {
        "authorName": "K Simpkins",
        "rating": 5,
        "text": "This was our first time here and we loved it. Parking is tight m, but ok if only one car. Just be careful of cars going down the lane. There was a field opposite where we could have a tinkle before going in. We were met at the door and once in given instructions. We opted to go in with our dog, but the owner was on hand to monitor our dog and gave lots of advice as our dog has injuries from where he was a working dog. There is a small screened area to change after. Lots of toys and clean.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768674016"
      },
      {
        "authorName": "All about Dogs",
        "rating": 5,
        "text": "My pup Skipper can be very nervous of new people but Jess took her time and was incredibly patient with him! Skipper loves swimming and to watch him enjoy it with another person was amazing 🤩 can’t thank Jess enough for her patience and love towards ensuring Skipper had the best experience with her :)",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760212528"
      }
    ]
  },
  {
    "id": "d46e6b02-4cd2-4594-99cb-ac6373459dd2",
    "googlePlaceId": "ChIJNa_Svrz5cEgRSjaT1fNCnsA",
    "googleMapsUrl": "https://maps.google.com/?cid=13879604716630128202",
    "name": "Malvern Canine Hydrotherapy Centre",
    "slug": "malvern-canine-hydrotherapy-centre",
    "category": "Rehabilitation center",
    "address": "The Yard at Crowcroft, Malvern WR13 5ED, United Kingdom",
    "city": "Malvern",
    "region": "England",
    "postcode": "WR13 5ED",
    "phone": "+44 7770 349341",
    "website": "https://www.malverncaninehydro.co.uk/",
    "rating": 5,
    "reviewCount": 16,
    "latitude": 52.1497748,
    "longitude": -2.3441964,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJNa_Svrz5cEgRSjaT1fNCnsA/image-1776467390037-302291ab.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Ali",
        "rating": 5,
        "text": "Following an accident that left our 11-year-old Sprocker Spaniel, Sam, with a spinal injury, our vet recommended Emma for treatment. She came highly recommended as an expert in her field, and from our experience, she has been exceptionally knowledgeable, professional, and genuinely caring in her approach. Emma carried out a thorough and thoughtful assessment of Sam’s injury and gently helped him build confidence working in the water. Through her work, Sam’s strength and overall condition have improved significantly, and we continue to work with her to maintain his progress. Sam absolutely adores Emma and her team, and I wouldn’t hesitate to recommend her to anyone seeking hydrotherapy support for their dog.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768759493"
      },
      {
        "authorName": "Georgina Lott",
        "rating": 5,
        "text": "I’ve been taking my dog Eadie to Emma for just over a year following an illopsoas injury. Emma is extremely knowledgeable, using a variety of techniques to support her gain strength and muscle back as Eadie competes nationally at dog agility. Eadie loves the water treadmill and I have continued with her weekly sessions due to the huge improvement I have seen in Eadie’s muscle strength.\n\nMore recently my puppy Eva has started learning to swim in the large hydrotherapy pool. Emma has been extremely patient working with a nervous puppy who was initially reluctant of water. Eva is now a confident swimmer, jumping in and enjoying retrieving the floating toys.\n\nEmma treats all dogs as if they were her own, with love and kindness. Both my dogs love to go to swimming with Emma. Both the pool and treadmill are clean and warm, dogs have a shower after their swim and are then blow dried to make sure they are dry after their swim, especially with the weather being so cold.\n\nEmma and the team at Malvern Canine Hydrotherapy are extremely knowledgeable and fully qualified.\nThe centre has convenient parking right outside and is easy to find.\n\nWhether your dog is recovering from an injury, has a life long disability such as arthritis or just wants to have fun and learn to swim I cannot recommend highly enough Emma and the team at Malvern Canine Hydrotherapy. They are simply outstanding.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1700477938"
      },
      {
        "authorName": "Karl Lacey",
        "rating": 5,
        "text": "Our Spaniel Brie has been visiting Emma & Jo for a number of years to keep on top of her hip issues.  Brie loves going and spending time on the treadmill.\nEmma & Jo are friendly and offer great advice. Brie also loves the sausage roll she once stole from the desk!!!",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1700509245"
      },
      {
        "authorName": "Kim Cumbley",
        "rating": 5,
        "text": "Our 17 year old lurcher was starting to have issues with mobility in his back legs and we were recommended Malvern Canine Hydrotherapy by our vets.  We met Emma and she talked us through what we could expect. She was so kind, gentle and loving with Jake and helped him greatly.  We cannot thank Emma and Jo enough for giving him better mobility, quality of life and extra time with us, it meant he could have a few more holidays and still walk on the beach which he  loved.  We are so very grateful for this. I  would not hesitate to recommend Emma and Jo. Thank you so much for all you did for Jake and ourselves.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1701110232"
      },
      {
        "authorName": "Tillz Tillsley",
        "rating": 5,
        "text": "A superb facility, with friendly, knowledgeable, passionate and honest Staff. Good sized Hydrotherapy pool and water treadmill.\nWe requested our vet refer one of our dogs to Emma at Malvern Canine Hydrotherapy due to him experiencing pain in his hips. (The vet had completed investigations and decided no treatment was necessary). Within a couple of sessions Emma wasn't happy with our fur babies diagnosis and strongly suggested we got a second opinion. We did and Bailey received a much needed hip replacement.\nBailey's Hydrotherapy is essential to his ongoing recovery and keeping him fit and strong. Without Emma and Jo at Malvern Canine Hydrotherapy I don't think Bailey would still be here.\nCan't thank or praise them enough. No hesitation in recommending Emma, Jo and this facility.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1700503099"
      }
    ]
  },
  {
    "id": "01315a71-fc84-4726-8b5e-399896ba247b",
    "googlePlaceId": "ChIJA3xqtXJYeEgRnzTybZ2bKfI",
    "googleMapsUrl": "https://maps.google.com/?cid=17449649331680457887",
    "name": "Millhaven Canine Rehabilitation",
    "slug": "millhaven-canine-rehabilitation",
    "category": "Rehabilitation center",
    "address": "Elizabeth Cl, Glentworth, Gainsborough DN21 5DZ, United Kingdom",
    "city": "Gainsborough",
    "region": "England",
    "postcode": "DN21 5DZ",
    "phone": "+44 7486 460550",
    "website": "https://www.millhavencaninerehab.com/",
    "rating": 5,
    "reviewCount": 20,
    "latitude": 53.3796892,
    "longitude": -0.5806799,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJA3xqtXJYeEgRnzTybZ2bKfI/image-1776467441332-27ba47d7.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Sophie Chandler",
        "rating": 5,
        "text": "I cannot recommend the team at Millhaven enough. Our dog was diagnosed with bilateral elbow dysplasia in September 2024. We got him straight into Millhaven for fortnightly hydrotherapy swims. Kobe was a little nervous at first but they took their time and went at his pace. He gets so excited when we pull up. The team go above and beyond with both humans and the pups! They’re super knowledgeable and helpful with any concerns we may have regarding Kobe’s care. Highly recommend ⭐️⭐️⭐️⭐️⭐️",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769169720"
      },
      {
        "authorName": "Stoo Radford",
        "rating": 5,
        "text": "I cannot recommend Millhaven canine hydrotherapy rehabilitation centre enough! After my dog’s recent diagnosis, I was looking for professional post-operative recovery and dog physiotherapy and I’m so glad I found this place.\n\nThe facility is top-notch, featuring a pristine hydrotherapy pool and a state-of-the-art underwater treadmill that have worked wonders for my dog’s joint mobility and muscle strengthening. We’ve seen a massive improvement in his arthritis management and overall fitness.\n\nA special shout-out to the two incredible ladies on staff. They are both so friendly and knowledgeable, taking the time to explain the science behind the water therapy and tailoring every session to my dog’s specific needs. They truly have a gift for making dogs feel calm and safe. If you’re looking for expert animal rehabilitation or veterinary referral services, this is the best place to go!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771774874"
      },
      {
        "authorName": "Karen Smith",
        "rating": 5,
        "text": "Our Leonberger cross has improved so much since starting hydrotherapy with Harriet and the team. They are so patient with him, understanding his needs and encouraging him to achieve his best. We get lots of feedback and support and can’t praise them highly enough.\nThe facilities are excellent, clean and well stocked with the necessary equipment. Our boy is reactive, and 60kg of stubbornness but the team have won him over.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768504236"
      },
      {
        "authorName": "Amanda Oldham",
        "rating": 5,
        "text": "I cannot praise everyone enough at Millhaven for their knowledge,  advice  and kindness.  We have a beautiful 7 month old St Bernard puppy who sadly has bilateral hip dysplasia which requires both hips being replaced.  Millhaven was recommended to me by our dog trainer and I can honestly say it was the best decision we have ever made to give Tank his best chance at recovery and rehabilitation.  The cost is extremely reasonable which enables us to take him as often as is needed. Thank you to everyone at Millhaven and we really appreciate you and feel you love Tank as much as we do. Xx",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766427571"
      },
      {
        "authorName": "Perfect Silhouette Hairdressing",
        "rating": 5,
        "text": "I have taken both my dogs for treatment at Millhaven and most recently my dachshund Mavis after having double spinal surgery for grade 5 IVDD. Shes having to learn to walk and her coordination again and the millhaven team in both hydro and physio have been incredible! She wouldn't be where she is without them and continues to go from strength to strength. They're really great with her even though shes a bit crazy, and give great advice throughout her recovery, helping us along the way navigating it all. I wouldn't hesitate to recommend them to literally anyone!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767632190"
      }
    ]
  },
  {
    "id": "f96b3219-7d12-44bc-973f-6781d33d369f",
    "googlePlaceId": "ChIJN-MbyW3Z2EcRhqJj72lG3hk",
    "googleMapsUrl": "https://maps.google.com/?cid=1864004716579758726",
    "name": "Moredge Hydrotherapy Centre",
    "slug": "moredge-hydrotherapy-centre",
    "category": "Animal hospital",
    "address": "Unit 2/Laurence Ind Est/Eastwoodbury La, Eastwoodbury Ln, Southend-on-Sea SS2 6RH, United Kingdom",
    "city": "Southend-on-Sea",
    "region": "England",
    "postcode": "SS2 6RH",
    "phone": "+44 1702 808813",
    "website": "https://www.moredge.co.uk/",
    "rating": 5,
    "reviewCount": 73,
    "latitude": 51.5676176,
    "longitude": 0.6827181,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJN-MbyW3Z2EcRhqJj72lG3hk/image-1776467382300-17a91a70.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "hip dysplasia",
      "spinal",
      "recovery",
      "caring staff",
      "arthritis",
      "injury",
      "swimming"
    ],
    "reviews": [
      {
        "authorName": "Chloe Sheil",
        "rating": 5,
        "text": "I have recently started taking my golden retriever to Moredge following a spinal injury. After speaking with them on the phone, they contacted the vet for referral and had my boy booked in within the week. The first session is a little longer and slightly more expensive as they do a complete history and a half hour session to begin with. The staff are friendly, patient, amazing with my boy and explain what they are doing and why. I would highly recommend anyone to use their service. They have the underwater treadmill as well as a pool. The pricing is very reasonable for the difference it has made in recovery.",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758098641"
      },
      {
        "authorName": "jenna Good",
        "rating": 5,
        "text": "Wonderful staff. Kind and caring. Would highly recommend them. Shout out to Kerry for looking after our fluff-ball so well! 🥰",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769109797"
      },
      {
        "authorName": "Matthew Brittain",
        "rating": 5,
        "text": "A very friendly, helpful and professional service. They really care for our dog.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765460925"
      },
      {
        "authorName": "Tina",
        "rating": 5,
        "text": "My dog has been going to Moredge for  over 6 months , after a spinal injury. I would and do recommend them to everyone I know with a dog. Just after 2 sessions on the treadmill he was so much better. Now he goes more for fun and fitness. He loves swimming with Jess, she's helped him through all the tough times. Now she's his swimming buddy. Thank you. For everything you've done,to help him recover. x",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1529407336"
      },
      {
        "authorName": "Michelle Saunders",
        "rating": 5,
        "text": "I take my dog for hydrotherapy here (swimming lessons to her) as she is an older dog, has arthritis,  double hip dysplasia, old cruciate ligament injury, and a touch of doggy dementia.\n\nPoppy was scared at first, not knowing what to expect, but after the 1st session, she loves it! She gets to swim and play fetch in the pool. The water supports her joints. Her walks now are short and tend to go in squares (dementia), so I'm sure she gets bored. We have a huge garden but she doesn't want to play... when in the pool, she is like her younger self.\n\nWe usually have Zoe, who is very professional and an all-around lovely person.\n\nIf it were cheaper, I'd take her more often just because she loves it.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729367409"
      }
    ]
  },
  {
    "id": "8b572c79-368c-4426-9bcd-c30fbce31e28",
    "googlePlaceId": "ChIJXUxu2B18fkgR3IGER9qvEuI",
    "googleMapsUrl": "https://maps.google.com/?cid=16290276154190103004",
    "name": "North East Hydrotherapy & Animal Rehabilitation",
    "slug": "north-east-hydrotherapy-animal-rehabilitation",
    "category": "Hydrotherapy center",
    "address": "Unit 1E, Drum Industrial Estate, Chester-le-Street DH2 1AG, United Kingdom",
    "city": "Chester-le-Street",
    "region": "Scotland",
    "postcode": "DH2 1AG",
    "phone": "+44 191 410 0555",
    "website": "https://www.nehydro.co.uk/",
    "rating": 5,
    "reviewCount": 32,
    "latitude": 54.8704994,
    "longitude": -1.5888315,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJXUxu2B18fkgR3IGER9qvEuI/image-1776467393369-07131ab6.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Treadmill",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "laser therapy",
      "muscle conditioning",
      "caring staff",
      "friendly staff",
      "pet care",
      "laser",
      "team"
    ],
    "reviews": [
      {
        "authorName": "J G",
        "rating": 5,
        "text": "Just started bringing my boy Zeus after he's had a leg operation for a torn cruciate ligament and had a metal plate and six screws put in, even though he was a bit nervous to start he did great he's had two sessions and I can already tell the difference in his muscle strength such a great place for dogs recovering I also got him laser to help the recovery process! I was wondering how'd he'd get on to start as he's 71kg corso and with being nervous I thought he'd try to jump out ect but the staff here are extremely confident will all dog breeds and experienced in what they do don't let the size or breed of your dog out you off they've got it covered couldn't thank them enough will be back Thursday",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762711681"
      },
      {
        "authorName": "Luka Atkinson",
        "rating": 5,
        "text": "Sarah, Lily and David are genuine animal lovers who only want the best for their clients. I would recommend them to anyone needing canine hydrotherapy.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1749074666"
      },
      {
        "authorName": "Karen Elliott",
        "rating": 5,
        "text": "Fantastic hydrotherapy and k laser works wonders on our bernese mountain dog walter , he loves coming here staff are tremendous , professional and knowledgeable wouldnt trust anyone else with walter",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766669541"
      },
      {
        "authorName": "Siena Harvey",
        "rating": 5,
        "text": "I've been going here for 3 years with my furry friend and can't fault it. Lily and Sarah are wonderful, they make every appointment really personal and Luna my husky enjoys her time there too",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1733145687"
      },
      {
        "authorName": "John Twist",
        "rating": 5,
        "text": "The service here is fantastic, my dog Sasha absolutely loves going for her hydro therapy and laser treatment.  The customer service is second to none, and the staff are super friendly (with both me and my dog) and know exactly what they are doing. Highly recommend, easy 5 stars.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1629845105"
      }
    ]
  },
  {
    "id": "412a89c2-9038-417a-b2f6-941c11adcdf8",
    "googlePlaceId": "ChIJvbuw5_v1fkgROjGOUVHZ4sw",
    "googleMapsUrl": "https://maps.google.com/?cid=14763601471757758778",
    "name": "North East Veterinary Physiotherapy",
    "slug": "north-east-veterinary-physiotherapy",
    "category": "Physical therapist",
    "address": "The Dodgeball Centre Part of the Iceland Building, Hartlepool TS24 0RE, United Kingdom",
    "city": "Hartlepool",
    "region": "Northern Ireland",
    "postcode": "TS24 0RE",
    "phone": "+44 7549 921280",
    "website": "https://northeastvetphysio.com/",
    "rating": 5,
    "reviewCount": 25,
    "latitude": 54.7041813,
    "longitude": -1.2220365,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJvbuw5_v1fkgROjGOUVHZ4sw/image-1776467435861-0953a111.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "animal physiotherapy",
      "hydrotherapy",
      "spinal surgery recovery",
      "arthritis treatment",
      "dog at ease",
      "improved strength",
      "knowledgeable staff",
      "home exercises"
    ],
    "reviews": [
      {
        "authorName": "June Ewen",
        "rating": 5,
        "text": "My 8 years old Lhasa Apso Jack developed a slipped disc some weeks ago, he had spinal surgery as an emergency and the neurosurgeon was not able to predict how successful long term the surgery would be. We were lucky to be recommended the amazing Lucinda. Jack has had weekly visits for Hydrotherapy since that time and his recovery has been amazing. It would be difficult now to determine that there had been anything wrong with him. How wouldn't you describe Lucinda.... friendly, approachable, knowledgeable, bubbly with a passion for her those in her care. There's no doubt she adores her 'patients' and is dedicated to her craft. I was sad when Jack's treatment was completed as I had enjoyed my visits too. I would strongly recommend Lucinda without reservation. She is keeping Jack on her books for monthly maintenance visits and I look forward to our chats in the future. Thank you Lucinda for repairing my little lad, I will be forever grateful to you.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1734374545"
      },
      {
        "authorName": "Raven Firedragon",
        "rating": 5,
        "text": "I can't recommend Lucinda enough and the way she works is fantastic. Before she even starts any session or exercise on your dog she plays with them just to put your dog at ease and rather than 'forcing' your dog to do something she asks them by playing and offering treats\n\nMy husky Onyx has arthritis in his back legs and starting on his spine and I was recommended physio for him by a friend. So I decided that strengthening his muscles would be the best route before I go down the vet pain medication road. Well Onyx has had only a few sessions and the difference so far is like night and day. Onyx still has 'bad days' but with the exercises that Lucinda has given me and the lifestyle changes she has suggested is making his stiffness more manageable and therefore making his life better.\n\nThank you Lucinda and Onyx will continue to visit you for as long as he needs it\n\nWags n Woofs from Onyx too xxx",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1679925509"
      },
      {
        "authorName": "Aime Baxter",
        "rating": 5,
        "text": "Couldn’t be happier with the sessions we had with Lucinda - our dog has made such progress during her hydro and physio sessions and has gained so much more strength and function in her leg following cruciate ligament surgery. She made both myself and my dog feel relaxed and happy and made her explanations in what our dog needed understandable and the exercises manageable at home, too. We were almost sad to be discharged! Would highly recommend - Lucinda offers an incredible service!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1731229570"
      },
      {
        "authorName": "Kelly Small",
        "rating": 5,
        "text": "My dog Raffy needed physio following an Ischemic Myelopathy (stroke of the spinal cord). Lucinda was fabulous in offering treatment options to rehabilitate Raffy to be able to walk again, comfortably and be free from pain. Starting with stretching program and hydrotherapy Raffy improved week on week. Amazing recovery and friendly approach, Raffy loved her sessions. 5 star service from a dedicated and knowledgeable practitioner.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1752508916"
      },
      {
        "authorName": "Laura Ainger",
        "rating": 5,
        "text": "I brought my old boy Riley to Lucinda for rehab after tplo surgery to his hind leg. Riley also has problems with his front left elbow. In addition he is quite nervous and doesn't really respond to strangers. Lucinda was so patient with him to win him over so that he would allow her to treat him. Several weeks later, after physio and laser treatment, Riley is his best self again. Both Riley and I couldn't be happier. Have already (and continue to) recommend Lucinda.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1736866632"
      }
    ]
  },
  {
    "id": "03226985-9b1f-422e-9af4-dbbd835907f8",
    "googlePlaceId": "ChIJRcrGlzVqeUgRDNqXMWSiabQ",
    "googleMapsUrl": "https://maps.google.com/?cid=13000100350594112012",
    "name": "Paddlin Paws",
    "slug": "paddlin-paws",
    "category": "Hydrotherapy center",
    "address": "29b Southgate, Pontefract WF8 1LN, United Kingdom",
    "city": "Pontefract",
    "region": "England",
    "postcode": "WF8 1LN",
    "phone": "+44 1977 780043",
    "website": "https://www.paddlinpaws.com/",
    "rating": 4.9,
    "reviewCount": 134,
    "latitude": 53.6898758,
    "longitude": -1.3122671,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJRcrGlzVqeUgRDNqXMWSiabQ/image-1776467461349-9dd5e2eb.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "fun swims",
      "hydrotherapy",
      "dog swimming",
      "dog wash",
      "exercise for dogs",
      "welcoming atmosphere",
      "dog treats",
      "clean facilities"
    ],
    "reviews": [
      {
        "authorName": "Christina Anghelus",
        "rating": 5,
        "text": "Fantastic experience at Paddling Paw!\nThe facilities are spotless and calm, and the whole session felt safe and well-structured. Huge thanks to Simba, who guided our dogs from start to finish with patience, confidence, and genuine care. Our dogs left happy and relaxed, which says it all. Highly recommend! 🐾",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772222724"
      },
      {
        "authorName": "Cee Collins",
        "rating": 5,
        "text": "I’ve been coming here with my dog for almost 9 months for fun swims and cannot recommend this place enough. Tilly swims with Hannah and always has the best time. There is such a personal and caring touch to every aspect of the swim, from being welcomed into the pool to the shower at the end. They also have a fantastic shop that has me sorted for doggy presents year-round. Professional, friendly and the highlight of mine and my dog’s week!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764580617"
      },
      {
        "authorName": "GG1512",
        "rating": 5,
        "text": "A fantastic experience here today for a Dachshund Swimming Party (organised by Lavender House). All the staff were brilliant, so accommodating and friendly and really put so much effort into making it a festive treat for doggies and their humans.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765751118"
      },
      {
        "authorName": "Jess G",
        "rating": 5,
        "text": "Every member of the Paddlin Paws team truly cares and did everything they can to help make the experience for our dog great. The team have welcomed Hank and his quirks and he always has a wonderful time. Highly recommend for all for fun, not just health!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763198297"
      },
      {
        "authorName": "Greta Burke",
        "rating": 5,
        "text": "Tucker has been going to Paddlin Paws for a little while now. We originally started as he was experiencing some limping and weakness in one of his front legs, so hydrotherapy was advised to use by the vet. The very first visit was scary for Tucker but Simba was great with him and made sure he was comfortable in the pool. And now a few months down the line he’s no longer limping and is overjoyed with his time in the pool. Hannah has also been fantastic with him and he’s absolutely ecstatic to see her and get in the pool! And just to add to that a little picture from one of our sessions with Hannah 😊",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756547746"
      }
    ]
  },
  {
    "id": "d3124f26-99ed-48c5-84d5-80b54f45ec02",
    "googlePlaceId": "ChIJk3k9k8ssXkgRHjhkCaSTh6U",
    "googleMapsUrl": "https://maps.google.com/?cid=11927664470855530526",
    "name": "Paddling Pups",
    "slug": "paddling-pups",
    "category": "Hydrotherapy center",
    "address": "75 Blackfort Rd, Tyrone, Omagh BT78 1PT, United Kingdom",
    "city": "Omagh",
    "region": "Northern Ireland",
    "postcode": "BT78 1PT",
    "phone": "+44 28 8225 9401",
    "website": "https://paddlingpups.com/",
    "rating": 5,
    "reviewCount": 28,
    "latitude": 54.5611176,
    "longitude": -7.301694,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJk3k9k8ssXkgRHjhkCaSTh6U/image-1776467401874-85de6f84.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "laser therapy",
      "dog swimming",
      "spinal injury rehab"
    ],
    "reviews": [
      {
        "authorName": "Laura O",
        "rating": 5,
        "text": "Claire is a wonderful person who provides exceptional care for your beloved pet. After Luna’s luxating patella surgery, she’s had eight hydrotherapy and laser sessions, and we’re amazed by her progress. Claire’s expertise in animal anatomy is impressive, and she consistently goes above and beyond to ensure your pet’s well-being. I highly recommend her to anyone. For any veterinarians reading this review, this is an incredible service right in your area – please consider referring animals who might benefit. It has transformed Luna’s quality of life, and we are so grateful.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730808593"
      },
      {
        "authorName": "Frank Mc Connellogue",
        "rating": 5,
        "text": "This was our first visit to Claire at paddling pups today. I have to say I was very very impressed with the set-up and the pool.\nClaire was very friendly and her sensitivity and intuition with Pablo was first class.\nWe enjoyed our first session and look forward to returning.\nThank you Claire.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1630944122"
      },
      {
        "authorName": "Eimear Thomas",
        "rating": 5,
        "text": "Clare is amazing, very knowledgeable professional and most of all kind and compassionate with dogs and their owners.\nCould not recommend her highly enough.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1663575745"
      },
      {
        "authorName": "Tom Hamilton",
        "rating": 5,
        "text": "Our miniature Daschund Archie suffered a spinal injury which resulted in paralysis of his lower back and hind legs.  After a week in the vets there was no sign of any movement or pain reaction and we were very concerned about the long term prognosis.  After much debate with the vet and the veterinary nurse a referral was made to Claire at Paddling Pups.  Within a couple of sessions Archie started to regain movement and use of his hind limbs again.  Claire has worked so hard with him and he continues to make tremendous progress and grows stronger by the week.  We now regularly look at him running around the garden and thank our lucky stars that we have such an amazing hydro-therapist in the north west who has literally worked miracles with our wee dog.  Claire worked magic even though the vets held out no long term hope and honestly we felt like they didnt think hydrotherapy would help much but they were SO WRONG!!!  Do not hesitate and go straight to Claire as she will give you her honest opinion and she will committ 150% to do everything she can for your pet and she can literally work miracles!!  We'll never be able to thank her enough for what she has done for our wee family!! Thank you Claire!!",
        "relativePublishTimeDescription": "9 years ago",
        "publishTime": "1476442937"
      },
      {
        "authorName": "Hilda Watson",
        "rating": 5,
        "text": "Fantastic service. Claire is so good with the dogs. Very professional. Would definitely recommend",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1660300888"
      }
    ]
  },
  {
    "id": "25fd3ced-e522-4eaf-9003-2f16322fc133",
    "googlePlaceId": "ChIJt0FGJiUZdEgR0WnuIkU7HfA",
    "googleMapsUrl": "https://maps.google.com/?cid=17302050511552145873",
    "name": "Paddock and Paws Veterinary Physiotherapy",
    "slug": "paddock-and-paws-veterinary-physiotherapy",
    "category": "Physical therapist",
    "address": "Block B, Unit, B22, Grateley Business Park, Grateley SP11 8SH, United Kingdom",
    "city": "Andover",
    "region": "England",
    "postcode": "SP11 8SH",
    "phone": "+44 7429 556999",
    "website": "https://www.paddockandpaws.co.uk/",
    "rating": 5,
    "reviewCount": 8,
    "latitude": 51.1707667,
    "longitude": -1.6267329,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJt0FGJiUZdEgR0WnuIkU7HfA/image-1776467442883-b54d5a68.jpg",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "exercise selection",
      "massages",
      "quality of life",
      "skills and knowledge",
      "patience",
      "labrador"
    ],
    "reviews": [
      {
        "authorName": "Sarah Gouldstone",
        "rating": 5,
        "text": "Our vet referred us to Laura after our staffy developed a limp that wasn’t responding to strict rest or painkillers. She quickly identified a muscle imbalance and in a few sessions we went from 10 minute walks triggering the limp to now back at off lead 1hr walks with no issue doing daily physio exercises with massages at appointments.\n\nCan’t thank Laura enough for giving our girl her quality of life back and a whole raft of new tricks as a result of the physio work! Torvi loves her “Auntie Laura” and we’d recommend her to anybody. Thank you Laura!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1730929395"
      },
      {
        "authorName": "Alicia Casson",
        "rating": 5,
        "text": "Laura has been amazing with our Labrador. Her walking has improved & she’s happier and more comfortable than way before her arthritis diagnosis and subsequent operation. She’s still young and loves walks and was difficult to see her struggling. Since Laura has been working with her we have been able to take her for long walks and she can have short plays with other dogs, which is great.  Laura is patient and kind with her. We are so pleased with her progress. I would recommend Laura to anyone.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1623355546"
      },
      {
        "authorName": "Amy Jobson",
        "rating": 5,
        "text": "Laura has been so patient with my very wary Labrador and took the time to build up a level of trust with her at Elsa’s pace. With Laura’s skills and knowledge she has gone from being very sore and stiff to moving freely and enjoying life again. The tailored exercises have helped build her strength and kept her on an even keel. Laura is so supportive and always at the end of the phone if you have any worries between appointments, I can’t recommend her enough!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1645562078"
      },
      {
        "authorName": "Elizabeth May",
        "rating": 5,
        "text": "Laura recently visited my 15yr old Border Terrier, Sweeney, to aid his recovery from a spinal injury. Her skills and knowledge were excellent. She was very sensitive to Sweeney's needs and gradually built up his strength with a selection of exercises. Laura gave me the confidence to continue with these exercises inbetween visits. She was very approachable and I felt I could contact her with any questions or concerns I may have had, knowing she would be prompt in her reply.\nSweeney loved her visits....high recommendation! He particularly enjoyed his massage sessions! He has made excellent progress, thanks to Laura's input and I would have no hesitation in recommending her work.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1623518462"
      },
      {
        "authorName": "Rachel Busby",
        "rating": 5,
        "text": "Laura has been seeing my Border Collie for the last couple of years in order to keep him fit and in tip top condition for our dog agility. He loves seeing Laura every few weeks and learning the new exercises she tailors for him in order to target different muscles. The improvement in his muscle tone and jumping at dog agility is amazing and after two years he’s finally learned where his back legs are! I would highly recommend Laura.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1623356045"
      }
    ]
  },
  {
    "id": "805ac030-4bee-4e3a-8d6f-e3d8116e6bf1",
    "googlePlaceId": "ChIJj9D_ePyTekgRxmf_rhToBEQ",
    "googleMapsUrl": "https://maps.google.com/?cid=4901297470018906054",
    "name": "PawFit Veterinary Physiotherapy",
    "slug": "pawfit-veterinary-physiotherapy",
    "category": "Rehabilitation center",
    "address": "14 Station Rd, Whitchurch SY13 1RE, United Kingdom",
    "city": "Whitchurch",
    "region": "Wales",
    "postcode": "SY13 1RE",
    "phone": "+44 1948 838739",
    "website": "https://www.pawfit.uk/",
    "rating": 4.9,
    "reviewCount": 30,
    "latitude": 52.9689087,
    "longitude": -2.6767041,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJj9D_ePyTekgRxmf_rhToBEQ/image-1776467450026-98a78d93.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "hip dysplasia treatment",
      "physio treatment",
      "laser therapy",
      "nervous dog handling",
      "arthritic condition",
      "agility training",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Vicky Day",
        "rating": 5,
        "text": "Oat has been to see the team a few times now and they have all been amazing every time!! They’re all so welcoming and patient with him being a little anxious and they all treat him like he’s their own. He loves going to see the pawfit team so much he’s drags us from the car!! Thank you to Hev and the brilliant team for keeping our boy fighting fit! ☺️",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754310037"
      },
      {
        "authorName": "Karen Baddley",
        "rating": 5,
        "text": "Heather is amazing with my dogs. She started treating Kaiser due to him having mild hip dysplasia and knocking poles in agility. He loves his appts, especially the treats and since seeing Heather he is excelling in agility. I've also started taking my young cocker Dylan, he is nervous of being touched. He pulled me into his 3rd session and wanted kisses. He happily lay down to be checked over without me holding him. Thank you for your all your help. Karen and the crazy cockers xx",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1711189706"
      },
      {
        "authorName": "Nicola Drummond",
        "rating": 5,
        "text": "Amazing facilities. Possibly the best veterinary physio ever! Patient and skilled but also super caring and fantastic with my nervous collie who was just terrified of the treadmill. She now just trots straight in. Really turned my life round with my little collie. Now back to competing in agility. Great value. Brilliant all round!!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1637333549"
      },
      {
        "authorName": "Judy Hunt",
        "rating": 5,
        "text": "Heather’s physio treatment gave Honey extra years of mobility and therefore of fun and good quality life. I’m so grateful and especially appreciative of the care given in the last few weeks of Honey’s life.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1726707520"
      },
      {
        "authorName": "itch it and scratch it",
        "rating": 5,
        "text": "Very professional team they all love dogs and have there best interest at heart. Pepper has so much fun when she goes.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1627315027"
      }
    ]
  },
  {
    "id": "6e0b8da9-093c-4ff3-aebf-c20f8b742af8",
    "googlePlaceId": "ChIJVVVVEf-lZUgR91au9wEPOLI",
    "googleMapsUrl": "https://maps.google.com/?cid=12842030838571751159",
    "name": "Paws 4 Fitness",
    "slug": "paws-4-fitness",
    "category": "Physical therapist",
    "address": "Cibyn Industrial Estate, Unit 13, Lon Cae Ffynnon, Caernarfon LL55 2BD, United Kingdom",
    "city": "Caernarfon",
    "region": "Wales",
    "postcode": "LL55 2BD",
    "phone": "+44 7765 238937",
    "website": "https://barrettanimalphysio.wales/",
    "rating": 5,
    "reviewCount": 1,
    "latitude": 53.1390587,
    "longitude": -4.2527274,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJVVVVEf-lZUgR91au9wEPOLI/image-1776467422491-8572d154.png",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Delyth Bryan",
        "rating": 5,
        "text": "Saw Gillian today with our precious Reb. He had a lovely massage, thank you so much. He's definately moving a bit better.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1680730583"
      }
    ]
  },
  {
    "id": "9f6c81a8-ca43-45ea-87d3-a8bc5f441046",
    "googlePlaceId": "ChIJE-Z9Nm_1dUgRkuC3fnUPUBI",
    "googleMapsUrl": "https://maps.google.com/?cid=1319571688131125394",
    "name": "Paws In The Pool",
    "slug": "paws-in-the-pool",
    "category": "Swimming facility",
    "address": "South Of England Centre, Selsfield Rd RH17 6TL, United Kingdom",
    "city": "Haywards Heath",
    "region": "England",
    "postcode": "RH17 6TL",
    "phone": "+44 7704 982448",
    "website": "https://www.pawsinthepool.co.uk/",
    "rating": 4.9,
    "reviewCount": 116,
    "latitude": 51.0584067,
    "longitude": -0.0867522,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJE-Z9Nm_1dUgRkuC3fnUPUBI/image-1776467463986-d6b7dde9.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "warm pool",
      "dog treatment",
      "dog toys",
      "elderly dog exercise",
      "confidence building",
      "nervous dogs",
      "life jackets"
    ],
    "reviews": [
      {
        "authorName": "Mike Murray",
        "rating": 5,
        "text": "Had a great experience the first time we went to Paws In The Pool, so we went back for another go….. it was great to see all our three dogs swimming. One of the dogs wasn’t confident even with a life jacket, so the second time we put a noodle around her middle to keep her bum up, by the end of the session she was swimming well, even without the noodle. Will undoubtedly go back again.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1624638174"
      },
      {
        "authorName": "Pete Howes",
        "rating": 5,
        "text": "Went here for the first and will be back. The lady running it was lovely and was giving info on what things go on in the field, dog shows, camping etc which I might look into. Our dog absolutely loved it here so we will be taking him back .",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1745318060"
      },
      {
        "authorName": "Chantelle Joseph",
        "rating": 5,
        "text": "Camilla was supportive and welcoming to our cautious but curious Vizsla, who had never swam before. The area was clean and had plenty of toys for our dog to play with.\nI'd definitely recommend. Thanks again and we will be back again soon!",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757616485"
      },
      {
        "authorName": "Mark Swindell",
        "rating": 5,
        "text": "We took our 5 month old vizsla, KiKi, here today for her first experience of deep water and swimming. She was a little nervous at first but with the staff’s guidance she quickly became comfortable and within 5 minutes she was was really enjoying swimming around. It’s a great little setup here and well organised with lots of toys and life jackets for the dogs. We’ll definitely be returning in the near future!",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1674476394"
      },
      {
        "authorName": "Hil A",
        "rating": 5,
        "text": "What a lovely place. Allison was amazing and very friendly , I took my Maltese puppy here and enjoyed being in the pool with him. It’s a lovely warm pool big enough for your dog to have fun! There is a great green place to walk your dog nearby and a van that you can get a snack/drink from and also a pub next door so it’s a great location! I recommend paws in the pool! They also have a big box of toys you can use for your dog :) and a water bowl for them right by the pool! Thankyou🤗",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1684787069"
      }
    ]
  },
  {
    "id": "369dc9a9-b38c-4f59-ad08-dbc0f516231f",
    "googlePlaceId": "ChIJGx-7idYNdkgRdLYWqziz03c",
    "googleMapsUrl": "https://maps.google.com/?cid=8634441966569305716",
    "name": "Physio4pets",
    "slug": "physio4pets",
    "category": "Physical therapist",
    "address": "38 Winchester Rd, St Margarets, Twickenham TW1 1LF, United Kingdom",
    "city": "Twickenham",
    "region": "England",
    "postcode": "TW1 1LF",
    "phone": null,
    "website": "https://www.physio4pets.co.uk/",
    "rating": 5,
    "reviewCount": 21,
    "latitude": 51.4561188,
    "longitude": -0.3229806,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJGx-7idYNdkgRdLYWqziz03c/image-1776467450050-a0a9b7ea.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "dog therapy",
      "arthritis treatment",
      "home visits",
      "calm demeanor",
      "experienced physio",
      "mini dachshund",
      "easy to communicate with",
      "support and guidance"
    ],
    "reviews": [
      {
        "authorName": "Shona Jefferies",
        "rating": 5,
        "text": "Fiona has been essential in helping our dog with her post elbow surgery recovery. She provided expert care with supportive practical advice. Skye loved her session with Fiona, and even fell asleep during the massage.",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1773064552"
      },
      {
        "authorName": "Jane Thomas",
        "rating": 5,
        "text": "We really appreciated the support and guidance from Fiona. She gave us excellent exercises for our dog - who is now flourishing. We'd highly recommend Physio4Pets - Fiona is professional, smart and supportive and our dog loved her!",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756118653"
      },
      {
        "authorName": "Catherine Getz",
        "rating": 5,
        "text": "Fiona was recommended to me by the highly regarded Moores Orthopedic Clinic that performed surgery on the hind leg of my  border terrier Bertie. She has been simply wonderful at ensuring Bertie successfully recovers full mobility and muscle strength post surgery. Fiona is, of course, an extremely knowledgeable and experienced physio. But,  she is so much more...she is  fantastic teacher.... a true motivator!!  Bertie and I, quite simply, were desperate to be 'teacher's pets' ... there was not a day when we didnt do 'our physio homework' (aka exercise program).   It has without doubt paid off, and we will be for ever thankful for Fiona's support. Catherine Getz Brzezinski",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765368053"
      },
      {
        "authorName": "Sue Munson",
        "rating": 5,
        "text": "Fiona is caring and extremely professional physiotherapist. I would not hesitate to recommend her.  Having her do home visits was a plus.  Ben my mini dachshund viewed his therapy as great fun, which aided fast recovery.",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757958941"
      },
      {
        "authorName": "Louisa Syrett",
        "rating": 5,
        "text": "Fiona has been enormously helpful for our black lab Bess. She had a semi torn ligament in her back leg and Fiona advised us that with physio and some hydro we could hopefully avoid surgery (our vet was supportive of this approach). I’m delighted to say that after 12 weeks of treatment we have managed to skip surgery thanks entirely to Fiona (and us actually doing the exercises she recommended in between visits).  Fiona had a calm and controlled approach with Bess which meant Bess trusted and respected her from the beginning (as did we). I could not recommend Fiona more strongly.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743840301"
      }
    ]
  },
  {
    "id": "5223704c-4c5a-448c-a0d6-b1401f6afec6",
    "googlePlaceId": "ChIJb-CiSUBXfCYR_aQUVYqKMNI",
    "googleMapsUrl": "https://maps.google.com/?cid=15145757873584514301",
    "name": "PhysiVet Veterinary Physiotherapy",
    "slug": "physivet-veterinary-physiotherapy",
    "category": "Physical therapist",
    "address": "Glenburnie Rd, London SW17 7NF, United Kingdom",
    "city": "London",
    "region": "England",
    "postcode": "SW17 7NF",
    "phone": "+44 7826 294927",
    "website": "https://www.physivet.com/",
    "rating": 5,
    "reviewCount": 9,
    "latitude": 51.4355731,
    "longitude": -0.1655658,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJb-CiSUBXfCYR_aQUVYqKMNI/image-1776467446458-5319454e.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "friendly staff",
      "caring",
      "exercises",
      "physio sessions",
      "dog"
    ],
    "reviews": [
      {
        "authorName": "Stef c",
        "rating": 5,
        "text": "We had the pleasure of meeting Sara back in February when unfortunately our frenchie was diagnosed with ivdd!\n\nSara was amazing and our boy really enjoyed his physio sessions with her.\n\nWhen Sara first met out boy he lost complete use of his legs but with all Sara's help our boy is now walking and back to his cheeky self!\n\nSara is professional,caring understanding, super friendly and very knowledgeable!\nYou can really tell Sara has a real passion for what she does and really loves her job!\n\nOur boy rocky absolutely loved her and really enjoyed seeing her aswell as a cheeky treat or 2 and of course a kiss and lots of belly rubs.\n\nI highly recommend Sara for all your furry friends,defo a 5 star service from us.\n\nThank you so much Sara ♥",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1715974715"
      },
      {
        "authorName": "Niki",
        "rating": 5,
        "text": "Sara was recommended by my vet for my rescue grehound, for physio following an amputation. She quickly gained his trust, he adores seeing her, and quickly made enormous progress under her care. I'm so pleased we followed up with Sara post-operation - my 10-year old boy now has a decent life, happily pottering in comfort.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1693751815"
      },
      {
        "authorName": "Scott P",
        "rating": 5,
        "text": "I am so very grateful to Sara at PhysiVet. Within minutes of seeing Coco walk she recognised her problem and provided us with comfort and a plan!\n\nSara was absolutely fantastic with our dog, patient, knowledgeable and caring. She gave us a detailed rehab plan, with exercises, and diet advice for us to help get our dog back to full fitness.\n\nOutstanding service from a professional who really cares.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1677160535"
      },
      {
        "authorName": "Katia O’Neill",
        "rating": 5,
        "text": "This is the best pet physiotherapist I have ever been to! I E had been through a heartbreaking ordeal with our doggie ans we didn’t were to turn. By pure chance we found PhysiVet and we have never looked back. Sara is so friendly and kind hearted, you can honesty see how much she loves her job and the animals she works with. She is so dedicated to the care and recovery of her animals is amazing to see. She helped and supported us through retraining out dogs leg and we couldn’t be anymore grateful to her. Thank you so much Sara you are amazing and irreplaceable!!",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1695643249"
      },
      {
        "authorName": "Ekin Alkan",
        "rating": 5,
        "text": "Sara has been lovely! Our dog Cinnamon struggles with osteoathritis and we recently started treatment with her. She is very knowledgable and we would definetly recommend her!",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1694555227"
      }
    ]
  },
  {
    "id": "bd742330-10f6-4fd9-a92f-5ba5cd3ed3a5",
    "googlePlaceId": "ChIJUwkgzbhBYEgRocmTvZuXXHc",
    "googleMapsUrl": "https://maps.google.com/?cid=8600916083527109025",
    "name": "Pivotal Animal Rehabilitation",
    "slug": "pivotal-animal-rehabilitation",
    "category": "Rehabilitation center",
    "address": "19 Tirgarvil Rd, Upperlands, Maghera BT46 5SW, United Kingdom",
    "city": "Maghera",
    "region": "Northern Ireland",
    "postcode": "BT46 5SW",
    "phone": "+44 7988 591056",
    "website": "https://www.pivotalanimalrehab.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 54.8786492,
    "longitude": -6.6360436,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJUwkgzbhBYEgRocmTvZuXXHc/image-1776467408594-84abbad7.png",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": []
  },
  {
    "id": "3fb8bd1a-fac7-45c6-ac99-41698819266a",
    "googlePlaceId": "ChIJS0nGi_fJd0gRA1tzY7BWR2E",
    "googleMapsUrl": "https://maps.google.com/?cid=7009666660608203523",
    "name": "Positive Pawformance Veterinary Physiotherapy & Hydrotherapy",
    "slug": "positive-pawformance-veterinary-physiotherapy-hydrotherapy",
    "category": "Rehabilitation center",
    "address": "Coopers Cl, Sandy SG19 1NQ, United Kingdom",
    "city": "Sandy",
    "region": "England",
    "postcode": "SG19 1NQ",
    "phone": "+44 7546 096630",
    "website": "https://www.positivepawformance.co.uk/",
    "rating": 5,
    "reviewCount": 36,
    "latitude": 52.1262261,
    "longitude": -0.2965576,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJS0nGi_fJd0gRA1tzY7BWR2E/image-1776467427842-3f16cc6d.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Jane Andrew",
        "rating": 5,
        "text": "Positive Pawformance are highly recommended. My dog aged 15 has severe arthritis and has been receiving regular hydrotherapy for over a year and it has definitely improved her movement and quality of life. June is extremely knowledgeable, supportive and professional.\nHer love of dogs is evident at all times.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768320923"
      },
      {
        "authorName": "Ellie Sherriffs",
        "rating": 5,
        "text": "I have been going to Positive Performance for Laser treatment with my dog Jess every 2 weeks for over a year. June has been fantastic with Jess who has Degenerative Meleopathy (DM). June is always patient, reassuring, understanding and always has the dogs best interest at heart. I would thoroughly recommend to any owner that is thinking of helping their dog by having laser or hydrotherapy.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767644706"
      },
      {
        "authorName": "Lorraine Gunther",
        "rating": 5,
        "text": "June has been fantastic with my 10 year old labrador Dylan who has had various joint and ligament issues during his life. June really takes an interest and together with her vast knowledge and understanding I am confident that Dylan is getting the best support he can to manage his ageing bones! I would highly recommend June and only wish I had found her earlier.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768402516"
      },
      {
        "authorName": "Suzanne Symonds",
        "rating": 5,
        "text": "June is lovely and really cares for her clients welfare. We’ve been attending for most of the year and the treatment is really helping our soon to be 11 yr old lab who started limping. Would thoroughly recommend the June to anyone if she can fit you in, even if there’s a short wait list it’ll be worth the wait if you’re able to, she’s great",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766514170"
      },
      {
        "authorName": "Cyndy Fiddy",
        "rating": 5,
        "text": "An excellent, targeted professional service that has aided my dog to build her muscular strength which in turn had helped her to manage age related difficulties such as arthritis. June has a wealth of knowledge, expertise and experience on which she draws to tailor a physio and hydrotherapy program which delivers great results. In addition, her warm friendly approach with stressed ‘doggy parents’ is welcomed and she clearly has the dogs best interests at heart - I can’t thank her enough for the improved quality of life she has achieved for my little pup!",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765912851"
      }
    ]
  },
  {
    "id": "fc4d3fab-adf5-4f1c-9129-c2e3284b27fb",
    "googlePlaceId": "ChIJabVolp9zekgRrepHTSrL3Nw",
    "googleMapsUrl": "https://maps.google.com/?cid=15914818565766113965",
    "name": "Rosecroft Canine Rehabilitation Centre",
    "slug": "rosecroft-canine-rehabilitation-centre",
    "category": "Hydrotherapy center",
    "address": "165 Silkmore Ln, Stafford ST17 4JB, United Kingdom",
    "city": "Stafford",
    "region": "England",
    "postcode": "ST17 4JB",
    "phone": "+44 7856 990290",
    "website": "https://www.rosecroftrehab.co.uk/",
    "rating": 5,
    "reviewCount": 25,
    "latitude": 52.7867458,
    "longitude": -2.105543,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJabVolp9zekgRrepHTSrL3Nw/image-1776467437384-d21849b7.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "TPLO",
      "tailored sessions",
      "caring staff",
      "mobility improvement",
      "strength improvement",
      "confidence improvement",
      "joint issues"
    ],
    "reviews": [
      {
        "authorName": "Charlotte Roper",
        "rating": 5,
        "text": "I honestly can’t recommend Katie and Chloe enough! From the moment we arrived, they made both me and Tilly  feel completely at ease. Their kindness, patience and genuine love for dogs really shines through in everything they do.\nAfter having our first consultation we decided to go for the enhanced mobility programme, as we know Little Tilly is going to need continuous hydro, I thought this was the best option and knowing I could text Katie with any concerns put my mind at ease,\nThe hydrotherapy sessions have been amazing. They took the time to understand Tilly’s needs and made the whole experience calm, safe and actually really fun for her. It’s incredible to see how much she’s improved already,\nKatie and Chloe are incredibly knowledgeable and professional, but what really stands out is how much they truly care, You can tell this isn’t just a job for them – it’s a passion.\nIf anyone is considering hydrotherapy for their dog, I wouldn’t hesitate for a second to recommend them. Tilly absolutely loves going, and that says everything!\nThank you for taking such wonderful care of her 🐾",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1772751191"
      },
      {
        "authorName": "Chloe M",
        "rating": 5,
        "text": "My two dogs love coming here for treadmill, pool and laser therapy. Very positive, fun, clean environment with structured treatments suited to each dog. Helps loosen up any injuries and stiffness, and keeps them fit for agility! They get very excited now when I pull up in the car ❤️",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770323099"
      },
      {
        "authorName": "Jennifer Price",
        "rating": 5,
        "text": "After having surgery for a Ruptured Cruciate Ligament our dog Flint was left with weakness and stiffness of the leg. Hydrotherapy was recommended to us, as Rosecroft had just installed a treadmill hydrotherapy tank, we enrolled him there.  The equipment is first class and Katie was caring and welcoming from day one.  After each session it was noticeable that his leg function improved and gaining muscle strength again.  After a few sessions he is nearly back to full strength.\nWe can only praise the good work she has done with him.\nWell done Katie and Chloe",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757089939"
      },
      {
        "authorName": "Jeanette Rigby",
        "rating": 5,
        "text": "Katie and her team are lovely and do a fantastic job. Marley is always well looked after and since he has started hydrotherapy he no longer has a limp.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1766845612"
      },
      {
        "authorName": "sharon pierpoint",
        "rating": 5,
        "text": "Ziggy is 14 months old and started his hydrotherapy journey in February 2025. Ziggy started due to him having elbow dysplasia. Katie is amazing with him and is very patient with him even when he is having his tired toddler moments. He has come on leaps and bounds since starting and I have seen an improvement with his elbows. I would highly recommend Rosecroft Canine rehabilitation centre and Katie 100%.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1745065762"
      }
    ]
  },
  {
    "id": "0c401905-9e10-48ef-a682-1e424fdd94ba",
    "googlePlaceId": "ChIJZ5dQqpGWeUgR6W1e7Kp2KqY",
    "googleMapsUrl": "https://maps.google.com/?cid=11973513035800014313",
    "name": "Sherwood Canine Fun Fitness And Mobility Swim Centre",
    "slug": "sherwood-canine-fun-fitness-and-mobility-swim-centre",
    "category": "Swimming pool",
    "address": "Industrial Estate, Unit 2-3 Brierley Park Cl, Sutton-in-Ashfield NG17 3JZ, United Kingdom",
    "city": "Sutton-in-Ashfield",
    "region": "England",
    "postcode": "NG17 3JZ",
    "phone": "+44 1623 239002",
    "website": "https://www.sherwoodcaninefunfitnesshydrotherapy.co.uk/",
    "rating": 4.8,
    "reviewCount": 291,
    "latitude": 53.1394152,
    "longitude": -1.2751067,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJZ5dQqpGWeUgR6W1e7Kp2KqY/image-1776467451620-b1400814.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "dog swimming",
      "dog shower",
      "hydrotherapy",
      "dog hydrotherapy sessions",
      "friendly staff",
      "dog comfort",
      "fun for dogs",
      "dog exercise"
    ],
    "reviews": [
      {
        "authorName": "Keiran Green",
        "rating": 5,
        "text": "Absolutely brilliant , would highly recommend.  Zoe has been absolutely amazing, from 12 weeks old she has helped ease  my Bernese Mountain Dog “Milo” into learning how to swim. He’s been going every two weeks. Zoe started him off by allowing him to wear a life jacket , easing him into feeling comfortable being in water,  he  has now been swimming with Zoe for about 6-8 times. Each time the service has been exceptional. His confidence is growing in water  , and he is able to get some great exercise with low stress on the joints. Zoe has an exceptional level of expertise , she goes above and beyond , she always provides hints and tips which  have been a god send. For example ,  ways at home to help him improve his maneuverability, such as lifestyle choices for him and ways to improve his fitness. Also received great nutritional advice , or recommendations on toys and puzzles to keep him occupied at home. They really do it all here can’t recommend enough!\n\nAs you can see from the photos attached , the first one is around the time Milo was introduced to swimming and then to the last photo where his confidence really began to take off and he jumped in willingly !",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763560135"
      },
      {
        "authorName": "Lizzie Robinson",
        "rating": 5,
        "text": "Where to start! I would first like to say the very few negative reviews are to be dismissed. They do not honestly reflect the business or Zoe herself.\n\nI have a extremely large Greman Shepherd and I have just returned from my 3rd hour session with Zoe (4 weeks apart). The only thing I regret it not brining him sooner. I was considering it on and off for many years with my last GSD. Then considering it for well over a year with Prince. The BEST thing I did was book in, for my first trip we have to do a 40 minutes car ride to get there, I was nervous but as soon as I got there I was welcomed by Zoe. She knew it was our first time and told me what the plan would be, I was always going to go in the water as well, as my lump (doggo) is clingy.\n\nZoe put a life jacket on him as we were unsure on how he would be with not going before. Despite me pulling him off the ramp to get in and after his first quick in and out, we let him calm and readjust. Zoe took it at Prince's pace to get him used to swimming. He was in and out whenever he wanted all session. By half way through the booking he was getting on and off the ramp on his own while fetching the balls we threw into the water.\n\nZoe then also helped me shower Prince, he has never been a fan of showers even if he loves the pools! He would lay down or move and we just went with the flow of it. I even got a spray down after! Prince and I then went into the human changing room so I could dry off and change. After we went to pay and then book in for 4 weeks later.\n\nSession two - Prince came into the water on his own and after 10 minutes the life jacket came off and he was swimming without it!\n\nSession Three - Today's Prince jumped straight into the water himself, and was playing with his balls as happy as could be. We let him get in and out when he wanted to. At one point, as soon as Prince saw us move he would come back. So the next time we both stayed still to ensure he had full control of when he wanted to come back in. Prince is such a fidget when having his shower to the point Zoe got on the floor with him to ensure he was comfortable and clean! We have booked in for our 4th time in 4 weeks!\n\nOver all I would like to thank the team for not only providing animals experiences, safe, fun way to exercising and promoting good health for fur babies but also the kindness they show. Zoe is one of the most down to earth, genuine but  proffesional person I have ever met. She is extremely experienced and qualified in dogs of multiple breeds and amazing with large dogs. You always see a gap when it comes to the services and/or choice of services for big dogs. Bare in mind my Prince is 50KG but he is such a big baby and adores Zoe and the Team.\n\nFor anyone reading the reviews, You can see how amazing the team are for all the positive reviews. I would say go for it! Book in as soon as you can, you'll never regret it.\n\nA genuine honest review.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1745765241"
      },
      {
        "authorName": "Sarah",
        "rating": 5,
        "text": "We had a fantastic time taking our 4 month old golden Retriever and 5yr old chocolate labrador swimming for the first time in a pool today! Brett was fantastic and helped us be confident in teaching both dogs what to do whilst also having lots of fun. We will return again for lots of fun!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1633878693"
      },
      {
        "authorName": "Ezmeralda “Redyakyak” Edwards",
        "rating": 5,
        "text": "What a great change from just going for a walk! Large pool for dogs! The owner's can also get in the pool, as I did.\nIt's around 5 metre's by 10, maybe bigger, I didn't take a tape measure.\nPlenty of dog life jackets available, also shower facilities for you and your dog after their session.\nOur dog's thoroughly enjoyed themselves.\nThe edge of the ramp can be slippy when wet, and our dog's are not the smartest, so did slip a couple of times, but soon got the hang on where to walk.\nIf you are wanting to do something a bit different, I give this a huge thumbs up.\nIf you dog has a favourite ball or toy, then take it with you, although there are plenty of toys there, mine are just particular with their own balls.\nThere is also a grooming salon here, which was a surprise.",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1533667559"
      },
      {
        "authorName": "Becca Halse",
        "rating": 5,
        "text": "We've been taking our pup to aqua pups! An absolutely amazing and accommodating place. Zoe and Connie are amazing with Skye and we're so grateful they're taking the time to learn what helps a stubborn beagle! Can't wait for the next aquapup session ❤️",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1726689243"
      }
    ]
  },
  {
    "id": "35e9aca8-0df6-4135-a5f6-42f0c8d48be9",
    "googlePlaceId": "manual-snowys-canine-therapy-centre",
    "googleMapsUrl": null,
    "name": "Snowy's Canine Therapy Centre",
    "slug": "snowys-canine-therapy-centre",
    "category": "Hydrotherapy center",
    "address": "The Stables, Tilden Chapel Lane, Smarden, Ashford TN27 8QN, United Kingdom",
    "city": "Ashford",
    "region": "Kent",
    "postcode": "TN27 8QN",
    "phone": "+44 1233 434068",
    "website": "https://snowyscaninetherapycentre.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 51.1485,
    "longitude": 0.6862,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "canine therapy",
      "rehabilitation"
    ],
    "reviews": []
  },
  {
    "id": "fc13ea24-8e90-4cee-901c-4086e17fa30d",
    "googlePlaceId": "ChIJUXF9McFbd0gRwk2TRdiEt-g",
    "googleMapsUrl": "https://maps.google.com/?cid=16769017801952415170",
    "name": "Soggy Dogs K9 Swim Centre",
    "slug": "soggy-dogs-k9-swim-centre",
    "category": "Dog day care center",
    "address": "Nock Verges Cottage, Earl Shilton, Leicester LE9 7DY, United Kingdom",
    "city": "Leicester",
    "region": "England",
    "postcode": "LE9 7DY",
    "phone": "+44 7923 209198",
    "website": "https://www.soggydogs.co.uk/",
    "rating": 4.8,
    "reviewCount": 323,
    "latitude": 52.5812697,
    "longitude": -1.3012518,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJUXF9McFbd0gRwk2TRdiEt-g/image-1776467462624-5adcc934.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab"
    ],
    "reviewKeywords": [
      "dog swimming",
      "life jackets for dogs",
      "warm pool",
      "changing facilities",
      "safety briefing",
      "friendly owners",
      "clean pool",
      "dog shower"
    ],
    "reviews": [
      {
        "authorName": "Charlotte Watton",
        "rating": 5,
        "text": "Game changer!\n\nWe’ve got a water pup but in the winter it can be a bit too cold and with her arthritis swimming in a heated pool can (and has been) so beneficial!\nIt fun for us as well to get in and have a play around. The facilities for after your swim are also great and done on a circuit so if you do have a more nervous dog you’ll never run into anyone else.\nOne thing to think about would be allowing some figuring out time for your first swim - now we’ve been a few times, she jumps straight in but it did take a little while to get use to the ramp (understandably as it’s new for the dog). The lovely ladies did give us lots of amazing tips.\n\nWe love it - it’s a weekly activity for us now!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763231612"
      },
      {
        "authorName": "Pbphotography",
        "rating": 5,
        "text": "This place is awesome first time here today and my dog has had a ball (literally) the pool was lovely and clean i even got in with him. There are showering facilities for yourself and your pooch and I loved that there were dryers brushes and even dog deodorant, everything has been very well thought out, i have one very happy dog thank you ☺️",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769093209"
      },
      {
        "authorName": "Jamie Gray Lockett",
        "rating": 5,
        "text": "This place is amazing. We’ve been 5 times now and it’s so worth it! The pool is beautiful, not too warm either. Loads of toys and poo bags incase an accident happens. The changing facilities are also lovely and has everything you and your dog needs. Toilet, shower, sink and shampoo for you and your dog and body wash too. Also heaters, a high velocity dryer, dog sprays, dog brushes. A few things I would recommend for any newbies\n\n1. If you are going in the pool with your dog/s (which I would definitely recommend) come in your swimwear ready otherwise you’ll be eating into your time in the pool\n\n2. Arrive 5/10 mins before and use the grass area to let your dogs go to the loo first, you don’t need to wait for someone to tell you\n\n3. Bring plenty of towels, I usually have a towel per dog + a towel robe for them after using the high velocity dryer\n\n4. Have fun, It’s a brilliant experience",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1772136211"
      },
      {
        "authorName": "Kristina Standfield",
        "rating": 5,
        "text": "Amazing we all loved it! Especially our dog! Would 100% recommend 👌🏻 we will be visiting again soon! Lots of balls and toys to throw in for the dogs. Shower facilities are fab! Human and dog shower gels and sprays available, also dryers for both dogs and humans .. my daughter did prefer the doggy one 🤣 fantastic experience 👏🏼",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761928030"
      },
      {
        "authorName": "Suzanne Starsmore",
        "rating": 5,
        "text": "Very well organised canine swimming experience. Easy to book.  Pay on arrival.  Choice of life jackets for dog and humans if required.  Sole use of warm pool, followed by sole use of changing area complete with shower,  hair driers for humans and dogs.  We recommend wearing your swimming clothes under your outdoor clothes so you can strip off poolside. Also recommend wearing an old t shirt to protect yourself from your dogs claws.",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757086835"
      }
    ]
  },
  {
    "id": "a6db6773-9369-468a-b07f-a17ef1feb3db",
    "googlePlaceId": "ChIJHQtEW1xPeEgRRdg1-SUikS8",
    "googleMapsUrl": "https://maps.google.com/?cid=3427558337895848005",
    "name": "Soggy Dogz",
    "slug": "soggy-dogz",
    "category": "Dog park",
    "address": "Paving Way, Lincoln LN6 3QW, United Kingdom",
    "city": "Lincoln",
    "region": "England",
    "postcode": "LN6 3QW",
    "phone": "+44 1522 244343",
    "website": "https://www.soggydogz.co.uk/",
    "rating": 5,
    "reviewCount": 134,
    "latitude": 53.2000484,
    "longitude": -0.6071824,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJHQtEW1xPeEgRRdg1-SUikS8/image-1776467452879-6a19b717.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "welcoming staff",
      "welcoming atmosphere",
      "changing room",
      "viewing platform",
      "overcoming fear of water",
      "clean pool",
      "doggy walk area"
    ],
    "reviews": [
      {
        "authorName": "emma walker",
        "rating": 5,
        "text": "Brilliant! Was our 1st visit and it is a lovely clean pool.. our cavapoohs 1st swim and hubby went in the water to he couldn't swim before so with help after 15 mins of the 20min session he was swimming on his own and supporting himself in the water staff was in the water with hubby to gave guidance and advice and outside the building a toilet area and pooh bin easy to find and the price £20 for 20 mins is a fair offer",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769043640"
      },
      {
        "authorName": "Paula Broadhurst",
        "rating": 5,
        "text": "Amazing set up for our woofers. We have 1 nervous dachshund and a busy Jack Russell. Abi was great and knew how to work with both dogs so that they enjoyed their time in the pool. The filter system has had no expense spared and the pool is just as good for humans as it is for dogs. To have the whole place exclusively to us was so relaxing for me as I didn’t have to worry about how my dogs were with others and my dogs could enjoy their time too. Each area is so clean.. considering there is a constant stream of furry visitors. Thank you so much.. amazing place!",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753728124"
      },
      {
        "authorName": "Catherine Steadman-Hill",
        "rating": 5,
        "text": "I started coming here with my dog Woody to help him strengthen / exercise his back legs as he's getting older. Becky usually runs our sessions and she is absolutely fabulous.\nShe truly understands our needs, how to get the best out of Woody and is a fun friendly person too.\nThe set up is fab, the pool is just the right size, the area is secure and they are always looking for ways to upgrade and enhance the experience. It's reasonably priced and an amazing find!\nThey have also been fab about slowly introducing my other dog who is scared of water and people into the sessions, to watch Woody. They have been so relaxed and let her go at her own pace, slowly adjusting to the environment and she is already settling in to her surroundings (although not ready to take the plunge yet!)",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759481669"
      },
      {
        "authorName": "Kirsten Robinson",
        "rating": 5,
        "text": "Brilliant from start to finish! The instructor Abi was fab, clearly loved what she does, knowledgeable and very friendly. We really enjoyed it and our 11 month old pup too! Worth the 45 min drive for us and we will definitely be back!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1750700632"
      },
      {
        "authorName": "tilly moss",
        "rating": 5,
        "text": "Our Labrador, Rodney, had the most amazing 30 minute session today! He’s an absolute water baby and had the most fun jumping in the pool, swimming around and playing fetch! Honestly can’t say how much we loved the session, it was brilliant and will 100% be back!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751472678"
      }
    ]
  },
  {
    "id": "1fd2160c-3091-49cf-aa94-c56138d382c2",
    "googlePlaceId": "ChIJzzI37zQ7eEgR9qPh6HAN8kQ",
    "googleMapsUrl": "https://maps.google.com/?cid=4968048117537678326",
    "name": "Splash doggy",
    "slug": "splash-doggy",
    "category": "Swimming facility",
    "address": "Fields Fare, Heath Ln, Barkston Heath, Grantham NG32 2DE, United Kingdom",
    "city": "Grantham",
    "region": "England",
    "postcode": "NG32 2DE",
    "phone": "+44 7823 331320",
    "website": "https://www.splashdoggy.co.uk/",
    "rating": 5,
    "reviewCount": 77,
    "latitude": 52.9514801,
    "longitude": -0.5647655,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJzzI37zQ7eEgR9qPh6HAN8kQ/image-1776467460096-c15a5e82.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "helpful staff",
      "dog training",
      "learning to swim",
      "fenced off area",
      "anxious dog handling",
      "clean pool",
      "safe environment"
    ],
    "reviews": [
      {
        "authorName": "Lauren Coates",
        "rating": 5,
        "text": "Been to Splash Doggy with my and my friends dogs, and recently taken my nervous terrier for some confidence and exposure work. She ended up swimming and she had the best time! The and guidance from Janice in how to aid the dogs in and around the pool, the toy and life jacket selection suits all our dogs, from Norfolks to Rotties. Our group trips here are becoming a regular thing, and we plan to continue this!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769804093"
      },
      {
        "authorName": "Anastasia Turner",
        "rating": 5,
        "text": "Had a great time here with our two labradors. Janice was fantastic. She explained everything clearly, was so so lovely, and just wonderful with the dogs. One was nervous to get in, and she was fantastic in helping to ease her in.\nLots of toys available to throw in.\nIt was great to be able to get in the pool with the dogs. Changing rooms available for afterwards.\nWe visited in January so was freezing outside, but it was a good temperature both in the pool and room. The overhead heat lamps are a nice touch.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769635698"
      },
      {
        "authorName": "Sophie Cheung",
        "rating": 5,
        "text": "Booked one slot then my sister booked the slot before both went in with our dogs separately then had the chance at the end of our session to have dogs swim together if they wanted. The lady was amazing with my black lab who loves the water but is initially always skittish about getting in. Once comfortable getting in, the host made sure to help correct Lunas swimming position so that she was not splashing everywhere with her front paws. With more sessions hopefully we will have a confident lab who keeps her front paws in the water.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1739983017"
      },
      {
        "authorName": "Jo Leech",
        "rating": 5,
        "text": "Splash Doggy was amazing! Janice was fantastic and helped coach Spencer into the pool, it was amazing to see his confidence grow! Splash Doggy was super well organised, clean, warm and most importantly Janice walked us through our first visit step by step with patience and so knowledgeable! Thank you Janice, i highly recommend!!",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770802605"
      },
      {
        "authorName": "Matt",
        "rating": 5,
        "text": "Great place for dogs to swim, ours absolutely loved it! Will definitely book again.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770563220"
      }
    ]
  },
  {
    "id": "af305b11-caa8-4b0b-871c-e433a91d616f",
    "googlePlaceId": "ChIJ_3O5pLCtdUgRS4o_v3fsP6k",
    "googleMapsUrl": "https://maps.google.com/?cid=12195726314996468299",
    "name": "Splash Hounds Dog Swimming Pool",
    "slug": "splash-hounds-dog-swimming-pool",
    "category": "Swimming pool",
    "address": "Park Ln, Westergate, Chichester PO20 3TL, United Kingdom",
    "city": "Chichester",
    "region": "England",
    "postcode": "PO20 3TL",
    "phone": "+44 7838 583489",
    "website": "https://splashhounds.simplybook.it/",
    "rating": 4.7,
    "reviewCount": 123,
    "latitude": 50.8314963,
    "longitude": -0.6831348,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ_3O5pLCtdUgRS4o_v3fsP6k/image-1776467448815-0f57b6d5.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "dog pool",
      "shower for dogs",
      "shower area",
      "fun for dogs",
      "water training",
      "safe swim",
      "friendly staff"
    ],
    "reviews": [
      {
        "authorName": "Cara Spaven",
        "rating": 5,
        "text": "Excellent service. Love coming here as my dog enjoys it so much to have a swim as she pleases. They have toys that she can choose. You can even swim with your dog and they allow the kids to join in too (check ages). Have facilities to shower your dog and dry afterwards. Amazing price for what you get. On-site dog groomers and training. Staff are friendly and helpful. It's a lovely experience to spend family time with your dog.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768630285"
      },
      {
        "authorName": "Melanie Murphy",
        "rating": 5,
        "text": "First visit today with our three pups Coco Harley and Hudson.\n\nGreat friendly place and friendly staff.\n\nAll three pups thoroughly enjoyed their time and especially as we could swim with them too!!\n\n100% recommended and we will be back",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771363975"
      },
      {
        "authorName": "Emily Pullen",
        "rating": 5,
        "text": "Both my dachshund and boxer absolutely love it here, the staff are great with getting your dogs comfortable with the water, the pool is clean , we took our boxer here the other week and she has swum before but never on her own she was a little wary at first but soon got very comfortable swimming around with all the toys they provide too, we took our miniature dachshund here today and she’s never really like the water but she absolutely loved it, from her first session she’s already so much more comfortable and will happily swim of the ramp by herself now, Will definitely be returning very regularly as they enjoy it so much, and the facilities to wash and dry your furbabys are very handy to save you doing it at home, thank you so much couldn’t recommend more",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1771707668"
      },
      {
        "authorName": "emma willmett",
        "rating": 5,
        "text": "Been to splash hounds for a long time every Thursday as Anna goes the extra mile ,dogs love her and ofcourse the swimming",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769167265"
      },
      {
        "authorName": "Carl Atvarnieks",
        "rating": 5,
        "text": "Enormous fun for dogs and owners of all shapes and sizes hence left a five star review however.\nAppendum\nOn a subsequent visit\nThe above still applies however be aware should your dog make a single sound a particularly unpleasent physchotic dog hating  carpenter from the business next door  (Brilyn carpentry ) will storm into the building like the SAS entering an embassy and demand an end to the session all the  while verbally abusing the customer.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1642500853"
      }
    ]
  },
  {
    "id": "54807dd2-3c3c-43ed-a815-3568879ca72f",
    "googlePlaceId": "ChIJqX9cGgeB8CIRfi9EKPtDiiY",
    "googleMapsUrl": "https://maps.google.com/?cid=2777106866218741630",
    "name": "Stay on Track Vet Physio & Hydro Centre",
    "slug": "stay-on-track-vet-physio-hydro-centre",
    "category": "Rehabilitation center",
    "address": "1A Ropemaker St, Leith, Edinburgh EH6 7GE, United Kingdom",
    "city": "Edinburgh",
    "region": "Scotland",
    "postcode": "EH6 7GE",
    "phone": "+44 7449 720812",
    "website": "https://www.stayontrackvetphysiotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 91,
    "latitude": 55.973299,
    "longitude": -3.1617101,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJqX9cGgeB8CIRfi9EKPtDiiY/image-1776467432951-3b8282e9.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "arthritis treatment",
      "laser therapy",
      "cruciate ligament issues",
      "dog rehabilitation",
      "elbow dysplasia surgery",
      "home exercises"
    ],
    "reviews": [
      {
        "authorName": "Ceysa McKechnie",
        "rating": 5,
        "text": "Olga is incredibly knowledgeable and takes great care in what she does. My mini dachshund was referred to physio after presenting with symptoms of back or hip pain. After so many vet trips, she was very weary of Olga's practice at first, but after the first visit she couldn't wait to come back. We completed 8 sessions of physio and hydro therapy and she's back to her old self. She even tries to go in to the practice when we walk by. I would recommend Olga to any pet owner, whether it's to treat an acute issue or for general health maintenance.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1759772729"
      },
      {
        "authorName": "Mark Brooks",
        "rating": 5,
        "text": "We can’t thank Olga enough. Thanks to her diagnosis and physiotherapy, our senior Labrador has a whole new lease of life at a time when our vet told us there were no further treatment options. Her care, advice, and treatment have been outstanding, and the difference in him is truly amazing. We wouldn’t hesitate to recommend her to anyone.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767993400"
      },
      {
        "authorName": "Rachel Bailey Palumbo",
        "rating": 5,
        "text": "Our dog Declan has Arthritis and was suffering from muscle wastage as well. He now regularly visits Olga for pain relief and hydrotherapy and loves it. Olga really understands my dogs needs, is both professional and an absolute pleasure to visit. Cannot recommend enough.",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1772549718"
      },
      {
        "authorName": "Babs Brown",
        "rating": 5,
        "text": "My dog was diagnosed with severe arthritis in hips and hind knees and fore shoulder and in 8 sessions of ultrasound and hydrotherapy/treadmill the difference is phenomenal.  My dog is much stronger, does not walk with a limp and is back doing her zoomies when she sees me.   Olga's professional and calm approach was really helpful in alleviating a lot of my anxieties. I really recommend Stay on Track for your pet:s physio needs",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756366671"
      },
      {
        "authorName": "Hazel Stewart",
        "rating": 5,
        "text": "We have been working with Olga for well over a year with our dog’s injured shoulder. He has now a custom made brace to support him which protects the carpal joint.\nHe leads a very happy dog life with puppy training classes and social events as well as the usual exercise\nHe loves his massage laser therapy to relax his muscles and support his nerve damage and he jumps joyfully onto the table to wait for Olga.\nWe are very happy with his progress. This progress is in no small measure to the support and advice we have received from Olga.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760698763"
      }
    ]
  },
  {
    "id": "043db53b-5ee4-46e6-9735-a18d762ab2f5",
    "googlePlaceId": "ChIJh8oenWyBeUgRmzyPGcxynXA",
    "googleMapsUrl": "https://maps.google.com/?cid=8114768324519214235",
    "name": "Swim 4 Paws",
    "slug": "swim-4-paws",
    "category": "Swimming facility",
    "address": "THE BIRCHES FARM, Moorwood Ln, Sheffield S17 3BS, United Kingdom",
    "city": "Sheffield",
    "region": "England",
    "postcode": "S17 3BS",
    "phone": "+44 7831 879809",
    "website": "https://swim4paws.co.uk/",
    "rating": 4.7,
    "reviewCount": 47,
    "latitude": 53.302757,
    "longitude": -1.5472192,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJh8oenWyBeUgRmzyPGcxynXA/image-1776467461329-1b1da46a.jpg",
    "serviceTags": [
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "dog swimming",
      "fun swim session",
      "friendly owners",
      "warm staff",
      "safe environment",
      "stables",
      "first swim",
      "value"
    ],
    "reviews": [
      {
        "authorName": "Bozhana-Mariya Demirova",
        "rating": 5,
        "text": "Absolutely amazing facility. The owners are some of the most knowledgeable dog lovers I have met. From the very first time we visited with our dog, we have had nothing but professional attitude from them both. Our dog loves his 'swim swims' and we all look forward to our pool time. We've been coming for more than a year now and never had a complaint. If it hadn't been for Swim4Paws, our dog may not have recovered after his knee surgery. Thank you so much, Angela and Nigel, for doing what you do and for the dedication that you put in. Polar Bear loves your pool and so do we, his humans.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1755268961"
      },
      {
        "authorName": "Jackie Smith",
        "rating": 5,
        "text": "The BEST pool to take your dogs swimming, and to swim with them! Can’t recommend\nNigel and Alison highly enough, knowledgeable, professional, kind and caring. Their level of skill shines through in helping you and your dog have the most fun in a very safe environment. They allow time for your dog to find their paws in the pool and feel safe and confident in the shallow end, before venturing out into the pool. Amazing facilities and all in all a great way to spend quality time with your dog(s) 🐾🐾🐾",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1755270640"
      },
      {
        "authorName": "Tessa Glazebrook",
        "rating": 5,
        "text": "We take our two German Shepherds swimming in a pool where we live down south. We wanted to find somewhere to take them while visiting my parents, which is how we stumbled upon this place. I'm so glad they don't advertise more widely, as the waitlist would be long! And it's no wonder why they're already so booked—this place is amazing. We started out with the dogs in the field to let them use the loo, and I think they would have been ecstatic with just that experience alone. They had a brilliant time running around and sniffing all the smells. Next, we went to our assigned horsebox to get changed. This system is great because it means that if you have a reactive dog, they never have to see another one. Then it was on to the pool, the biggest we've ever seen for dogs! We love that they don't use chemicals in the pool. The owners are extremely professional and thorough. We will definitely be booking again the next time we visit.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756311969"
      },
      {
        "authorName": "Beth F",
        "rating": 5,
        "text": "WE LOVE THIS PLACE!\nI'd like to start off by saying Nigel and his wife Angela are amazing and are the perfect hosts. Friendly, chatty, warm and kind. Very lovely people who appreciate their customers (and we appreciate them!)\nThe whole experience is a pleasure from start to finish, it's a relaxed atmosphere with no rushing about. You arrive before you're start time and can have a walk around the paddock with your dog/s to let them stretch their legs and go to the toilet. You then go into the barn and you're assigned a stable with your dog/s names on the front where you can get changed, get your dog/s ready and leave your things in there whilst you're in the pool. The pool is so well thought with the puppy/beginner area that goes into a deeper part gradually. It's a weird sensation because when you get in it feels cold, but once you're in it's not cold at all! We took our 9 month old girl, and our 18 month old girl. Our 9 month old hadn't been swimming before, and our 18 month old had been swimming before (at a different place). Our 9 month old was obviously not confident on her first visit but by the end of it she was running into the water. Our 18 month old had a paddle but that's as much as she did. On our 2nd visit, both of them were straight in and super confident! Nigel's approach and with the design of the pool of letting the dogs go in at their own pace really pays off! I am over the moon at how much fun they were having and it was a joy to watch! Great exercise and great for their mental health too! I'm not sure who enjoys it more, the girls or the owners 😂 I decided to have a swim myself and the thrill of the cold water was amazing and I felt so good afterwards! (like I said above it is warm once you're body is used to it, it's crazy!)\nSee you soon guys, we can't wait until next time! We'd be there every day if we could haha! Xxx",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1716923618"
      },
      {
        "authorName": "Andy Christie",
        "rating": 5,
        "text": "Went today with our little dog, Otto and we had a great time!\n\nNigel and his wife were really welcoming and friendly and the facilities were ace. Nice little stables to get changed in with heaters for after the session and then the pool itself was really good. Otto had a nice, gentle introduction to get used to the water and then we were free to swim and play with him in the water.\n\nJust did a fun swim session and the dog had a great time - we will definitely be returning for more trips!",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1622466147"
      }
    ]
  },
  {
    "id": "3836911a-10fc-42c4-9e77-fa49deff11b8",
    "googlePlaceId": "ChIJLf2XEAATa0gRMlJcL6pAzT8",
    "googleMapsUrl": "https://maps.google.com/?cid=4597401894298341938",
    "name": "Swim Dog",
    "slug": "swim-dog",
    "category": "Dog park",
    "address": "Swim Dog, Formerly Dairyland, Newquay TR8 5AA, United Kingdom",
    "city": "Newquay",
    "region": "Northern Ireland",
    "postcode": "TR8 5AA",
    "phone": null,
    "website": "https://www.swimdog.co.uk/",
    "rating": 5,
    "reviewCount": 50,
    "latitude": 50.3838324,
    "longitude": -5.0108322,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJLf2XEAATa0gRMlJcL6pAzT8/image-1776467457452-25082bfd.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "swimming with dogs",
      "puppy swimming",
      "fenced paddock area",
      "water dog toys",
      "dog hairdryer",
      "private pool",
      "friendly team",
      "encouraging staff"
    ],
    "reviews": [
      {
        "authorName": "Steve",
        "rating": 5,
        "text": "Thankyou Julie for given our boy Sam the best swimming experiences, he absolutely loved his first session so we booked another whilst we were on holiday in Cornwall. We cannot recommend Swim Dog enough. The whole swimming pool site was immaculate from the outside waiting area where this was enclosed and Sammy could be off lead. Then to the pool where the water was so clean and a great size. Then to the reception area indoors and lastly to the wash area where we could give Sammy a little rinse off, again this was enclosed. Julie was brilliant with our boy and Sammy was so excited to go back. We cannot wait to return next year. Here are some pics below 🐾",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1758234195"
      },
      {
        "authorName": "Nigel McGonnell",
        "rating": 5,
        "text": "What a fantastic place!! Our 2 year old boxer girl can be a little nervous meeting new people and new places but today Lola met Julie and her team! All very welcoming.  Lola with encouragement did little swims in the pool. We cant wait for tomorrow's session.\nWould highly recommend here!! Everything is well set out if you have a reactive dog..",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754415022"
      },
      {
        "authorName": "Zoey Lasseter",
        "rating": 5,
        "text": "Today was our first time at Swim dog with our 6 month old puppy. Our pup was quite nervous about water until today! He absolutely had the best time. The lovely lady worked at his pace, gradually getting him used to the water and the moving ramp. Before we knew it he was swimming laps of the pool and trying to get the toys.\nBrilliant family run facility, they've thought of everything by having a separate waiting paddock, changing area for dogs and their owners and a separate post swim area so that you can take your time sorting your pups out before leaving.\nWe are a good 50/60 minute drive away from Swim Dog but it is absolutely worth the drive and we will look forward to coming again in the near future.\nThank you!",
        "relativePublishTimeDescription": "7 months ago",
        "publishTime": "1757228069"
      },
      {
        "authorName": "Gt",
        "rating": 5,
        "text": "Nixon our dog absolutely adores Julie and Swim Dog sessions. It's located in the old Dairyland site in Newquay. Easy parking and access to the purpose built pool just for pooches. Nixon is 10.5years old and has started to have wobbly legs. We have found with these sessions he has vastly improved his muscles to enjoy his walks more. Julie offers 1 to 1 sessions and pool parties for all age dogs. She has an array of water dog toys and floating jackets to wear until they are confident in the pool. Nixon knows when he is there and beats us out of the car, waiting at the gate to enter. We are grateful to have found these guys and definitely recommend booking a session. When you see how happy your dog is it's a brilliant experience for all. We will be booking more sessions shortly.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749992503"
      },
      {
        "authorName": "Sarah",
        "rating": 5,
        "text": "Fantastic! My doggo loved his private swim session.\n\nPlenty of parking and you can visit the Farm Shop Cafe and there's a dog groomers next door.\n\nWhen you get inside Swim Dog, there's a fenced paddock area you can use for the 30mins prior to your session. Benches and a little under cover area.\n\nThere's a changing room for getting into your swim gear and for changing after as well. All a one way system so you don't bump into the next booking. Hose and dryer provided for the dog too.\n\nThe owners are great! They were fantastic with my dog, easing him into the pool with a life jacket to start so he'd get use to it. Then when he'd worked out getting in and out safely, the life jacket could come off and he had a great swim around, playing fetch with all the toys!\n\nWill definitely be booking ahain.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753091651"
      }
    ]
  },
  {
    "id": "7bc6d92d-5849-4bb4-8a0e-88c91eebcef3",
    "googlePlaceId": "ChIJozFRW7gjYUgRPJUzIMguKoU",
    "googleMapsUrl": "https://maps.google.com/?cid=9595533393134851388",
    "name": "The Animal Physio NI",
    "slug": "the-animal-physio-ni",
    "category": "Animal hospital",
    "address": "11 Burrenreagh Rd, Castlewellan BT31 9HH, United Kingdom",
    "city": "Castlewellan",
    "region": "Northern Ireland",
    "postcode": "BT31 9HH",
    "phone": "+44 7922 168072",
    "website": "https://theanimalphysio-ni.com/",
    "rating": 5,
    "reviewCount": 4,
    "latitude": 54.2451512,
    "longitude": -5.9621203,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJozFRW7gjYUgRPJUzIMguKoU/image-1776467404106-c2d6acd9.png",
    "serviceTags": [
      "Physiotherapy"
    ],
    "reviewKeywords": [
      "knowledgeable staff",
      "education"
    ],
    "reviews": [
      {
        "authorName": "Karen Bleakley",
        "rating": 5,
        "text": "Teresa has the ability to work with anything that comes through her door. My three dogs have very different personalities and attend for different reasons. They are catered for individually with special care and attention. Teresa's love for her job and each client is very clear to see. She is professional,  knowledgeable, will answer and explain any query. My German Shepherd loves her, greets her with kisses and let's Teresa 'do her stuff', as she knows it makes her feel so much better. There is no higher recommendation than that!!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1719647084"
      },
      {
        "authorName": "Rebecca",
        "rating": 5,
        "text": "Teresa demonstrates her knowledge and education through her amazing care and skills. She’s been treating my dog for hip problems for over a year and has improved her quality of life, strength and stamina. Luna loves going to see her friend Teresa!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1736590911"
      },
      {
        "authorName": "Julie Hewitt",
        "rating": 5,
        "text": "I cannot express enough gratitude for Teresa, who has been an absolute blessing for Wuyang, my minature poodle. Her expertise, dedication, and genuine love for animals shine through in every session.\n\nTeresa goes above and beyond to ensure Wuyang receives the best care possible. Her knowledge of canine physiology is truly impressive, and she tailors each session to address Wuyang's specific needs. Not only does she provide exceptional physical therapy, but she also takes the time to educate me on exercises and techniques to continue Wuyang's progress at home.\n\nWhat truly sets Teresa apart is her compassion and empathy. She understands that Wuyang is not just a patient but a cherished member of my family. Her gentle approach and soothing demeanor instantly put Wuyang at ease, making every session a positive experience for him.\n\nI am continually amazed by Teresa's dedication to her work. She consistently goes the extra mile to ensure Wuyang's comfort and well-being, even providing follow-up calls to check on his progress. Her passion for helping animals is truly inspiring, and I feel incredibly fortunate to have found such a caring professional for Wuyang's therapy needs.\n\nIn summary, Teresa the animal physio is an absolute gem. Her expertise, compassion, and commitment to excellence make her the perfect choice for any pet owner seeking top-notch care for their furry companions. I wholeheartedly recommend Teresa to anyone in need of a skilled and compassionate dog physiotherapist.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1710593017"
      },
      {
        "authorName": "Gillian Mcniff",
        "rating": 5,
        "text": "I had my cockapoo Ralph with Teresa today. She has a great set up in her clinic with laser therapy and hydrotherapy. Very welcoming environment for all pets. Ralph has a weakness on one side of his back legs and Teresa is going to work with him to improve this. She is extremely knowledgeable  but very gentle. She had Ralph  cooperating with her and bonding with her in no time at all. Would recommend to anyone who has a pet with an injury or weakness",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1684781370"
      }
    ]
  },
  {
    "id": "a7ec4f95-7d07-4477-88ed-222c38345a0e",
    "googlePlaceId": "ChIJP0PaSxc5dEgRoJCT07q68XU",
    "googleMapsUrl": "https://maps.google.com/?cid=8498779283401183392",
    "name": "The Canine Fitness Centre (Petersfield) | Hydrotherapy & Physiotherapy for Dogs",
    "slug": "the-canine-fitness-centre-petersfield-hydrotherapy-physiotherapy-for-dogs",
    "category": "Rehabilitation center",
    "address": "Unit E Greenforde Farm Business Park Stoner Hill Road, Petersfield GU32 1DY, United Kingdom",
    "city": "Petersfield",
    "region": "England",
    "postcode": "GU32 1DY",
    "phone": "+44 1730 827994",
    "website": "https://www.thecaninefitnesscentre.co.uk/",
    "rating": 4.9,
    "reviewCount": 50,
    "latitude": 51.0344,
    "longitude": -0.9632728,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJP0PaSxc5dEgRoJCT07q68XU/image-1776467375581-ff0df397.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "border collie",
      "arthritis management",
      "physiotherapy",
      "laser therapy",
      "treatment plan explanation",
      "thorough assessments",
      "nervous dog"
    ],
    "reviews": [
      {
        "authorName": "Pete Davies",
        "rating": 5,
        "text": "Leanne, Tom and the team at Canine Fitness Centre (Petersfield) have been fantastic in supporting us with our staffie Max, making sure that he gets the right sort of treatment for his condition. Nothing has been too much trouble for them and they have worked with Max in a thoroughly professional and loveable way. I know they they loved Max as much as we did. Thank you all. Pete and Jo Davies",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767731792"
      },
      {
        "authorName": "Rona Bassett",
        "rating": 5,
        "text": "Saxon was referred to CFC when his arthritis was affecting his quality of life and some days he struggled to walk.  Since using the aquatic treadmill at your Wickham site his gait and ability to walk became less painful and more fluid.\nHannah and all the staff at CFC Wickham were amazing and took such care with Saxon, helping him to enjoy his sessions on the treadmill and always working at his pace.  He loved coming to the centre.  He even got a card and mega ball on his 15th birthday which he loved to play with.\nAs a result of the care and treatment by Hannah and the staff at CFC Wickham Saxon's end of life was happy and painfree.  I am forever grateful that you gave him more time to be with me and his brother, Flynn, than he might have had without the treatment.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1739998591"
      },
      {
        "authorName": "Denise Walsh",
        "rating": 5,
        "text": "I can’t praise enough all of the staff at The Canine Fitness Centre, Petersfield.\n\nFrom my first appt everything has been explained to me regarding my dogs treatment plan.\nJez my 12 yr old CKCS has been attending there since November 2024.\nAt the forefront of everything they do is Jez’s welfare.\nI have health problems of my own, so Jez’s home exercise plan has been adapted to accommodate my needs as well. We all work together to get the best outcome for my dog.\n\nI wish I had known about this fantastic facility  before. Even though Jez is an older lady, we have been able to make her more comfortable and mobile and she is definitely a happier dog.\n\nAll of the staff are so lovely, knowledgeable and approachable. We are blessed to have this resource in our area.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742149736"
      },
      {
        "authorName": "Richard Pannell",
        "rating": 5,
        "text": "We have been going to the Wickham Centre for 2 years as early intervention and prevention for our young Bulldog Rolo. At first Rolo was a little nervous of the pool, but with the help and encouragement of the fantastic team, Rolo is now a keen, energetic swimming and has made significant improvements with building strength in his back legs. Would recommend The Canine Fitness centre to anyone how is seeking the best for their beloved dogs.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743010873"
      },
      {
        "authorName": "courtney boulton",
        "rating": 5,
        "text": "Jenna is amazing with Loki, he is quite an energetic crazy dog. Jenna is very patient kind and caring. She generally cares about Loki and his recovery. Thanks from me and Loki. X",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1752506252"
      }
    ]
  },
  {
    "id": "6fab8a0c-0176-4255-b4d5-2173c2eef05b",
    "googlePlaceId": "ChIJb4haxCppdEgRAMhY_7pkWws",
    "googleMapsUrl": "https://maps.google.com/?cid=818358511608580096",
    "name": "The Canine Fitness Centre (Wickham) | Previously known as Hydrotherapy Four Paws",
    "slug": "the-canine-fitness-centre-wickham-previously-known-as-hydrotherapy-four-paws",
    "category": "Animal hospital",
    "address": "Unit F2, Knowle Village Business Park, Mayles Ln, Knowle, Fareham PO17 5DY, United Kingdom",
    "city": "Fareham",
    "region": "England",
    "postcode": "PO17 5DY",
    "phone": "+44 1329 834647",
    "website": "https://www.thecaninefitnesscentre.co.uk/wickham",
    "rating": 5,
    "reviewCount": 13,
    "latitude": 50.8829475,
    "longitude": -1.2073777,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJb4haxCppdEgRAMhY_7pkWws/image-1776467378243-3b56fbb3.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swims",
      "physiotherapy",
      "lovely staff",
      "team",
      "labrador",
      "staff"
    ],
    "reviews": [
      {
        "authorName": "Jayne Meadway",
        "rating": 5,
        "text": "From day 1 Sarah showed compassion and kindness to my nervous collie. I have found my dog Wren has improved significantly after having surgery on her front leg and due to Sarah having such a kind approach my girl has been happy to undertake all her physiotherapy without fear. We have now started Hydropherapy and again Sarah has taken her time to let my girl feel more comfortable before asking to much. Looking forward to our next session in the pool. I believe you really have the best professionals who can achieve amazing results thank you.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1768242010"
      },
      {
        "authorName": "Julian Kerr",
        "rating": 5,
        "text": "Hey brilliant team\n\nNot only did you work with us to help or lab x mastiff and his arthritis - after being threatened with surgery - you all\ngot our boy back on his feet.\n\nA few weeks ago we all noticed him\nslow down and not manage his usual physio. there or at home (owners- do their home physio as instructed at home!!!)\n\nTurns out Jackson had a 5cm vascular tumour on his spleen. Really tough decision - it ruptures and he bleeds then dies. Vs he is 11 and may not survive surgery or post op.\n\nSo! Being black and white - surgery.was the only option. If he died on the table then he was with his favourite Vet Helen at Stable Gen Vets. and would know nothing  Our hearts of course would snap\n\nso he had a splenectomy on monday gone and the tumour and spleen came out on one piece.\n\nhis recovery is below- without the physio’s physio assistants vet and following our painful hearts - he would t be alive much longer. You should see his  lordship now! happy brake, eating and drinking and getting me his toys. slowly slowly of course.\n\nHis life started being dumped in a landfill\nand only him and his sister lived. This kind, angelic, boy cares for the whole pack (4) and it’s beautiful to see him recovering.\n\nThank you to this amazing and determined team who hear the digs voices and the people trusted to hold their souls\n\nThank you\n\n.\nJust wanted to update you on Jackson if you could share it on your work WhatsApp?\n\nJackson had a very stable anaesthetic on monday and the Spleen and Tumour were removed in one piece. He came home that night and had morphine injections (i love my vet) throughout the night.\n\nHe has been the Jackson we know and love - strong, stoic and follows care orders!\n\nToday is day 5 and he saw the vet this morning. We await histology however he has been DISCHARGED!\n\nHe has his waist back! He barks with shear happiness and even gets toys! he demanded a walk today.\nHe is eating, drinking and pooping!\n\nSo the worst is over and NO shortness of breath.\n\nYOU as a team made him fit for this surgery - little did we know.\n\nYou, the vet, jackson and us have worked as one. This is how is should be for humans.\n\nHe’s no longer on morphine and the Vet feels he could restart post op physio after week 2\nVery slow and steady\n\nWhat a boy! Thank you to an awesome team who we truly consider our friends or at least on our side\n\n❤️❤️❤️❤️❤️❤️❤️❤️",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763840090"
      },
      {
        "authorName": "Olivia Mitchell",
        "rating": 5,
        "text": "Just the best people. They care about each and every dog like their own.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765139433"
      },
      {
        "authorName": "Parris-Emily James",
        "rating": 5,
        "text": "Highly recommend! We've been using Hydrotherapy - Four Paws for around a year now following my dogs first Hip Replacement Surgery. We've just had his second Hip Replacement done 5 weeks ago so will be back this week to start his recovery again. All the staff are so lovely and knowledgeable. xx",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1645441101"
      },
      {
        "authorName": "Paul Osman",
        "rating": 5,
        "text": "My dog Harry absolutely couldn't wait to get in and swim with the brilliant staff here. Harry had a block booking which gave him a new level of energy.  Now a few weeks later with a heavy heart Harry became very ill and couldn't carry on. We wouldn't hesitate to bring our new pup here if needed in the future. Keep up the good work girls.",
        "relativePublishTimeDescription": "5 years ago",
        "publishTime": "1606034199"
      }
    ]
  },
  {
    "id": "30b962a5-80b5-4674-98c6-4d0181eeb68f",
    "googlePlaceId": "ChIJWbaiSzrdeUgRFar8wrOMitI",
    "googleMapsUrl": "https://maps.google.com/?cid=15171092998449310229",
    "name": "The Canine Rehab Centre",
    "slug": "the-canine-rehab-centre",
    "category": "Rehabilitation center",
    "address": "Canaan farm, Loughborough Rd, Costock, Loughborough LE12 6XB, United Kingdom",
    "city": "Loughborough",
    "region": "England",
    "postcode": "LE12 6XB",
    "phone": "+44 7852 125349",
    "website": "https://thecaninerehabcentre.co.uk/",
    "rating": 5,
    "reviewCount": 1,
    "latitude": 52.8234034,
    "longitude": -1.1427387,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJWbaiSzrdeUgRFar8wrOMitI/image-1776467440102-bd8948ef.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Leah Calladine",
        "rating": 5,
        "text": "Kate is absolutely fantastic with our little pug. We've only had a few sessions but can see big improvement already. Kate's knowledge is priceless and Bailey loves her already! Cannot recommend enough!",
        "relativePublishTimeDescription": "a month ago",
        "publishTime": "1774043111"
      }
    ]
  },
  {
    "id": "b4efe29f-2425-4195-9174-3def9758da56",
    "googlePlaceId": "ChIJ5WaIPAuLc0gRaI5UtyJhKjs",
    "googleMapsUrl": "https://maps.google.com/?cid=4263326798992150120",
    "name": "The Dog Pool Canine Hydrotherapy and Fitness Centre",
    "slug": "the-dog-pool-canine-hydrotherapy-and-fitness-centre",
    "category": "Rehabilitation center",
    "address": "Whinwhistle Rd, Romsey SO51 6BN, United Kingdom",
    "city": "Romsey",
    "region": "England",
    "postcode": "SO51 6BN",
    "phone": "+44 1794 323804",
    "website": "https://www.thedogpool.co.uk/",
    "rating": 5,
    "reviewCount": 4,
    "latitude": 50.9637956,
    "longitude": -1.565476,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ5WaIPAuLc0gRaI5UtyJhKjs/image-1776467460106-7902f643.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Tim Catton",
        "rating": 5,
        "text": "We purchase our dog's raw food from Jayne who stocks Natural Instinct, which we find to be of excellent quality & which our dog loves! Jayne is always super helpful and accommodating when we place our orders.",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1663243826"
      },
      {
        "authorName": "teresa joof",
        "rating": 5,
        "text": "Jane is fantastic, very patient with my nervy little girl! Would highly recommend her.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1558115973"
      }
    ]
  },
  {
    "id": "05330e35-a399-43a6-bd45-8bf5db91cfb9",
    "googlePlaceId": "ChIJY3wxwdKu2EcRRScHbz0M-FE",
    "googleMapsUrl": "https://maps.google.com/?cid=5906484369291683653",
    "name": "The Pet Health & Therapy Centre",
    "slug": "the-pet-health-therapy-centre",
    "category": "Rehabilitation center",
    "address": "1 Bellegrove Parade, Welling DA16 2RE, United Kingdom",
    "city": "Welling",
    "region": "England",
    "postcode": "DA16 2RE",
    "phone": "+44 20 3260 5058",
    "website": "https://www.pethealthandtherapy.com/",
    "rating": 5,
    "reviewCount": 93,
    "latitude": 51.4639473,
    "longitude": 0.0943695,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJY3wxwdKu2EcRRScHbz0M-FE/image-1776467429098-22375737.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "hydrotherapy for dogs",
      "laser therapy",
      "hip dysplasia treatment",
      "dog recovery",
      "back injury recovery",
      "personable team"
    ],
    "reviews": [
      {
        "authorName": "Robyn Lusby",
        "rating": 5,
        "text": "So happy with the results over 8 weeks of physio and treatments after my cat had Femoral Head and Neck Excision.\n\nMassive thank you to Hannah for listening to me stress over those weeks and being so good with Pepper and administering her treatments as well as checking Peppers mobility every week. We couldn’t have done it without you.\n\nThe team are incredibly kind, knowledgeable, and truly passionate with what they do. Highly recommend.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760007073"
      },
      {
        "authorName": "Robert Horton",
        "rating": 5,
        "text": "We have been taking our dog, Barbara, to see Geoff and his team for around three months, and I couldn’t be more grateful for the help and support they have given us. Unfortunately, Barbara suffered from stage IV IVDD and underwent spinal decompression surgery. With her post-operative care being so critical to her recovery, we wanted to do everything we could to support her.\n\nHaving initially received treatment elsewhere, our first consultation at Pet Health & Therapy felt like a breath of fresh air. It has been an extremely upsetting and anxious time, but their expertise and warmth made us feel that Barbara’s recovery was in the best possible hands. The advice and treatment they have provided have been excellent. They’ve helped us separate good advice from bad, and Barbara’s progress under their care has been remarkable.\n\nIf anyone is in the unfortunate position of helping their pet recover from major surgery, I can’t recommend this team highly enough. They make a difficult situation feel just a little easier.\n\nThank you for all your help—we (and Barbara) will always be extremely grateful!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1734352962"
      },
      {
        "authorName": "Janet Pentecost",
        "rating": 5,
        "text": "Have been bringing my greyhound here for over a year due to various injuries and imbalances. During this time she's had laser, ultrasound, physio and hydrotherapy (treadmill). This has worked wonders for her. The staff have been amazing and I thoroughly recommend bringing your dog here too.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753054155"
      },
      {
        "authorName": "Chantelle Wilson",
        "rating": 5,
        "text": "This review is over due !! Geoff, Hannah and the team are all incredible our Big boy Bruce has been let down my humans, so really has to get to trust new people before you can be hands on with him, the team have been so great with him and taken it slow, now he can not wait to get through the doors and in to there arms. He has built muscle back up in his legs and is getting his strength back. Could reccomend more thank you",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1762005646"
      },
      {
        "authorName": "Steve Kallagher",
        "rating": 5,
        "text": "Sadly my poor Dachshund Otis had to have surgery for IVDD. We are so fortunate to live so close to The Pet and Health Therapy in Welling, a ten minute ride away. Geoff has been looking after Otis since he as able to retrieve treatment, Physio and Laser at home, and now just started Hydrotherapy at the centre. Geoff is so knowledgeable and experienced in dealing with complex animal injuries, and it has been an absolute pleasure to see my Otis improving over time. Keep up the great work guys.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748546786"
      }
    ]
  },
  {
    "id": "70ed5027-e28b-4f1a-a601-be3c0096fb0d",
    "googlePlaceId": "ChIJy5NwDplfbkgRueTRHtrVHcs",
    "googleMapsUrl": "https://maps.google.com/?cid=14636089496820638905",
    "name": "The Retreat Canine Hydrotherapy & Rehabilitation Centre",
    "slug": "the-retreat-canine-hydrotherapy-rehabilitation-centre",
    "category": "Rehabilitation center",
    "address": "Viking Way, Winch Wen, Swansea SA1 7DA, United Kingdom",
    "city": "Swansea",
    "region": "Wales",
    "postcode": "SA1 7DA",
    "phone": "+44 1792 700118",
    "website": "https://www.theretreatswansea.co.uk/",
    "rating": 5,
    "reviewCount": 27,
    "latitude": 51.6535597,
    "longitude": -3.9015965,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJy5NwDplfbkgRueTRHtrVHcs/image-1776467441328-e7daf7a8.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Jessica McMurchie",
        "rating": 5,
        "text": "I have no reservations in saying that this is the best, most caring place I have ever taken my dog. We have been coming for over a year now for hydrotherapy for my handful of a Labrador and there has never been one 'off' appointment. Every member of staff puts their patient first and have given me an example of the gold standard of how she should be treated by all pet professionals such as groomers and vets. I look forward to the fortnightly visits as much as my dog does and for a dog who puts the breaks on when going in to vets/groomers, the way she bounds in to The Retreat and can't wait to say hello to everyone who is around says it all. Thank you for all you all do for Nova and all you've taught me about her/how she should be treated!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729749221"
      },
      {
        "authorName": "Simon Robison",
        "rating": 5,
        "text": "I (along with my two dogs) could not recommend The Retreat highly enough. I have been taking Eugene for over 2 years and his sister, De'Lacy, for a little less time...but I couldn't count the number of times I have had to credit Danielle and the rest of the team when someone is surprised at their age if I stop to have a chat on a dog walk. Not only are they both in really amazing form for their age due to their monthly visits to the centre, but they both absolutely love to go; the excitement in both of them when they know where we're going speaks volumes. Thank you for giving them such a noticeable improvement in their senior years.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756483840"
      },
      {
        "authorName": "Danielle Lawson",
        "rating": 5,
        "text": "Every single member of the team at The Retreat are amazing with Leia. She can be very nervous and a little stubborn but they are so patient and caring with her and after every session she is noticeably happier and more comfortable. It was our first session back today after several months and we were both welcomed back so kindly; as we were leaving Leia was pulling on the lead to go back into the centre with Danielle which says it all! I'm very pleased we found The Retreat and I'd recommend them to anyone.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743856445"
      },
      {
        "authorName": "Claire Kendrick",
        "rating": 5,
        "text": "Charlie is back to his usual bouncy self thanks to the therapy you have provided. I can't wait to get started with my new found knowledge of canine massage. Thank you",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1716050637"
      },
      {
        "authorName": "Helen Thomas",
        "rating": 5,
        "text": "The staff are fantastic, they are all so very kind and caring to both dog and human. their knowkedge is brilliant, very clever ladies.\nThey had my dogs trust immediatly, my Olga adores them, as do I. I cannot praise them enough. my dog would go in limping quite badly, but would come away with a hardly noticeable limp.  Penny and Danielle worked with Olga, and they shared some of their expertise with me. Thankyou girls from the bottom of my heart, wishing you love and luck. xxx",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729602486"
      }
    ]
  },
  {
    "id": "65864b46-64f4-45d1-a54d-ae536fda48cf",
    "googlePlaceId": "ChIJW9yBsV5abEgRRpm8rKFtIf4",
    "googleMapsUrl": "https://maps.google.com/?cid=18312038101020350790",
    "name": "The Retreat, Canine Hydrotherapy and Rehabilitation",
    "slug": "the-retreat-canine-hydrotherapy-and-rehabilitation",
    "category": "Rehabilitation center",
    "address": "Tavistock Rd, Okehampton EX20 4LR, United Kingdom",
    "city": "Okehampton",
    "region": "England",
    "postcode": "EX20 4LR",
    "phone": "+44 7711 492689",
    "website": "https://www.theretreatrehab.co.uk/",
    "rating": 5,
    "reviewCount": 63,
    "latitude": 50.716999,
    "longitude": -4.0443911,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJW9yBsV5abEgRRpm8rKFtIf4/image-1776467376867-2742a36f.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Lorraine Godfrey",
        "rating": 5,
        "text": "We took our 12 year old border collie Lilly for her first session on the hydrotherapy treadmill to help with her arthritis.  Lilly has never been a fan of water but Scarlett and Duncan were absolutely brilliant with her and with treats and lots of encouragement she did absolutely amazing.  The facilities are first class and extremely well thought out.  Both Duncan and Scarlett are extremely knowledgeable and clearly love what they do and really care about the well-being of the dogs.  Looking forward to our next sessions.",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1769236167"
      },
      {
        "authorName": "David Saunders",
        "rating": 5,
        "text": "Thank you Duncan and Scarlet for looking after Tess so well today.\nWe don't like to miss a week at hydrotherapy, even when we are on holiday so I contacted The Retreat a couple of months ago to make arrangements for a session whilst were are in Devon this week. Very smooth process, 1st class facilities, and very receptive to us and our German Shepherd.\nI would wholeheartedly recommend.",
        "relativePublishTimeDescription": "4 months ago",
        "publishTime": "1765906827"
      },
      {
        "authorName": "Emma Ruck",
        "rating": 5,
        "text": "Helene and Scarlett are excellent. Great facility. Winnie loves them both and covers them with kisses!!. She really enjoys her hydrotherapy sessions and seems a lot more comfortable with her hip dysplasia. I would highly recommend their services.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1760460794"
      },
      {
        "authorName": "Joe Miles",
        "rating": 5,
        "text": "Massively recommend. Absolutely made up with our Bernese Mountain dog’s progress. The confidence Ernie’s gained in just 3 sessions is remarkable. Helen, Scarlet & Duncan have been wonderful, super attentive and patient, it’s clear to see, how much they enjoy what they’re doing.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754598601"
      },
      {
        "authorName": "Kerry Barnes",
        "rating": 5,
        "text": "Absolutely amazing team!! So knowledgeable, kind & patient- my 3 year old German Shepherd has hip dysplasia and the team have been fantastic, she absolutely loves them and I have noticed such an improvement in her mobility and fitness from the pool and water treadmill!\n\nThey also do puppy swims which I can not wait to start with my pup very soon! Can not rate the Cainine Retreat enough- highly recommend 🥰",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1719080877"
      }
    ]
  },
  {
    "id": "22d09cdd-6551-4c52-b460-e4807ff8864f",
    "googlePlaceId": "ChIJCcSYmzjNd0gR-BHlQ2iqQOI",
    "googleMapsUrl": "https://maps.google.com/?cid=16303218015873602040",
    "name": "The Soggy Dog Co. Limited",
    "slug": "the-soggy-dog-co-limited",
    "category": "Swimming facility",
    "address": "Farrowby Farm, New Inn Rd, Baldock SG7 5EY, United Kingdom",
    "city": "Baldock",
    "region": "England",
    "postcode": "SG7 5EY",
    "phone": "+44 7825 446161",
    "website": "https://www.thesoggydogco.co.uk/",
    "rating": 4.9,
    "reviewCount": 84,
    "latitude": 52.0320481,
    "longitude": -0.2151162,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJCcSYmzjNd0gR-BHlQ2iqQOI/image-1776467450280-91f6b971.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "dog swimming lessons",
      "helpful instructor",
      "dog confidence building",
      "friendly staff",
      "kind staff",
      "first swimming experience",
      "fun atmosphere"
    ],
    "reviews": [
      {
        "authorName": "sophie keene",
        "rating": 5,
        "text": "We took our dog today for his first swim and he had an excellent time and literally did not want to leave. The lady there was really helpful with making sure he was happy and giving some tips on how to get him in the water and build up his confidence. We will 100% be visiting again",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748800613"
      },
      {
        "authorName": "Rosemary Bolton",
        "rating": 5,
        "text": "First visit today but won’t be the last.\nBrilliant facility and dogs love it.\nIt is attended and the lovely Stacey was careful to help, explain everything and ensure safety of dog and us. Life jackets available.\nToilet available.\nHighly recommended facility.\nThank you Stacey.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1754073936"
      },
      {
        "authorName": "Quinn E (Quinn E)",
        "rating": 5,
        "text": "I have a sofa TV dog and I wanted her to try something new. Turns out she can now swim so we are prepared for emergencies even though she hated every second haha. I however had a great time! Staff was great and v friendly. Thank you soggy doggy! Would be great to have a shielded area for changing, as I have an invisible disability and it wasn't possible for me to change in the portaloo so my backside was on display. The area has a ramp in but stairs up to the pool. The rest of the area is flat and there are chairs. Although sort of private a man did come to remove privacy greenery nettles during our changing time which was rather uncomfortable as a few seconds earlier he would have seen my bits and pieces as I had no other choice but to change in the open. The area was pleasant, with an orchard next door. The pool is a really good size and its possible for humans to swim in it too.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756293311"
      },
      {
        "authorName": "Heather Davey",
        "rating": 5,
        "text": "Can’t recommend this place enough. My 1yo golden retriever puppy was eager to swim and got very excited around water but didn’t have the confidence to get in. Within 10 minutes she was jumping in, loving it, chasing balls, swimming back to the dock. We eagerly booked a second session and within minutes she was already jumping off the top dock. It’s great fun for humans seeing how happy it makes their dogs and they sleep well afterwards.\n\nOur baby watched from the sidelines. Stacie was so friendly and accommodating. She’s great! I never felt rushed.\n\nIt’s well lit in winter if you brave the cold. It’s a safe and well designed venue for dogs.\n\nTip: Wear tracksuit set, nails will catch you in leggings or shorts. Bring onesie/ dressing gown for after. The drying robes are great for dogs.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1698257635"
      },
      {
        "authorName": "Pam",
        "rating": 5,
        "text": "It was our fist time at Doggy Dogs. Ruby sausage had a good time. Its great exercise to strengthen her back muscles and it's fun.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1756365993"
      }
    ]
  },
  {
    "id": "d580fe91-a73e-47a0-a071-e962e9b8002c",
    "googlePlaceId": "ChIJv1FfFGTLiUgRlR1QaDWWW7s",
    "googleMapsUrl": "https://maps.google.com/?cid=13500549464100707733",
    "name": "The Veterinary Physiotherapy Clinic",
    "slug": "the-veterinary-physiotherapy-clinic",
    "category": "Rehabilitation center",
    "address": "Goldenacre Aiket Road, Dunlop, Kilmarnock KA3 4BW, United Kingdom",
    "city": "Kilmarnock",
    "region": "Northern Ireland",
    "postcode": "KA3 4BW",
    "phone": "+44 7801 827214",
    "website": "https://www.vetphysioclinic.com/",
    "rating": 5,
    "reviewCount": 10,
    "latitude": 55.7108732,
    "longitude": -4.5651727,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJv1FfFGTLiUgRlR1QaDWWW7s/image-1776467435835-9bbb93ed.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Caron Greenwood",
        "rating": 5,
        "text": "My standard poodle has hip dysplasia and I have been taking him regularly to Lara's. His swimming sessions have helped him greatly and he loves going. Lara is so good with him and it's great that she goes into the pool too, this makes my dog feel at ease. My vet recommended Lara to me and I also highly recommend her.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1570745971"
      },
      {
        "authorName": "Lyndsey Thom",
        "rating": 5,
        "text": "We have been taking Poppy our 8 year old Labrador to Lara since March this year. She was suffering from lameness and was overweight. She has lost 6kg and her lameness has improved dramatically. She absolutely loves swimming and is always excited to see Lara. Very friendly service and personal to each individual pet. Great for dogs who may be nervous. Poppy gives it Lara 5 stars ⭐️",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1572029207"
      },
      {
        "authorName": "Gillian Graham",
        "rating": 5,
        "text": "I first met Lara a few years ago when I brought my Papillon Leo for physio treatment after he suffered a horrendous back injury and was partially paralysed. Lara was amazing with him, she treated him with physio in and out of the pool and also gave me exercises to carry out at home between treatments to help, he made a full recovery and is still going strong at 15 years old. Throughout his treatment he loved going to see Lara and she still remains one of his favourite people.  Since my original meeting I have continued to bring my competing flyball dogs to Lara to help maintain their physical health so they can compete safely and stay in great condition and any small niggles they ever have Lara deals with brilliantly, as Lara is actually in the pool with the dogs it means she can actually make sure they are using their muscles the way they should be.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1570569901"
      },
      {
        "authorName": "Jacqui Graham",
        "rating": 5,
        "text": "Alfie, 7 year old cavvy, suffered from steroid responsive meningitis arthritis starting September 2022. After 3 weeks at SAH Glasgow, we brought him home with 2 slings. He was only able to take a few steps and was in great pain. We took him to see Lara, who has painstakingly worked with him since then. Lara is honest, caring, and superb at what she does. She continues to teach us how to work with our wee boy to make him stronger every day. He runs and jumps again, and is a complete joy.\nThe vets at SAH saved his life. Lara has given him joy again in his life. She is a miracle worker. We can’t recommend her enough.\nThanks Lara🥰",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1679000704"
      },
      {
        "authorName": "Angela Cunningham",
        "rating": 5,
        "text": "My 7 year old chocolate lab has been attending Lara's clinic for 5 months. The vets are really pleased with the improvement in her hips and weight loss. They are no longer suggesting surgery at this stage. Muffin loves her hydrotherapy sessions.",
        "relativePublishTimeDescription": "6 years ago",
        "publishTime": "1575225551"
      }
    ]
  },
  {
    "id": "041111d1-2cda-48f3-bdbc-c4dfb44e4440",
    "googlePlaceId": "ChIJ0XT6gN0rdEgRpcZ_ZL2mJTM",
    "googleMapsUrl": "https://maps.google.com/?cid=3685535202437744293",
    "name": "Theravet (Hertfordshire)",
    "slug": "theravet-hertfordshire",
    "category": "Rehabilitation center",
    "address": "Jacks Unit, The Common, Chipperfield, Kings Langley WD4 9BL, United Kingdom",
    "city": "Kings Langley",
    "region": "England",
    "postcode": "WD4 9BL",
    "phone": "+44 1923 260012",
    "website": "https://theravet.com/",
    "rating": 5,
    "reviewCount": 29,
    "latitude": 51.702216,
    "longitude": -0.487514,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ0XT6gN0rdEgRpcZ_ZL2mJTM/image-1776467429070-a856b615.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "maintenance care",
      "skilled staff",
      "rehab program",
      "amazing team",
      "labrador",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Laura Crouch",
        "rating": 5,
        "text": "Cannot recommend Emma and the team at Theravet enough.  Brew hurt himself falling in a lake at 9months old was referred to two different specialist vets after spending thousands they couldn’t identify what was wrong with him, I found Theravet  through a recommendation, rang up and downloading his whole history on Emma.  They saw him 2 weeks later and sent him for a scan to confirm their findings which it did he has some treatment at the vets and then physio to manage his recovery.  On going back for another scan at the vets to see how he was healing the vet found that based on the last scan she wouldn’t say he had ever had any injury.  This is no doubt to the the treatment hand constant monitoring the team give him.  Brew loves going to Theravet and all of the team there they have done an amazing job with him and defiantly should be commended for everything they do.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1650031125"
      },
      {
        "authorName": "Jane Chenery",
        "rating": 5,
        "text": "I have been taking my dogs to Theravets for a number of years and Emma and her team have always looked after them with such great care. Having agility dogs and Harvey being in the GB squad, the demand on their bodies is enormous and therefore ensuring they are properly cared for is crucial. From diagnosis to treatment I have always been kept well informed. Where necessary communicating with my vet to ensure the best line of treatment is always given.\nThanks to Theravet Harvey is fitter and faster than he has ever been which is testament to their facilities and knowledge.",
        "relativePublishTimeDescription": "4 years ago",
        "publishTime": "1643226444"
      },
      {
        "authorName": "Naomi Scott",
        "rating": 5,
        "text": "Without doubt the most amazing, supportive and knowledgeable group of people.  We’ve received support for our dog that goes above and beyond what you’d expect.  We’ve made use of physio, water treadmills, acupuncture and the pool over the past for years since our dog has pins and plates put in her legs.  All the women genuinely love animals and want the best for them.  I recommend theravet to anyone who asks for recommendations.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754587391"
      },
      {
        "authorName": "Tank Forrest",
        "rating": 5,
        "text": "Absolutely fantastic services, out senior bulldog has been receiving on going treatment and support here and it's giving her a new lease on life ! The staff are lovely and really supportive and so genuine in the love they have for the work they do and animals they treat. I cannot recommend them enough to anyone looking for support in helping your furry family members.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754587328"
      },
      {
        "authorName": "Susie Wiggins",
        "rating": 5,
        "text": "I could not be more impressed with Theravet if I tried. They were so thoughtful and kind with my little doggie who did not like water before she went to them. She had a luxating patella and was completely limping and not even using her back leg. The therapists did an amazing job, my vet wanted me to do expensive and risky surgery and I chose therapy instead. It has now been over 6 months and Molly seems to be completely cured. If you have any muscle issues with your dog take them to Theravet before you ever even think about any other kind of treatment. Thank you Theravet you were amazing!",
        "relativePublishTimeDescription": "9 years ago",
        "publishTime": "1484666399"
      }
    ]
  },
  {
    "id": "935aa713-fd28-43e1-b601-6da468d22477",
    "googlePlaceId": "ChIJP1K7uq57eUgR5pHvS10BoUo",
    "googleMapsUrl": "https://maps.google.com/?cid=5377580930274660838",
    "name": "Tidal Paws Dog Fitness Swimming Pool",
    "slug": "tidal-paws-dog-fitness-swimming-pool",
    "category": "Swimming facility",
    "address": "Shaw Ln, Barnsley S70 6EH, United Kingdom",
    "city": "Barnsley",
    "region": "England",
    "postcode": "S70 6EH",
    "phone": "+44 7594 622103",
    "website": "https://www.tidalpaws.co.uk/",
    "rating": 4.9,
    "reviewCount": 115,
    "latitude": 53.5497894,
    "longitude": -1.4914135,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJP1K7uq57eUgR5pHvS10BoUo/image-1776467463938-692e3b3f.jpg",
    "serviceTags": [
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "dog swimming",
      "confidence building",
      "welcoming staff",
      "dog wash",
      "nervous dogs",
      "friendly staff",
      "swimming lessons",
      "welcoming atmosphere"
    ],
    "reviews": [
      {
        "authorName": "Brett Wills",
        "rating": 5,
        "text": "Brilliant venue to bring your pet to swim in a safe environment and provide 1 to 1 coaching in the water to guide you and your pets for a closer bond whilst swimming. Our Milo is usually nervous around new people and instantly loved Anna and Grace which is amazing! Anna and Grace are brilliant at what they do and they provided plenty of photography of our session. We will 100% be looking to make this a regular session!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1751491795"
      },
      {
        "authorName": "Lee Calcutt-Scott",
        "rating": 5,
        "text": "Excellent experience. Our dogs loved it at Tidal Paws. The staff were professional, knowledgeable and really friendly. The facilities are great, they have a toilet, changing room and plenty of parking. Our boys left smelling fantastic (a quick wash is included in the price) and well exercised.\n\nAt £40 for 30 minutes of swimming (that's for both dogs, not per dog) I think it is well worth it. The owner (Grace) took loads of pics and videos which were sent to us at no extra cost. We've booked in for another swim session in 2 weeks. I highly recommend Tidal Paws.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1711966189"
      },
      {
        "authorName": "Freya Lightfoot",
        "rating": 5,
        "text": "I took my dog Woody for his very first swim here today, and since he’s a nervous dog, I was quite apprehensive about how the experience would go. Megan and the staff instantly made Woody feel calm and safe. They let him take everything at his own pace, and by the end of the session he was absolutely loving it and had gained so much confidence. I will definitely be back — I can’t recommend Tidal Paws enough!",
        "relativePublishTimeDescription": "3 months ago",
        "publishTime": "1767548569"
      },
      {
        "authorName": "Amanda N",
        "rating": 5,
        "text": "Grace gave lots of great information when I called and is such a lovely lady. We booked and when we went she was great and talked me through it all. Don't arrive more than 5 mins before, she won't get able yo get to the door. We signed health forms. Grace fitted his harness whilst I went to the bathroom (dogs are allowed to go in if needed or wanted). Grace told me where to safely got into the small pool via some steps. She then helped in my 1 year old scared Golden Retriever. Proof not all dogs instinctively swim. She went round 2 or 3 times with him and went to the ramp for a few seconds rest. He really was quite scred bless him. Grace was wonderful and we both reassured him whilst he was moving around. After a few times I had a go. Grace took lots of pics and videos. He did so well in our session. We let him go when it was time, he got out. We were in the pool chatting, he came back to the ramp, and when I called him, he did a huge leap into the pool and swam to me!  Huge progress! We were so proud! I will probably book another 1 or 2 lessons as he's still a bit nervous but this has helped so much! I will add, if you have a wetsuit, wear it! My boy is huge and was panicked, he's really scratched and bruised my legs badly. I might try beach shoes as well, my feet kept slipping. I love that they've been careful how to treat the pool. The room didn't smell strong like pools do. It was cooler for the dogs but fine once in! You're moving lots! Afterwards my boy had a special dog shower! He's smells better than he ever has! Grace even told me how to dry his ears and what to be careful of when he's wet as this breeds ears can easily get infections if not dried properly. Grace was lovely, professional, really informative. We drove 45 min to get there, it was so worth it! We'll be back! His confidence has grown so much in a short time, he's still a lnervous but this was brilliant for him, i loved that we could do it together and I feel that in itself is really reassuring for nervous  dogs.  Teaching them to swim is so important. THANK YOU GRACE!! We loved it! X",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743926082"
      },
      {
        "authorName": "Olivia Keyworth",
        "rating": 5,
        "text": "The best experience with tidal paws! Staff very helpful and supportive, great with Hudson, who has never swam before going to the session. Couldnt recommend more. Will definitely be back.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770153490"
      }
    ]
  },
  {
    "id": "2d157218-7ad4-47ef-8a84-cc8ec3adb2f0",
    "googlePlaceId": "manual-tomlinsons-canine-hydrotherapy-centre",
    "googleMapsUrl": null,
    "name": "Tomlinsons Canine Hydrotherapy Centre",
    "slug": "tomlinsons-canine-hydrotherapy-centre",
    "category": "Hydrotherapy center",
    "address": "Upper Grange Farm, Ratby Lane, Markfield, Leicester LE67 9RJ, United Kingdom",
    "city": "Markfield",
    "region": "Leicestershire",
    "postcode": "LE67 9RJ",
    "phone": "+44 1530 242525",
    "website": "https://www.tomlinsonskennels.com/",
    "rating": null,
    "reviewCount": null,
    "latitude": 52.6878,
    "longitude": -1.2805,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab"
    ],
    "reviewKeywords": [
      "hydrotherapy centre",
      "dog swimming"
    ],
    "reviews": []
  },
  {
    "id": "a49711f4-6574-453c-928e-536f6b45c859",
    "googlePlaceId": "manual-trafford-park-canine-hydrotherapy",
    "googleMapsUrl": null,
    "name": "Trafford Park Canine Hydrotherapy",
    "slug": "trafford-park-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Unit 18, The Bridgewater Centre, Robson Avenue, Trafford Park, Manchester M41 7TE, United Kingdom",
    "city": "Manchester",
    "region": "Greater Manchester",
    "postcode": "M41 7TE",
    "phone": "+44 7720 843205",
    "website": "https://tpcaninehydrotherapy.com/",
    "rating": null,
    "reviewCount": null,
    "latitude": 53.4685,
    "longitude": -2.3482,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Treadmill",
      "Rehab",
      "Swimming Pool"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "underwater treadmill",
      "rehabilitation"
    ],
    "reviews": []
  },
  {
    "id": "9862a411-ff46-46cf-864e-c109b32a46f0",
    "googlePlaceId": "ChIJh3V-kswdckgR0biITwLLNyE",
    "googleMapsUrl": "https://maps.google.com/?cid=2393604937755441361",
    "name": "Vet & Physio",
    "slug": "vet-physio",
    "category": "Rehabilitation center",
    "address": "Unit 4A, Kirklea Farm Badgworth, Church Ln, Badgworth, Axbridge BS26 2QH, United Kingdom",
    "city": "Axbridge",
    "region": "England",
    "postcode": "BS26 2QH",
    "phone": "+44 7508 582231",
    "website": "https://www.vetnphysio.com/",
    "rating": 5,
    "reviewCount": 1,
    "latitude": 51.2702993,
    "longitude": -2.8710741,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJh3V-kswdckgR0biITwLLNyE/image-1776467447630-71073348.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "thefunnypug",
        "rating": 5,
        "text": "Highly recommend Mathilde and team. Stewie pug has been going to her since a very young age and Marold has been a few times also and they are very professional very caring and give all their attention to your pet when being treated. I’m really thankful to Mathilde and team for everything they’ve done and do.",
        "relativePublishTimeDescription": "8 months ago",
        "publishTime": "1754908445"
      }
    ]
  },
  {
    "id": "d878d065-4a11-4298-a9d0-5b498511feff",
    "googlePlaceId": "ChIJ2Qgcy6kLYUgRq7LH5Mx0Gro",
    "googleMapsUrl": "https://maps.google.com/?cid=13410159263809516203",
    "name": "Vet Rehab Ni Ltd",
    "slug": "vet-rehab-ni-ltd",
    "category": "Rehabilitation center",
    "address": "2 Church Rd, Dundonald, Belfast BT16 2NJ, United Kingdom",
    "city": "Belfast",
    "region": "Northern Ireland",
    "postcode": "BT16 2NJ",
    "phone": "+44 28 9045 3936",
    "website": "https://vetrehabni.co.uk/",
    "rating": 4.9,
    "reviewCount": 9,
    "latitude": 54.5941496,
    "longitude": -5.8041155,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ2Qgcy6kLYUgRq7LH5Mx0Gro/image-1776467403796-2b4b0f5e.jpg",
    "serviceTags": [
      "Rehab"
    ],
    "reviewKeywords": [
      "acupuncture",
      "clear explanations",
      "staff"
    ],
    "reviews": [
      {
        "authorName": "Emilia Kucharska",
        "rating": 5,
        "text": "From the moment we arrived, it was clear my dog was in the best possible hands. From start to finish, she was so well looked after. The Vet showed genuine kindness and compassion, alongside a really high level of professionalism. Everything was explained clearly, and my dog was treated with so much care during her treatment. It was obvious she was in safe, experienced hands, and she came away calm and comfortable. Thank you for such excellent care.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770213874"
      },
      {
        "authorName": "Sonja Chambers",
        "rating": 5,
        "text": "I use Vet Rehab for my 14 year old lurcher he recieves both acupuncture in Dundonald and goes to Hydro in East Belfat. Both have been a great success slowing his deterioration and reducing his pain and discomfort. The staff are professional, friendly and helpful and I couldn't recommend them highly enough. Milo after his Christmas swim and peacefully napping after all the fun.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1734009287"
      },
      {
        "authorName": "Ali H",
        "rating": 5,
        "text": "We are so gateful for this gem! Dougal had unexplained limping and off form, Becky has been incredible over the last 8 months in helping Dougal get back to himself and the healthiest he has been! Thank you ❤️",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1763216189"
      },
      {
        "authorName": "Sam Stanfield",
        "rating": 5,
        "text": "Excellent service provided. My dog received acupuncture from a highly trained vet, who was brilliant at putting my dog at ease. Treatment is proving to be very beneficial.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1752488347"
      },
      {
        "authorName": "H C",
        "rating": 5,
        "text": "Josie is fantastic with my elderly cat, who doesn't usually like people! The acupuncture has done my cat the world of good and takes place in a calm, clean and quiet room",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1729512621"
      }
    ]
  },
  {
    "id": "d8ca7015-d3fa-44dc-adb4-75f38287639f",
    "googlePlaceId": "ChIJo6z7cAoJYUgRV4akD_rMDZs",
    "googleMapsUrl": "https://maps.google.com/?cid=11172811624952399447",
    "name": "Vet Rehab Ni Ltd",
    "slug": "vet-rehab-ni-ltd-2",
    "category": "Physical therapist",
    "address": "Unit 21, 308 Albertbridge Rd, Belfast BT5 4GX, United Kingdom",
    "city": "Belfast",
    "region": "Northern Ireland",
    "postcode": "BT5 4GX",
    "phone": "+44 28 9045 3936",
    "website": "https://www.vetrehabni.co.uk/",
    "rating": 5,
    "reviewCount": 27,
    "latitude": 54.5978401,
    "longitude": -5.8948208,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJo6z7cAoJYUgRV4akD_rMDZs/image-1776467401936-19d16f7c.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "care for dogs",
      "acupuncture",
      "caring staff",
      "ongoing support",
      "mobility improvement",
      "muscle mass",
      "massage"
    ],
    "reviews": [
      {
        "authorName": "Lindsay Buchanan",
        "rating": 5,
        "text": "My 14 year old terrier mix, Cassie, had a great experience with Vet Rehab NI, she swims a lot straighter and is super strong. She had a mix of hydro sessions as well as physio and has shown no signs of stiffness or slowness since she began. Big thanks to the team and Meg especially who has supported Cassie’s treatment so far and has enabled her to keep swimming at her favourite place - the beach!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1750760686"
      },
      {
        "authorName": "Ann",
        "rating": 5,
        "text": "We have been using your services for two years now for max a nine yr German shepherd you have made a massive difference to him he’s like a loving puppy again enjoying his life the support and help we re I’ve from you is invaluable to us  because you make max so happy every time  makes us so so happy  we hope to be with you for many more happy years to come",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762953995"
      },
      {
        "authorName": "Jae Shon",
        "rating": 5,
        "text": "Wonderful Therapy for Our Senior Lab\n\nOur 11-year-old Lab, Snow, started showing stiffness, and we wanted to find a way to keep her comfortable and moving well. Becky has been amazing—so kind, knowledgeable, great communication with and patient. She truly cares about the dogs she works with, and it shows.\n\nThe laser therapy has helped ease Snow’s stiffness, and the swim sessions have been great for her mobility. One of the biggest changes we’ve noticed is how much more square and straight her hips are now. She may not be moving like a puppy again, but she’s definitely more comfortable and energetic.\n\nIf your dog is struggling with stiffness or joint issues, we highly recommend Becky and her therapy sessions. We’re so grateful for the care Snow has received.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1740356353"
      },
      {
        "authorName": "Valerie McKay",
        "rating": 5,
        "text": "Poppy (now 11) has been attending here for some years - first for fun swims, later to help recovery after injury, and now to help maintain fitness and mobility.  She loves to see Clare, who is marvellous with her - adapting the experience to her needs, helping her stay fit and mobile as she ages, and always with love - being sure to finish each session with a cuddle!   Highly recommended!!!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1743952248"
      },
      {
        "authorName": "Lyndsay Shannon",
        "rating": 5,
        "text": "Vets Rehab NI has been brilliant for my chocolate lab, who has hip dysplasia. The hydrotherapy has really helped his movement, and he absolutely loves it!  We have been going for years and couldn't recommend them enough!\n\nThe team are great, professional and really care.",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749804607"
      }
    ]
  },
  {
    "id": "1515a964-b7b2-46ce-a993-1728e9ec5fd5",
    "googlePlaceId": "ChIJxZdlrwcZaEgRkMZcF9iLcmw",
    "googleMapsUrl": "https://maps.google.com/?cid=7814462063662384784",
    "name": "Vetannery Physiotherapy",
    "slug": "vetannery-physiotherapy",
    "category": "Physical therapist",
    "address": "Rosslare Rd, Rocklands, Wexford, Y35 DT96, Ireland",
    "city": "Wexford",
    "region": "Northern Ireland",
    "postcode": "Y35 DT96",
    "phone": "+353 87 144 7636",
    "website": "https://www.vetanneryphysiotherapy.com/",
    "rating": 5,
    "reviewCount": 24,
    "latitude": 52.3252047,
    "longitude": -6.450934,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJxZdlrwcZaEgRkMZcF9iLcmw/image-1776467419449-c47eb707.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Mobility"
    ],
    "reviewKeywords": [
      "dog physio",
      "cruciate ligament injury",
      "nervous rescue dog",
      "house calls",
      "gentle approach",
      "strength building",
      "arthritis",
      "senior dogs"
    ],
    "reviews": [
      {
        "authorName": "Zarah",
        "rating": 5,
        "text": "I highly recommend Vetannery Physiotherapy!\n\nI will forever be thankful to Lynsey for her help with getting my 11-year-old standard poodle Olly back up on his feet when he suddenly couldn’t walk! It was a time when the vets had no answers for us (even after MRI, CT, labs, etc) and family members had begun questioning his quality of life. However, except for not being able to walk, Olly remained happy, playful, food-driven, so I knew that it wasn’t his time, that we just needed to make some adjustments. Reaching out to Lynsey was the best decision I could have made, both for myself and for Olly. She came to our home, listened to my concerns, worked her magic on Olly, and gave me basic daily exercises to do with him. Within a few appointments/weeks, Olly was able to stand steadily by himself and walk short distances while supported by a sling without dragging his feet. Over the next few months, I followed Lynsey’s guidance and lengthened our walks slowly but surely. Eventually, we were able to do our usual lap around the block, go to the park, and even went glamping together earlier this year!\n\nIf you ever find yourself in a similar situation, I can't recommend Lynsey enough—she truly gave us a second chance to create more precious memories together.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1726055186"
      },
      {
        "authorName": "Patricia Byron",
        "rating": 5,
        "text": "I wholeheartedly recommend Lynsey. She has guided Marley, our 11-year-old bichon x through two cruciate ligament surgeries over the past three years with exceptional care. Her approach strikes the perfect balance—gentle yet firm, supportive yet encouraging. Marley absolutely adores her, eagerly wagging his tail whenever he sees her and willingly following her guidance. He truly trusts and responds to Lynsey in a remarkable way. Her new laser treatment has made a major difference to Marley’s recovery.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1737116390"
      },
      {
        "authorName": "Juraj György",
        "rating": 5,
        "text": "Thank you Lynsey for taking great care of our senior dog. Our husky (14 years old) suffered from severe back pain. Immediately after the first therapy, he was greatly relieved.\nAfter several more therapies, the pain almost disappeared. Lynsey is wonderful, friendly, empathetic and despite that she is very professional.\nContacting her was the best decision.\nMany thanks for everything!",
        "relativePublishTimeDescription": "10 months ago",
        "publishTime": "1749854731"
      },
      {
        "authorName": "Niamh Foley",
        "rating": 5,
        "text": "I cant recommend Lynsey enough, she has done an incredible job on treating / making my tripod dog Sadie more comfortable in her every day life. She is able to run and play all day long with little to no pain, all thanks to Lynsey. Sadie loves her monthly visits to Wexford.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1734441996"
      },
      {
        "authorName": "sarah mcgrath",
        "rating": 5,
        "text": "Lynsey has been fantastic with our dog Gucci following surgery for IVDD. She’s so knowledgeable and accommodating. Gucci loves going to see her, her surgeon was amazed with her progress and I attribute that directly to the work Lynsey has done with her and the exercises she recommended we do at home.\nGucci loves going to see Lynsey and all the attention she gives her.\nWe have a different dog after her sessions as you can in the pictures attached and we can’t wait to continue strengthening Gucci to minimise further issues.\nWe highly recommend everyone reach out to Lynsey if you are in need to animal physio. Amazing service and always with  a positive friendly attitude.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1704205930"
      }
    ]
  },
  {
    "id": "e1ebd51b-7c67-4a42-98dc-5f7295cf92a7",
    "googlePlaceId": "ChIJcb4CtTEHZ0gR6PtxNLZSG84",
    "googleMapsUrl": "https://maps.google.com/?cid=14851555138701753320",
    "name": "Veterinary Physio Clinic",
    "slug": "veterinary-physio-clinic",
    "category": "Physical rehabilitation center",
    "address": "92 George's Street Upper, Dún Laoghaire, Dublin, A96 V1K8, Ireland",
    "city": "Dublin",
    "region": "Northern Ireland",
    "postcode": "A96 V1K8",
    "phone": "+353 89 279 9751",
    "website": "https://www.veterinaryphysioclinic.ie/",
    "rating": 5,
    "reviewCount": 3,
    "latitude": 53.2911379,
    "longitude": -6.1328329,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJcb4CtTEHZ0gR6PtxNLZSG84/image-1776467416626-8a65be23.jpg",
    "serviceTags": [
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Jaga Ansion",
        "rating": 5,
        "text": "During sessions, Anna shares her invaluable knowledge which helps you understand your dog’s condition and their treatment better. She’s incredibly kind, patient and compassionate - a true animal lover and a lovely human being. I would HIGHLY recommend!!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761208329"
      },
      {
        "authorName": "Linda",
        "rating": 5,
        "text": "I have been attending Anna for the past few months and could not recommend her highly enough. My miniature dachshund had spinal surgery in February 2025 and was a Grade 5 IVDD. He couldn't walk and his odds of walking again were slim. He was so poorly our vet had prepared me for the worst case scenario. I started to bring him to Anna in March for weekly physio and hydrotherapy sessions. Since then, he has made huge improvements, is walking again and has regained his quality of life. He still has some way to go and I will continue to work with Anna to afford him the best chance of as full a recovery as possible.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753025682"
      },
      {
        "authorName": "Kevin Curley",
        "rating": 5,
        "text": "Anna at Veterinary Physio Clinic has been absolutely brilliant with our dog, Eleanor, who is currently dealing with a partial torn knee ligament. From the very start, Anna has taken a proactive and thoughtful approach, working closely with us to strengthen Eleanor ahead of her surgery while already putting a clear, structured plan in place for her recovery afterwards.\n\nHer knowledge and expertise are obvious in everything she does, but what really stands out is her patience and genuine care. Every time we visit, it’s clear she treats each animal with real attention and compassion. She takes the time to explain things properly, answer any questions, and make sure we feel confident in the process.\n\nAnna is incredibly easy to talk to and always makes both the owner and the animal feel like the top priority. We’ve seen such a positive impact already, and it’s reassuring knowing Eleanor is in such capable hands. I couldn’t recommend her highly enough.",
        "relativePublishTimeDescription": "a week ago",
        "publishTime": "1776690749"
      },
      {
        "authorName": "Gemma G",
        "rating": 5,
        "text": "Anna is fantastic, she has helped our dog so much. She is back doing her zoomies again. Anna is Such a kind, warm person. Our doggy gets excited when we get to the clinic now. Excellent clinic, would highly recommend.",
        "relativePublishTimeDescription": "2 weeks ago",
        "publishTime": "1776079577"
      }
    ]
  },
  {
    "id": "92ffbc2e-ae27-460f-9a4f-6f384f666b5f",
    "googlePlaceId": "ChIJ7xR6lN-JdUgRmer-INtNXV4",
    "googleMapsUrl": "https://maps.google.com/?cid=6799676615946070681",
    "name": "Veterinary Studies & Hydrotherapy Centre",
    "slug": "veterinary-studies-hydrotherapy-centre",
    "category": "Hydrotherapy center",
    "address": "Wales Farm Ln, Lewes BN7 3AS, United Kingdom",
    "city": "Lewes",
    "region": "England",
    "postcode": "BN7 3AS",
    "phone": "+44 1273 892026",
    "website": "https://www.plumpton.ac.uk/root/courses/veterinary/animal-rehabilitation-therapies-at-plumpton-college/",
    "rating": 5,
    "reviewCount": 4,
    "latitude": 50.9047204,
    "longitude": -0.0729943,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ7xR6lN-JdUgRmer-INtNXV4/image-1776467426555-26ef8f8f.jpg",
    "serviceTags": [
      "Hydrotherapy"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "kindness"
    ],
    "reviews": [
      {
        "authorName": "Antoinette Atkins",
        "rating": 5,
        "text": "Orla has been absolutely amazing throughout lily's recovery .   She is kind and patient ,  and built a huge amount of trust with my dog\nI now have my Lily back playing and running around. , swimming and aslo an added bonus of weight loss which was needed\nI can't thank the centre enough ...\nLily  will.miss you 😍",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762590516"
      },
      {
        "authorName": "Vicki Parnell-Mace",
        "rating": 5,
        "text": "Absolutely brilliant centre. Staff and students are so good with my dog Otto, he loves his weekly hydrotherapy session - he gets so excited to see everybody! His fitness and mobility are really improving with the therapy. Thank you.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762354431"
      },
      {
        "authorName": "Mary Molloy",
        "rating": 5,
        "text": "My 3 Labradors love their regular hydrotherapy sessions and benefit greatly from them. They are in very safe hands with the team there and the pool and facilities are always immaculately clean.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762930214"
      },
      {
        "authorName": "simon popple",
        "rating": 5,
        "text": "A great place. Not only has my dog made fantastic progress, but has loved every minute of it. Their kindness and professionalism is always there.",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1762702031"
      }
    ]
  },
  {
    "id": "ffd50bdc-312a-479d-8a1b-f6da9705cf91",
    "googlePlaceId": "ChIJ86J43SzJdkgRRpy_AgDcmdY",
    "googleMapsUrl": "https://maps.google.com/?cid=15463632688157531206",
    "name": "VJP Veterinary Rehabilitation: Canine Hydrotherapy - Veterinary Physiotherapy - Performance",
    "slug": "vjp-veterinary-rehabilitation-canine-hydrotherapy-veterinary-physiotherapy-performance",
    "category": "Rehabilitation center",
    "address": "Common Leys Farm Campus, Witney OX29 9UY, United Kingdom",
    "city": "Witney",
    "region": "England",
    "postcode": "OX29 9UY",
    "phone": "+44 7388 838605",
    "website": "https://www.vjpvetphysio.co.uk/",
    "rating": 5,
    "reviewCount": 18,
    "latitude": 51.8201562,
    "longitude": -1.4773158,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ86J43SzJdkgRRpy_AgDcmdY/image-1776467441358-5443e474.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "arthritis treatment",
      "mare treatment",
      "dog handling",
      "physiotherapy",
      "mobility improvement",
      "labrador",
      "caring staff"
    ],
    "reviews": [
      {
        "authorName": "Nicolas Prior",
        "rating": 5,
        "text": "We cannot thank Steph enough for her care and attention with our boy Arnie. He has loved his hydro sessions and improved so much that we were able to take him on holiday within 11 months of his IVDD operation (with a set back at 6 months). We cant recommend this company enough, Vicky has also helped us on a couple of sessions when Steph was away and we get the same care, and sensational treatment. We look forward to continuing to see the team to keep Arnie in shape.\nA little photo to inspire people at the beginning of their IVDD journey of him sitting round the pool in France!",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764587450"
      },
      {
        "authorName": "htimspnai",
        "rating": 5,
        "text": "I don’t normally do reviews. What do you believe on the internet these days! But Vikki has been a real life saver. Haig my black lab Labrador was finished as a gundog after a back injury, 6 years ago. Since then, he has been to Vikki for hydrotherapy every month, since his initial consultation. I was hoping to get his mobility back, but we’ve been far luckier than that, he’s returned back to working a three day week. The transformation has been incredible, due to incredible veterinary care and Vikki’s hydro. Can’t recommend enough. A professional, caring, hard working, trustworthy human being.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742404161"
      },
      {
        "authorName": "Rosie Kavanagh",
        "rating": 5,
        "text": "Our 4 year old terrier arrived at the centre eight weeks post surgery. She was depressed uncomfortable and still wearing two collars 24/7 to protect her tail stump.  Tilly's not a lover of water but with Steph's gentle encouragement she soon relaxed, almost enjoyed the warm water but absolutely loved the back massage and treats 🐶.\nThank you so much Steph for your magic touch and professionalism. I cannot find the right words to express how grateful we are to have our happy terrier back and would totally recommend VJP to any pet owner.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1737718338"
      },
      {
        "authorName": "Chloe Haynes",
        "rating": 5,
        "text": "Dizzy has been having underwater treadmill sessions with Steph, and we have had such a wonderful experience. Dizzy has a few spinal issues, and we use the sessions to build up fitness. Steph is so patient, knowledgeable and helpful. Dizzy secretly loves her sessions, and often gets the zoomies afterwards!",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742412131"
      },
      {
        "authorName": "Rachel Keaney",
        "rating": 5,
        "text": "Pluto has been going to visit Vikki and Steph for 8 months now. He's a Romanian street dog who came to me as a front leg amputee with no strength in his back end. Vikki has done some physio sessions with him and given me exercises to do at home, and he goes for a swim in the pool every other week.\nThe difference in Pluto is amazing, he has so much more strength, a better spread of weight over his remaining legs, and has lost a lot of the excess weight he desperately needed to lose in order to keep going.\nPluto always charges in to see Vikki and Steph, not just because of their wonderful treats, but because they're both so friendly and supportive and he absolutely adores them. I'm so grateful they came up on my google search when I was looking for somewhere to help Pluto, it's changed his life (he couldn't jump on the windowsill before...)\n\nVikki also came out and did a physio session for my old horse which she loved, and will be out to see the new one once I get around to booking it in...",
        "relativePublishTimeDescription": "3 years ago",
        "publishTime": "1671093839"
      }
    ]
  },
  {
    "id": "d21c2395-8a7b-4902-b634-0d641f2b3b2c",
    "googlePlaceId": "ChIJ2bRte72mdkgRwlccb8-To_c",
    "googleMapsUrl": "https://maps.google.com/?cid=17844268667703678914",
    "name": "Waves Canine Hydrotherapy",
    "slug": "waves-canine-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "Unit 1 Tridax Business Park, Honeywood Parkway, Whitfield, Dover CT16 3QX, United Kingdom",
    "city": "Dover",
    "region": "Kent",
    "postcode": "CT16 3QX",
    "phone": "+44 1304 790229",
    "website": "https://wavescaninehydrotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 12,
    "latitude": 51.3551002,
    "longitude": -1.1515209,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJ2bRte72mdkgRwlccb8-To_c/image-1776467461337-ccab3240.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Kerry Bekker",
        "rating": 5,
        "text": "Claire is amazing! She’s very knowledgeable you can she enjoys her job!  Sam loves his weekly hydrotherapy sessions and his mobility has improved greatly. Would highly recommend.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1745825641"
      },
      {
        "authorName": "Claire Hannington",
        "rating": 5,
        "text": "Claire is brilliant - we've been taking our dog to her for a year or so now. She's really knowledgeable and has made a huge difference to Finn's recovery after his accident. Would highly recommend her to anyone looking for water therapy for their pet",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1707491364"
      },
      {
        "authorName": "Sam Hannington",
        "rating": 5,
        "text": "Claires a real natural with the dogs and very knowledgeable. I've been bringing my spaniel to hydrotherapy weekly since he suffered a stroke, and his strength and conditioning has come on really well. I would highly recommend to anyone",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1706635111"
      },
      {
        "authorName": "L Hannington",
        "rating": 5,
        "text": "I have been bringing Luna to Claire for over 2 years to help manage her arthritis. Claire is very knowledgeable and loves the dogs like her own. I would highly recommend",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1707224207"
      },
      {
        "authorName": "Christina Smith",
        "rating": 5,
        "text": "Have been taking my dogs to Claire for a few years.  She is brilliant and well worth the time and money!  Highly recommend.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1718040051"
      }
    ]
  },
  {
    "id": "1cb59e03-a989-4fb6-bd67-3bc6a206f847",
    "googlePlaceId": "ChIJc9PAKCS73kcR9hWC8-S_R1k",
    "googleMapsUrl": "https://maps.google.com/?cid=6433321582780880374",
    "name": "Waves Canine Hydrotherapy (Kent)",
    "slug": "waves-canine-hydrotherapy-kent",
    "category": "Rehabilitation center",
    "address": "Unit 1, Tridax Business Park, Honeywood Pkwy, Whitfield, Dover CT16 3QX, United Kingdom",
    "city": "Dover",
    "region": "England",
    "postcode": "CT16 3QX",
    "phone": "+44 1304 790229",
    "website": "https://wavescaninehydrotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 42,
    "latitude": 51.1526688,
    "longitude": 1.3053724,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJc9PAKCS73kcR9hWC8-S_R1k/image-1776467388219-fcf1a548.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Rehab"
    ],
    "reviewKeywords": [],
    "reviews": [
      {
        "authorName": "Lisa Milligan",
        "rating": 5,
        "text": "We can’t recommend this hydrotherapy service highly enough. The support they’ve given our retired police dog, Coty, has been outstanding. Josie is amazing—understanding, confident, and completely at ease working around former working dogs. Her knowledge and care have been invaluable in supporting Coty’s muscle repair and recovery following complex spinal surgery. We’re incredibly grateful for her dedication and expertise.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770588145"
      },
      {
        "authorName": "Esther Black",
        "rating": 5,
        "text": "We’ve been bringing our Great Dane, Wilson, to Waves Canine Hydrotherapy to help build his strength and support his fitness as he grows—being a giant breed, he’s growing fast and feeling those growing pains!\n\nFrom the very first visit, Josie and the team have been incredible. So welcoming, reassuring, and clearly passionate about what they do. Josie especially has been amazing with Wilson—patient, gentle, and always encouraging him in just the right way. She completely gets that he’s a big softie and a total mummy’s boy!\n\nNo question ever feels silly, and I’ve never once felt rushed or like I’m asking too much. It’s such a comfort knowing he’s in expert hands with people who genuinely care.\n\nWilson’s getting stronger each session and actually looks forward to going now (even if he pretends otherwise at first!). We’re so grateful to have found Waves—thank you Josie for everything you do.",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1748363249"
      },
      {
        "authorName": "Carol Morford",
        "rating": 5,
        "text": "We just want to say thank you to Josie and the team for helping our dog, Hugo get his zest for life back. He has developed muscles like a young dog again. He loves the girls at Waves, they put him through his regime. Our vet told us about Waves, as he has arthritis. He's so much better, he can run and jump about much more now. Can't thank you enough and a special woof from Hugo.  X\n\nCarol Morford.",
        "relativePublishTimeDescription": "2 months ago",
        "publishTime": "1770644048"
      },
      {
        "authorName": "Maggie Long",
        "rating": 5,
        "text": "Our old golden oldie Hope has had four sessions and we think it’s done her the world of good.\nShe really enjoys her swimming and loves Josie who is really so understanding of Hopes needs.\nWaves is always spotlessly clean and parking is good and wound highly recommended Waves hydrotherapy.\nHopes fitness and weight has improved.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1745049845"
      },
      {
        "authorName": "Sarah Stuart Green",
        "rating": 5,
        "text": "Willow and Dudley had so much fun with Josie at this amazing place right on our doorstep.  Once the dogs were measured and fitted for their float coats; they were off! Willow’s experience was for fun and she didn’t take much persuading to jump in and swim.  Dudley is an old anxious boy but Josie was so patient with him and eventually he was swimming.  We’ve booked Dudley in for more sessions to help with his arthritis; thank you Josie for your patience with him.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742746494"
      }
    ]
  },
  {
    "id": "96145d26-0f9e-44c6-9432-11773c9936d3",
    "googlePlaceId": "ChIJVZVDBoJgekgRK5QJCAJXj-k",
    "googleMapsUrl": "https://maps.google.com/?cid=16829765998743229483",
    "name": "Well Dogs Canine Hydrotherapy pool",
    "slug": "well-dogs-canine-hydrotherapy-pool",
    "category": "Hydrotherapy center",
    "address": "Dairy farm, 5 Den Ln, Wrinehill, Crewe CW3 9BT, United Kingdom",
    "city": "Crewe",
    "region": "Wales",
    "postcode": "CW3 9BT",
    "phone": "+44 7368 869861",
    "website": "https://www.welldogshydrotherapy.co.uk/",
    "rating": 5,
    "reviewCount": 56,
    "latitude": 53.0219707,
    "longitude": -2.3752677,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJVZVDBoJgekgRK5QJCAJXj-k/image-1776467462646-d9547c4f.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "arthritis treatment",
      "dog pool",
      "movement improvement",
      "patient staff",
      "team",
      "legs",
      "facilities"
    ],
    "reviews": [
      {
        "authorName": "Emma Stanfield",
        "rating": 5,
        "text": "Fantastic company and staff. Xlbully friendly. Helping our girl with a cruciate injury. Staff are very professional, brilliant with our dog and very knowledgeable. Great communication. Highly recommended.",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1740151215"
      },
      {
        "authorName": "Janet Curran",
        "rating": 5,
        "text": "This place kept Dino going for longer and when I eventually lost him it was not because he went off his legs. Will be forever grateful to Kirsty and Amy for how they took care of him",
        "relativePublishTimeDescription": "11 months ago",
        "publishTime": "1746650117"
      },
      {
        "authorName": "Nicii Brennan",
        "rating": 5,
        "text": "My staffy has arthritis and a dislocating knee cap, he has been so much better on his legs since attending regular hydrotherapy. The girls are wonderful with him and so patient (he's a barker) and keep an eye on him during the session to make sure he it's tailored to his needs. Can not praise Amy and her team enough 🐕",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1742843213"
      },
      {
        "authorName": "Bryan Stanton",
        "rating": 5,
        "text": "A lovely private venue, enhanced by very friendly and expert staff. After an I initial appointment we now use them on a regular basis.",
        "relativePublishTimeDescription": "7 years ago",
        "publishTime": "1536117209"
      },
      {
        "authorName": "Dave Amphlett",
        "rating": 5,
        "text": "Very friendly staff, deal with one of our dogs who yells at them for having the audacity to actually put him in the pool and make him swim super well - probably knows he's actually a lot better for going though. He's lost loads of weight and is noticeably stronger and more mobile despite being an older boy",
        "relativePublishTimeDescription": "a year ago",
        "publishTime": "1726214357"
      }
    ]
  },
  {
    "id": "8dd49788-7713-49d7-a658-c4c5293067d5",
    "googlePlaceId": "manual-wet-paws-hydrotherapy",
    "googleMapsUrl": null,
    "name": "Wet Paws Hydrotherapy",
    "slug": "wet-paws-hydrotherapy",
    "category": "Hydrotherapy center",
    "address": "North Barn, Perry Mill Farm, Birmingham Road, Hopwood, Birmingham B48 7AJ, United Kingdom",
    "city": "Birmingham",
    "region": "West Midlands",
    "postcode": "B48 7AJ",
    "phone": "+44 7377 115472",
    "website": "https://www.wetpawshydrotherapy.co.uk/",
    "rating": null,
    "reviewCount": null,
    "latitude": 52.3668,
    "longitude": -1.9005,
    "image": null,
    "serviceTags": [
      "Hydrotherapy",
      "Swimming Pool",
      "Rehab"
    ],
    "reviewKeywords": [
      "dog hydrotherapy",
      "warm pool"
    ],
    "reviews": []
  },
  {
    "id": "9f2af7aa-3943-479f-bdfd-414bcaf23abc",
    "googlePlaceId": "ChIJi0HI1DIXeUgRHmBQVPVpbYM",
    "googleMapsUrl": "https://maps.google.com/?cid=9470342093832478750",
    "name": "Yorkshire Canine Therapy Centre Ltd",
    "slug": "yorkshire-canine-therapy-centre-ltd",
    "category": "Rehabilitation center",
    "address": "Bridge House, Bridge Ln, Pollington, Goole DN14 0DX, United Kingdom",
    "city": "Goole",
    "region": "England",
    "postcode": "DN14 0DX",
    "phone": "+44 7542 631207",
    "website": "https://www.yorkshirecaninetherapycentre.co.uk/",
    "rating": 5,
    "reviewCount": 63,
    "latitude": 53.6675438,
    "longitude": -1.074512,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJi0HI1DIXeUgRHmBQVPVpbYM/image-1776467394794-806d5bb2.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "physiotherapy",
      "cruciate ligament injury",
      "spinal surgery recovery",
      "canine physio",
      "elbow dysplasia",
      "hip dysplasia",
      "therapy sessions"
    ],
    "reviews": [
      {
        "authorName": "Margaret Pye",
        "rating": 5,
        "text": "Our first month with Yorkshire Canine Therapy Centre has been just great. Sally our Labrador has arthritis and elbow dysplasia and being a 10 year old needs some help. She has taken to the water treadmill and her mobility is already a lot better, she has even taken to jumping on the sofa for a snooze, something she has not done for a while. This is all down to Kelly and Becky, lovely, friendly, and welcoming, and you can tell how much they care for doggies, we are so pleased we found out about the Centre and would give a big shout out to the work they do.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761747509"
      },
      {
        "authorName": "Peter Steele",
        "rating": 5,
        "text": "Kelly is amazing. Bella has literally come on in leaps and bounds. Last Christmas she had spinal surgery and could not put weight on her back legs. Now she runs around like the mad cockerpoo she is. Cannot recommend Kelly highly enough.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761813992"
      },
      {
        "authorName": "Rob and Jo Maidment",
        "rating": 5,
        "text": "Highly recommend Kelly at Yorkshire Canine Therapy Centre. Kelly has helped 5 of our dogs all with different needs.\nBuster used to go for fun swims and left the legacy of being the splashes dog to swim there.\nPepper went due to her having arthritis in her hips.\nSkip went for fun swims to gain confidence in water and help him with his confidence.\nBella went for fun swims and to keep old bones moving.\nChief our rottie is seeing Kelly for physio and hydro due to elbow dysplasia at the grand age of 4.5yrs.\nCouldn't ask for a more professional and competent therapist and physio.",
        "relativePublishTimeDescription": "2 years ago",
        "publishTime": "1713383150"
      },
      {
        "authorName": "barbara cooke",
        "rating": 5,
        "text": "Amazing results for my 14 year old spaniel, he’s like a spring chicken again! Thank you Kelly, highly recommend for all senior dogs",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761691505"
      },
      {
        "authorName": "Denise Morton",
        "rating": 5,
        "text": "Merlot has remaindered me to do this.\nHe says he loves his hydrotherapy even if he has to work. It keeps his old joints moving.\nHe enjoys getting fused and his treats.\n\nXxx",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761725107"
      }
    ]
  },
  {
    "id": "74e2bb45-33eb-4a0c-93d1-5eb05873ccf1",
    "googlePlaceId": "ChIJo-eie1IXeUgR_vaJ3rgvh7c",
    "googleMapsUrl": "https://maps.google.com/?cid=13224591301850822398",
    "name": "Yorkshire Canine Veterinary Physiotherapy",
    "slug": "yorkshire-canine-veterinary-physiotherapy",
    "category": "Physical therapist",
    "address": "Bridge House, Pollington, Goole DN14 0DX, United Kingdom",
    "city": "Goole",
    "region": "England",
    "postcode": "DN14 0DX",
    "phone": "+44 7793 885392",
    "website": "https://www.yorkshirecaninevetphysio.co.uk/",
    "rating": 5,
    "reviewCount": 38,
    "latitude": 53.6674947,
    "longitude": -1.074504,
    "image": "https://storage.googleapis.com/directorly-listings/30447e38-9efe-4324-bb8a-1d5d34b49408/ChIJo-eie1IXeUgR_vaJ3rgvh7c/image-1776467444051-c38dbedb.jpg",
    "serviceTags": [
      "Hydrotherapy",
      "Physiotherapy",
      "Rehab",
      "Mobility"
    ],
    "reviewKeywords": [
      "hydrotherapy",
      "spinal surgery recovery",
      "hip dysplasia diagnosis",
      "dog rehabilitation",
      "arthritis diagnosis",
      "luxating patella",
      "back leg problem",
      "clear explanations"
    ],
    "reviews": [
      {
        "authorName": "Georgie Hetherington",
        "rating": 5,
        "text": "I can’t recommend Kelly at Yorkshire Canine Therapy Centre enough! She treated my dog Bertie with such patience, skill, and genuine care. He was referred as an IVDD patient. Prior to us attending, Bertie could not walk at all, but after his first session, he took his first steps since being diagnosed with IVDD! Talk about a miracle worker🤩✨ we have continued to notice huge improvements in Bertie’s mobility and comfort and are excited to see what further progress Bertie can make under Kelly’s care💛",
        "relativePublishTimeDescription": "5 months ago",
        "publishTime": "1764442749"
      },
      {
        "authorName": "Leah S",
        "rating": 5,
        "text": "My two JRTs have been to Kelly for physiotherapy. Vet scans for them both have been inconclusive, so we have treated based on presentation as we know they both have pain. Bruiser (treating for lumbosacral disease) is reactive and generally a sensitive boy, but Kelly works with him where he's at and hasn't once felt the need to put his muzzle on. He is very much at ease when going to physio and I don't have to worry about bumping into other dogs in passing as Kelly manages this so well we've never even seen another dog. Blair is an excitable girl and loves going to see Kelly, despite being nervous of the machines. Again Kelly works with Blair at her pace helping her gain confidence with the new machines. Originally, we treated Blair for luxating patella but have had a change of diagnosis to lumbosacral disease as Blair has now shown us a little more about her pain (she's the most tolerant girl and masks well). Being a pet professional myself, I always have 1000 questions for Kelly and she is always happy to answer and give me some great recommendations for products to help continue supporting my terrier twins at home.",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761730642"
      },
      {
        "authorName": "Toni Kitching",
        "rating": 5,
        "text": "Kelly is absolutely amazing and very knowledgable.  Zeus has come on leaps and bounds since he started his hydrotherapy. Even Zeus’s vet said the strength he now has in his back legs is fantastic.  Thanks for all your work with Zeus our GSD aka handsome boy!",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761749501"
      },
      {
        "authorName": "Steve Copley",
        "rating": 5,
        "text": "Kelly is very experienced, and great at what she does. She is very patient, and can put even the most stubborn dogs like mine, through their paces.\nShe is very pleasant and polite, as well as being very skilled.\nShe's also very personal, and you never pass another dog either going in or coming out.\nThe improvement in movement is clear to see, and after having a dog that never had physio or hydrotherapy following surgery, and Summer having had physio and hydrotherapy, the difference is amazing. She even sits properly now.\nSummer loved going to see Kelly, and we'd strongly recommend here, if your dog needs physio or hydrotherapy.",
        "relativePublishTimeDescription": "9 months ago",
        "publishTime": "1753794079"
      },
      {
        "authorName": "Peter Steele",
        "rating": 5,
        "text": "Kelly has given Bella a new lease of life. After spinal surgery last year Bella attended regularly for physio. Providing you continue with the exercises at home you will see the results. Bella loves to go to her appointments with Kelly😄",
        "relativePublishTimeDescription": "6 months ago",
        "publishTime": "1761814270"
      }
    ]
  }
];
