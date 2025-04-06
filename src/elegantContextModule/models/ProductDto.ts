import {BaseDto} from "../../models/base/BaseDto.ts";
import {EntityId} from "../../models/base/EntityId.ts";

export class ProductDto extends BaseDto {

    constructor(public entityId: EntityId<string>,
                public image: string,
                public title: string,
                public price: number,
                public quantity: number,
                public description: string) {
        super(entityId);
    }
}
