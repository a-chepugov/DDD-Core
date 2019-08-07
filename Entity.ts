import Id from "./Id";
import Equals from "./Equals";

export default interface Entity<TId extends Id<any>> extends Equals<Entity<TId>> {
    id(): TId;
}
