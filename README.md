This is a laravel app as a git repos test

==== For Local Server ======
git clone --recurse-submodules https://github.com/jjrohrer/slttest3 slttest3c
    
cd slttest3c
cp .env.example .env

[ ] Make a new database on the server, like slttest3c
Edit .env
    [ ] Update app name, db name, db password

php artisan key:generate

composer install

npm install

php artisan migrate

npm run prod #or npm run watch

php artisan serve

===== For Laravel Forge Deployment ========
(Prerequisite: Create a Forge server, on say, Digital Ocean)

On godaddy, or wherever, make a new domain, or subdomain, and point to your IP
    CNAME: stltest8.sloppytechnologies.com ==> @

On Forge:
    On the server ServerName/Sites:
        [ ] Name:
            stltest8.sloppytechnologies.com
        [ ] Other: Accept the defaults
            (For Laravel, leave web directory as /public)
            (TBDetermined: Isolate it?)
        
        [ ] Create a database
        [ ] Create a new db user
    
    On the Sites/NewSiteName tab:
        [ ] add SSL/Let's Encrypt
            [ ] Verify




git clone --recurse-submodules https://github.com/jjrohrer/slttest3 slttest3c
# https://laracasts.com/discuss/channels/forge/how-to-use-git-submodules-with-forge
