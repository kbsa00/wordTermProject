import axios from 'axios';
import { FetchError, RequestErrorToDigDir } from '../errors/errors';
import { mapResponseToWordTerm } from '../mappers/mapResponseToWordTerm';
import { WordTerm } from '../models/domain';
import { Logger } from '../utils/logger';

export class DigDirService {
  private url: string;
  private cachedData: WordTerm[];
  private static instance: DigDirService | null = null;
  private Logger: Logger;

  constructor(url: string) {
    this.url = url;
    this.cachedData = [];
    this.Logger = new Logger();
  }

  async fetchDigDirData(): Promise<WordTerm[]> {
    try {
      if (this.cachedData.length != 0) {
        this.Logger.log('Fetching data from cache');
        return this.cachedData;
      } else {
        this.Logger.log('Starting to fetch data from DigDir API');
        this.cachedData = await this.fetchData();

        this.Logger.log('All data is now fetched from DigDir API');
        return this.cachedData;
      }
    } catch (error: any) {
      throw new RequestErrorToDigDir(error.message);
    }
  }

  private async fetchData(pageNumber: number = 0): Promise<WordTerm[]> {
    let data: WordTerm[] = [];
    try {
      const requestBody = {
        page: pageNumber,
        size: 500,
      };
      const response = await axios.post<any>(this.url, requestBody);
      const fetchedData = response.data.hits.map(mapResponseToWordTerm);
      data = [...data, ...fetchedData];
      this.Logger.log(`Fetched data from page ${pageNumber}`);

      if (
        pageNumber < response.data.page.totalPages &&
        response.data.hits.length != 0
      ) {
        const recursiveData = await this.fetchData(pageNumber + 1);
        data = [...data, ...recursiveData];
      }

      return data;
    } catch (error: any) {
      throw new FetchError(error.message);
    }
  }

  public static getInstance(url: string): DigDirService {
    if (!DigDirService.instance) {
      DigDirService.instance = new DigDirService(url);
    }
    return DigDirService.instance;
  }
}
