import Equals from "./Equals";

/**
 * ValueObject interface
 * Avoid to mutate ValueObject properties
 */
export default interface ValueObject<T> extends Equals<T> {
}
