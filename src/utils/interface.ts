type TAG_FAQ_MAP = {
  [key: string]: { title: string; description: string }[];
};

interface HELP_CENTER {
    heading: string;
    icon: string;
    question: {
        title: string;
        description: string;
    }[];
};

interface TIMELINE_DATE {
    year: string;
    title: string;
    description: string;
}

interface FEATURES {
  icon: string;
  title: string;
  description: string;
};

interface FREQUENTLY {
    title: string;
    description: string;
};

interface PRICE_CARD {
    title: string;
    price: number;
    value: string;
    benefit: string[];
};

interface PrivacyData { 
    icon: string;
    title: string;
    text?: string;
    sections?: {
        heading: string;
        text?: string;
        list?: string[];
    }[];
    list?: string[];
}

export type { TAG_FAQ_MAP, HELP_CENTER, TIMELINE_DATE, FEATURES, FREQUENTLY, PRICE_CARD, PrivacyData };
