// src/models/common/BaseDto.ts
import {EntityId} from './EntityId.ts';

export abstract class BaseDto {
    constructor(
        public entityId: EntityId<string>
    ) {
    }
}
