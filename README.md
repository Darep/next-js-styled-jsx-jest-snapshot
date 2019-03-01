# Example project

Requires yarn.

Get started:

```
git clone https://github.com/Darep/next-js-styled-jsx-jest-snapshot.git
```

Run tests with Next.js 6.1.2 in master branch:

```
git checkout master
rm -rf node_modules && yarn && yarn test --no-cache
```

With Next.js 7, the snapshot test fails with each CSS character on their own line:

```
git checkout broken
rm -rf node_modules && yarn && yarn test --no-cache
```

### Running in docker

For running this in a clean Node.js environment:

```
docker run --rm -it -v $(pwd):/app node:11 bash
```

...and run git & yarn commands in the docker container as above.
