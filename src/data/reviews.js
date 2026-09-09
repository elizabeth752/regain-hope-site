// Google reviews for the Business Profile. Single source of truth: Reviews.astro,
// ReviewsStrip.astro, Hero.astro, Layout.astro (schema + floating badge) and BlogPost.astro
// all read from here. Newest first. When refreshing, also update rating and count.
// Last pulled from the Google Business Profile: September 2026.
export const googleUrl = 'https://maps.app.goo.gl/S3YvacbqJG8mVm457';
export const googleRating = '5.0';
export const googleReviewCount = 15;

// `text` is the wall/card copy, `short` the compact copy for the hero and strip.
// Both are condensed excerpts of the published review, kept faithful to the wording.
export const reviews = [
  {
    name: 'B. Greer',
    initial: 'B',
    posted: '4 weeks ago',
    text: 'The doctors and staff are truly amazing. Dr. Gomez is selfless, compassionate, brilliant, and the perfect person to help you. The facility is immaculate, and overall it is a safe, comfortable and nurturing environment for healing.',
    short: 'Dr. Gomez is selfless, compassionate, brilliant, and the perfect person to help you. The facility is a safe, comfortable and nurturing environment for healing.',
  },
  {
    name: 'Justin F.',
    initial: 'J',
    posted: 'a month ago',
    text: "This place was amazing and the staff was great. I highly recommend them. They really care, and I appreciate what they did for me. If you come here, you won't regret it.",
    short: 'This place was amazing and the staff was great. They really care, and I appreciate what they did for me.',
  },
  {
    name: 'Cody S.',
    initial: 'C',
    posted: 'a month ago',
    text: "From day one until the end, everyone is so nice and understanding and will work with you to get whatever you need done. I've had the best experience I could have asked for. If you need help, here is the place to be.",
    short: 'From day one until the end, everyone is so nice and understanding and will work with you to get whatever you need done.',
  },
  {
    name: 'Linda A.',
    initial: 'L',
    posted: 'a month ago',
    text: "From the day I arrived until my graduation 40 days later, every moment was filled with love and care that felt like family. Dr. Gomez and Dr. Yoo are outstanding doctors with the biggest hearts, and they visited often, even on their days off. I've been home nearly three weeks and I'm still clean, with real hope for the future.",
    short: "Every moment was filled with love and care that felt like family. I've been home nearly three weeks and I'm still clean, with real hope for the future.",
  },
  {
    name: 'Michelle M.',
    initial: 'M',
    posted: 'a month ago',
    text: 'The space is beautiful, inviting, and creates the perfect environment for healing. The doctors give a highly personalized and caring experience to guests, which makes their six-person capacity just the right size. The staff is lovely and the meals are excellent.',
    short: 'The space is beautiful and creates the perfect environment for healing. The doctors give a highly personalized and caring experience.',
  },
  {
    name: 'Rashon R.',
    initial: 'R',
    posted: 'a month ago',
    text: "Regain Hope saved my life in ways I never imagined. They went above and beyond to make my detox as comfortable as possible, and the groups taught me relapse prevention skills I'm applying in my life today. I learned I'm not just a number, I'm family, and they treated me as such.",
    short: "Regain Hope saved my life in ways I never imagined. I learned I'm not just a number, I'm family, and they treated me as such.",
  },
  {
    name: 'Narek A.',
    initial: 'N',
    posted: '2 months ago',
    text: "I graduated successfully from Regain Hope. The staff has become a huge part of my recovery, and they made it so much easier for me to do the 30 days. Much love to the doctors and the whole staff. I'm so glad I chose this place.",
    short: "The staff has become a huge part of my recovery. I'm so glad I chose this place.",
  },
  {
    name: 'Chris M.',
    initial: 'C',
    posted: '3 months ago',
    text: 'Regain Hope completely changed my expectations of what treatment could be like. The two doctors are genuinely caring and compassionate, and always go above and beyond. In past detoxes I often felt treated like a number, but here they truly make you feel valued and cared for as a person.',
    short: 'The two doctors are genuinely caring and compassionate. In past detoxes I often felt treated like a number. Here they truly make you feel valued.',
  },
  {
    name: 'Ashlie L.',
    initial: 'A',
    posted: '3 months ago',
    text: "My experience at this rehab truly changed my life. Dr. Gomez treated me with genuine compassion and respect from the beginning. She listened, encouraged me, and helped me believe I was capable of getting better even when I doubted myself. They didn't make the facility feel cold or clinical. They made it feel like home.",
    short: "They didn't make the facility feel cold or clinical. They made it feel like home, and you could tell they genuinely cared about the people there.",
  },
  {
    name: 'Erik C.',
    initial: 'E',
    posted: '3 months ago',
    text: "It's a great place. My friend went there and came back a new man. Now he's sober and his whole life changed. If you're trying to find a rehab, go there. Everybody there is amazing, all the doctors and the workers.",
    short: 'My friend went there and came back a new man. Everybody there is amazing, all the doctors and the workers.',
  },
];

// Compact placements (hero, strip) show only the newest few.
export const featuredReviews = reviews.slice(0, 3);
