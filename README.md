# dod-external-integrations-template

## Prerequisites

```
Docker Desktop
Homebrew
```

## First time setup

### Clone repo

```
1. In a terminal, navigate to the directory where you want to install the app
2. $ ssh -T git@github.com
3. $ git clone git@github.com:shaunculrich77/dod-external-integrations-template
```

### Self-Signed Local Certificate

```
HTTPS needs set up. Utility script needs to run to set this up
1. $ ./tools/make-ssl-certs
```

## Running the App

```
1. In the terminal, navigate to the root of your repository
2. $ ./tools/start
3. Go to https://localhost:8080 (realizing this needs to change, this is just temporary)
4. To stop the app, ./tools/stop
```
