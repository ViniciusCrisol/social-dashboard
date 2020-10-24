interface IHeaderCard {
  userName: string;
  followers: number;
  todayFollowers: number;
  socialMedia: ISocialMedia;
}

type ISocialMedia = 'facebook' | 'twitter' | 'instagram' | 'youtube';
