var open = require ('open');
//opens website in chrome browser
open ('https://www.willistowerswatson.com', {app: 'Chrome'});


//elements of home page
  languageindicator=$('#btnCountrySelector span');
  expect(languageindicator.getText()).toEqual("Global | English");
  search=$('#site_search');
  searchbutton=$('button[type="submit"]');
  searchresult=$('#search .CoveoQuerySummary'); 