<p align="center">
<img src="./public/nextdotjs.svg" alt="Next.js" />
<img src="./public/tailwindcss.svg" alt="Tailwind CSS" />
<img src="./public/storybook.svg" alt="Storybook" />
</p>

# Next.js, Tailwind CSS, and Storybook
A template for building components in isolation with Tailwind CSS and Next.js



## Getting Started
Storybook has built-in TypeScript support, but Next.js requires [some configuration](https://nextjs.org/docs/basic-features/typescript#existing-projects). If you want to customize the default configuration, refer to the [TypeScript docs](https://storybook.js.org/docs/react/configure/typescript).

Developed and tested with `Node 14`. Packages managed with `yarn`.  

1. Click `Use this template`.
2. Install dependencies with `yarn install`
3. Start the Next development server.
```shell
next dev
```
4. Visit `http://localhost:3000/` in your browser. 

### Run Storybook
```bash
yarn storybook
```
Then visit `http://localhost:6006/` in your browser. 

### Build Static Storybook
```bash
yarn build-storybook
```
You can use [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) to deploy Storybook. Specify `storybook-static` as the output directory.

## Dependencies
* Next 11.01
* React 17.0.2
* React-DOM 17.0.2

## Dev Dependencies
* storybook/addon-essentials 6.3.0
* storybook/addon-links 6.3.0
* storybook/react 6.3.0
* autoprefixer 10.2.6 
* babel-loader 8.0.5 
* postcss 8.3.5 
* serve 11.3.2
* tailwindcss 2.2.4

