// Service for obtaining the data

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  // Service for fetching the data

  // The url variable (private) for the base url
  private url;
  
  constructor(private http: HttpClient) {
    // Creating the URL
    // Putting the URL here to remember it 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/Rainfall-England.json';
    this.url = 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice';
  }

  getData(metric: String, where: String) {
    // For getting the json and subscribing to it
    // metric = string (what you are looking for -Rain, Tmax, Tmin-)
    // where = string (where are you looking for -UK, England, Scotland-)
    return this.http.get(this.url + '/' + metric + '-' + where + '.json');
  }
}
