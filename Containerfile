FROM node:lts-alpine
ENV PNPM_HOME=/usr/local/bin
WORKDIR /var/www
COPY package.json pnpm-lock.yaml svelte.config.js tsconfig.json vite.config.ts .
COPY static static
COPY src src
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install && pnpm run build

CMD ["node", "./build"]
