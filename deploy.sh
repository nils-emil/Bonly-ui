#!/usr/bin/env bash
ionic build --prod
ssh -i bonly.pem ec2-user@bonly.ee rm -R /var/www/.*
scp -i bonly.pem -r ./www/* ec2-user@bonly.ee:/var/www/
$SHELL
