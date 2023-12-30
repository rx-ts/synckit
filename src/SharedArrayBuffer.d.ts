// Adds definitions missing from TypeScript, this feature is available since Node.js 20

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow#specifications
 */
interface SharedArrayBuffer {
  /**
   * returns whether this SharedArrayBuffer can be grow or not.
   */
  readonly growable?: boolean

  /**
   * grows the SharedArrayBuffer to the specified size, in bytes.
   */
  grow?(newLength: number): void
}
