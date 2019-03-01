# Example project

Requires yarn.

Get started:

```
git clone https://github.com/Darep/next-js-styled-jsx-jest-snapshot.git
cd next-js-styled-jsx-jest-snapshot
```

Run tests with Next.js 7 in master branch and see strange snapshots:

```
git checkout master
rm -rf node_modules && yarn && yarn test --no-cache
```

Run tests with Next.js 6 and tests match the older, sensible snapshot:

```
git checkout next6
rm -rf node_modules && yarn && yarn test --no-cache
```

### Running in docker

For running this in a clean Node.js environment:

```
docker run --rm -it -v $(pwd):/app node:11 bash
```

...and run git & yarn commands in the docker container as above.
