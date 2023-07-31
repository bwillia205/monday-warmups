export interface MyDB<T> {
    read(): Promise<T[]>;
    write(data: T[]): Promise<void>;
}
