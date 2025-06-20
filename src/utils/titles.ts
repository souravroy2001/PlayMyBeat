interface TITLES {
  DropTheBeatOwnTheNight: string;
  BoomYourTracksUpNext: string;
  MakeSomeNoisePlayYourSong: string;
  TheCrowdsChoiceTheNextHit: string;
  TurnItUpYouAreTheDJNow: string;
  LouderFasterYours: string;
  BangTheBeatNoWaiting: string;
  SkipTheLineDropYourSound: string;
  HitPlayGetHype: string;
  MakeTheFloorShakeOneSongAtATime: string;
  PayItPlayItFeelIt: string;
  QueueItLoudPlayItProud: string;
}
// This file contains the titles used in the PlayMyBeat application.
// Each title is a string that can be used in the UI to represent different actions or states.
// The keys are descriptive and can be used to access the titles programmatically.

const Titles: TITLES = {
  DropTheBeatOwnTheNight: "Drop the Beat. Own the Night",
  BoomYourTracksUpNext: "Boom! Your Track’s Up Next",
  MakeSomeNoisePlayYourSong: "Make Some Noise — Play Your Song!",
  TheCrowdsChoiceTheNextHit: "The Crowd’s Choice. The Next Hit",
  TurnItUpYouAreTheDJNow: "Turn It Up — You’re the DJ Now!",
  LouderFasterYours: "Louder. Faster. Yours.",
  BangTheBeatNoWaiting: "BANG THE BEAT — NO WAITING",
  SkipTheLineDropYourSound: "Skip the Line. Drop Your Sound.",
  HitPlayGetHype: "Hit Play. Get Hype.",
  MakeTheFloorShakeOneSongAtATime: "Make the Floor Shake — One Song at a Time",
  PayItPlayItFeelIt: "Pay It. Play It. Feel It.",
  QueueItLoudPlayItProud: "Queue It Loud. Play It Proud",
};

export default Titles;
export type TitleType = TITLES;
// This type represents the keys of the TITLES object, allowing for type-safe access to the titles.
