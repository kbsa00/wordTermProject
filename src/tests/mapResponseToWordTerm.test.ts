import { mapResponseToWordTerm } from '../mappers/mapResponseToWordTerm';
import { expect, describe, it } from 'vitest';

describe('mapResponseToWordTerm', () => {
  it('should map response data to WordTerm object', () => {
    const data = {
      id: 1,
      subject: [
        {
          label: {
            nb: 'Subject 1',
          },
        },
        {
          label: {
            nn: 'Subject 2',
          },
        },
        {
          label: {
            en: 'Subject 3',
          },
        },
      ],
      prefLabel: {
        nn: 'preflabel 1',
        en: 'preflabel 2',
        nb: 'preflabel 3',
      },
      altLabel: [
        {
          nb: 'Alt Label 1',
        },
        {
          nn: 'Alt Label 2',
        },
      ],
      definition: {
        text: {
          nb: 'definisjon',
          en: 'definition',
          nn: 'definisjon',
        },
      },
      lastUpdated: null,
    };

    const expectedWordTerm = {
      id: 1,
      subject: {
        nn: 'Subject 2',
        nb: 'Subject 1',
        en: 'Subject 3',
      },
      prefLabel: {
        nn: 'preflabel 1',
        en: 'preflabel 2',
        nb: 'preflabel 3',
      },
      altLabel: {
        nb: 'Alt Label 1',
        nn: 'Alt Label 2',
      },
      definition: {
        tekst: {
          nb: 'definisjon',
          en: 'definition',
          nn: 'definisjon',
        },
        lastUpdated: null,
      },
    };

    const result = mapResponseToWordTerm(data);

    expect(result).toEqual(expectedWordTerm);
  });

  it('should map response data to WordTerm object even though its null', () => {
    const data = {
      id: 1,
      subject: [
        {
          label: {
            nb: null,
          },
        },
        {
          label: {
            nn: null,
          },
        },
        {
          label: {
            en: null,
          },
        },
      ],
      prefLabel: {
        nn: null,
        en: null,
        nb: null,
      },
      altLabel: null,
      definition: {
        text: {
          nb: null,
          en: null,
          nn: null,
        },
      },
      lastUpdated: null,
    };

    const expectedWordTerm = {
      id: 1,
      subject: {
        nn: null,
        nb: null,
        en: null,
      },
      prefLabel: {
        nn: null,
        en: null,
        nb: null,
      },
      altLabel: {
        nb: null,
        nn: null,
        en: null,
      },
      definition: {
        tekst: {
          nb: null,
          en: null,
          nn: null,
        },
        lastUpdated: null,
      },
    };

    const result = mapResponseToWordTerm(data);
    expect(result).toEqual(expectedWordTerm);
  });

  it('should map response data to WordTerm object with empty values', () => {
    const data = {
      id: 2,
      subject: [
        {
          label: {
            nb: '',
          },
        },
        {
          label: {
            nn: '',
          },
        },
        {
          label: {
            en: '',
          },
        },
      ],
      prefLabel: {
        nn: '',
        en: '',
        nb: '',
      },
      altLabel: null,
      definition: {
        text: {
          nb: '',
          en: '',
          nn: '',
        },
      },
      lastUpdated: null,
    };

    const expectedWordTerm = {
      id: 2,
      subject: {
        nn: null,
        nb: null,
        en: null,
      },
      prefLabel: {
        nn: null,
        en: null,
        nb: null,
      },
      altLabel: {
        nb: null,
        nn: null,
        en: null,
      },
      definition: {
        tekst: {
          nb: null,
          en: null,
          nn: null,
        },
        lastUpdated: null,
      },
    };

    const result = mapResponseToWordTerm(data);

    expect(result).toEqual(expectedWordTerm);
  });

  it('should map response data to WordTerm object with mixed values', () => {
    const data = {
      id: 3,
      subject: [
        {
          label: {
            nb: 'Norsk',
          },
        },
        {
          label: {
            nn: null,
          },
        },
        {
          label: {
            en: 'English',
          },
        },
      ],
      prefLabel: {
        nn: null,
        en: 'English',
        nb: null,
      },
      altLabel: null,
      definition: {
        text: {
          nb: 'Definisjon på norsk',
          nn: 'Definisjon på nynorsk',
          en: null,
        },
      },
      lastUpdated: null,
    };

    const expectedWordTerm = {
      id: 3,
      subject: {
        nn: null,
        nb: 'Norsk',
        en: 'English',
      },
      prefLabel: {
        nn: null,
        en: 'English',
        nb: null,
      },
      altLabel: {
        nb: null,
        nn: null,
        en: null,
      },
      definition: {
        tekst: {
          nb: 'Definisjon på norsk',
          en: null,
          nn: 'Definisjon på nynorsk',
        },
        lastUpdated: null,
      },
    };

    const result = mapResponseToWordTerm(data);
    console.log('result', result);
    expect(result).toEqual(expectedWordTerm);
  });
});
