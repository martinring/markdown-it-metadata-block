# markdown-it-metadata-block

> Metadata block plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

## Syntax

Syntax based on Pandoc [`yaml_metadata_block`](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) but metadata format is configurable:

A metadata block must either start on the first line or be preceded by a blank 
line. Metadata blocks are by a line starting with exactly three dashes (`---`)
possibly followed by whitespace. They are closed by three dashes or three dots 
(`...`). 

The content must parse to a valid object otherwise it will not be interpreted as
a metadata block. Metadata blocks are interpreted and merged in sequence.


## Options

````typescript
interface MetadataOptions {
  meta?: object
  parseMetadata: (block: string) => any
}
````

The `parseMetadata` option is required. Recommended value: `require('yaml').parse`.
If the function does not return an object or throws an error, the potential metadata 
block will be interpreted as if the plugins was disabled.

## Use

the `env` object of a parser run will be populated with an object `meta` which 
can be used by other plugins. If you want to expose the metadata you have to 
pass the `meta` option to the plugin:

````js
import md from 'markdown-it'
import metadata_block from 'markdown-it-metadata-block'
import yaml from 'yaml'

const meta = {} // may be pre-populated with defaults

const markdown = md().use(metadata_block,{
  parseMetadata: yaml.parse,
  meta
})

markdown.render(`
---
a: 1
...

the markdown content

---
b:
- 1
- 2
- 3
...
`)

console.log(meta.a) // 5
console.log(meta.b) // [1,2,3]
````
