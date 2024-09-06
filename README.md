# JSON List Insert

Insert an object into a JSON list in a file.


## Inputs

### `file`

**Required** The file containing the list.

### `index`

**Required** By default `-1`.

### `item`

**Required** JSON object to insert


## Notes

- The list must be the top level root.
- The JSON file is loaded in memory.


## Example

```yaml
- uses: sanjacob/json-insert@v1
  with:
    file: shopping.json
    item: |
      {
        "name": "Eggs",
        "amount": 4
      }
```


## License

This software is distributed under the [3-Clause BSD License][license].

[license]: LICENSE
