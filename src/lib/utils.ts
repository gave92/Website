/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const externalLink = {
	target: "_blank",
	rel: "noreferrer noopener"
};

type Entries<T, K extends keyof T = keyof T> = Array<[K, T[K]]>;

export const keys = <T extends object>(obj: T) =>
	Object.keys(obj) as Entries<T>[number][0][];

export const values = <T extends object>(obj: T) =>
	Object.values(obj) as Entries<T>[number][1][];

export const entries = <T extends object>(obj: T) =>
	Object.entries(obj) as Entries<T>;

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};
