import {Injectable} from '@angular/core';
import {IQuestion} from './question';
@Injectable({providedIn: 'root'})
export class QuestionProviderService {
  pool: IQuestion[];

  constructor() {
    this.start();
  }

  start() {
    this.pool = this.convert();
  }

  getNextQuestion(): IQuestion {
    if (this.pool.length <= 0) {
      throw new Error('No more questions');
    }
    const index = Math.floor(Math.random() * this.pool.length);
    const element = this.pool[index];
    this
      .pool
      .splice(index, 1);
    return element;
  }

  convert(): IQuestion[] {
    return questionsRaw.map(r => {
      const options = r
        .incorrect_answers
        .concat(r.correct_answer)
        .sort();
      return {
        description: r.question,
        options: options,
        correct: options.indexOf(r.correct_answer)
      } as IQuestion;

    });
  }
}

const questionsRaw = [
  {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'The Harvard architecture for micro-controllers added which additional bus?',
    'correct_answer': 'Instruction',
    'incorrect_answers': ['Address', 'Data', 'Control']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'easy',
    'question': 'What does CPU stand for?',
    'correct_answer': 'Central Processing Unit',
    'incorrect_answers': ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'Which internet company began life as an online bookstore called &#039;Cadabra&#0' +
        '39;?',
    'correct_answer': 'Amazon',
    'incorrect_answers': ['eBay', 'Overstock', 'Shopify']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'What was the name of the security vulnerability found in Bash in 2014?',
    'correct_answer': 'Shellshock',
    'incorrect_answers': ['Heartbleed', 'Bashbug', 'Stagefright']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'Whistler was the codename of this Microsoft Operating System.',
    'correct_answer': 'Windows XP',
    'incorrect_answers': ['Windows 2000', 'Windows 7', 'Windows 95']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'How many Hz does the video standard PAL support?',
    'correct_answer': '50',
    'incorrect_answers': ['59', '60', '25']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'Which of the following languages is used as a scripting language in the Unity 3D' +
        ' game engine?',
    'correct_answer': 'C#',
    'incorrect_answers': ['Java', 'C++', 'Objective-C']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'easy',
    'question': 'If you were to code software in this language you&#039;d only be able to type 0&' +
        '#039;s and 1&#039;s.',
    'correct_answer': 'Binary',
    'incorrect_answers': ['JavaScript', 'C++', 'Python']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'The computer OEM manufacturer Clevo, known for its Sager notebook line, is based' +
        ' in which country?',
    'correct_answer': 'Taiwan',
    'incorrect_answers': ['United States', 'Germany', 'China (People&#039;s Republic of)']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'How many cores does the Intel i7-6950X have?',
    'correct_answer': '10',
    'incorrect_answers': ['12', '8', '4']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'Which coding language was the #1 programming language in terms of usage on GitHu' +
        'b in 2015?',
    'correct_answer': 'JavaScript',
    'incorrect_answers': ['C#', 'Python', 'PHP']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'Which of these was the name of a bug found in April 2014 in the publicly availab' +
        'le OpenSSL cryptography library?',
    'correct_answer': 'Heartbleed',
    'incorrect_answers': ['Shellshock', 'Corrupted Blood', 'Shellscript']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'How fast is USB 3.1 Gen 2 theoretically?',
    'correct_answer': '10 Gb\/s',
    'incorrect_answers': ['5 Gb\/s', '8 Gb\/s', '1 Gb\/s']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'Which of the following is a personal computer made by the Japanese company Fujit' +
        'su?',
    'correct_answer': 'FM-7',
    'incorrect_answers': ['PC-9801', 'Xmillennium ', 'MSX']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': '.at is the top-level domain for what country?',
    'correct_answer': 'Austria',
    'incorrect_answers': ['Argentina', 'Australia', 'Angola']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'What is known as &quot;the brain&quot; of the Computer?',
    'correct_answer': 'Central Processing Unit',
    'incorrect_answers': ['Motherboard', 'Graphics Processing Unit', 'Keyboard']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'What is the main CPU is the Sega Mega Drive \/ Sega Genesis?',
    'correct_answer': 'Motorola 68000',
    'incorrect_answers': ['Zilog Z80', 'Yamaha YM2612', 'Intel 8088']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'medium',
    'question': 'What does the term MIME stand for, in regards to computing?',
    'correct_answer': 'Multipurpose Internet Mail Extensions',
    'incorrect_answers': ['Mail Internet Mail Exchange', 'Multipurpose Interleave Mail Exchange', 'Mail Interleave Method Exchange']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'easy',
    'question': 'The C programming language was created by this American computer scientist. ',
    'correct_answer': 'Dennis Ritchie',
    'incorrect_answers': ['Tim Berners Lee', 'al-Khw\u0101rizm\u012b', 'Willis Ware']
  }, {
    'category': 'Science: Computers',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'Who invented the &quot;Spanning Tree Protocol&quot;?',
    'correct_answer': 'Radia Perlman',
    'incorrect_answers': ['Paul Vixie', 'Vint Cerf', 'Michael Roberts']
  }
];

