# Introduction To TypeScript

TypeScript is a superset of JavaScript that adds type annotations and other features to help developers write more maintainable code. TypeScript is a compiled language, meaning that it must be compiled into JavaScript before it can be run. TypeScript allows developers to catch errors before they happen and provides better intellisense. Studies have shown that TypeScript can reduce the number of bugs in a project by 15% to 20%.

[TypeScript in 100 Seconds](https://youtu.be/zQnBQ4tB3ZA)

[TypeScript - The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

## Agenda

We will go over the basics of TypeScript and project setup and then convert our Linked List to TypeScript. The intention is that you will follow along making changes as we go and convert your own project. If you get stuck, show up late, or fall behind, each section has a branch that you can checkout to get caught up, or verify your work.

> The branch is the start of the section before the direction for that section have been completed. For example, the `ts/converting-project` branch has all the steps in the project setup section completed, but none of the steps in the converting project section.

| Section                                                     | Time     | Branch                 | Stackblitz                                                                                                 |
| ----------------------------------------------------------- | -------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Introduction](#introduction-to-typescript)                 | 5 min    | ts/main                | [ts/main](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/main)                               |
| [Project Setup](#project-setup)                             | 5-10 min | ts/main                | [ts/main](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/main)                               |
| [Converting a project](#converting-a-project-to-typescript) | 30 min   | ts/converting-project  | [ts/converting-project](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/converting-project)   |
| [Typescript Generics](#typescript-generics)                 | 10 min   | ts/typescript-generics | [ts/typescript-generics](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/typescript-generics) |
| \* [Update Docker](#update-docker)                          | 5 min    | ts/update-docker       | [ts/update-docker](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/update-docker)             |
| [Completed Project](#completed-project)                     | 5 min    | ts/completed-project   | [ts/completed-project](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/completed-project)     |

> `*` indicates optional section

## Project Setup

Typescript requires a little bit of setup to get started. We will be using node to run our code, so we will need to install TypeScript and configure our project to use it.

1. Install TypeScript

    ```bash
    npm install typescript
    ```

2. Add tsconfig.json to the project.

    ```bash
    npx tsc --init
    ```

3. Update tsconfig to match best practices for node and express projects

    ```json
    {
        "compilerOptions": {
            "target": "ES2022",
            "module": "CommonJS",
            "types": ["node", "express"],
            "outDir": "./dist",
            "rootDir": "./src",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "noImplicitOverride": true,
            "noPropertyAccessFromIndexSignature": true,
            "noImplicitReturns": true,
            "noFallthroughCasesInSwitch": true
        },
        "include": ["./src/**/*.ts"]
    }
    ```

4. Update `package.json` `type` property to `commonjs`. The benefits that module the module type provides in JavaScript are less prevalent when using TypeScript, and also has some less than intuitive behavior when it comes to importing files requiring a `.js` extension even thought the file is a `.ts` file.

    ```json
    {
        "type": "commonjs"
    }
    ```

    > NOTE: I did not spend a lot of time playing with module vs commonjs, I went with commonjs because most of our day to day code uses commonjs and I wanted to keep things consistent.

5. Create a test typescript file to see if our configuration is working. Add a test.ts file to the src folder and run it.

    ```typescript
    // src/test.ts
    const hello: string = 'Hello World';
    console.log(hello);
    ```

6. Add a script to our package.json to allow us to build the project.

    ```json
    {
        "scripts": {
            "build": "tsc"
        }
    }
    ```

    Test the build script by running `npm run build` and then inspect the output at `dist/test.js` and you can run the file by running `node dist/test.js`

7. Instead of running build every time we can use a `ts-node` to run the TypeScript directly.

    Install the `ts-node` dependency`

    ```bash
    npm install -D ts-node
    ```

    Use ts-node similar to node to run the file

    ```bash
    ts-node src/test.ts
    ```

Now that we have the project setup for typescript we can start adding types to our code and converting it to TypeScript.

If you have followed along checkout the next section of instructions by running:

```bash
git checkout ts/converting-project warm-ups/intro-to-typescript.md
```

> If you have gotten behind or stuck or simply want to compare you can checkout the `ts/converting-project` branch or ([stackblitz](https://stackblitz.com/github/joa-mos/monday-warmups/tree/ts/converting-project)) to get caught up. Do the necessary git commands to get your code to the same state as the branch.
