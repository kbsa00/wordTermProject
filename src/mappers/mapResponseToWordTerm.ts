import { WordTerm, WordTerm_Old } from '../models/domain';
import {
  extractAltLabels,
  extractDefinition,
  extractPrefLabels,
  extractSubjectLabels,
} from '../utils/dataFormatter';

export function mapResponseToWordTerm(data: any): WordTerm {
  const id = data.id;
  const subject = extractSubjectLabels(data.subject || null);
  const prefLabel = extractPrefLabels(data.prefLabel);
  const altLabel = extractAltLabels(data.altLabel);
  const definition = extractDefinition(data.definition);

  return {
    id,
    subject,
    prefLabel,
    altLabel,
    definition,
  };
}

//Deprecated
export function mapResponseToWordTerm_Old(data: any): WordTerm_Old {
  const id = data.id;

  const subjectObject = Array.isArray(data.subject)
    ? data.subject.find((item: any) => item.label?.nb !== undefined)
    : null;

  const subject = subjectObject ? subjectObject.label.nb : null;
  const prefLabel = data.prefLabel['nb'] || null;
  const altLabel = data.altLabel
    ? data.altLabel.find((item: any) => item.nb !== undefined)?.nb || null
    : null;

  const definition = {
    tekst: data.definition.text.nb || null,
    lastUpdated: data.definition.lastUpdated || null,
  };

  return {
    id,
    subject,
    prefLabel,
    altLabel,
    definition,
  };
}
