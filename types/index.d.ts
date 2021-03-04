import type { PluginWithOptions } from "markdown-it";
interface MetadataOptions {
    parseMetadata: (src: string) => any;
    meta?: object;
}
declare const metadata_block: PluginWithOptions<MetadataOptions>;
export default metadata_block;
