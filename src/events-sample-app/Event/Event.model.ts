import {EventId} from "./EventId.model.ts";
import {EntityId} from "../models/EntityId.model.ts";


/**
 * Model representing an Event (DB table).
 */
export class EventDto {

  constructor(public entityId: EntityId<string>, //required, event.uuid
              public eventId: EventId, //required, event.id
              public title: string, //required, event.name
              public eventDate?: Date | null, //event.event_date
              public image?: string, //event.image
              public description?: string, /*event.description*/) {
  }
}
