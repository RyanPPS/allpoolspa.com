#!/bin/sh

#meteor add reactioncommerce:core
meteor remove insecure
meteor remove autopublish
meteor add nemo64:bootstrap
meteor add reactioncommerce:bootstrap-theme
meteor add reactioncommerce:reaction-accounts
mkdir -p client/themes/bootstrap
curl -o client/themes/bootstrap/custom.bootstrap.json https://raw.githubusercontent.com/reactioncommerce/reaction/master/client/themes/bootstrap/custom.bootstrap.json
curl -o client/themes/bootstrap/custom.reaction.json https://raw.githubusercontent.com/reactioncommerce/reaction/master/client/themes/bootstrap/custom.reaction.json