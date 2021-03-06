import { Component } from 'angular-ts-decorators';
import { SentenceHistoricalService } from '../sentence-historical.service';
import { SentenceHistoricalFilterService } from '../sentence-historical-filter.service';

@Component({
   selector: 'sentenceHistoricalFilter',
   template: require('./sentence-historical-filter.html'),
})
export class SentenceHistoricalFilterComponent {
   public static $inject = [
      '$log',
      'SentenceHistoricalService',
      'SentenceHistoricalFilterService'
   ];

   constructor(
      private $log,
      private sentenceHistoricalService: SentenceHistoricalService,
      private sentenceHistoricalFilterService: SentenceHistoricalFilterService
   ) { }

   getHistoricalCategories() {
      return this.sentenceHistoricalService.getCategories();
   }

   toogleFilter(pFilter) {
      this.sentenceHistoricalFilterService.toogle(pFilter);
   }

   isActiveFilter(pFilter: string) {
      return this.sentenceHistoricalFilterService.isActiveClass(pFilter);
   }

   clearFilter() {
      this.sentenceHistoricalFilterService.clear();
   }
}