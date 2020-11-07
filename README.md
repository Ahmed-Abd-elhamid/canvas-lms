Installation
============

Detailed instructions for installation and configuration of Canvas are provided
on our wiki.
 * [Quick Start](http://github.com/instructure/canvas-lms/wiki/Quick-Start)
 * [Production Start](http://github.com/instructure/canvas-lms/wiki/Production-Start)


Quick Start
===========
** For stable start, work on Node version 10 and Ruby version 2.6.. also be patient!. **Check using nvm and rvm guide at the end of README.md

1)	Cloning Project to bashqash.. then enter bashqash, and checkout to stable branch
```sh
git clone https://github.com/Ahmed-Abd-elhamid/canvas-lms.git bashqash && cd bashqash && git checkout stable
```

2)	Bundle install, and yarn install
```sh
npm install -g node-gyp && sudo apt-get install python2
```
```sh
bundle install && yarn install --pure-lockfile
```

3)	Config config.yml, and dynamic_settings.yml
```sh
for config in amazon_s3 delayed_jobs domain file_store outgoing_mail security external_migration; \
	do cp -v config/$config.yml.example config/$config.yml; done && cp config/dynamic_settings.yml.example config/dynamic_settings.yml
```

4)	Run canvas:compile_assets
```sh
bundle exec rails canvas:compile_assets
```

5)	Config database.yml, and create database
```sh
cp config/database.yml.example config/database.yml && createdb qalam_development
```

6)	Intialize the database
```sh
bundle exec rails db:initial_setup
```

7)	Install redis-server, and configrations
```sh
sudo apt-get update && sudo apt-get install redis-server
echo -e "development:\n  cache_store: redis_store" > config/cache_store.yml && echo -e "development:\n  servers:\n  - redis://localhost" > config/redis.yml
```

8)	Run the server
```sh
bundle exec rails server
```

9)	For Long-running jobs
```sh
bundle exec script/delayed_job run
```

NVM
===
1)	Intall NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

2)	Check all available  versions
```sh
nvm ls-remote
```

3)	Install version 10.23.0 & 12.19.0
```sh
nvm install 10.23.0 && nvm install 12.19.0
```

4) Set version 12.19.0 as default
```sh
nvm alias default 12.19.0
```

5)	Use version 10.23.0
```sh
nvm use 10.23.0
```

RVM
===
1)	Intall RVM
```sh
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev && gpg --keyserver hkp://keys.gnupg.net --recv-keys
```
```sh
curl -sSL https://get.rvm.io | bash -s stable & source ~/.rvm/scripts/rvm
```

3)	Install version 2.6.5 & 2.7.2
```sh
rvm install 2.6.5 && rvm install 2.7.2
```

4) Set version 2.7.2 as default
```sh
rvm use 2.7.2 --default

```

5)	Use version 2.6.5
```sh
rvm use 2.6.5
```

** update ~/.bashrc
1) Open ~/.bashrc
```sh
sudo nano ~/.bashrc
```

2) Add the line between brackets ( source ~/.rvm/scripts/rvm ) to ~/.bashrc and save it.