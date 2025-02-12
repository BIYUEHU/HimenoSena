export interface Metadata {
  isPhpEnv: boolean;
  views: number;
  isRecorded: boolean;
  lastUpdated: number;
  lastChecked: number;
}

export interface Message {
  msg: string;
  user: string;
  name: string;
}
