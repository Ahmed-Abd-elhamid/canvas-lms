Canvas LMS
==========

Canvas is a modern, open-source [LMS](https://en.wikipedia.org/wiki/Learning_management_system)
developed and maintained by [Instructure Inc.](https://www.instructure.com/) It is released under the
AGPLv3 license for use by anyone interested in learning more about or using
learning management systems.
[Please see our main wiki page for more information](http://github.com/instructure/canvas-lms/wiki)

Installation
============

Detailed instructions for installation and configuration of Canvas are provided
on our wiki.
 * [Quick Start](http://github.com/instructure/canvas-lms/wiki/Quick-Start)
 * [Production Start](http://github.com/instructure/canvas-lms/wiki/Production-Start)


Quick Start
===========
** For stable start, work on Node version 10 and Ruby version 2.6.. also be patient!.

1)	Cloning Project to bashqash.. then enter bashqash, and checkout to stable branch
```sh
$ git clone https://github.com/Ahmed-Abd-elhamid/canvas-lms.git bashqash && cd bashqash && git checkout stable
```

2)	Bundle install, and yarn install
```sh
$ bundle install && yarn install --pure-lockfile
```

3)	Config config.yml, and dynamic_settings.yml
```sh
$ for config in amazon_s3 delayed_jobs domain file_store outgoing_mail security external_migration; \
	do cp -v config/$config.yml.example config/$config.yml; done && cp config/dynamic_settings.yml.example config/dynamic_settings.yml
```

4)	Run canvas:compile_assets
```sh
$ bundle exec rails canvas:compile_assets
```

5)	Config database.yml, and create database
```sh
$ cp config/database.yml.example config/database.yml && createdb bashqash_development
```

6)	Intialize the database
```sh
$ bundle exec rails db:initial_setup
```

7)	Install redis-server, and configrations
```sh
$ sudo apt-get update && sudo apt-get install redis-server
$ echo -e "development:\n  cache_store: redis_store" > config/cache_store.yml && echo -e "development:\n  servers:\n  - redis://localhost" > config/redis.yml
```

8)	Run the server
```sh
$ bundle exec rails server
```

9)	For Long-running jobs
```sh
$ bundle exec script/delayed_job run
```
