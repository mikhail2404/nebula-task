type Mode = "light" | "gradient";

interface UserAnswer {
  id: number;
  value: string;
}

interface Question {
  id: number;
  text?: string;
  component?: string;
  answers?: Answer[];
}

interface Answer {
  text: string;
  value: string;
  next?: number;
  summary?: number;
}

interface SummaryData {
  id: number;
  img: string;
  description: string;
}

type Survey = Question[];
