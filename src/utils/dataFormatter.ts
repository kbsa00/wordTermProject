import { CommonWordTerm, Definition } from '../models/domain';

function extractSubjectLabels(
  subjectArray: any[] | null | undefined,
): CommonWordTerm {
  if (!subjectArray) {
    return { nn: null, nb: null, en: null };
  }
  return subjectArray.reduce((acc, item) => {
    acc.nn = item.label.nn || acc.nn || null;
    acc.nb = item.label.nb || acc.nb || null;
    acc.en = item.label.en || acc.en || null;
    return acc;
  }, {} as CommonWordTerm);
}

function extractPrefLabels(prefLabel: any | null): CommonWordTerm {
  if (!prefLabel) {
    return { nn: null, nb: null, en: null };
  }
  return {
    nn: prefLabel.nn || null,
    nb: prefLabel.nb || null,
    en: prefLabel.en || null,
  };
}

function extractAltLabels(
  altLabelArray: any[] | null | undefined,
): CommonWordTerm {
  if (!altLabelArray) {
    return { nn: null, nb: null, en: null };
  }
  const result: CommonWordTerm = altLabelArray.reduce((acc, item) => {
    if (item.nb) acc.nb = item.nb;
    if (item.nn) acc.nn = item.nn || null;
    if (item.en) acc.en = item.en || null;

    return acc;
  }, {} as CommonWordTerm);

  return result;
}

function extractDefinition(definition: any | null): Definition {
  return {
    tekst: {
      nn: definition.text.nn || null,
      nb: definition.text.nb || null,
      en: definition.text.en || null,
    },
    lastUpdated: definition.lastUpdated || null,
  };
}

export {
  extractSubjectLabels,
  extractPrefLabels,
  extractAltLabels,
  extractDefinition,
};
