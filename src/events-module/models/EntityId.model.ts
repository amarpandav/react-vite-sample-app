/**
 * Model representing cpt_user DB table.
 * Model to define employees who are registered to capacity planning tool.
 * Later we can also load all employees here from HR database.
 */
export class EntityId<T> {

  constructor(public uuid: T) {
  }
}
