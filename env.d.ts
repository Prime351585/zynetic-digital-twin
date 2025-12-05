export interface Notification {
  type: 'warning' | 'info' | 'error' | 'success';
  id: string;
  message: string;
  time: string;
  date: string;

}