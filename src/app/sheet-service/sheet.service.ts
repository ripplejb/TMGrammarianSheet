import { Injectable } from '@angular/core';
import {Speaker} from '../models/Speaker';
import {FillerWord} from '../models/FillerWord';

@Injectable({
  providedIn: 'root'
})

export class SheetService {

  constructor() { }

  private static getFillerWords(): Array<FillerWord> {
    const fillerWords = new Array<FillerWord>();

    let word = new FillerWord();
    word.word = 'Ah';
    word.id = 1;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Um';
    word.id = 2;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Like';
    word.id = 3;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Well';
    word.id = 4;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'So';
    word.id = 5;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Like';
    word.id = 6;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'And';
    word.id = 7;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'But';
    word.id = 8;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Repeat';
    word.id = 9;
    fillerWords.push(word);

    word = new FillerWord();
    word.word = 'Word Of The Day';
    word.id = 10;
    fillerWords.push(word);

    return fillerWords;
  }

  getSpeakers(): Array<Speaker> {
    const speakers = new Array<Speaker>();

    let speaker = new Speaker();
    speaker.name = 'Ripal';
    speaker.id = 1;
    speaker.type = 'Speaker# 1';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Falguni';
    speaker.id = 2;
    speaker.type = 'Speaker# 2';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Neil';
    speaker.id = 3;
    speaker.type = 'Speaker# 3';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Calvin';
    speaker.id = 4;
    speaker.type = 'Toastmasters';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Amy';
    speaker.id = 5;
    speaker.type = 'President';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Ann';
    speaker.id = 6;
    speaker.type = 'Evaluator# 1';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Brandan';
    speaker.id = 7;
    speaker.type = 'Evaluator# 2';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    speaker = new Speaker();
    speaker.name = 'Delle';
    speaker.id = 8;
    speaker.type = 'Evaluator# 2';
    speaker.fillerWords = SheetService.getFillerWords();
    speakers.push(speaker);

    return speakers;
  }

}
