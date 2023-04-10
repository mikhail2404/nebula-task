import decisionBoth from "../assets/decision-both.png";
import decisionHead from "../assets/decision-head.png";
import decisionHeart from "../assets/decision-heart.png";

export const summaryData: SummaryData[] = [
  {
    id: 1,
    img: decisionHeart,
    description:
      "Based on our data, 49% of {Zodiac} people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan."
  },
  {
    id: 2,
    img: decisionBoth,
    description:
      "Based on our data, 39% of {Zodiac} people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan."
  },
  {
    id: 3,
    img: decisionHead,
    description:
      "Wonderful!\n" +
      "Based on our data, only the top 17% of {Zodiac} people make decisions with their heart and head. Using both in equal measure is the key to feeling\n" +
      "harmonious in your relationships."
  }
];
