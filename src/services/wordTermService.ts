import { WordTerm } from '../models/domain';
import { DigDirService } from './digDirService';

export class WordItemService {
  private DigiDirService: DigDirService;
  private digiDirUrl: string;

  constructor(digiDirUrl: string) {
    this.digiDirUrl = digiDirUrl;
    this.DigiDirService = DigDirService.getInstance(this.digiDirUrl);
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
}
