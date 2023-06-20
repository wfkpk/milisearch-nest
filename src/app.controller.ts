import { SearchService } from './search/search.service';
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly searchService: SearchService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('search')
  async search(@Query('q') q: string) {
    return await this.searchService.search(q);
  }

  // @Get('delete')
  // async addDocuments() {
  //   return await this.searchService.deleteAllDocumentOfMovies();
  // }

  // @Get('delete')
  // async deleteDocument() {
  //   return await this.searchService.deleteDocument('4');
  // }
}
