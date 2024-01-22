module.exports  = {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
    paths: {
      '/api/begrep': {
        get: {
          summary: 'Get all WordItems',
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/WordTerm',
                    },
                  },
                },
              },
            },
          },
          tags: ['API'],
        },
      },
  
      '/api/begrep/{id}': {
        get: {
          summary: 'Get a WordItem by ID',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'The ID of the WordItem to retrieve',
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WordTerm',
                  },
                },
              },
            },
            '404': {
              description: 'WordItem not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ErrorResponse',
                  },
                },
              },
            },
          },
          tags: ['API'],
        },
      },
  
      '/debug/sync-data': {
        get: {
          summary: 'Trigger sync data from DigDir',
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          tags: ['Debug'],
        },
      },
  
      '/health/isAlive': {
        get: {
          summary: 'Check if the application is alive',
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          tags: ['Health'],
        },
      },
    },
    tags: [
      {
        name: 'API',
        description: 'API routes',
      },
      {
        name: 'Debug',
        description: 'Debug routes',
      },
      {
        name: 'Health',
        description: 'Health routes',
      },
    ],
    components: {
      schemas: {
        WordTerm: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            subject: {
              $ref: '#/components/schemas/CommonWordTerm',
            },
            prefLabel: {
              $ref: '#/components/schemas/CommonWordTerm',
            },
            altLabel: {
              $ref: '#/components/schemas/CommonWordTerm',
            },
            definition: {
              $ref: '#/components/schemas/Definition',
            },
          },
        },
        Definition: {
          type: 'object',
          properties: {
            tekst: {
              $ref: '#/components/schemas/CommonWordTerm',
            },
            lastUpdated: {
              type: 'string', // Assuming 'lastUpdated' is a string, update accordingly
            },
          },
        },
        CommonWordTerm: {
          type: 'object',
          properties: {
            nb: {
              type: ['string', 'null'],
            },
            nn: {
              type: ['string', 'null'],
            },
            en: {
              type: ['string', 'null'],
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
          },
        },
      },
    },
  };
  