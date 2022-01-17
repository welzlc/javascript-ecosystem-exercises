# Lesson: CI/CD
## Todo
1. Setup Github Actions via the Web UI for "node.js"
2. Adjust the defaults in the root to build in this subdirectory:
   ```yaml
   defaults:
     run:
       working-directory: './7-final'
   ```
3. Adjust the provided Action `actions/setup-node@v2`
    ```yaml
    uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node-version }}
      cache: 'npm'
      cache-dependency-path: './7-final/package-lock.json'
    ```
4. Check your runs!
