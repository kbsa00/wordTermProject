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
