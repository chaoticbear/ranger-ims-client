# Ranger IMS Client POC

This is just a POC of a cross platform Ionic based app frontend for the
[Ranger IMS Server](https://github.com/burningmantech/ranger-ims-server).

***This is not ready for use in a production environment.***

## TODO

- [ ] Fix up typing of incidents & reports
- [ ] Incident Report listing
- [ ] Incident Report view
- [ ] Incident creating / editing
- [ ] Incident Report createing / editing
- [ ] General settings page
- [ ] Event year setting
- [ ] Other features to match the current server UI
- [ ] Add `Caddy` to `docker-compose` config
- [ ] Secure caching to enable browsing the logs while offline

## Stretch TODO (Hair Brained Ideas)

- [ ] WYSIWYG or MarkDown editor field for reports, summary etc
- [ ] Secure caching of new reports/incidents while offline which can be pushed up later upon re-connecting
- [ ] Admin settings
- [ ] Integrate a map w/ incident locations
- [ ] Integration of some data from [https://github.com/burningmantech/ranger-clubhouse-api](Ranger Clubhouse API)

## Development Setup

### Docker Development

1. Setup your local IMS server.
2. Configure both docker containers to run on the same docker network.
   (This should already be default)
3. `cp .env.sample .env.development` and edit the new file variables
   * `VITE_SECURE_LOCAL_STORAGE_HASH_KEY` should be a fairly long alphanum string
   * `VITE_BACKEND_API_URL` will be the same if you are using default docker settings, otherwise change to the docker addressable server name
4. `docker compose run --rm app yarn` will install the node dependency packages
5. `docker compose up app -d` spins up the project
6. By default the project is locally accessible at [http://localhost:8100](http://localhost:8100)
