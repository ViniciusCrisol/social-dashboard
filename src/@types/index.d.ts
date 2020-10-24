interface IHeaderCard {
  userName: string;
  followers: number;
  todayFollowers: number;
  socialMedia: ISocialMedia;
}

interface IOverviewCard {
  label: string;
  quantity: number;
  percent: number;
  socialMedia: ISocialMedia;
}

type ISocialMedia = 'facebook' | 'twitter' | 'instagram' | 'youtube';
