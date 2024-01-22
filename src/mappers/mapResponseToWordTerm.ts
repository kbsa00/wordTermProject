import { WordTerm } from '../models/domain';
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
