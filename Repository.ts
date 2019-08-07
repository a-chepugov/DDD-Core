import Id from "./Id";
import Entity from "./Entity";

type TId = Id<any>;

export default interface Repository<TEntity extends Entity<TId>> {
    browse?(...args: any[]): any

    read?(id: TId): any;

    edit?(instance: TEntity): any;

    add?(instance: TEntity): any;

    delete?(id: TId): any;
}

