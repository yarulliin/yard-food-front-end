export abstract class Storage {
  public abstract getItem<T>(key: string): T;
  public abstract setItem<T>(key: string, value: T): void;
  public abstract removeItem(key: string): void;
}
