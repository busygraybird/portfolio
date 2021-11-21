import React from 'react';

const firstMeetingPhrases = [
  { order: 0, phrase: <>Hello! I&apos;m Viktoria Kulakova</> },
  { order: 1, phrase: 'You can call me Viki' },
  {
    order: 2,
    phrase: (
      <>
        You may see my github account{' '}
        <a
          href='https://github.com/greybusybird'
          target='_blank'
          rel='noreferrer'
        >
          greybusybird
        </a>
      </>
    ),
  },
];

function* PhraseGenerator() {
  const sortedPhrases = firstMeetingPhrases.sort(
    (first, second) => first.order - second.order,
  );

  for (const phrase of sortedPhrases) {
    yield phrase;
  }
}

const generatePhrase = () => {
  const phraseIterator = new PhraseGenerator();

  return () => phraseIterator.next();
};

export const getNextPhrase = generatePhrase();
