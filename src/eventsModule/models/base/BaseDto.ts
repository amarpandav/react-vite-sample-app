// src/models/common/BaseDto.ts
import {EntityId} from './EntityId';

export abstract class BaseDto {
    constructor(
        public entityId: EntityId<string>
    ) {
    }
}
