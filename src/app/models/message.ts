export default interface Message {
    id: number;
    userId: number;
    channelId: number;
    notifiesUserId: number;
    content: string;
}