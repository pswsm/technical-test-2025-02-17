FROM node:lts-alpine
ENV PNPM_HOME=/usr/local/bin
WORKDIR /var/www
COPY package.json pnpm-lock.yaml svelte.config.js tsconfig.json vite.config.ts .
COPY static static
COPY src src
RUN npm install --global corepack@latest && corepack enable && corepack prepare pnpm@latest --activate && pnpm install && pnpm run build

ENV ORIGIN=https://techtest.pswsm.cat
CMD ["node", "./build"]
