import Equals from "./Equals";

export default interface Id<T> extends Equals<Id<T>> {
    default?(): Id<T>;
}
