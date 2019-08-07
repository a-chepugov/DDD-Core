import Id from "./Id";
import Entity from "./Entity";

export default interface Aggregate<TId extends Id<any>> extends Entity<TId> {
}
