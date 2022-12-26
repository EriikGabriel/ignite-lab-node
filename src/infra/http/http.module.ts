import { UnreadNotification } from './../../app/use-cases/unread-notification';
import { ReadNotification } from './../../app/use-cases/read-notification';
import { GetRecipientNotifications } from './../../app/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from 'src/app/use-cases/count-notifications';
import { CancelNotification } from './../../app/use-cases/cancel-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
