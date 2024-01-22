import { WordTerm, WordTerm_Old } from '../models/domain';
import { DigDirService_Old } from './deperacated/digDirService-old';
import { DigDirService } from './digDirService';

export class WordItemService {
  private DigiDirService: DigDirService;
  private DigDirService_Old: DigDirService_Old;
  private digiDirUrl: string;

  constructor(digiDirUrl: string) {
    this.digiDirUrl = digiDirUrl;
    this.DigiDirService = DigDirService.getInstance(this.digiDirUrl);
    this.DigDirService_Old = DigDirService_Old.getInstance(this.digiDirUrl);
  }

  async getAllWorkItems(): Promise<WordTerm[]> {
    const data = await this.DigiDirService.fetchDigDirData();
    return data;
  }

  async getWorkItemById(id: string): Promise<WordTerm | undefined> {
    const data = await this.DigiDirService.fetchDigDirData();
    const workItem = data.find((workItem) => workItem.id === id);
    return workItem;
  }

  //Deprecated
  async getAllWorkItems_Old(): Promise<WordTerm_Old[]> {
    return await this.DigDirService_Old.fetchDigDirData();
  }
  //Deprecated
  async getWorkItemById_Old(id: string): Promise<WordTerm_Old | undefined> {
    const data = await this.DigDirService_Old.fetchDigDirData();
    const workItem = data.find((workItem) => workItem.id === id);
    return workItem;
  }
}
