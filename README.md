# DiscordTS toolkit -- out-of-the-box toolkit for discord bot typescript developer

## TL;DR

DiscordTS toolkit is a pre-configured node.js projects that aims at providing most of features a typescipt discord developer needs. The dependencies use [djs-commander](https://github.com/notunderctrl/djs-commander), which is archived and no longer being maintained. The reason why I don't choose [commandkit](https://github.com/underctrl-io/commandkit) packages is that it doesn't support discord `Builders`, when I'm doing tests of that, which is a better way(I think) for DX(Dev Experience).

## Get Started

1. use `git clone` to clone this repo
2. in your machine, use `npm intall` to install nessasary dependencies
3. add `.env` file at root and `echo TOEKN=<YOUR_DISCORD_BOT_TOKEN>`

Windows:
```ps1
cd path_to_your_discrodts
ni .env
echo "TOKEN=<YOUR_DISCORD_BOT_TOKEN>" > .env
```

MacOS/Linux Distros:
```sh
cd path_to_your_discrodts
touch .env
echo "TOKEN=<YOUR_DISCORD_BOT_TOKEN>" > .env
```

4. alternate the `path_to_your_discordts/src/config/server.ts`, replace `undefined` to `'YOUR_GUILD_ID'`(string type)
5. use the following command to start the server

For dev process(use `tsx` package)
```sh
npm run dev
```

For build
```sh
npm run build
```

For running produnction
```sh
npm run start
```
