// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PrimitiveOf<T extends { toPrimitives: () => any }> = ReturnType<T['toPrimitives']>;
