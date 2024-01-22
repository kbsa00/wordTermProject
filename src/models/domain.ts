export type WordTerm = {
  id: string;
  subject: CommonWordTerm | null;
  prefLabel: CommonWordTerm;
  altLabel: CommonWordTerm;
  definition: Definition;
};

export type Definition = {
  tekst: CommonWordTerm;
  lastUpdated: Date | null;
};

export type CommonWordTerm = {
  nb: string | null;
  nn: string | null;
  en: string | null;
};

//Deprecated
export type WordTerm_Old = {
  id: string;
  subject: string | null;
  prefLabel: string | null;
  altLabel: string | null;
  definition: Definition_Old | null;
};

//Deprecated
export type Definition_Old = {
  tekst: string | null;
  lastUpdated: Date | null;
};
