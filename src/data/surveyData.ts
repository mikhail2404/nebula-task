export const surveyData: Survey = [
  {
    id: 1,
    text: "Select your gender:",
    answers: [
      { text: "Female", value: "Female", next: 2 },
      { text: "Male", value: "Male", next: 2 }
    ]
  },
  {
    id: 2,
    component: "DateOfBirthSelector"
  },
  {
    id: 3,
    text: "So we can get to know you better, tell us about your relationship status.",
    answers: [
      { text: "Single", value: "Single", next: 4 },
      { text: "In a relationship", value: "In a relationship", next: 5 }
    ]
  },
  {
    id: 4,
    text: "Are you a single parent?",
    answers: [
      { text: "Yes", value: "who have children", next: 6 },
      { text: "No", value: "", next: 6 }
    ]
  },
  {
    id: 5,
    text: "Are you a parent?",
    answers: [
      { text: "Yes", value: "who have children", next: 7 },
      { text: "No", value: "", next: 7 }
    ]
  },
  {
    id: 6,
    text: "Single {1} {2} {4} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
    answers: [
      {
        text: "I was unhappy with low things were going in my relationship",
        value: "I was unhappy with low things were going in my relationship",
        next: 8
      },
      {
        text: "I was unhappy with parts of my relationship, but some thing were working",
        value:
          "I was unhappy with parts of my relationship, but some thing were working",
        next: 8
      },
      {
        text: "I was generally happy with my relationship",
        value: "I was generally happy with my relationship",
        next: 8
      },
      {
        text: "I’ve never been in a relationship",
        value: "I’ve never been in a relationship",
        next: 8
      }
    ]
  },
  {
    id: 7,
    text: "{1} {2} {5} need a slightly different approach to improve their relationship. Which statement best describes you?",
    answers: [
      {
        text: "I’m very unhappy with how things are going in my relationship",
        value: "I’m very unhappy with how things are going in my relationship",
        next: 8
      },
      {
        text: "I’m unhappy with parts of my relationship, but some things are working well",
        value:
          "I’m unhappy with parts of my relationship, but some things are working well",
        next: 8
      },
      {
        text: "I’m generally happy in my relationship",
        value: "I’m generally happy in my relationship",
        next: 8
      }
    ]
  },
  {
    id: 8,
    text: "Do you make decisions with your head or your heart?",
    answers: [
      { text: "Heart", value: "Heart", summary: 1 },
      { text: "Both", value: "Both", summary: 2 },
      { text: "Head", value: "Head", summary: 3 }
    ]
  }
];
