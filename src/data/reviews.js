// Google reviews for the Business Profile. Single source of truth: Reviews.astro,
// ReviewsStrip.astro, Hero.astro, Layout.astro (schema + floating badge) and BlogPost.astro
// all read from here. Newest first. When refreshing, also update rating and count.
// Last pulled from the Google Business Profile: September 2026.
//
// `text` is the review as published on Google — do not rewrite, shorten, or
// "clean up" wording. Compact placements (hero, strip, wall) crop with CSS.
export const googleUrl = 'https://maps.app.goo.gl/S3YvacbqJG8mVm457';
export const googleRating = '5.0';
export const googleReviewCount = 15;

export const reviews = [
  {
    name: 'B Greer',
    initial: 'B',
    posted: '4 weeks ago',
    text: 'The Doctors and staff are truly amazing.  Dr. Gomez is selfless, compassionate, brilliant, and the perfect person to help you. Absolutely every person who works there is kind, patient, and extremely supportive.  The facility is immaculate, and overall it is a safe, comfortable and nurturing environment for healing.',
  },
  {
    name: 'Justin Farris',
    initial: 'J',
    posted: 'a month ago',
    text: 'This place was amazing, the staff was great, I highly recommend them,  They really care, I know I appreciate what they did for me!  You will to, Trust me, if you come here, you want regret it!',
  },
  {
    name: 'Cody Sowell',
    initial: 'C',
    posted: 'a month ago',
    text: 'Its a miracle come true. Almost seems like one of those things you dont seem to belive until you experience it, an I did.  Every since day one until the end everyone is so nice an understanding an will work with you do get whatever you need done. I absolutely love it here hate im goin but im sure they have got me to where I need to be physically an mentally..  I\'ve had the best experience that I could have ask for. I really an truly learned so much an seen so much. If you need help here is the place to be I promise you. Thanks docs an the rest of the staff I really do love you guys, just like family I will miss yall',
  },
  {
    name: 'Linda Allen',
    initial: 'L',
    posted: 'a month ago',
    text: 'Regain Hope Detox and Recovery Center in Burbank, CA absolutely changed my life.This is exactly what a detox center should be. From the day I arrived until my graduation 40 days later, every moment was filled with love and care that felt like family.The first week was physically rough, but the staff supported me in every way imaginable. When I didn\'t feel like eating or getting out of bed, Yolanda the house chef brought me homemade chicken soup, fed me, and gently encouraged me. She made me feel truly welcome.The entire team treated me like a person worthy of the very best. Medical care was excellent — vitals, bloodwork, and constant attention to my wellbeing. Dr. Gomez and Dr. Yoo are outstanding doctors with the biggest hearts. They visited often, even on days off, and went above and beyond.For the Fourth of July, Dr. Yoo came in and barbecued ribs, hamburgers, and hot dogs for us. They even made sure we could watch the big fight. Moments like that meant everything.Whether the house was quiet or full, guest comfort and recovery were always the priority. Andy took us on great outings to Hollywood Blvd., Santa Monica Pier, and Venice Beach. Russell led fun walks, and the laughter with the techs (Patricia, Alex, Miguel, Jonathan, and others) was nonstop. Sara helped me with career ideas, and Jackie became a real friend — we spent many nights talking and watching movies.I mention them because each person played a meaningful role in my recovery and made me feel worthwhile.Dr. Gomez took us to tour excellent aftercare and sober living homes. As a MAT center, their medical expertise made detox far more comfortable than I expected. Weekly sessions with counselor Jack and therapist Nora were also very helpful.The facility is beautiful, with comfortable rooms, giant TVs, a nice kitchen, shaded patio with Jacuzzi, a gym with Peloton, games, and scheduled activities like yoga, aerobics, and music lessons.I\'ve been home nearly three weeks and I\'m still clean with real hope for the future. The personalized care here overwhelmed me — I was brought to tears multiple times by how much attention was given to each individual.I could honestly write a book about this place. They don\'t just treat patients — they genuinely love and believe in you.Thank you to the whole team. I love you all!',
  },
  {
    name: 'Michelle Monroe',
    initial: 'M',
    posted: 'a month ago',
    text: 'My experience at Regain Hope Detox and Recovery Center was wonderful! The space is beautiful, inviting and creates the perfect environment for healing. The Doctors are fantastic, and give a highly personalized and caring experience to guests which makes their six person capacity just the right size. The Staff is lovely and the meals are excellent. Highly recommend this center!',
  },
  {
    name: 'Rashon Roberts',
    initial: 'R',
    posted: 'a month ago',
    text: 'Whew this is a good one I have waited this long because I wanted this one to be special. Let\'s start by saying Regain Hope saved my life in ways I never imagined. Not only did they cater to my every needs they event above and beyond to make my detox as comfortable as possible the staff was super friendly they taught me how to prepare for a life of sobriety that matched my energy Dr Gomez was just awesome she made sure to keep us busy doing fun stuff and every time she came she always had a smile on her face and greeted us with love and kindness and that went a long way Carlos thanks for keeping the fridge stocked with milk you did that sir. We went on really nice outings my favorite was the ocean and the LA ZOO. We also had a special guest named Wes that came and taught us about music and even showed us how to salsa and tango and it was a complete blast. The groups helped me find myself in my. Recovery they taught me relapse prevention skills that I\'m currently applying to my life today. Please keep Regain hope in mind when looking for a treatment center because they are the best around the house was very organized and I can\'t forget our chef Patricia love you Patricia your cooking was phenomenal wish I had a chef life you at the sober living I\'m at now but I guess the one we have will do for now. I learned one important thing about Regain Hope while I was there and that\'s I\'m not just a number but that I\'m Family and they treated me as such and I\'ll always remember the hard work they did to make me a better version of myself I love you guys and I will be back soon (to visit of course) thank you for helping me get sober.',
  },
  {
    name: 'Narek Avdalyan',
    initial: 'N',
    posted: '2 months ago',
    text: 'I graduated successfully from Regain Hope on 6/24/26. Honestly, the staff has become a huge part of my recovery. They made it so much easy for me to do the 30 days,  Much love to the doctors our dear chef Yolanda and the whole staff. I\'m so glad I chose this place. Thank you!',
  },
  {
    name: 'Chris McDaniel',
    initial: 'C',
    posted: '3 months ago',
    text: 'Regain Hope Detox and Recovery completely changed my expectations of what treatment could be like. The two doctors are genuinely caring, compassionate, and always go above and beyond to make sure I get the best possible care and health outcome.\nTheir staff are just as incredible. In past detoxes, I often felt treated like a number, but there they truly make you feel valued and cared for as a person. The level of compassion and attention they give is something special.',
  },
  {
    name: 'Ashlie Lynn',
    initial: 'A',
    posted: '3 months ago',
    text: 'My experience at this rehab truly changed my life, and there are so many people there I\'ll never forget because of the kindness, support, and heart they showed me during one of the hardest times in my life.\n\nYolanda, the cook, brought so much comfort and warmth into the place every single day. It wasn\'t just the food, although it was always amazing 😭, it was the love and care behind it. She had a way of making people feel at home, even on the roughest days, and those small moments meant everything.\n\nDr. Gomez treated me with genuine compassion and respect from the beginning. I never felt judged or looked down on. She listened, encouraged me, and helped me believe I was capable of getting better even when I doubted myself. That kind of kindness can truly change someone.\n\nCarlos made such a huge impact on my recovery journey too. His patience, encouragement, and sense of humor helped me get through some really difficult moments. He knew how to make people laugh when they needed it most and reminded us that healing doesn\'t mean losing joy.\n\nI also really appreciated the owners and how attentive they were to everyone\'s needs. They didn\'t make the facility feel cold or clinical. They made it feel like home. You could tell they genuinely cared about the people there and wanted us to feel comfortable, safe, and supported while we healed.\n\nOne of the things that touched me most was how they handled Christmas. Being away from family during the holidays is incredibly hard, but they went out of their way to make it feel special and comforting for all of us. They created an atmosphere full of warmth, love, laughter, and togetherness that made being away from home a little easier. That kindness meant more than words can really explain.\n\nI also want to recognize the entire staff because every single person there played a part in making my experience meaningful. From the techs to the counselors to everyone working behind the scenes, they treated us with patience, understanding, and genuine care. They celebrated our progress, supported us on our hardest days, and never made us feel alone. You could tell this wasn\'t "just a job" to them. The compassion they showed every day made a lasting impact on me.\n\nWhat I\'ll always remember most is that this place gave me more than recovery tools. It gave me memories, laughter, and moments of real connection. We had so many fun times together, and in a place where everyone is fighting their own battles, those laughs and shared moments meant more than people probably realize. We supported each other like family.\n\nRecovery is hard, messy, emotional work, but the people here helped make it feel possible. I\'m deeply grateful for everyone who helped me along the way, and I\'ll carry those memories and lessons with me for the rest of my life. ❤️',
  },
  {
    name: 'Erik Cabrera',
    initial: 'E',
    posted: '3 months ago',
    text: 'It\'s a great place. I recommended there! my friend went there and came back a new man, now he sober his whole life change if you\'re trying to find a rehab go there everybody there\'s amazing all the doctors the workers 👍 five star!!!!',
  },
];

// Compact placements (hero, strip) show only the newest few. Same verbatim `text`.
export const featuredReviews = reviews.slice(0, 3);
