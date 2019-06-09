import { browser, element, by,protractor,$$,$ } from 'protractor';

export class twhompage
{
   languageindicator=$('#btnCountrySelector');
   search=$('#site_search');
   searchbutton=$('button[type="submit"]');
   searchresult=$('#search .CoveoQuerySummary');
}