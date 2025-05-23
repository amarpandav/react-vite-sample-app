import {EventId} from "./EventId.ts";
import {EntityId} from "../../../models/base/EntityId.ts";
import {parseISODate} from "../../../utils/dateUtils.ts";
import {BaseDto} from "../../../models/base/BaseDto.ts";

/**
 * Model representing an Event (DB table).
 */
export class EventDto extends BaseDto{

    constructor(public entityId: EntityId<string>, //required, event.uuid
                public eventId: EventId, //required, event.id
                public title: string, //required, event.name
                public eventDate?: Date | null, //event.event_date
                public image?: string, //event.image
                public description?: string, /*event.description*/) {
        super(entityId);
    }

    public static parseJson(json: unknown): EventDto {
        if (typeof json !== "object" || json === null) {
            throw new Error("Invalid JSON data");
        }
        const jsonObj = json as Record<string, unknown>; // Type assertion

        return new EventDto(
            jsonObj.entityId as EntityId<string>,
            jsonObj.eventId as EventId,
            jsonObj.title as string,
            parseISODate(jsonObj.eventDate) as Date | null,
            jsonObj.image as string,
            jsonObj.description as string
        );
    }

    public static parseJsonArray(json: unknown[]): EventDto[] {
        return json.map((event) => EventDto.parseJson(event));
    }

    public static toJson(title: string, eventDate: string, image: string, description: string): Record<string, string> {
        return {
            title: title ?? '',
            eventDate: eventDate,
            image: image,
            description: description
        };
    }
}
