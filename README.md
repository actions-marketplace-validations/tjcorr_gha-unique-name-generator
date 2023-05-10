# gha-unique-name-generator

A simple GitHub Action to generate a unique name. 

## Inputs

### `separator`

**Required** What separator to use. Default `-`.

### `prefix`

An optional prefix to add to the beginning of the name.

### `suffix`

An optional suffix to add to the end of the name.

## Outputs

### `name`

The unique name output.

## Example usage

```
uses: tjcorr/gha-unique-name-generator@v1
id: generator
with:
  separator: '-'
  prefix: 'pre'
  suffix: 'post'

name: test generator output
run: echo "${{ steps.generator.outputs.name }}" // pre-red-fox-post
```